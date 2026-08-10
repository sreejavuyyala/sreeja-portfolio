import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "crime-analysis",
    name: "Crime Analysis: Communities & Crime EDA Pipeline",
    year: "2026",
    context: "Personal Project",
    summary:
      "End-to-end analysis pipeline over the UCI Communities and Crime dataset, shipped as a static, dependency-free dashboard on GitHub Pages.",
    highlights: [
      "End-to-end analysis pipeline over the UCI Communities and Crime dataset (1,994 US communities, 128 attributes), applying placeholder-to-null conversion, mean imputation, and dropping 22 law-enforcement columns missing in over 80% of rows to leave 101 usable predictors.",
      "Engineered binned and categorical features, computed Pearson correlations against violent crime rate, and ran PCA over 100 standardized predictors on a 70/30 split, retaining 14 components at ~84% explained variance.",
      "Shipped a dependency-free static dashboard on GitHub Pages rendering pipeline output from a precomputed JSON export: a diverging correlation chart, decile trends, and PCA variance, each with a table fallback and light/dark themes.",
    ],
    stack: ["Python", "pandas", "scikit-learn", "Matplotlib"],
    repoUrl: "https://github.com/sreejavuyyala/crime-analysis",
    liveUrl: "https://sreejavuyyala.github.io/crime-analysis/",
    stats: [
      { label: "Communities", value: "1,994" },
      { label: "Features", value: "128 → 101" },
      { label: "PCA components", value: "14" },
      { label: "Variance explained", value: "~84%" },
    ],
    featured: true,
  },
  {
    id: "healthcare-platform",
    name: "Distributed Healthcare Data Platform",
    year: "2023",
    context: "Wichita State University",
    summary:
      "Distributed, fault-tolerant healthcare data management system with Spring Boot services over Azure Data Factory pipelines.",
    highlights: [
      "Distributed, fault-tolerant healthcare data management system with Spring Boot services over Azure Data Factory pipelines, handling ingestion from multiple upstream feeds with retry policies and per-feed failure isolation.",
      "Azure Blob Storage for raw landing and PostgreSQL for the analytics layer; tuned partitioning and the read path to improve query response times by ~30%.",
    ],
    stack: ["Java", "Spring Boot", "Azure Data Factory", "Azure Blob Storage", "PostgreSQL"],
    // TODO: add repo URL once published — see CONTENT.md
    repoUrl: undefined,
  },
  {
    id: "predictive-analytics",
    name: "AI-Powered Predictive Analytics System",
    year: "2023",
    context: "Wichita State University",
    summary: "Predictive models for healthcare risk analysis, served through a Flask API with Power BI reporting.",
    highlights: [
      "Predictive models for healthcare risk analysis using feature engineering over patient attribute data with cross-validated model selection, reaching ~20% higher accuracy than the baseline classifier.",
      "Served predictions through a Flask REST API; surfaced model outputs and KPIs in Power BI dashboards.",
    ],
    stack: ["Python", "scikit-learn", "Flask", "Power BI"],
    // TODO: add repo URL once published — see CONTENT.md
    repoUrl: undefined,
  },
  {
    id: "etl-automation",
    name: "ETL Data Automation Pipeline",
    year: "2024",
    context: "Personal Project",
    summary: "Fully automated ETL pipeline for scheduled data movement, replacing a manual export-and-load process.",
    highlights: [
      "Fully automated ETL pipeline for scheduled data movement across source systems, replacing a manual export-and-load process.",
      "Row-count reconciliation, null and type checks, and failure notifications; cut manual intervention by ~50% and held data accuracy at ~99%.",
    ],
    stack: ["SSIS", "Azure Data Factory", "SQL Server"],
    // TODO: add repo URL once published — see CONTENT.md
    repoUrl: undefined,
  },
];