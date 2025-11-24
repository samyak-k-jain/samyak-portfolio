import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

/**
 * Experience Component
 * Timeline of professional work experience
 * Shows company, role, dates, and key achievements
 */
export const Experience = () => {
  const experiences = [
    {
      company: "Zuora",
      position: "Software Engineer",
      period: "Jul 2023 - Present",
      achievements: [
        "Implemented org-wide password policy enforcement for enhanced security",
        "Designed and developed Admin UI for OneID authentication controls",
        "Integrated Redis caching, reducing microservices response time from 2s to 11ms (880% speedup)",
        "Reduced database load by 70% through optimized SQL queries and JPA tuning",
        "Increased frontend performance by 60% through comprehensive UI and CSS reconstruction",
        "Enhanced React application speed by 40-55% using React Query and code splitting techniques",
        "Cut redundant API calls by over 50% through intelligent caching strategies",
        "Built TOTP-based Multi-Factor Authentication integrated with Google Authenticator & Okta Verify",
        "Resolved critical customer issues and improved overall service stability",
      ],
    },
    {
      company: "Zuora",
      position: "Software Engineer Intern",
      period: "Jan 2023 - Jun 2023",
      achievements: [
        "Built Users Export Report feature using Java, Spring Boot, and React",
        "Designed secure REST APIs for report generation and downloads",
        "Created responsive admin UI for intuitive report management",
        "Implemented caching mechanisms and optimized data queries for performance",
        "Developed Kafka-based bulk user update mechanism for scalable operations",
        "Added searchable and filterable fields for enhanced admin visibility",
        "Collaborated with QA and DevOps teams for smooth deployments",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              My professional journey in software development
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-4">
                  {/* Timeline Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{exp.position}</h3>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-accent font-medium mb-4">{exp.company}</p>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-foreground/80"
                        >
                          <span className="text-accent mt-1.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
