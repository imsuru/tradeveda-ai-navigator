import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { MessageSquare, ArrowLeft, Check, ArrowRight } from "lucide-react";

const TradeVedaPatramAI = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <MessageSquare className="h-16 w-16 text-gray-700 mx-auto mb-6" />
            <h1 className="heading-xl mb-6">Patram.AI</h1>
            <p className="text-xl opacity-90 mb-8">
              The intelligent documentation assistant that automates trade document creation, validation, and management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-100 text-gray-700 hover:bg-gray-300" asChild>
                <Link to="/contact">Schedule a Demo</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-gray-100 text-gray-700 hover:bg-gray-300" asChild>
                <Link to="/products/tradeveda">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to TradeVeda Platform
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Intelligent Document Assistant</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Patram.AI automates and optimizes the entire document lifecycle for international trade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-brand-charcoal p-6 rounded-lg">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Creation</h3>
              <p className="text-gray-300">
                Generate compliant trade documents from minimal inputs with our advanced AI that understands 
                international trade requirements.
              </p>
            </div>
            
            <div className="bg-brand-charcoal p-6 rounded-lg">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Validation</h3>
              <p className="text-gray-300">
                Instantly validate documents against current regulatory requirements to ensure compliance
                before submission.
              </p>
            </div>
            
            <div className="bg-brand-charcoal p-6 rounded-lg">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <ArrowRight className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Extraction</h3>
              <p className="text-gray-300">
                Extract critical information from existing documents with high accuracy using our 
                advanced OCR and machine learning technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-brand-darkgray text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Patram.AI Use Cases</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              See how Patram.AI streamlines document processes across various trade scenarios
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            <div className="flex gap-6">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="h-6 w-6 text-gray-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Export Documentation</h3>
                <p className="text-gray-300 mb-4">
                  Generate complete sets of export documentation including commercial invoices, 
                  packing lists, certificates of origin, and shipping instructions in minutes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="bg-gray-100 p-1 rounded-full">
                      <Check className="h-3 w-3 text-gray-700" />
                    </div>
                    <span className="text-gray-300">Reduce documentation time by up to 75%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="bg-gray-100 p-1 rounded-full">
                      <Check className="h-3 w-3 text-gray-700" />
                    </div>
                    <span className="text-gray-300">Eliminate manual data entry errors</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="h-6 w-6 text-gray-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Regulatory Compliance</h3>
                <p className="text-gray-300 mb-4">
                  Ensure all documents comply with destination country requirements and 
                  international trade agreements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="bg-gray-100 p-1 rounded-full">
                      <Check className="h-3 w-3 text-gray-700" />
                    </div>
                    <span className="text-gray-300">Stay updated with changing regulations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="bg-gray-100 p-1 rounded-full">
                      <Check className="h-3 w-3 text-gray-700" />
                    </div>
                    <span className="text-gray-300">Avoid costly compliance penalties</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="h-6 w-6 text-gray-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Data Extraction & Organization</h3>
                <p className="text-gray-300 mb-4">
                  Extract key information from invoices, bills of lading, and other trade documents
                  to populate your systems automatically.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="bg-gray-100 p-1 rounded-full">
                      <Check className="h-3 w-3 text-gray-700" />
                    </div>
                    <span className="text-gray-300">Digitize paper documents with 98% accuracy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="bg-gray-100 p-1 rounded-full">
                      <Check className="h-3 w-3 text-gray-700" />
                    </div>
                    <span className="text-gray-300">Streamline document archiving and retrieval</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="h-6 w-6 text-gray-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Multi-Country Support</h3>
                <p className="text-gray-300 mb-4">
                  Create documentation that meets the specific requirements of different countries
                  and trade jurisdictions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="bg-gray-100 p-1 rounded-full">
                      <Check className="h-3 w-3 text-gray-700" />
                    </div>
                    <span className="text-gray-300">Support for 150+ countries and territories</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="bg-gray-100 p-1 rounded-full">
                      <Check className="h-3 w-3 text-gray-700" />
                    </div>
                    <span className="text-gray-300">Country-specific document templates and requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-brand-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <img 
                src="/lovable-uploads/ff9e5cb3-b82b-43ea-9259-c3017ffbedee-Photoroom.png" 
                alt="Liquidmind Logo" 
                className="h-16 w-auto"
              />
            </div>
            <h2 className="heading-lg mb-6 text-white">
              Ready to Transform Your Trade Documentation Process?
            </h2>
            <p className="text-lg mb-8 text-gray-300">
              Schedule a personalized demonstration to see how Patram.AI can streamline your 
              document creation and management workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-100 hover:bg-gray-300 text-gray-700" asChild>
                <Link to="/contact">Schedule Demo</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 bg-transparent text-white hover:bg-white/10" asChild>
                <Link to="/products/tradeveda">Back to TradeVeda Platform</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TradeVedaPatramAI;
