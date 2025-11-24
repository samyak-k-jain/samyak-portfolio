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
      company: "Tech Solutions Inc.",
      position: "Senior Full Stack Developer",
      period: "Jan 2023 - Present",
      achievements: [
        "Led development of microservices architecture serving 500K+ daily users",
        "Implemented CI/CD pipeline reducing deployment time by 70%",
        "Mentored team of 4 junior developers in best practices",
        "Optimized database queries improving API response time by 45%",
      ],
    },
    {
      company: "Digital Innovations Ltd.",
      position: "Full Stack Developer",
      period: "Jun 2021 - Dec 2022",
      achievements: [
        "Built RESTful APIs using Spring Boot and PostgreSQL",
        "Developed responsive React applications with Redux state management",
        "Integrated Kafka for event-driven microservices communication",
        "Collaborated with cross-functional teams in Agile environment",
      ],
    },
    {
      company: "StartUp Ventures",
      position: "Junior Software Developer",
      period: "Jan 2021 - May 2021",
      achievements: [
        "Contributed to full-stack development of e-commerce platform",
        "Implemented payment gateway integration with Stripe",
        "Participated in code reviews and testing processes",
        "Assisted in database design and optimization",
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
