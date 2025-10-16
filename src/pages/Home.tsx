import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Shield, Code, Users, Brain, ArrowRight } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Scalable cloud infrastructure and migration solutions for modern businesses.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced threat protection and compliance solutions to safeguard your data.",
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions built with cutting-edge technologies.",
    },
    {
      icon: Users,
      title: "IT Consulting",
      description: "Strategic technology consulting to drive digital transformation.",
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Intelligent automation solutions powered by artificial intelligence.",
    },
  ];

  const technologies = [
    "AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", 
    "React", "Node.js", "Python", "TensorFlow", "PostgreSQL"
  ];

  const stats = [
    { value: "500+", label: "Clients Worldwide" },
    { value: "1000+", label: "Projects Delivered" },
    { value: "50+", label: "Countries Served" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
        
        <div className="container relative z-10 px-4 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Innovating Secure{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Digital Futures
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your business with cutting-edge cloud solutions, cybersecurity, and digital innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-glow text-lg">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover-lift cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                    <service.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link to="/services" className="text-primary hover:text-accent transition-smooth inline-flex items-center gap-2">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-card">
        <div className="container px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-muted-foreground">
              Leveraging the latest and most powerful technologies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-lg bg-secondary border border-border hover:border-primary transition-smooth"
              >
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 lg:px-8">
          <Card className="bg-gradient-to-br from-primary/10 via-card to-accent/10 border-primary/20 shadow-glow">
            <CardContent className="p-12 lg:p-16 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of companies already benefiting from our innovative technology solutions.
              </p>
              <Button asChild size="lg" className="shadow-glow">
                <Link to="/contact">
                  Contact Us Today <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
