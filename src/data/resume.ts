export interface ContactInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  linkedin: string;
  github?: string;
  location?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  location?: string;
  highlights: string[];
  technologies?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  gpa: string;
  achievements?: string[];
}

export interface Achievement {
  title: string;
  description: string;
  icon?: string;
}

export const contactInfo: ContactInfo = {
  name: "Samyak Jain",
  title: "Software Engineer",
  phone: "+91-7340411075",
  email: "samyakjain7860@gmail.com",
  linkedin: "https://www.linkedin.com/in/samyak-jain-2550831a8/",
  github: "https://github.com/samyak-k-jain",
  location: "Bangalore, India",
};

export const about = {
  intro: "I'm Samyak Jain — Software Engineer with 2.5+ years of experience at Zuora, specializing in building scalable microservices and high-performance web applications.",
  description: [
    "As a Software Engineer at Zuora, I've architected and delivered critical features that serve millions of users. My work spans the full stack, from optimizing backend microservices with Java and Spring Boot to crafting responsive React frontends with TypeScript.",
    "I'm passionate about performance optimization, having reduced API latency from 2 seconds to 11ms and implemented Redis caching strategies that dramatically improved system responsiveness. My experience includes designing secure authentication systems, building event-driven architectures with Kafka, and implementing comprehensive monitoring solutions.",
    "Beyond coding, I'm an active problem solver with 700+ solved problems on competitive programming platforms and a proven track record of delivering impactful projects in fast-paced environments.",
  ],
  highlights: [
    "2.5+ years at Zuora",
    "Java & Spring Boot Expert",
    "Microservices Architecture",
    "React & TypeScript",
    "Performance Optimization",
    "SQL & NoSQL Databases",
  ],
};

export const experiences: Experience[] = [
  {
    id: "zuora-engineer",
    company: "Zuora",
    position: "Software Engineer",
    period: "July 2023 - Present",
    location: "India",
    highlights: [
      "Architected and implemented Password Policy feature in OneID service, enabling granular control for 1000+ tenants",
      "Designed and built TOTP-based MFA system with security auditing, impacting 5,000+ users across multiple tenants",
      "Optimized critical search API from 2 seconds to 11ms using Database Indexing, impacting 15,000+ queries/day",
      "Implemented Redis cache layer reducing database calls by 40% and improving response times",
      "Enhanced React application performance through code splitting and lazy loading, reducing initial load time by 35%",
      "Built comprehensive health check endpoints for 8 microservices with Actuator integration",
      "Designed and implemented real-time notification system using WebSockets and event-driven architecture",
      "Mentored 2 junior developers on Spring Boot best practices and microservices patterns",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "Redis",
      "PostgreSQL",
      "Kafka",
      "Docker",
      "AWS",
    ],
  },
  {
    id: "zuora-intern",
    company: "Zuora",
    position: "Software Engineer Intern",
    period: "January 2023 - June 2023",
    location: "India",
    highlights: [
      "Developed Users Export Report feature using Kafka event-driven architecture, enabling bulk data export for 10,000+ users",
      "Implemented efficient Kafka consumer with batch processing for handling large-scale user data updates",
      "Designed and implemented REST APIs using Spring Boot with comprehensive Swagger documentation",
      "Optimized database queries and implemented connection pooling, reducing query time by 50%",
      "Collaborated with cross-functional teams to deliver features within sprint timelines",
      "Wrote comprehensive unit tests achieving 85% code coverage using JUnit and Mockito",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Kafka",
      "MySQL",
      "REST APIs",
      "JUnit",
      "Swagger",
    ],
  },
];

export const education: Education = {
  institution: "National Institute of Technology Silchar",
  degree: "Bachelor of Technology",
  field: "Electrical Engineering",
  period: "2019 - 2023",
  gpa: "8.47/10",
  achievements: [
    "Relevant Coursework: Data Structures, Algorithms, Database Systems, Computer Networks",
    "Active member of Coding Club",
  ],
};

export const achievements: Achievement[] = [
  {
    title: "Competitive Programming",
    description: "Highest rating of 1632 on competitive programming platforms",
    icon: "trophy",
  },
  {
    title: "Problem Solving",
    description: "Solved 700+ problems across GeeksforGeeks and LeetCode",
    icon: "code",
  },
  {
    title: "Robotics Competition",
    description: "Secured 2nd place in Sumo Robot Competition at NIT Silchar Techfest 2023",
    icon: "award",
  },
];

export const skills = {
  languages: [
    "Java",
    "C++",
    "TypeScript",
    "JavaScript",
    "Python",
    "SQL",
  ],
  frameworks: [
    "Spring Boot",
    "React",
    "Node.js",
    "Express",
    "Hibernate",
    "JUnit",
    "Mockito",
  ],
  tools: [
    "Docker",
    "Jenkins",
    "Git",
    "Maven",
    "Gradle",
    "Postman",
    "Swagger",
  ],
  databases: [
    "PostgreSQL",
    "MySQL",
    "Redis",
    "MongoDB",
  ],
  cloud: [
    "AWS EC2",
    "AWS S3",
    "AWS RDS",
  ],
  other: [
    "Microservices",
    "REST APIs",
    "Kafka",
    "WebSockets",
    "Agile/Scrum",
  ],
};
