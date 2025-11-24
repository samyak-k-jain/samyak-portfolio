import { Github, Linkedin, Mail, Heart } from "lucide-react";

/**
 * Footer Component
 * Site footer with copyright, social links, and navigation
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Samyak Jain</h3>
              <p className="text-sm text-muted-foreground">
                Full Stack Developer specializing in building scalable web applications 
                with modern technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <nav className="flex flex-col gap-2" aria-label="Footer navigation">
                {["about", "skills", "projects", "experience", "contact"].map((section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    onClick={(e) => handleNavClick(e, `#${section}`)}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors capitalize"
                  >
                    {section}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/samyak-jain-2550831a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:samyakjain7860@gmail.com"
                  aria-label="Email"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p className="flex items-center gap-1">
                © {currentYear} Samyak Jain. Made with{" "}
                <Heart className="h-4 w-4 text-accent fill-accent" /> using React & TypeScript
              </p>
              <a
                href="https://github.com/your-username/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
