import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "./Projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

/**
 * ProjectModal Component
 * Detailed view of a project with full description and code snippet
 */
export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
        </DialogHeader>

        {/* Project Image */}
        <div className="rounded-lg overflow-hidden mb-4">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Full Description */}
        <div className="space-y-4">
          <p className="text-foreground/80 leading-relaxed">
            {project.longDescription}
          </p>

          {/* Tech Stack */}
          <div>
            <h3 className="font-semibold mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Code Snippet */}
          {project.codeSnippet && (
            <div>
              <h3 className="font-semibold mb-2">Code Sample</h3>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>{project.codeSnippet}</code>
              </pre>
            </div>
          )}

          {/* Links */}
          <div className="flex gap-2 pt-4">
            <Button asChild className="flex-1">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
            </Button>
            {project.demoUrl && (
              <Button asChild variant="outline" className="flex-1">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
