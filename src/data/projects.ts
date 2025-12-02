export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  highlights: string[];
  github?: string;
  demo?: string;
  image?: string;
  category: "professional" | "personal" | "academic";
}

export const projects: Project[] = [
  {
    id: "password-policy-oneid",
    title: "Password Policy System - OneID",
    description: "Enterprise-grade password policy management system for multi-tenant SaaS platform",
    longDescription:
      "Architected and implemented a comprehensive password policy feature in Zuora's OneID service, enabling granular control over password requirements for 1000+ tenants. The system supports customizable password complexity rules, expiration policies, and history tracking.",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Swagger",
    ],
    highlights: [
      "Designed flexible policy engine supporting multiple tenants",
      "Implemented Redis caching for 40% faster policy retrieval",
      "Built comprehensive audit logging system",
      "Created RESTful APIs with Swagger documentation",
      "Achieved 90% test coverage with JUnit and Mockito",
    ],
    category: "professional",
  },
  {
    id: "mfa-totp-system",
    title: "Multi-Factor Authentication (MFA) with TOTP",
    description: "Secure TOTP-based two-factor authentication system with security auditing",
    longDescription:
      "Designed and built a production-grade MFA system using Time-based One-Time Password (TOTP) algorithm, impacting 5,000+ users across multiple tenants. Includes QR code generation, backup codes, and comprehensive security event logging.",
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "PostgreSQL",
      "AWS",
    ],
    highlights: [
      "Implemented TOTP algorithm with 30-second time windows",
      "Built React component for QR code scanning and verification",
      "Designed secure backup code generation and storage",
      "Created audit trail for all MFA events",
      "Integrated with existing authentication flow seamlessly",
    ],
    category: "professional",
  },
  {
    id: "api-performance-optimization",
    title: "Search API Performance Optimization",
    description: "Optimized critical search API from 2 seconds to 11ms using database indexing",
    longDescription:
      "Led performance optimization initiative for a high-traffic search API handling 15,000+ queries per day. Implemented strategic database indexing, query optimization, and Redis caching layer to achieve 99.5% latency reduction.",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "AWS CloudWatch",
    ],
    highlights: [
      "Reduced API latency from 2000ms to 11ms (99.5% improvement)",
      "Implemented composite database indexes for complex queries",
      "Added Redis cache layer with intelligent invalidation strategy",
      "Set up monitoring and alerting with CloudWatch",
      "Documented optimization techniques for team reference",
    ],
    category: "professional",
  },
  {
    id: "users-export-kafka",
    title: "Users Export System with Kafka",
    description: "Event-driven bulk data export system using Apache Kafka",
    longDescription:
      "Developed a scalable users export report feature using Kafka event-driven architecture, enabling efficient bulk data export for 10,000+ users. Implemented batch processing and async job management for large-scale operations.",
    technologies: [
      "Java",
      "Spring Boot",
      "Apache Kafka",
      "MySQL",
      "Docker",
    ],
    highlights: [
      "Built Kafka consumer with configurable batch processing",
      "Implemented async job tracking with status updates",
      "Designed efficient CSV generation with streaming",
      "Added retry mechanism for failed processing",
      "Achieved 100% data accuracy in exports",
    ],
    category: "professional",
  },
  {
    id: "react-performance",
    title: "React Application Performance Enhancement",
    description: "Frontend optimization reducing initial load time by 35%",
    longDescription:
      "Enhanced React application performance through strategic code splitting, lazy loading, and bundle optimization. Implemented modern React patterns including React.memo, useMemo, and useCallback for optimal re-rendering.",
    technologies: [
      "React",
      "TypeScript",
      "Webpack",
      "React Router",
      "Redux",
    ],
    highlights: [
      "Reduced initial bundle size from 2.5MB to 800KB",
      "Implemented route-based code splitting",
      "Added lazy loading for heavy components",
      "Optimized Redux selectors with Reselect",
      "Improved Lighthouse performance score from 65 to 92",
    ],
    category: "professional",
  },
  {
    id: "sumo-robot",
    title: "Autonomous Sumo Robot",
    description: "Competition-winning sumo robot with Arduino-based control system",
    longDescription:
      "Designed and built an autonomous sumo robot that secured 2nd place at NIT Silchar Techfest 2023. Features include ultrasonic sensors for opponent detection, edge detection for ring boundaries, and optimized motor control algorithms.",
    technologies: [
      "Arduino",
      "C++",
      "Ultrasonic Sensors",
      "Motor Controllers",
    ],
    highlights: [
      "Secured 2nd place among 50+ competing teams",
      "Implemented PID controller for precise movements",
      "Designed custom PCB for sensor integration",
      "Optimized attack and defense strategies",
      "Built robust mechanical chassis with 3D-printed parts",
    ],
    category: "academic",
  },
];
