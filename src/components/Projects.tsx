import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { ProjectModal } from "./ProjectModal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  image: string;
  demoUrl?: string;
  githubUrl: string;
  codeSnippet?: string;
}

/**
 * Projects Component
 * Showcases portfolio projects with modal details
 * Each project includes image, tech stack, and links
 */
export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with real-time inventory management, payment integration, and order tracking.",
      longDescription:
        "Built a scalable e-commerce platform serving 100K+ users with microservices architecture. Implemented secure payment processing with Stripe, real-time inventory synchronization using Kafka, and a responsive React frontend with advanced filtering and search capabilities.",
      techStack: ["Java", "Spring Boot", "React", "PostgreSQL", "Redis", "Kafka", "AWS"],
      image: project1,
      demoUrl: "https://demo-ecommerce.example.com",
      githubUrl: "https://github.com/your-username/ecommerce-platform",
      codeSnippet: `// Order Service - Kafka Event Publisher
@Service
public class OrderService {
    @Autowired
    private KafkaTemplate<String, OrderEvent> kafkaTemplate;
    
    public Order createOrder(OrderRequest request) {
        Order order = orderRepository.save(new Order(request));
        
        // Publish event for inventory update
        kafkaTemplate.send("order-events", 
            new OrderEvent(order.getId(), order.getItems()));
            
        return order;
    }
}`,
    },
    {
      id: 2,
      title: "Microservices Monitoring Dashboard",
      description:
        "Real-time monitoring and observability platform for distributed microservices with custom metrics and alerting.",
      longDescription:
        "Developed a comprehensive monitoring solution for microservices infrastructure. Features include distributed tracing, custom metrics aggregation, intelligent alerting, and a real-time dashboard built with React and WebSockets. Reduced incident response time by 60%.",
      techStack: ["Spring Boot", "Prometheus", "Grafana", "React", "WebSocket", "Docker"],
      image: project2,
      githubUrl: "https://github.com/your-username/microservices-monitor",
      codeSnippet: `// Custom Metrics Collector
@Component
public class MetricsCollector {
    private final MeterRegistry registry;
    
    public void recordApiLatency(String endpoint, long duration) {
        Timer.builder("api.latency")
            .tag("endpoint", endpoint)
            .register(registry)
            .record(Duration.ofMillis(duration));
    }
}`,
    },
    {
      id: 3,
      title: "Real-Time Chat Application",
      description:
        "WebSocket-based chat platform with end-to-end encryption, file sharing, and presence indicators.",
      longDescription:
        "Created a secure real-time messaging platform supporting 10K+ concurrent users. Implemented WebSocket communication with Spring Boot, end-to-end encryption for messages, Redis for session management, and a modern React UI with typing indicators and read receipts.",
      techStack: ["Spring Boot", "WebSocket", "React", "Redis", "MongoDB", "Docker"],
      image: project3,
      demoUrl: "https://chat-demo.example.com",
      githubUrl: "https://github.com/your-username/realtime-chat",
      codeSnippet: `// WebSocket Message Handler
@MessageMapping("/chat.send")
@SendTo("/topic/messages")
public ChatMessage sendMessage(@Payload ChatMessage message) {
    message.setTimestamp(Instant.now());
    message.setEncrypted(encryptionService.encrypt(message.getContent()));
    
    messageRepository.save(message);
    return message;
}`,
    },
  ];

  return (
    <>
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real-world applications showcasing my expertise in full-stack development
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={project.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.techStack.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => setSelectedProject(project)}
                      >
                        View Details
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      {project.demoUrl && (
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                          aria-label={`View ${project.title} live demo`}
                        >
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};
