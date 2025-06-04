import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Shield, ArrowLeft, Check, AlertTriangle } from "lucide-react";

const TradeVedaTradeGuardAI = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="h-16 w-16 text-brand-purple mx-auto mb-6" />
            <h1 className="heading-xl mb-6">TradeGuard.AI</h1>
            <p className="text-xl opacity-90 mb-8">
              The compliance monitoring and risk assessment copilot that safeguards your international trade operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-100 hover:bg-gray-300 text-gray-700" asChild>
                <Link to="/contact">Schedule a Demo</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20" asChild>
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
            <h2 className="heading-lg mb-4">Proactive Compliance Protection</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              TradeGuard.AI continuously monitors your trade documentation to prevent compliance violations before they occur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-brand-charcoal p-6 rounded-lg">
              <div className="bg-brand-purple/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Monitoring</h3>
              <p className="text-gray-300">
                Continuous surveillance of all trade documentation for potential regulatory violations across
                multiple jurisdictions.
              </p>
            </div>
            
            <div className="bg-brand-charcoal p-6 rounded-lg">
              <div className="bg-brand-purple/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Risk Assessment</h3>
              <p className="text-gray-300">
                Proactive identification of potential compliance risks before they become actual violations,
                with clear remediation guidance.
              </p>
            </div>
            
            <div className="bg-brand-charcoal p-6 rounded-lg">
              <div className="bg-brand-purple/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Regulatory Updates</h3>
              <p className="text-gray-300">
                Automatic incorporation of changing trade regulations and compliance requirements from
                around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-brand-darkgray text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">TradeGuard.AI Use Cases</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              See how TradeGuard.AI protects your business across various compliance scenarios
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            <div className="flex gap-6">
              <div className="bg-brand-purple/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-brand-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Restricted Party Screening</h3>
                <p className="text-gray-300 mb-4">
                  Automatically screen all parties in your trade transactions against global
                  restricted party lists and sanctions databases.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="bg-brand-purple/10 p-1 rounded-full">
                      <Check className="h-3 w-3 text-brand-purple" />
                    </div>
                    <span className="text-gray-300">Covers 600+ global watch lists</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="bg-brand-purple/10 p-1 rounded-full">
                      <Check className="h-3 w-3 text-brand-purple" />
                    </div>
                    <span className="text-gray-300">Immediate alerts for potential matches</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="bg-brand-purple/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-brand-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Export Control Compliance</h3>
                <p className="text-gray-300 mb-4">
                  Verify product classifications and ensure compliance with export control
                  regulations across different countries.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="bg-brand-purple/10 p-1 rounded-full">
                      <Check className="h-3 w-3 text-brand-purple" />
                    </div>
                    <span className="text-gray-300">HS code verification and suggestions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="bg-brand-purple/10 p-1 rounded-full">
                      <Check className="h-3 w-3 text-brand-purple" />
                    </div>
                    <span className="text-gray-300">Dual-use good identification</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="bg-brand-purple/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-brand-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Documentation Audit</h3>
                <p className="text-gray-300 mb-4">
                  Continuously audit all trade documentation for compliance with current regulations
                  and identify discrepancies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="bg-brand-purple/10 p-1 rounded-full">
                      <Check className="h-3 w-3 text-brand-purple" />
                    </div>
                    <span className="text-gray-300">Comprehensive audit trails for due diligence</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="bg-brand-purple/10 p-1 rounded-full">
                      <Check className="h-3 w-3 text-brand-purple" />
                    </div>
                    <span className="text-gray-300">Documentation inconsistency detection</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="bg-brand-purple/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-brand-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Regulatory Tracking</h3>
                <p className="text-gray-300 mb-4">
                  Stay updated with changing trade regulations and compliance requirements
                  across global markets.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="bg-brand-purple/10 p-1 rounded-full">
                      <Check className="h-3 w-3 text-brand-purple" />
                    </div>
                    <span className="text-gray-300">Proactive notifications of regulatory changes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="bg-brand-purple/10 p-1 rounded-full">
                      <Check className="h-3 w-3 text-brand-purple" />
                    </div>
                    <span className="text-gray-300">Impact assessments for your specific trade patterns</span>
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
              Ready to Safeguard Your Trade Compliance?
            </h2>
            <p className="text-lg mb-8 text-gray-300">
              Schedule a personalized demonstration to see how TradeGuard.AI can protect your 
              business from costly compliance violations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-100 hover:bg-gray-300 text-gray-700" asChild>
                <Link to="/contact">Schedule Demo</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 bg-transparent text-white hover:bg-white/10" asChild>
                <Link to="/products/tradeveda">Back to TradeVeda Platform</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TradeVedaTradeGuardAI;
