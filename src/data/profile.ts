import type { Profile } from "../types";

export const profile: Profile = {
  name: "Sreeja Vuyyala",
  title: "Software Engineer",
  location: "Wichita, Kansas",
  relocation: "Open to Relocation",
  email: "sreejavu23@gmail.com",
  linkedin: {
    label: "linkedin.com/in/sreeja-5461-vuyyala",
    url: "https://linkedin.com/in/sreeja-5461-vuyyala",
  },
  github: {
    label: "github.com/sreejavuyyala",
    url: "https://github.com/sreejavuyyala",
  },
  bio: "Software Engineer with 3 years across backend and data engineering, including 2 years shipping production services in healthcare and financial services. Builds REST APIs and microservices in Python, Java (Spring Boot), and .NET Core, and owns the ETL layer underneath them. Works test-first under DDD/TDD, and carries features from requirement through CI/CD deployment on Azure and AWS.",
  // PLACEHOLDER — draft only. Written from the direction given for this section (regulated-industry
  // stakes, pipelines that don't page anyone, audit-ready schemas, query plans going from seconds to
  // milliseconds); not Sreeja's own words yet. Replace before launch — see CONTENT.md.
  aboutParagraphs: [
    "I like the parts of this job nobody notices when they're going right: a pipeline that doesn't page anyone at 3am, a schema that already has an answer when the auditor asks where a number came from, a query plan that goes from six seconds to sixty milliseconds and nobody has to find out it was ever slow.",
    "Most of my three years have been in healthcare and financial services, where getting data wrong isn't a cosmetic bug — it's a patient record or someone's money. That's shaped how I build: test-first, schema-first, and honest in code review about what a system can and can't actually guarantee.",
  ],
};
