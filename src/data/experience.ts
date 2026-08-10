import type { Achievement, ExperienceEntry } from "../types";

export const experience: ExperienceEntry[] = [
  {
    id: "pnc",
    company: "PNC",
    role: "Software Engineer",
    industry: "Financial Services",
    location: "Remote",
    start: "Dec 2025",
    end: "Present",
    startDate: "2025-12-01",
    endDate: null,
  },
  {
    id: "cvs",
    company: "CVS Health",
    role: "Software Engineer",
    industry: "Healthcare",
    location: "Remote",
    start: "Jun 2024",
    end: "Dec 2025",
    startDate: "2024-06-01",
    endDate: "2025-12-01",
  },
  {
    id: "genesis-se",
    company: "Genesis Techsystems",
    role: "Software Engineer Intern",
    industry: "Enterprise Software",
    location: "India",
    start: "Jan 2022",
    end: "Jun 2022",
    startDate: "2022-01-01",
    endDate: "2022-06-01",
  },
  {
    id: "genesis-da",
    company: "Genesis Techsystems",
    role: "Data Analyst Intern",
    industry: "Enterprise Software",
    location: "India",
    start: "Sep 2020",
    end: "Feb 2021",
    startDate: "2020-09-01",
    endDate: "2021-02-01",
  },
];

