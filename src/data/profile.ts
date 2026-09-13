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
    "I like the parts of this job that nobody notices when they go right. A pipeline never wakes anyone up at 3 a.m. A schema already has the answer when someone asks where a number came from. A query that used to take six seconds now takes sixty milliseconds, so quietly that no one even knew it used to be slow.",
    "Most of my three years of work have been in healthcare and financial services — at CVS Health, and now at PNC. In these fields, a wrong number is never just a small mistake. It can be a patient's medical record or someone's money. This has taught me to be careful: I write tests before I write new features, I design the database schema first, and I speak up in code review when I am not sure a system can really do what it claims.",
  ],
};
