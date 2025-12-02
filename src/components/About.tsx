import { Code2, Zap, Database, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";
import { about } from "@/data/resume";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Java, Spring Boot, React, TypeScript",
  },
  {
    icon: Zap,
    title: "Performance Expert",
    description: "API optimization, Redis caching",
  },
  {
    icon: Database,
    title: "Database Specialist",
    description: "PostgreSQL, MySQL, Redis",
  },
  {
    icon: Layers,
    title: "Microservices",
    description: "Kafka, Docker, AWS",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {about.intro}
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Description */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            {about.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Key Highlights */}
          <div className="mt-12 p-8 bg-secondary/50 rounded-2xl border border-border">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Technical Highlights
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {about.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
