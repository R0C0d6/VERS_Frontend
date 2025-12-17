import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { MapPin, Clock, Briefcase, Heart, Users, Zap, Globe, Award } from "lucide-react";

const Careers = () => {
  const positions = [
    {
      title: "Senior Cloud Architect",
      department: "Infrastructure",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      description: "Lead cloud architecture design and implementation for enterprise clients.",
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build modern web applications using React, Node.js, and cloud technologies.",
    },
    {
      title: "AI/ML Engineer",
      department: "Innovation",
      location: "Seattle, WA",
      type: "Full-time",
      description: "Develop machine learning models and AI-powered solutions for clients.",
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Austin, TX",
      type: "Full-time",
      description: "Build and maintain CI/CD pipelines and infrastructure automation.",
    },
    {
      title: "Technical Consultant",
      department: "Consulting",
      location: "Remote / Boston, MA",
      type: "Full-time",
      description: "Provide strategic technology guidance to enterprise clients.",
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance",
    },
    {
      icon: Globe,
      title: "Remote Work",
      description: "Flexible remote work options for most positions",
    },
    {
      icon: Zap,
      title: "Learning & Development",
      description: "$5000 annual budget for courses and certifications",
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative environment with talented professionals",
    },
    {
      icon: Briefcase,
      title: "Competitive Salary",
      description: "Top-tier compensation and equity packages",
    },
    {
      icon: Award,
      title: "Career Growth",
      description: "Clear career paths and promotion opportunities",
    },
  ];

  const values = [
    "Innovation and continuous learning",
    "Work-life balance",
    "Diversity and inclusion",
    "Customer obsession",
    "Technical excellence",
    "Collaborative teamwork",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 gradient-hero">
        <div className="container px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold">
              Build Your Career at{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                M2SV
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Join our team of innovators and help shape the future of technology
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-card">
        <div className="container px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us</h2>
            <p className="text-lg text-muted-foreground">
              We're more than just a workplace—we're a community of passionate technologists
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-background border-border hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <benefit.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground">
              Explore opportunities to make an impact
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-4">
            {positions.map((position, index) => (
              <Card
                key={index}
                className="bg-card border-border hover-lift cursor-pointer group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                          {position.title}
                        </h3>
                        <Badge variant="secondary" className="lg:hidden">
                          {position.type}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{position.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Briefcase size={16} className="text-primary" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin size={16} className="text-primary" />
                          {position.location}
                        </span>
                        <span className="hidden lg:flex items-center gap-2">
                          <Clock size={16} className="text-primary" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <Button asChild className="lg:ml-4">
                      <Link to="/contact">Apply Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Culture</h2>
            <p className="text-lg text-muted-foreground">
              The values that guide our work and relationships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-background border-border hover-lift"
              >
                <CardContent className="p-6 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground">{value}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 lg:px-8">
          <Card className="bg-gradient-to-br from-primary/10 via-card to-accent/10 border-primary/20 shadow-glow">
            <CardContent className="p-12 lg:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Don't See the Right Role?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let's explore opportunities together.
              </p>
              <Button asChild size="lg" className="shadow-glow">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Careers;
