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
    label: "GitHub",
    // TODO: fill in Sreeja's GitHub profile URL — see CONTENT.md
    url: "",
    isPlaceholder: true,
  },
  bio: "Software Engineer with 3 years across backend and data engineering, including 2 years shipping production services in healthcare and financial services. Builds REST APIs and microservices in Python, Java (Spring Boot), and .NET Core, and owns the ETL layer underneath them. Works test-first under DDD/TDD, and carries features from requirement through CI/CD deployment on Azure and AWS.",
};
