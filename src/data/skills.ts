import type { SkillGroup } from "../types";

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "Java", "C#", "SQL", "JavaScript/TypeScript", "C/C++"],
  },
  {
    category: "Backend & APIs",
    items: [
      "Spring Boot",
      ".NET Core / ASP.NET Core Web API",
      "Flask",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Microservices",
      "DDD",
      "TDD",
    ],
  },
  {
    category: "Data Engineering & ETL",
    items: [
      "Azure Data Factory",
      "Synapse Analytics",
      "SSIS",
      "SSRS",
      "Databricks",
      "ETL/ELT",
      "Data Modeling",
      "Query Optimization",
    ],
  },
  {
    category: "BI & Analytics",
    items: ["Power BI", "Tableau", "Pandas", "NumPy", "scikit-learn", "Exploratory Data Analysis"],
  },
  {
    category: "Databases",
    items: ["Azure SQL DB", "SQL Server", "PostgreSQL", "MySQL", "Oracle", "MongoDB", "Cosmos DB", "Snowflake"],
  },
  {
    category: "Cloud",
    items: [
      "Azure (Data Factory, Synapse, Cosmos DB, Blob Storage, Databricks, Monitor)",
      "AWS (S3, EC2, Lambda, Redshift)",
    ],
  },
  {
    category: "DevOps & CI/CD",
    items: ["Jenkins", "Docker", "Kubernetes", "Terraform", "Maven", "Git", "GitHub"],
  },
  {
    category: "Monitoring",
    items: ["Splunk", "Grafana", "Azure Monitor", "Log Analytics"],
  },
];
