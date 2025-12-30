import { useState, useMemo } from "react";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { projects, Project } from "@/data/projects";

type CategoryFilter = "all" | "professional" | "personal" | "academic";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");
  const [techFilter, setTechFilter] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get all unique technologies
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach(p => p.technologies.forEach(t => techs.add(t)));
    return Array.from(techs).sort();
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = categoryFilter === "all" || project.category === categoryFilter;
      const matchesTech = !techFilter || project.technologies.includes(techFilter);
      return matchesCategory && matchesTech;
    });
  }, [categoryFilter, techFilter]);

  const categories: { value: CategoryFilter; label: string; count: number }[] = [
    { value: "all", label: "All Projects", count: projects.length },
    { value: "professional", label: "Professional", count: projects.filter(p => p.category === "professional").length },
    { value: "personal", label: "Personal", count: projects.filter(p => p.category === "personal").length },
    { value: "academic", label: "Academic", count: projects.filter(p => p.category === "academic").length },
  ];

  const clearFilters = () => {
    setCategoryFilter("all");
    setTechFilter(null);
  };

  const handleTechClick = (tech: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setTechFilter(prev => prev === tech ? null : tech);
  };

  return (
    <section id="projects" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              High-impact solutions built with modern technologies
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setCategoryFilter(cat.value)}
                className={`
                  relative px-5 py-2.5 rounded-full text-sm font-medium
                  transition-all duration-300 ease-out
                  ${categoryFilter === cat.value
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-102"
                  }
                `}
              >
                <span className="relative z-10">{cat.label}</span>
                <span className={`
                  ml-2 px-2 py-0.5 rounded-full text-xs
                  ${categoryFilter === cat.value
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                  }
                `}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Tech Filter Pills */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Filter by technology:</span>
              {techFilter && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-primary hover:underline ml-2"
                >
                  Clear filters
                </button>
              )}
            </div>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {allTechnologies.map(tech => (
                <button
                  key={tech}
                  onClick={() => handleTechClick(tech)}
                  className={`
                    px-3 py-1.5 rounded-full text-xs font-medium
                    transition-all duration-200
                    ${techFilter === tech
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary/60 text-secondary-foreground hover:bg-secondary border border-border/50"
                    }
                  `}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filters Display */}
          {(techFilter || categoryFilter !== "all") && (
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm text-foreground">
                  Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
                  {categoryFilter !== "all" && ` in ${categoryFilter}`}
                  {techFilter && ` using ${techFilter}`}
                </span>
                <button
                  onClick={clearFilters}
                  className="p-1 hover:bg-primary/20 rounded-full transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`
                  group overflow-hidden border-border bg-card cursor-pointer
                  transition-all duration-500 ease-out
                  hover:shadow-2xl hover:shadow-primary/10
                  hover:-translate-y-2 hover:border-primary/30
                  animate-fade-in
                `}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
              >
                {/* Project Image with Overlay Effects */}
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60"></div>
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500"></div>
                  {/* Category Badge Overlay */}
                  <div className="absolute top-3 right-3">
                    <Badge 
                      variant="secondary" 
                      className="capitalize backdrop-blur-sm bg-background/80 shadow-lg"
                    >
                      {project.category}
                    </Badge>
                  </div>
                  {/* View Details Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Details
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Title with Hover Effect */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies - Clickable */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className={`
                          text-xs cursor-pointer transition-all duration-200
                          hover:bg-primary hover:text-primary-foreground hover:border-primary
                          ${techFilter === tech ? "bg-primary text-primary-foreground border-primary" : "border-primary/30"}
                        `}
                        onClick={(e) => handleTechClick(tech, e)}
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge
                        variant="outline"
                        className="text-xs border-primary/30 bg-secondary/50"
                      >
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    {project.github && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex-1 group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, "_blank");
                        }}
                      >
                        <Github className="h-4 w-4 mr-2 transition-transform group-hover/btn:rotate-12" />
                        Code
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex-1 group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.demo, "_blank");
                        }}
                      >
                        <ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        Demo
                      </Button>
                    )}
                    {!project.github && !project.demo && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                      >
                        View Details
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">No projects match your filters</p>
              <Button variant="outline" onClick={clearFilters}>
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Project Detail Modal with Image Gallery */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl gradient-text">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>

          {selectedProject && (
            <div className="space-y-6">
              {/* Image Gallery */}
              <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary">
                <img 
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none"></div>
              </div>

              {/* Category */}
              <Badge variant="secondary" className="capitalize">
                {selectedProject.category} Project
              </Badge>

              {/* Long Description */}
              <div>
                <h4 className="font-semibold mb-2">Overview</h4>
                <p className="text-muted-foreground">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Key Highlights with Animation */}
              <div>
                <h4 className="font-semibold mb-3">Key Highlights</h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start animate-fade-in"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0 animate-pulse"></span>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies - Clickable */}
              <div>
                <h4 className="font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                      onClick={() => {
                        setTechFilter(tech);
                        setSelectedProject(null);
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(selectedProject.github || selectedProject.demo) && (
                <div className="flex gap-3 pt-4">
                  {selectedProject.github && (
                    <Button
                      variant="outline"
                      className="flex-1 group hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                      onClick={() =>
                        window.open(selectedProject.github, "_blank")
                      }
                    >
                      <Github className="h-4 w-4 mr-2 transition-transform group-hover:rotate-12" />
                      View Source
                    </Button>
                  )}
                  {selectedProject.demo && (
                    <Button
                      className="flex-1 bg-primary hover:bg-primary/90 group"
                      onClick={() =>
                        window.open(selectedProject.demo, "_blank")
                      }
                    >
                      <ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      Live Demo
                    </Button>
                  )}
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
