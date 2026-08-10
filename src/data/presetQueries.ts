export interface PresetQuery {
  label: string;
  sql: string;
}

export const presetQueries: PresetQuery[] = [
  {
    label: "Career timeline",
    sql: "SELECT company, role, start_date, end_date\nFROM experience\nORDER BY start_date DESC;",
  },
  {
    label: "Data engineering skills",
    sql: "SELECT name, category\nFROM skills\nWHERE category = 'Data Engineering & ETL';",
  },
  {
    label: "What she built at PNC",
    sql: "SELECT a.description, a.stage\nFROM achievements a\nJOIN experience e ON a.experience_id = e.id\nWHERE e.company = 'PNC';",
  },
  {
    label: "Achievements per company",
    sql: "SELECT e.company, COUNT(*) AS achievement_count\nFROM achievements a\nJOIN experience e ON a.experience_id = e.id\nGROUP BY e.company\nORDER BY achievement_count DESC;",
  },
  {
    label: "Projects with public code",
    sql: "SELECT name, year, repo_url\nFROM projects\nWHERE repo_url IS NOT NULL;",
  },
  {
    label: "What she builds for fun",
    sql: "SELECT name, category\nFROM skills\nWHERE contexts LIKE '%Personal%'\nORDER BY category;",
  },
];
