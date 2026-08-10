export interface Profile {
  name: string;
  title: string;
  location: string;
  relocation: string;
  email: string;
  linkedin: { label: string; url: string };
  github: { label: string; url: string; isPlaceholder: boolean };
  bio: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
  stack: string[];
}

export interface Project {
  name: string;
  context: string;
  year: string;
  stack: string[];
  highlights: string[];
  repoUrl?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface EducationEntry {
  degree: string;
  school: string;
  location: string;
  start: string;
  end: string;
}
