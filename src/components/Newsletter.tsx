import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Newsletter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem("newsletter-popup-seen");
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 5000); // Show after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for subscribing to our newsletter!");
    localStorage.setItem("newsletter-popup-seen", "true");
    setIsOpen(false);
    setEmail("");
  };

  const handleClose = () => {
    localStorage.setItem("newsletter-popup-seen", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <Card className="max-w-md w-full bg-card border-primary/20 shadow-glow">
        <CardContent className="p-8 relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-smooth"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <div className="space-y-4">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold">
                Stay Updated with{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  VERS
                </span>
              </h3>
              <p className="text-muted-foreground">
                Get the latest insights on technology trends, industry news, and exclusive updates.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12"
                />
              </div>
              <Button type="submit" className="w-full shadow-glow" size="lg">
                Subscribe Now
              </Button>
            </form>

            <p className="text-xs text-center text-muted-foreground">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Newsletter;
