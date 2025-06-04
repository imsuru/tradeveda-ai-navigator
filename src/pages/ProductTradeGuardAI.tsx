import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Shield, AlertTriangle, Check, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProductTradeGuardAI = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="h-20 w-20 text-primary mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-adaptive mb-6">TradeGuard.AI</h1>
            <p className="text-xl text-adaptive-muted mb-8">
              The compliance monitoring and risk assessment copilot that safeguards your international trade operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary" asChild>
                <Link to="/products/tradeveda-tradeguard-ai">See Full Platform</Link>
              </Button>
              <Button variant="outline" size="lg" className="btn-secondary" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-adaptive mb-4">Proactive Compliance Protection</h2>
            <p className="text-lg text-adaptive-muted max-w-2xl mx-auto">
              TradeGuard.AI continuously monitors your trade documentation to prevent compliance violations before they occur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border text-adaptive p-6">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-adaptive">Real-Time Monitoring</h3>
              <p className="text-adaptive-muted text-center">
                Continuous surveillance of all trade documentation for potential regulatory violations across
                multiple jurisdictions.
              </p>
            </Card>
            
            <Card className="bg-card border-border text-adaptive p-6">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <AlertTriangle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-adaptive">Risk Assessment</h3>
              <p className="text-adaptive-muted text-center">
                Proactive identification of potential compliance risks before they become actual violations,
                with clear remediation guidance.
              </p>
            </Card>
            
            <Card className="bg-card border-border text-adaptive p-6">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-adaptive">Regulatory Updates</h3>
              <p className="text-adaptive-muted text-center">
                Automatic incorporation of changing trade regulations and compliance requirements from
                around the world.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Video */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-adaptive mb-4">See TradeGuard.AI in Action</h2>
            <p className="text-lg text-adaptive-muted max-w-2xl mx-auto">
              Watch how TradeGuard.AI protects your business from compliance risks
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-card rounded-lg shadow-lg border border-border mb-8 overflow-hidden">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/OBuNapaXt2I"
                title="TradeGuard.AI Demo Video"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ERP Integration */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-adaptive mb-4">Seamless ERP Integration</h2>
            <p className="text-lg text-adaptive-muted max-w-2xl mx-auto">
              TradeGuard.AI connects with all major ERP systems to provide comprehensive compliance coverage
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="bg-card p-4 rounded-lg hover:bg-primary/10 transition-colors flex items-center justify-center border border-border h-20">
              <span className="text-xl font-bold text-adaptive">SAP</span>
            </div>
            <div className="bg-card p-4 rounded-lg hover:bg-primary/10 transition-colors flex items-center justify-center border border-border h-20">
              <span className="text-xl font-bold text-adaptive">Oracle</span>
            </div>
            <div className="bg-card p-4 rounded-lg hover:bg-primary/10 transition-colors flex items-center justify-center border border-border h-20">
              <span className="text-xl font-bold text-adaptive">Microsoft</span>
            </div>
            <div className="bg-card p-4 rounded-lg hover:bg-primary/10 transition-colors flex items-center justify-center border border-border h-20">
              <span className="text-xl font-bold text-adaptive">NetSuite</span>
            </div>
            <div className="bg-card p-4 rounded-lg hover:bg-primary/10 transition-colors flex items-center justify-center border border-border h-20">
              <span className="text-xl font-bold text-adaptive">Sage</span>
            </div>
            <div className="bg-card p-4 rounded-lg hover:bg-primary/10 transition-colors flex items-center justify-center border border-border h-20">
              <span className="text-xl font-bold text-adaptive">Infor</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/ff9e5cb3-b82b-43ea-9259-c3017ffbedee-Photoroom.png" 
                alt="Liquidmind®.ai" 
                className="h-32 w-auto"
              />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-adaptive mb-6">
              Ready to Safeguard Your Trade Compliance?
            </h2>
            <p className="text-lg mb-8 text-adaptive-muted">
              Schedule a personalized demonstration to see how TradeGuard.AI can protect your 
              business from costly compliance violations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary" asChild>
                <Link to="/products/tradeveda-tradeguard-ai">Explore Full Platform</Link>
              </Button>
              <Button variant="outline" size="lg" className="btn-secondary" asChild>
                <Link to="/contact">Schedule a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductTradeGuardAI;
