import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

/**
 * About Component
 * Professional summary with key highlights and expertise areas
 */
export const About = () => {
  const highlights = [
    "3+ years of full-stack development experience",
    "Expertise in Java, Spring Boot, React (TypeScript), and Microservices",
    "Experience with Kafka, Redis, AWS, Docker, and Jenkins",
    "Improved Zuora microservices response time from 2s to 11ms (880% speedup)",
    "Enhanced frontend performance by 40-55% through optimization techniques",
    "Built secure MFA solutions with Google Authenticator & Okta Verify",
    "Strong background in debugging, performance optimization, and system design",
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
              I'm a passionate Full Stack Developer with 3 years of experience specializing in 
              building high-performance backend systems and intuitive frontend experiences. 
              I excel at creating scalable microservices using Java and Spring Boot, implementing 
              efficient caching strategies with Redis and Kafka, and developing responsive UIs with 
              React and TypeScript. My work has delivered measurable results, including an 880% 
              improvement in API response times and 40-55% enhancement in frontend performance.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              I thrive on solving complex technical challenges through performance optimization, 
              system design, and meticulous debugging. Whether it's refactoring critical microservices, 
              integrating secure authentication mechanisms, or optimizing database queries to reduce 
              load by 70%, I'm committed to delivering solutions that drive tangible business value 
              and exceptional user experiences.
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
