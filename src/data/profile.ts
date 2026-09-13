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
    "I like the parts of this job nobody notices when they're going right. A pipeline that doesn't page anyone at 3am. A schema that already has an answer when someone asks where a number came from. A query that used to take six seconds and now takes sixty milliseconds — so quietly that nobody ever finds out it was slow.",
    "Most of my three years have been in healthcare and financial services — CVS Health, and now PNC — where getting data wrong isn't a cosmetic bug, it's a patient record or someone's money. That's shaped how I build: test-first, schema-first, and honest in code review about what a system can and can't actually guarantee.",
  ],
};
