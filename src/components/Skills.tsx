import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Cloud, Wrench } from "lucide-react";

/**
 * Skills Component
 * Displays technical skills organized by categories
 * Each category has an icon and list of technologies
 */
export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="h-8 w-8" />,
      skills: [
        "C++",
        "Java",
        "JavaScript",
        "TypeScript",
        "SQL",
      ],
    },
    {
      title: "Backend & Microservices",
      icon: <Database className="h-8 w-8" />,
      skills: [
        "Spring Boot",
        "Microservices",
        "Kafka",
        "Redis",
        "Hibernate/JPA",
        "REST APIs",
        "Uber Cadence",
      ],
    },
    {
      title: "Frontend",
      icon: <Code2 className="h-8 w-8" />,
      skills: [
        "React",
        "TypeScript",
        "HTML5",
        "CSS3",
        "React Query",
        "Code Splitting",
        "Responsive Design",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-8 w-8" />,
      skills: [
        "AWS",
        "Docker",
        "Jenkins",
        "Cloud Custodian",
        "AWS Nuke",
        "CI/CD",
      ],
    },
    {
      title: "Databases",
      icon: <Database className="h-8 w-8" />,
      skills: [
        "PostgreSQL",
        "MySQL",
        "SQL Optimization",
        "Query Tuning",
      ],
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="h-8 w-8" />,
      skills: [
        "GitHub/GitLab",
        "Postman",
        "Swagger",
        "Insomnia",
        "Power BI",
        "Google Authenticator",
        "Okta Verify",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-accent">{category.icon}</div>
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm py-1 px-3 hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
