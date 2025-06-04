import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    comments: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        mobile: "",
        comments: "",
      });
    }, 1500);
  };

  return (
    <Layout>
      <section className="py-16 bg-background dark:bg-brand-dark text-foreground dark:text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="heading-lg mb-4 text-brand-blue">Contact Us</h1>
              <p className="text-lg text-muted-foreground dark:text-gray-300">
                Have questions about our AI copilots for trade documentation? We're here to help.
              </p>
            </div>

            <Card className="bg-card dark:bg-brand-charcoal border-border dark:border-brand-blue/30">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground dark:text-white">Name <span className="text-red-500">*</span></Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="bg-background dark:bg-black/50 border-input dark:border-brand-blue/20 text-foreground dark:text-white placeholder:text-muted-foreground dark:placeholder:text-gray-500 focus:border-brand-blue"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground dark:text-white">Email <span className="text-red-500">*</span></Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@company.com"
                      className="bg-background dark:bg-black/50 border-input dark:border-brand-blue/20 text-foreground dark:text-white placeholder:text-muted-foreground dark:placeholder:text-gray-500 focus:border-brand-blue"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mobile" className="text-foreground dark:text-white">Mobile Number</Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Your phone number (optional)"
                      className="bg-background dark:bg-black/50 border-input dark:border-brand-blue/20 text-foreground dark:text-white placeholder:text-muted-foreground dark:placeholder:text-gray-500 focus:border-brand-blue"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comments" className="text-foreground dark:text-white">Comments</Label>
                    <Textarea
                      id="comments"
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      placeholder="How can we help you? (optional)"
                      rows={4}
                      className="bg-background dark:bg-black/50 border-input dark:border-brand-blue/20 text-foreground dark:text-white placeholder:text-muted-foreground dark:placeholder:text-gray-500 focus:border-brand-blue"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-card dark:bg-brand-charcoal rounded-lg shadow-sm border border-border dark:border-brand-blue/30">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="h-5 w-5 text-brand-blue" />
                  <h3 className="font-semibold text-foreground dark:text-white">Email Us</h3>
                </div>
                <p className="text-muted-foreground dark:text-gray-300">support@liquidmind.ai</p>
              </div>
              
              <div className="p-6 bg-card dark:bg-brand-charcoal rounded-lg shadow-sm border border-border dark:border-brand-blue/30">
                <h3 className="font-semibold mb-3 text-foreground dark:text-white">Address</h3>
                <address className="text-muted-foreground dark:text-gray-300 not-italic">
                  Banashankari III Stage<br />
                  Kathriguppe<br />
                  Bangalore<br />
                  Karnataka - 560085<br />
                  India
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
