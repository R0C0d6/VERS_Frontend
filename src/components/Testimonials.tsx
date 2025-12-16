import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "M2SV Technologies transformed our entire infrastructure. Their cloud migration expertise saved us 60% on operational costs while improving performance significantly.",
      author: "Sarah Johnson",
      role: "CTO, Global Finance Corp",
      company: "Fortune 500 Financial Institution",
    },
    {
      quote: "The cybersecurity implementation was flawless. We achieved HIPAA compliance ahead of schedule and haven't had a single security incident since.",
      author: "Dr. Michael Chen",
      role: "Chief Medical Officer",
      company: "Leading Healthcare Provider",
    },
    {
      quote: "Their development team delivered a scalable platform that handles millions of transactions daily. The technical expertise is unmatched.",
      author: "Emily Rodriguez",
      role: "VP of Engineering",
      company: "Top 10 E-Commerce Company",
    },
    {
      quote: "The AI-powered solutions reduced our operational downtime by 45%. The ROI was evident within the first quarter.",
      author: "David Park",
      role: "Operations Director",
      company: "Manufacturing Leader",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="container px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by leading organizations worldwide
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="bg-background border-border shadow-card">
            <CardContent className="p-8 lg:p-12">
              <Quote className="text-primary/20 mb-6" size={48} />
              
              <div className="space-y-6 animate-fade-in" key={currentIndex}>
                <p className="text-lg lg:text-xl text-foreground leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{testimonials[currentIndex].author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              onClick={goToPrevious}
              variant="secondary"
              size="icon"
              className="rounded-full"
            >
              <ChevronLeft size={20} />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-smooth ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={goToNext}
              variant="secondary"
              size="icon"
              className="rounded-full"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
