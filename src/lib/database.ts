import type { Database, SqlJsStatic } from "sql.js";
import { achievements, experience } from "../data/experience";
import { education } from "../data/education";
import { projects } from "../data/projects";
import { skills } from "../data/skills";

const SCHEMA_SQL = `
CREATE TABLE experience (
  id TEXT PRIMARY KEY,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  industry TEXT NOT NULL,
  location TEXT NOT NULL,
  start_date TEXT NOT NULL,
  end_date TEXT
);

CREATE TABLE achievements (
  id TEXT PRIMARY KEY,
  experience_id TEXT NOT NULL REFERENCES experience(id),
  description TEXT NOT NULL,
  stage TEXT NOT NULL,
  tech TEXT NOT NULL
);

CREATE TABLE projects (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  year TEXT NOT NULL,
  context TEXT NOT NULL,
  summary TEXT NOT NULL,
  stack TEXT NOT NULL,
  repo_url TEXT,
  live_url TEXT
);

CREATE TABLE skills (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  contexts TEXT NOT NULL
);

CREATE TABLE education (
  id TEXT PRIMARY KEY,
  institution TEXT NOT NULL,
  degree TEXT NOT NULL,
  field TEXT NOT NULL,
  start_year TEXT NOT NULL,
  end_year TEXT NOT NULL
);
`;

export interface TableSchema {
  name: string;
  columns: { name: string; type: string }[];
}

export function buildCareerDatabase(SQL: SqlJsStatic): Database {
  const db = new SQL.Database();
  db.run(SCHEMA_SQL);

  const insertExperience = db.prepare(
    "INSERT INTO experience (id, company, role, industry, location, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?, ?)",
  );
  for (const e of experience) {
    insertExperience.run([e.id, e.company, e.role, e.industry, e.location, e.startDate, e.endDate]);
  }
  insertExperience.free();

  const insertAchievement = db.prepare(
    "INSERT INTO achievements (id, experience_id, description, stage, tech) VALUES (?, ?, ?, ?, ?)",
  );
  for (const a of achievements) {
    insertAchievement.run([a.id, a.experienceId, a.description, a.stage, a.tech.join(", ")]);
  }
  insertAchievement.free();

  const insertProject = db.prepare(
    "INSERT INTO projects (id, name, year, context, summary, stack, repo_url, live_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
  );
  for (const p of projects) {
    insertProject.run([p.id, p.name, p.year, p.context, p.summary, p.stack.join(", "), p.repoUrl ?? null, p.liveUrl ?? null]);
  }
  insertProject.free();

  const insertSkill = db.prepare("INSERT INTO skills (id, name, category, contexts) VALUES (?, ?, ?, ?)");
  for (const s of skills) {
    insertSkill.run([s.id, s.name, s.category, s.contexts.join(", ")]);
  }
  insertSkill.free();

  const insertEducation = db.prepare(
    "INSERT INTO education (id, institution, degree, field, start_year, end_year) VALUES (?, ?, ?, ?, ?, ?)",
  );
  for (const ed of education) {
    insertEducation.run([ed.id, ed.institution, ed.degree, ed.field, ed.startYear, ed.endYear]);
  }
  insertEducation.free();

  return db;
}

export function readSchema(db: Database): TableSchema[] {
  const tableNames: string[] = [];
  const tablesResult = db.exec("SELECT name FROM sqlite_master WHERE type = 'table' ORDER BY name");
  if (tablesResult[0]) {
    for (const row of tablesResult[0].values) {
      tableNames.push(String(row[0]));
    }
  }

  return tableNames.map((name) => {
    const columns: { name: string; type: string }[] = [];
    const info = db.exec(`PRAGMA table_info(${name})`);
    if (info[0]) {
      const nameIdx = info[0].columns.indexOf("name");
      const typeIdx = info[0].columns.indexOf("type");
      for (const row of info[0].values) {
        columns.push({ name: String(row[nameIdx]), type: String(row[typeIdx]) });
      }
    }
    return { name, columns };
  });
}
