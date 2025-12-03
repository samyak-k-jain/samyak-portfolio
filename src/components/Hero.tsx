import { Download, Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/data/resume";
import profileImage from "@/assets/profile.jpg";

export const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-bg"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center fade-in-up">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-primary to-accent p-1 glow">
              <img 
                src={profileImage} 
                alt={contactInfo.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Greeting */}
          <div className="mb-4 fade-in-up stagger-1">
            <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">
              👋 Welcome to my portfolio
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in-up stagger-2">
            <span className="block mb-2">I'm {contactInfo.name}</span>
            <span className="block gradient-text">Software Engineer</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed fade-in-up stagger-3">
            2.5+ years at Zuora. Java, Spring Boot, Microservices, React (TS),
            SQL, performance optimization.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-10 fade-in-up stagger-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">
                2.5+
              </div>
              <div className="text-sm text-muted-foreground">Years Exp</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">
                15K+
              </div>
              <div className="text-sm text-muted-foreground">
                Queries Optimized
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">
                700+
              </div>
              <div className="text-sm text-muted-foreground">
                Problems Solved
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">
                99.5%
              </div>
              <div className="text-sm text-muted-foreground">
                Latency Reduced
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 fade-in-up stagger-5">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-hover text-base"
              onClick={scrollToProjects}
            >
              View Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 text-base"
              asChild
            >
              <a 
                href="https://drive.google.com/file/d/1JDXvrkAfABItyRVwAzMSr5DxASa__p_b/view?usp=sharing"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                View Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 fade-in-up stagger-5">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-secondary"
              asChild
            >
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-secondary"
              asChild
            >
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-secondary"
              onClick={scrollToContact}
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};
