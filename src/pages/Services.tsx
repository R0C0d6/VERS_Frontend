import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cloud, Shield, Code, Users, Brain, CheckCircle, ArrowRight } from "lucide-react";
import cloudIcon from "@/assets/cloud-icon.jpg";
import securityIcon from "@/assets/security-icon.jpg";
import developmentIcon from "@/assets/development-icon.jpg";
import consultingIcon from "@/assets/consulting-icon.jpg";
import aiIcon from "@/assets/ai-icon.jpg";

const Services = () => {
  const services = [
    {
      id: "cloud",
      icon: Cloud,
      image: cloudIcon,
      title: "Cloud Computing Solutions",
      description: "Transform your infrastructure with enterprise-grade cloud solutions that scale with your business.",
      features: [
        "Cloud migration and modernization",
        "Multi-cloud architecture design",
        "Infrastructure as Code (IaC)",
        "Cloud cost optimization",
        "24/7 cloud monitoring and support",
        "Disaster recovery and backup",
      ],
    },
    {/*    {
      id: "security",
      icon: Shield,
      image: securityIcon,
      title: "Cybersecurity Services",
      description: "Protect your digital assets with comprehensive security solutions and compliance frameworks.",
      features: [
        "Security audits and assessments",
        "Penetration testing",
        "Compliance management (SOC 2, ISO 27001)",
        "Threat detection and response",
        "Identity and access management",
        "Security training and awareness",
      ],
    }, */},
    {
      id: "development",
      icon: Code,
      image: developmentIcon,
      title: "Software Development",
      description: "Custom software solutions built with modern technologies and best practices.",
      features: [
        "Web and mobile application development",
        "API development and integration",
        "Microservices architecture",
        "DevOps and CI/CD pipelines",
        "Quality assurance and testing",
        "Legacy system modernization",
      ],
    },
    {
      id: "consulting",
      icon: Users,
      image: consultingIcon,
      title: "IT Consulting",
      description: "Strategic technology consulting to align IT with your business objectives.",
      features: [
        "Digital transformation strategy",
        "Technology roadmap planning",
        "Architecture design and review",
        "IT process optimization",
        "Vendor selection and management",
        "Change management",
      ],
    },
    {
      id: "ai",
      icon: Brain,
      image: aiIcon,
      title: "AI & Automation",
      description: "Harness the power of artificial intelligence to automate and optimize your operations.",
      features: [
        "Machine learning model development",
        "Natural language processing",
        "Computer vision solutions",
        "Process automation (RPA)",
        "Predictive analytics",
        "AI strategy and implementation",
      ],
    },
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
                Services
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Comprehensive technology solutions designed to drive your digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  } animate-fade-in`}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10">
                    <service.icon className="text-primary" size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                  <p className="text-lg text-muted-foreground">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="shadow-glow">
                    <Link to="/contact">
                      Get Started <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </Button>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <Card className="bg-card border-border overflow-hidden shadow-card hover-lift">
                    <CardContent className="p-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 lg:h-96 object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how our services can help achieve your business goals.
            </p>
            <Button asChild size="lg" className="shadow-glow">
              <Link to="/contact">
                Contact Our Team <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
