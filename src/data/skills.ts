import type { Skill } from "../types";

export const skills: Skill[] = [
  // Languages
  {
    id: "python",
    name: "Python",
    category: "Languages",
    contexts: ["PNC", "CVS Health", "Academic", "Personal"],
    note: "Microservices at PNC, ETL pipelines at CVS Health, WSU coursework, and the crime-analysis pipeline.",
  },
  {
    id: "java",
    name: "Java",
    category: "Languages",
    contexts: ["CVS Health", "Academic"],
    note: "Spring Boot services at CVS Health and Genesis Techsystems.",
  },
  {
    id: "csharp",
    name: "C#",
    category: "Languages",
    contexts: ["PNC"],
    note: ".NET Core Web API services at PNC.",
  },
  {
    id: "sql",
    name: "SQL",
    category: "Languages",
    contexts: ["CVS Health", "Academic", "Personal"],
    note: "Execution-plan tuning at CVS Health, ETL and reporting at Genesis, SQL Server in the ETL automation project.",
  },
  { id: "js-ts", name: "JavaScript/TypeScript", category: "Languages", contexts: ["PNC"], note: "React.js front-end integration at PNC." },
  { id: "cpp", name: "C/C++", category: "Languages", contexts: [] },

  // Backend & APIs
  {
    id: "spring-boot",
    name: "Spring Boot",
    category: "Backend & APIs",
    contexts: ["CVS Health", "Academic"],
    note: "Healthcare microservices at CVS Health; enterprise services at Genesis Techsystems.",
  },
  {
    id: "dotnet-core",
    name: ".NET Core / ASP.NET Core Web API",
    category: "Backend & APIs",
    contexts: ["PNC"],
    note: "Checklist application REST API layer at PNC.",
  },
  {
    id: "flask",
    name: "Flask",
    category: "Backend & APIs",
    contexts: ["Academic"],
    note: "Served predictions from the AI-powered predictive analytics system at WSU.",
  },
  { id: "nodejs", name: "Node.js", category: "Backend & APIs", contexts: [] },
  { id: "expressjs", name: "Express.js", category: "Backend & APIs", contexts: [] },
  {
    id: "rest-apis",
    name: "REST APIs",
    category: "Backend & APIs",
    contexts: ["PNC", "CVS Health", "Academic"],
    note: "Published API contracts at PNC, service interfaces at CVS Health, and REST APIs at Genesis Techsystems.",
  },
  {
    id: "microservices",
    name: "Microservices",
    category: "Backend & APIs",
    contexts: ["PNC", "CVS Health", "Academic"],
    note: "Modernization platform at PNC, healthcare services at CVS Health, enterprise services at Genesis.",
  },
  { id: "ddd", name: "DDD", category: "Backend & APIs", contexts: ["PNC"], note: "Bounded-context modeling for the modernization platform at PNC." },
  { id: "tdd", name: "TDD", category: "Backend & APIs", contexts: ["PNC"], note: "Tests written ahead of implementation for every story at PNC." },

  // Data Engineering & ETL
  {
    id: "adf",
    name: "Azure Data Factory",
    category: "Data Engineering & ETL",
    contexts: ["Academic", "Personal"],
    note: "Ingestion pipelines in the WSU healthcare platform and the personal ETL automation project.",
  },
  {
    id: "synapse",
    name: "Synapse Analytics",
    category: "Data Engineering & ETL",
    contexts: ["CVS Health"],
    note: "Power BI dashboards built over Synapse at CVS Health.",
  },
  { id: "ssis", name: "SSIS", category: "Data Engineering & ETL", contexts: ["Personal"], note: "Core of the personal ETL automation pipeline." },
  { id: "ssrs", name: "SSRS", category: "Data Engineering & ETL", contexts: [] },
  { id: "databricks", name: "Databricks", category: "Data Engineering & ETL", contexts: [] },
  {
    id: "etl-elt",
    name: "ETL/ELT",
    category: "Data Engineering & ETL",
    contexts: ["CVS Health", "Academic", "Personal"],
    note: "Healthcare ingestion at CVS Health, reporting pipelines at Genesis, and the personal automation pipeline.",
  },
  {
    id: "data-modeling",
    name: "Data Modeling",
    category: "Data Engineering & ETL",
    contexts: ["CVS Health"],
    note: "HIPAA-compliant schema design at CVS Health.",
  },
  {
    id: "query-optimization",
    name: "Query Optimization",
    category: "Data Engineering & ETL",
    contexts: ["CVS Health"],
    note: "Execution-plan and index tuning that cut data latency ~30% at CVS Health.",
  },

  // BI & Analytics
  {
    id: "power-bi",
    name: "Power BI",
    category: "BI & Analytics",
    contexts: ["CVS Health", "Academic"],
    note: "Real-time dashboards at CVS Health; reporting at Genesis and the WSU predictive analytics project.",
  },
  { id: "tableau", name: "Tableau", category: "BI & Analytics", contexts: [] },
  { id: "pandas", name: "Pandas", category: "BI & Analytics", contexts: ["Personal"], note: "Data cleaning in the crime-analysis pipeline." },
  { id: "numpy", name: "NumPy", category: "BI & Analytics", contexts: [] },
  {
    id: "scikit-learn",
    name: "scikit-learn",
    category: "BI & Analytics",
    contexts: ["Academic", "Personal"],
    note: "Predictive modeling at WSU; PCA in the crime-analysis pipeline.",
  },
  {
    id: "eda",
    name: "Exploratory Data Analysis",
    category: "BI & Analytics",
    contexts: ["Academic", "Personal"],
    note: "Operational data analysis at Genesis; the crime-analysis EDA pipeline.",
  },

  // Databases
  { id: "azure-sql", name: "Azure SQL DB", category: "Databases", contexts: [] },
  { id: "sql-server", name: "SQL Server", category: "Databases", contexts: ["Personal"], note: "Target of the personal ETL automation pipeline." },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Databases",
    contexts: ["CVS Health", "Academic"],
    note: "Healthcare services at CVS Health; the WSU healthcare platform and Genesis internship.",
  },
  { id: "mysql", name: "MySQL", category: "Databases", contexts: [] },
  { id: "oracle", name: "Oracle", category: "Databases", contexts: [] },
  { id: "mongodb", name: "MongoDB", category: "Databases", contexts: [] },
  { id: "cosmos-db", name: "Cosmos DB", category: "Databases", contexts: [] },
  { id: "snowflake", name: "Snowflake", category: "Databases", contexts: [] },

  // Cloud
  {
    id: "azure",
    name: "Azure (Data Factory, Synapse, Cosmos DB, Blob Storage, Databricks, Monitor)",
    category: "Cloud",
    contexts: ["CVS Health", "Academic", "Personal"],
    note: "Synapse and Monitor at CVS Health; Data Factory and Blob Storage at WSU and in the personal ETL project.",
  },
  {
    id: "aws",
    name: "AWS (S3, EC2, Lambda, Redshift)",
    category: "Cloud",
    contexts: ["Academic"],
    note: "AWS Lambda for serverless data transformation at Genesis Techsystems.",
  },

  // DevOps & CI/CD
  { id: "jenkins", name: "Jenkins", category: "DevOps & CI/CD", contexts: ["CVS Health"], note: "Containerized CI/CD pipelines at CVS Health." },
  { id: "docker", name: "Docker", category: "DevOps & CI/CD", contexts: ["CVS Health"], note: "Containerized builds at CVS Health." },
  { id: "kubernetes", name: "Kubernetes", category: "DevOps & CI/CD", contexts: [] },
  { id: "terraform", name: "Terraform", category: "DevOps & CI/CD", contexts: [] },
  { id: "maven", name: "Maven", category: "DevOps & CI/CD", contexts: [] },
  { id: "git", name: "Git", category: "DevOps & CI/CD", contexts: [] },
  { id: "github", name: "GitHub", category: "DevOps & CI/CD", contexts: [] },

  // Monitoring
  { id: "splunk", name: "Splunk", category: "Monitoring", contexts: ["PNC"], note: "Latency, error-rate, and throughput dashboards at PNC." },
  { id: "grafana", name: "Grafana", category: "Monitoring", contexts: ["PNC"], note: "Platform dashboards at PNC." },
  {
    id: "azure-monitor",
    name: "Azure Monitor",
    category: "Monitoring",
    contexts: ["CVS Health"],
    note: "Pipeline freshness and failure-rate alerting at CVS Health.",
  },
  { id: "log-analytics", name: "Log Analytics", category: "Monitoring", contexts: ["CVS Health"], note: "Paired with Azure Monitor at CVS Health." },
];
