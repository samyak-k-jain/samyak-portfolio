import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { skills } from "@/data/resume";

const skillCategories = [
  { title: "Languages", items: skills.languages, icon: "💻" },
  { title: "Frameworks & Libraries", items: skills.frameworks, icon: "⚛️" },
  { title: "Databases", items: skills.databases, icon: "🗄️" },
  { title: "DevOps & Tools", items: skills.tools, icon: "🛠️" },
  { title: "Cloud & Infrastructure", items: skills.cloud, icon: "☁️" },
  { title: "Other Technologies", items: skills.other, icon: "🚀" },
];

export const Skills = () => {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(
    new Set()
  );
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(
            entry.target as HTMLDivElement
          );
          if (entry.isIntersecting && index !== -1) {
            setVisibleSections((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={category.title}
                ref={(el) => (sectionRefs.current[categoryIndex] = el)}
                className={`p-6 border-border transition-all duration-500 ${
                  visibleSections.has(categoryIndex)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${(categoryIndex % 2) * 100}ms`,
                }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`text-sm px-3 py-1.5 transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground cursor-default ${
                        visibleSections.has(categoryIndex)
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                      style={{
                        transitionDelay: `${
                          (categoryIndex % 2) * 100 + skillIndex * 50
                        }ms`,
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Proficiency Note */}
          <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-xl">
            <p className="text-center text-muted-foreground">
              <span className="font-semibold text-foreground">
                Continuous Learning:
              </span>{" "}
              Always exploring new technologies and best practices to deliver
              cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
