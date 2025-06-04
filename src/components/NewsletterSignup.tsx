import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { MailOpen } from "lucide-react";

interface NewsletterSignupProps {
  minimal?: boolean;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ minimal = false }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setEmail("");
      toast({
        title: "Subscribed successfully!",
        description: "Thank you for subscribing to our newsletter.",
      });
    }, 1000);
  };

  if (minimal) {
    return (
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-background"
        />
        <Button type="submit" variant="default" className="w-full flex items-center gap-2 shadow-md" disabled={isLoading}>
          <MailOpen className="w-4 h-4" />
          {isLoading ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Stay Updated</h3>
      <p className="text-muted-foreground">
        Subscribe to our newsletter for the latest insights on trade documentation, 
        compliance, and AI innovations.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" variant="default" className="w-full flex items-center gap-2 shadow-md" disabled={isLoading}>
          <MailOpen className="w-4 h-4" />
          {isLoading ? "Subscribing..." : "Subscribe to Newsletter"}
        </Button>
      </form>
      <p className="text-xs text-muted-foreground">
        By subscribing, you agree to receive marketing emails. You can unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterSignup;
