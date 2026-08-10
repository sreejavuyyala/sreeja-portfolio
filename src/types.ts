export interface Profile {
  name: string;
  title: string;
  location: string;
  relocation: string;
  email: string;
  linkedin: { label: string; url: string };
  github: { label: string; url: string };
  bio: string;
  /** Draft first-person About copy — see CONTENT.md, needs Sreeja's review before launch. */
  aboutParagraphs: string[];
}

export type PipelineStage = "ingest" | "validate" | "transform" | "store" | "serve" | "monitor";

export const PIPELINE_STAGES: PipelineStage[] = ["ingest", "validate", "transform", "store", "serve", "monitor"];

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  industry: string;
  location: string;
  start: string;
  end: string;
  /** ISO date (YYYY-MM-DD), for the queryable database — keeps ORDER BY sortable */
  startDate: string;
  /** ISO date, or null when the role is current */
  endDate: string | null;
}

export interface Achievement {
  id: string;
  experienceId: string;
  description: string;
  stage: PipelineStage;
  tech: string[];
}

export interface Project {
  id: string;
  name: string;
  year: string;
  context: string;
  summary: string;
  highlights: string[];
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  stats?: { label: string; value: string }[];
  featured?: boolean;
}

export type SkillContext = "PNC" | "CVS Health" | "Academic" | "Personal";

export interface Skill {
  id: string;
  name: string;
  category: string;
  contexts: SkillContext[];
  note?: string;
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startYear: string;
  endYear: string;
}