export const achievements: Achievement[] = [
  // PNC
  {
    id: "pnc-1",
    experienceId: "pnc",
    description:
      "Built the Business Process Modernization & Microservices Platform end to end, a domain-driven system retiring Excel-driven workflows and legacy MVC applications in favor of reusable microservices and REST APIs, moving business logic out of unowned spreadsheets into versioned services with named owners and audit trails.",
    stage: "store",
    tech: ["Microservices", "REST APIs"],
  },
  {
    id: "pnc-2",
    experienceId: "pnc",
    description:
      "Developed Python microservices and .NET Core (Web API) services exposing shared business capability as a single maintained contract, so new consumers integrate against a published API rather than rebuilding the same rules per team.",
    stage: "serve",
    tech: ["Python", ".NET Core / ASP.NET Core Web API"],
  },
  {
    id: "pnc-3",
    experienceId: "pnc",
    description:
      "Designed the REST API layer for a checklist application supporting user-configurable templates, with schema-driven validation, versioned template definitions, and role-scoped access, letting business users define new checklist types without a code release.",
    stage: "serve",
    tech: ["REST APIs", ".NET Core / ASP.NET Core Web API"],
  },
  {
    id: "pnc-4",
    experienceId: "pnc",
    description:
      "Applied Domain-Driven Design and Test-Driven Development, using bounded-context modeling with domain owners and writing tests ahead of implementation for every story, so refactors during modernization were safe rather than deferred as risk.",
    stage: "validate",
    tech: ["DDD", "TDD"],
  },
  {
    id: "pnc-5",
    experienceId: "pnc",
    description:
      "Integrated React.js and JavaScript front-end components with backend services, owning the API contract on both sides and holding delivery to WCAG accessibility standards and UI/UX benchmarks.",
    stage: "serve",
    tech: ["React.js", "JavaScript"],
  },
  {
    id: "pnc-6",
    experienceId: "pnc",
    description:
      "Implemented CI/CD pipelines for automated builds and deployments, replacing manual release steps with a repeatable path and gating merges on coverage thresholds.",
    stage: "validate",
    tech: ["CI/CD"],
  },
  {
    id: "pnc-7",
    experienceId: "pnc",
    description:
      "Built Splunk and Grafana dashboards covering latency, error rate, and throughput across the platform, moving issue detection from user-reported tickets to threshold-based alerting.",
    stage: "monitor",
    tech: ["Splunk", "Grafana"],
  },

  // CVS Health
  {
    id: "cvs-1",
    experienceId: "cvs",
    description:
      "Designed and deployed microservices in Java (Spring Boot) over PostgreSQL for healthcare data services, decomposing a monolithic workflow into independently deployable components and improving system scalability and resilience by ~25%.",
    stage: "serve",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
  },
  {
    id: "cvs-2",
    experienceId: "cvs",
    description:
      "Built automated ETL pipelines in Python and SQL ingesting healthcare data from heterogeneous upstream sources, with schema validation, error quarantine, and idempotent reloads on failure, raising processing throughput by ~20%.",
    stage: "ingest",
    tech: ["Python", "SQL", "ETL/ELT"],
  },
  {
    id: "cvs-3",
    experienceId: "cvs",
    description:
      "Optimized SQL execution plans and introduced multithreading in backend services, tuning index coverage and join strategy on the highest-volume ingestion paths to cut end-to-end data latency by ~30%.",
    stage: "transform",
    tech: ["SQL", "Query Optimization"],
  },
  {
    id: "cvs-4",
    experienceId: "cvs",
    description:
      "Built real-time analytics dashboards in Power BI over Azure Synapse Analytics, replacing manual report pulls with self-service views.",
    stage: "serve",
    tech: ["Power BI", "Synapse Analytics"],
  },
  {
    id: "cvs-5",
    experienceId: "cvs",
    description:
      "Partnered with data architects on HIPAA-compliant schema design, defining PHI column-level access, retention windows, and audit trails alongside the data model.",
    stage: "store",
    tech: ["Data Modeling"],
  },
  {
    id: "cvs-6",
    experienceId: "cvs",
    description:
      "Built CI/CD pipelines with Jenkins and Docker covering containerized builds, automated test gates, and repeatable deploys, reducing deployment time by ~40%.",
    stage: "validate",
    tech: ["Jenkins", "Docker"],
  },
  {
    id: "cvs-7",
    experienceId: "cvs",
    description:
      "Implemented monitoring and alerting via Azure Monitor and Log Analytics on pipeline freshness, failure rate, and latency.",
    stage: "monitor",
    tech: ["Azure Monitor", "Log Analytics"],
  },

  // Genesis Techsystems — Software Engineer Intern
  {
    id: "gen-se-1",
    experienceId: "genesis-se",
    description:
      "Developed distributed backend microservices in Java and Spring Boot for data-intensive enterprise applications, exposing REST APIs consumed by React front-end modules.",
    stage: "serve",
    tech: ["Java", "Spring Boot", "REST APIs"],
  },
  {
    id: "gen-se-2",
    experienceId: "genesis-se",
    description:
      "Implemented caching and indexing strategies in PostgreSQL, adding composite indexes on hot read paths and application-level caching to improve query performance by ~25%.",
    stage: "transform",
    tech: ["PostgreSQL"],
  },
  {
    id: "gen-se-3",
    experienceId: "genesis-se",
    description: "Integrated AWS Lambda and Azure Functions for serverless data transformation workloads.",
    stage: "transform",
    tech: ["AWS", "Azure"],
  },
  {
    id: "gen-se-4",
    experienceId: "genesis-se",
    description: "Contributed to performance benchmarking and architectural review of batch data pipelines.",
    stage: "monitor",
    tech: [],
  },

  // Genesis Techsystems — Data Analyst Intern
  {
    id: "gen-da-1",
    experienceId: "genesis-da",
    description:
      "Built automated ETL workflows in Python and SQL to cleanse, standardize, and transform structured and unstructured source data into report-ready tables.",
    stage: "ingest",
    tech: ["Python", "SQL", "ETL/ELT"],
  },
  {
    id: "gen-da-2",
    experienceId: "genesis-da",
    description: "Designed Power BI dashboards and scheduled reports for operations teams, cutting recurring reporting effort by ~30%.",
    stage: "serve",
    tech: ["Power BI"],
  },
  {
    id: "gen-da-3",
    experienceId: "genesis-da",
    description: "Authored SQL stored procedures and views packaging recurring report logic into a maintained layer.",
    stage: "transform",
    tech: ["SQL"],
  },
  {
    id: "gen-da-4",
    experienceId: "genesis-da",
    description: "Performed exploratory data analysis on operational datasets to surface trends and anomalies.",
    stage: "transform",
    tech: ["Exploratory Data Analysis"],
  },
];
