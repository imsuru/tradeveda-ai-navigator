import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { ChevronRight, ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-16 lg:py-20 bg-background text-foreground dark:text-white" style={{ backgroundImage: 'url("/lovable-uploads/hero_edited.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6 animate-fade-in">
              <img 
                src="/lovable-uploads/ff9e5cb3-b82b-43ea-9259-c3017ffbedee-Photoroom.png" 
                alt="Liquidmind®.ai" 
                className="h-32 w-auto"
              />
            </div>
            <h1 className="heading-xl mb-6 animate-fade-in font-bold text-white">
              Trade Documentation Simplified with AI Copilots
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-fade-in text-gray-200 font-medium">
              Liquidmind®.ai's agentic AI framework automates trade documentation workflows, reduces compliance risk, and accelerates global trade processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="btn-primary" asChild>
                <Link to="/products/tradeveda">Explore Tradeveda</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/80 hover:bg-white/90 text-gray-900 dark:bg-white/10 dark:text-white dark:hover:bg-white/20" asChild>
                <a href="https://youtu.be/OBuNapaXt2I" target="_blank" rel="noopener noreferrer">
                  Watch Demo <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Powered By Section */}
      <section className="py-6 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <p className="text-sm font-medium text-adaptive-muted">Powered by:</p>
            <div className="h-10 w-32 md:h-12 md:w-40">
              <AspectRatio ratio={3/1} className="bg-transparent">
                <img 
                  src="/lovable-uploads/e6da0c4e-3e5e-41b7-84e5-587d8624e843.png" 
                  alt="NVIDIA Inception Program"
                  className="object-contain h-full w-full dark:invert-0 dark:filter-none"
                />
              </AspectRatio>
            </div>
            <div className="h-10 w-32 md:h-12 md:w-40">
              <AspectRatio ratio={3/1} className="bg-transparent">
                <img 
                  src="/lovable-uploads/b13708d9-6473-4ae9-985a-c465b4b788b8.png" 
                  alt="Microsoft for Startups Founders Hub"
                  className="object-contain h-full w-full dark:invert-0 dark:filter-none"
                />
              </AspectRatio>
            </div>
            <div className="h-10 w-32 md:h-12 md:w-40">
              <AspectRatio ratio={3/1} className="bg-transparent">
                <img 
                  src="/lovable-uploads/b0b82274-7415-4ce2-8b8a-c0b70a6fc9b5.png" 
                  alt="Powered by AWS"
                  className="object-contain h-full w-full dark:invert-0 dark:filter-none"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-100 dark:bg-brand-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Why Leading Trade Professionals Choose Liquidmind®.ai</h2>
            <p className="text-lg text-adaptive-muted max-w-2xl mx-auto">
              Our AI copilots transform how businesses handle trade documentation and compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-light card-hover">
              <CardHeader>
                <CardTitle className="text-adaptive">Automate Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-adaptive-muted">
                  Reduce manual paperwork by 80% with AI that automatically generates, validates, and 
                  processes trade documentation with country-specific compliance checks.
                </p>
              </CardContent>
            </Card>

            <Card className="card-light card-hover">
              <CardHeader>
                <CardTitle className="text-adaptive">Prevent Compliance Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-adaptive-muted">
                  Identify and resolve potential compliance issues before they occur with proactive 
                  risk assessment and real-time regulatory updates.
                </p>
              </CardContent>
            </Card>

            <Card className="card-light card-hover">
              <CardHeader>
                <CardTitle className="text-adaptive">Accelerate Trade Processes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-adaptive-muted">
                  Cut processing time by up to 70% through intelligent workflows that prioritize tasks and 
                  streamline approvals with agentic AI capabilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-16 bg-gray-50 dark:bg-black relative overflow-hidden">
        {/* Background design element using logo pattern */}
        <div className="absolute left-0 bottom-0 opacity-5 w-1/3">
          <img 
            src="/lovable-uploads/b0af720f-e6c4-4911-98a7-ac32e309f510.png" 
            alt="Liquidmind Logo Pattern" 
            className="w-full h-auto"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">
                Introducing the Tradeveda Platform
              </h2>
              <p className="text-lg mb-6 text-adaptive-muted">
                Our comprehensive suite of AI copilots transforms how customs house agents, 3PLs, exporters, 
                and compliance officers manage international trade documentation.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <strong className="font-medium text-adaptive">Patram.AI</strong>
                    <p className="text-adaptive-muted">Intelligent documentation assistant that automates form generation and validation</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <strong className="font-medium text-adaptive">Tradeveda Platform</strong>
                    <p className="text-adaptive-muted">Central hub orchestrating all trade documentation and compliance workflows</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full mt-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <strong className="font-medium text-adaptive">TradeGuard.AI</strong>
                    <p className="text-adaptive-muted">Compliance monitoring and risk assessment for international trade operations</p>
                  </div>
                </li>
              </ul>
              <Button className="btn-primary group" size="lg" asChild>
                <Link to="/products/tradeveda">
                  Explore All Features
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="card-light p-6 rounded-lg shadow-lg">
              <iframe 
                className="w-full aspect-video rounded-md"
                src="https://www.youtube.com/embed/OBuNapaXt2I"
                title="Liquidmind®.ai Demo"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
              <p className="text-adaptive-muted mt-4">
                Discover how our AI copilots can transform your trade documentation processes with our 
                comprehensive platform demo.
              </p>
              <Button variant="outline" className="w-full mt-4 btn-secondary" asChild>
                <a href="https://youtu.be/OBuNapaXt2I" target="_blank" rel="noopener noreferrer">
                  Watch Full Demonstration
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Preview */}
      <section className="py-16 bg-gray-100 dark:bg-brand-charcoal">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Solving Real Trade Challenges</h2>
            <p className="text-lg text-adaptive-muted max-w-2xl mx-auto">
              See how trade professionals are using Liquidmind®.ai's copilots to overcome documentation 
              and compliance obstacles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-light card-hover">
              <CardHeader>
                <CardTitle className="text-adaptive">Customs Clearance Acceleration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-adaptive-muted mb-4">
                  How CHAs reduced documentation processing time by 65% and minimized customs delays.
                </p>
                <Button variant="outline" size="sm" className="btn-secondary" asChild>
                  <Link to="/use-cases#customs-clearance">View Case Study</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-light card-hover">
              <CardHeader>
                <CardTitle className="text-adaptive">Export Documentation Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-adaptive-muted mb-4">
                  How exporters eliminated documentation errors and reduced compliance violations by 92%.
                </p>
                <Button variant="outline" size="sm" className="btn-secondary" asChild>
                  <Link to="/use-cases#export-compliance">View Case Study</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-light card-hover">
              <CardHeader>
                <CardTitle className="text-adaptive">3PL Documentation Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-adaptive-muted mb-4">
                  How logistics providers streamlined documentation workflows across multiple clients and countries.
                </p>
                <Button variant="outline" size="sm" className="btn-secondary" asChild>
                  <Link to="/use-cases#3pl-management">View Case Study</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button className="btn-primary" asChild>
              <Link to="/use-cases">Explore All Use Cases</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50 dark:bg-black relative overflow-hidden" style={{ backgroundImage: 'url("/lovable-uploads/hero_edited.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/ff9e5cb3-b82b-43ea-9259-c3017ffbedee-Photoroom.png" 
                alt="Liquidmind®.ai" 
                className="h-32 w-auto"
              />
            </div>
            <h2 className="heading-lg mb-6 text-white">
              Ready to Transform Your Trade Documentation Process?
            </h2>
            <p className="text-lg mb-8 text-gray-200">
              Join leading trade professionals already using Liquidmind®.ai's copilots to simplify documentation,
              ensure compliance, and accelerate international trade operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary" asChild>
                <Link to="/contact">Schedule a Demo</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/20" asChild>
                <Link to="/products/tradeveda">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
