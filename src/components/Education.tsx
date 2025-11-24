import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

/**
 * Education Component
 * Displays educational background and certifications
 */
export const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Electrical Engineering",
      institution: "National Institute of Technology Silchar",
      period: "2019 - 2023",
      description: "CGPA: 8.47/10. Strong foundation in problem-solving, algorithms, and system design.",
    },
  ];

  const certifications = [
    {
      title: "Competitive Programming Peak Rating: 1632",
      issuer: "LeetCode & GeeksforGeeks",
      year: "2023",
    },
    {
      title: "700+ Problems Solved",
      issuer: "LeetCode & GeeksforGeeks",
      year: "2023",
    },
    {
      title: "2nd Place - Robotics Competition",
      issuer: "NIT Silchar TechFest",
      year: "2022",
    },
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Education & Achievements</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-accent" />
                Education
              </h3>
              {education.map((edu, index) => (
                <Card key={index} className="p-6 animate-slide-up">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="text-accent font-medium mb-2">{edu.institution}</p>
                  <p className="text-foreground/80">{edu.description}</p>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Award className="h-6 w-6 text-accent" />
                Achievements
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-lg transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h4 className="font-semibold mb-2">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                    <p className="text-sm text-accent font-medium">{cert.year}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
