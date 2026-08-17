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
      "Fault-tolerant, multi-feed healthcare data ingestion and analytics platform with per-feed failure isolation, a partitioned PostgreSQL layer, and a live React dashboard.",
    highlights: [
      "Fault-tolerant, multi-feed healthcare data ingestion platform (Spring Boot + PostgreSQL) with independent retry policies and per-feed failure isolation — proven with a unit test, an integration test against real PostgreSQL, and a live failure-simulation demo in the dashboard.",
      "Partitioned and indexed the PostgreSQL analytics layer, measuring a real 75.1% average query-time improvement over an unpartitioned baseline across three benchmark queries (up to 97.9% on point lookups) — reported with full methodology rather than a rounded estimate.",
      "Shipped a React + TypeScript dashboard with live pipeline monitoring, a failure-simulation panel, and clinical analytics views, backed by a Spring Boot REST API; Azure Data Factory and Blob Storage represented as the production-target architecture via design artifacts.",
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript"],
    repoUrl: "https://github.com/sreejavuyyala/distributed-healthcare-system",
    liveUrl: "https://sreejavuyyala.github.io/distributed-healthcare-system/",
    stats: [
      { label: "Upstream feeds", value: "5" },
      { label: "Query improvement", value: "75.1%" },
      { label: "Tests passing", value: "21" },
      { label: "Synthetic patients", value: "10,000" },
    ],
    featured: true,
  },
  {
    id: "predictive-analytics",
    name: "AI-Powered Predictive Analytics System",
    year: "2023",
    context: "Wichita State University",
    summary:
      "Heart-disease risk model trained on the UCI Cleveland dataset, served through a Flask REST API, with KPIs mirrored on a live GitHub Pages dashboard for Power BI-free viewing.",
    highlights: [
      "Developed a heart-disease risk model over the UCI Cleveland dataset (303 patients, 13 clinical attributes) — feature engineering (age-risk bands, imputation for ca/thal, encoding, scaling) with a GridSearchCV-tuned Random Forest compared against a Logistic Regression baseline via StratifiedKFold cross-validation.",
      "Measured a real +1.89% accuracy lift over baseline (86.89% → 88.52%, ROC-AUC 0.959) and reported that honestly against an original ~20% target, backed by a 10-fold CV sweep showing why linear models are already strong on this small, well-studied dataset.",
      "Served predictions through a Flask REST API (/predict, /health, /model-info) and exported KPIs plus patient-level predictions for Power BI, mirrored as a live static dashboard on GitHub Pages so it's viewable without Power BI Desktop.",
    ],
    stack: ["Python", "scikit-learn", "Flask", "Power BI"],
    repoUrl: "https://github.com/sreejavuyyala/healthcare-risk-analytics",
    liveUrl: "https://sreejavuyyala.github.io/healthcare-risk-analytics/",
    stats: [
      { label: "Patients", value: "303" },
      { label: "Accuracy", value: "88.52%" },
      { label: "Accuracy lift", value: "+1.89%" },
      { label: "ROC-AUC", value: "0.959" },
    ],
    featured: true,
  },
  {
    id: "etl-automation",
    name: "ETL Data Automation Pipeline",
    year: "2024",
    context: "Personal Project",
    summary:
      "Scheduled, self-validating ETL moving Microsoft's AdventureWorks2022 sales data into a SQL Server 2022 reporting warehouse, with metadata-driven data-quality rules, exact row-count reconciliation, and failure alerting.",
    highlights: [
      "Built a scheduled pipeline moving Sales.SalesOrderHeader and SalesOrderDetail from the AdventureWorks2022 OLTP sample into a staging/reporting warehouse — incremental extraction on a half-open ModifiedDate watermark, MERGE upserts, and a full audit trail of every run, check and rejected row in SQL. The watermark advances only after validation passes, so a failed run re-reads its own window instead of skipping data.",
      "Layered 25 metadata-driven data-quality rules (null, domain, type, duplicate) that quarantine failing rows to a reject table with the whole row preserved as JSON, plus post-load reconciliation comparing the source's own reported counts against staged, loaded and quarantined totals — 100% reconciliation across 9 runs (36/36 checks) with zero unexplained row-count variance.",
      "Proved the checks work rather than asserting it: 12 corrupted rows were injected, all 12 quarantined, none reached the warehouse, an alert fired, and the held watermark let the next run recover unaided — reproduced by GitHub Actions on every push against a real SQL Server. Azure Data Factory pipelines, a Logic App, Monitor rules and Bicep ship as the production-target orchestration, calling the same stored procedures.",
    ],
    stack: ["SQL Server 2022", "T-SQL", "Python", "Docker"],
    repoUrl: "https://github.com/sreejavuyyala/etl-data-automation-pipeline",
    liveUrl: "https://sreejavuyyala.github.io/etl-data-automation-pipeline/",
    stats: [
      { label: "Rows moved", value: "152,782" },
      { label: "Reconciliation", value: "100%" },
      { label: "Data-quality rules", value: "25" },
      { label: "Faults caught", value: "12 / 12" },
    ],
    featured: true,
  },
];