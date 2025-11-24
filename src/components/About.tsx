import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

/**
 * About Component
 * Professional summary with key highlights and expertise areas
 */
export const About = () => {
  const highlights = [
    "3+ years of full-stack development experience",
    "Expertise in Java, Spring Boot, and React ecosystem",
    "Strong background in microservices architecture",
    "Experience with cloud platforms (AWS, Azure, GCP)",
    "Proficient in building scalable distributed systems",
    "Passionate about clean code and best practices",
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          </div>

          <Card className="p-8 shadow-lg animate-slide-up">
            {/* Professional Summary */}
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              I'm a passionate Full Stack Developer with 3 years of experience building 
              scalable web applications. I specialize in creating robust backend systems 
              using Java and Spring Boot, coupled with modern frontend technologies like 
              React. My expertise spans microservices architecture, distributed systems, 
              and cloud-native development.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              I thrive on solving complex technical challenges and delivering high-quality 
              solutions that drive business value. Whether it's designing efficient APIs, 
              optimizing system performance, or crafting intuitive user interfaces, I'm 
              committed to excellence in every aspect of software development.
            </p>

            {/* Key Highlights */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold mb-4">Key Highlights</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
