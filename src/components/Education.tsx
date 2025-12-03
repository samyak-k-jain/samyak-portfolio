import { GraduationCap, Trophy, Code, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { education, achievements } from "@/data/resume";

const iconMap = {
  trophy: Trophy,
  code: Code,
  award: Award,
};

export const Education = () => {
  return (
    <section id="education" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Education & <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic excellence and competitive achievements
            </p>
          </div>

          {/* Education Card */}
          <Card className="p-8 mb-12 border-border bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">
                  {education.institution}
                </h3>
                <p className="text-lg font-semibold text-muted-foreground mb-2">
                  {education.degree} in {education.field}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span>{education.period}</span>
                  <span>•</span>
                  <span className="font-semibold text-primary">
                    CGPA: {education.gpa}
                  </span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            {education.achievements && education.achievements.length > 0 && (
              <div className="space-y-2">
                {education.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            )}
          </Card>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon =
                iconMap[achievement.icon as keyof typeof iconMap] || Award;
              return (
                <Card
                  key={index}
                  className="p-6 text-center card-hover border-border"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </Card>
              );
            })}
          </div>

          {/* Competitive Programming Stats */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold text-center mb-8">
              Competitive Programming Stats
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  1632
                </div>
                <div className="text-sm text-muted-foreground">
                  Highest Rating
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">700+</div>
                <div className="text-sm text-muted-foreground">
                  Problems Solved
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">2nd</div>
                <div className="text-sm text-muted-foreground">
                  Place in Robotics
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
