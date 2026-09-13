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
  aboutParagraphs: [
    "I'm a Software Engineer with three years of experience building backend systems and data pipelines, mostly in Python, Java (Spring Boot), and .NET Core. I design REST APIs and microservices, and I usually end up owning the data layer underneath them too — ETL pipelines, schema design, and query tuning.",
    "Most of that has been in healthcare and financial services, at CVS Health and now PNC, where getting data wrong has real consequences. That's made me a careful engineer: I write tests before I write features, document my decisions, and would rather raise a concern in code review than let it slide.",
    "I like the quieter parts of the job — catching a slow query before it becomes a complaint, or building a dashboard that flags a problem before anyone has to report it.",
  ],
};
