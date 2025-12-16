import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We constantly push boundaries and embrace emerging technologies to deliver cutting-edge solutions.",
    },
    {
      icon: Eye,
      title: "Client Focus",
      description: "Your success is our mission. We build lasting partnerships based on trust and exceptional results.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork, both internally and with our clients.",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      bio: "15+ years leading technology transformations for Fortune 500 companies.",
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      bio: "Former Lead Architect at major cloud providers with deep expertise in distributed systems.",
    },
    {
      name: "Emily Johnson",
      role: "VP of Cybersecurity",
      bio: "Certified security expert specializing in enterprise threat protection and compliance.",
    },
    {
      name: "David Park",
      role: "VP of Engineering",
      bio: "Passionate about building scalable systems and mentoring engineering teams.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 gradient-hero">
        <div className="container px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold">
              About{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                M2SV Technologies
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We're a global technology company dedicated to innovating secure digital futures through cutting-edge solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2010, M2SV Technologies began with a simple mission: to help businesses navigate the complexities of digital transformation. What started as a small consulting firm has grown into a global technology powerhouse.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we serve over 500 clients across 50 countries, delivering innovative solutions in cloud computing, cybersecurity, software development, and AI automation. Our success is built on a foundation of technical excellence, customer obsession, and relentless innovation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're not just service providers—we're your strategic technology partners, committed to driving your success in an increasingly digital world.
              </p>
            </div>
            <div className="space-y-6 animate-slide-in-right">
              <Card className="bg-card border-border shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Target className="text-primary" size={28} />
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    To empower organizations with innovative, secure, and scalable technology solutions that drive digital transformation and business growth.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Eye className="text-primary" size={28} />
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground">
                    To be the world's most trusted technology partner, known for delivering exceptional value and pioneering the future of enterprise technology.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-background border-border hover-lift text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <value.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              Meet the experts driving our vision forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-card border-border hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold text-center mb-1">{member.name}</h3>
                  <p className="text-sm text-primary text-center mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground text-center">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
