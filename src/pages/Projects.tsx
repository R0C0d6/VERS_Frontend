import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Global Bank Digital Transformation",
      client: "Fortune 500 Financial Institution",
      category: "Cloud Migration",
      description: "Migrated legacy banking systems to AWS, resulting in 60% cost reduction and 99.99% uptime.",
      technologies: ["AWS", "Kubernetes", "PostgreSQL", "React"],
      impact: ["60% cost reduction", "99.99% uptime", "3x faster deployments"],
    },
    /* replace with something */
    {
      title: "E-Commerce Platform Rebuild",
      client: "Top 10 Online Retailer",
      category: "Software Development",
      description: "Built scalable microservices platform handling 10M+ daily transactions with 99.9% success rate.",
      technologies: ["Node.js", "React", "GraphQL", "MongoDB"],
      impact: ["10M+ daily transactions", "40% faster page loads", "99.9% success rate"],
    },
    {
      title: "Manufacturing IoT Integration",
      client: "Industrial Manufacturing Leader",
      category: "AI & Automation",
      description: "Deployed AI-powered predictive maintenance system reducing downtime by 45%.",
      technologies: ["TensorFlow", "Python", "Azure IoT", "Power BI"],
      impact: ["45% downtime reduction", "$2M annual savings", "Real-time analytics"],
    },
    {
      title: "Retail Digital Strategy",
      client: "National Retail Chain",
      category: "IT Consulting",
      description: "Developed comprehensive digital transformation roadmap and implementation strategy.",
      technologies: ["Strategic Planning", "Change Management", "Analytics"],
      impact: ["30% operational efficiency", "Omnichannel experience", "Digital-first culture"],
    },
    {
      title: "Logistics Optimization Platform",
      client: "Global Shipping Company",
      category: "Software Development",
      description: "Created AI-driven route optimization platform reducing delivery times by 25%.",
      technologies: ["Python", "Machine Learning", "React", "AWS"],
      impact: ["25% faster deliveries", "20% fuel savings", "Improved customer satisfaction"],
    },
  ];

  const partners = [
    "Microsoft", "AWS", "Google Cloud", "Cisco", "IBM",
    "Oracle", "Salesforce", "SAP", "Adobe", "VMware"
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 gradient-hero">
        <div className="container px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Delivering exceptional results for leading organizations worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover-lift group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {project.category}
                    </Badge>
                    <ExternalLink className="text-muted-foreground group-hover:text-primary transition-smooth" size={18} />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.client}</p>
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-border">
                    <p className="text-sm font-medium">Impact:</p>
                    <ul className="space-y-1">
                      {project.impact.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-card">
        <div className="container px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted Partners
            </h2>
            <p className="text-lg text-muted-foreground">
              We partner with industry leaders to deliver best-in-class solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="px-8 py-4 rounded-lg bg-background border border-border hover:border-primary transition-smooth"
              >
                <span className="text-lg font-semibold">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "1000+", label: "Projects Completed" },
              { value: "500+", label: "Happy Clients" },
              { value: "$50M+", label: "Cost Savings Delivered" },
              { value: "50+", label: "Industries Served" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
