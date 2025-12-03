import { Github, Linkedin, Mail, Heart, ExternalLink } from "lucide-react";
import { contactInfo } from "@/data/resume";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <h3 className="font-bold text-2xl gradient-text mb-4">
                &lt;SJ /&gt;
              </h3>
              <p className="text-muted-foreground mb-4">
                Software Engineer passionate about building scalable solutions
                and optimizing performance.
              </p>
              <div className="flex gap-3">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors group"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors group"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="hover:text-primary transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
                <li>
                  <a
                      href="https://drive.google.com/file/d/1JDXvrkAfABItyRVwAzMSr5DxASa__p_b/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    className="inline-flex items-center hover:text-primary transition-colors"
                  >
                    Download Resume
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>
                © {currentYear} {contactInfo.name}. All rights reserved.
              </p>
              <p className="flex items-center gap-1">
                Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" />{" "}
                using React & TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
