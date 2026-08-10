import type { Project } from "../types";

export const projects: Project[] = [
  {
    name: "Distributed Healthcare Data Platform",
    context: "Wichita State University",
    year: "2023",
    stack: ["Java", "Spring Boot", "Azure Data Factory", "Azure Blob Storage", "PostgreSQL"],
    highlights: [
      "Distributed, fault-tolerant healthcare data management system with Spring Boot services over Azure Data Factory pipelines, handling ingestion from multiple upstream feeds with retry policies and per-feed failure isolation.",
      "Azure Blob Storage for raw landing and PostgreSQL for the analytics layer; tuned partitioning and the read path to improve query response times by ~30%.",
    ],
    // TODO: add repo URL once published — see CONTENT.md
    repoUrl: undefined,
  },
  {
    name: "AI-Powered Predictive Analytics System",
    context: "Wichita State University",
    year: "2023",
    stack: ["Python", "scikit-learn", "Flask", "Power BI"],
    highlights: [
      "Predictive models for healthcare risk analysis with cross-validated model selection, reaching ~20% higher accuracy than the baseline classifier.",
      "Served predictions through a Flask REST API; surfaced model outputs and KPIs in Power BI dashboards.",
    ],
    // TODO: add repo URL once published — see CONTENT.md
    repoUrl: undefined,
  },
  {
    name: "ETL Data Automation Pipeline",
    context: "Personal Project",
    year: "2024",
    stack: ["SSIS", "Azure Data Factory", "SQL Server"],
    highlights: [
      "Fully automated ETL pipeline for scheduled data movement across source systems, replacing a manual export-and-load process.",
      "Row-count reconciliation, null and type checks, and failure notifications; cut manual intervention by ~50% and held data accuracy at ~99%.",
    ],
    // TODO: add repo URL once published — see CONTENT.md
    repoUrl: undefined,
  },
];
