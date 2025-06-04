import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Check, Shield, Database, Repeat, FileCode, MessageSquare, Play, ChevronDown, Mail, Linkedin, Facebook, Instagram, Twitter, Sun, Moon } from "lucide-react";
import { useTheme } from '@/components/ThemeProvider';

const ProductTradeVeda = () => {
  const demoVideoRef = useRef<HTMLDivElement>(null);

  const scrollToDemo = () => {
    if (demoVideoRef.current) {
      demoVideoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background border-b py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-adaptive mb-6">TradeVeda Platform</h1>
            <p className="text-xl text-adaptive-muted mb-8">
              The comprehensive AI-powered platform for trade documentation and compliance automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary" asChild>
                <Link to="/contact">Schedule a Demo</Link>
              </Button>
              <Button variant="outline" size="lg" className="btn-secondary" onClick={scrollToDemo}>
                Watch Demo Video
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Suite */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-adaptive mb-4">Our Complete AI Copilot Suite</h2>
            <p className="text-lg text-adaptive-muted max-w-2xl mx-auto">
              TradeVeda offers a comprehensive ecosystem of AI copilots designed specifically for 
              trade documentation and compliance needs
            </p>
          </div>

          <Tabs defaultValue="tradeveda" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto bg-muted">
              <TabsTrigger value="tradeveda" className="py-3 text-adaptive data-[state=active]:bg-background">TradeVeda Platform</TabsTrigger>
              <TabsTrigger value="patram" className="py-3 text-adaptive data-[state=active]:bg-background">Patram.AI</TabsTrigger>
              <TabsTrigger value="tradeguard" className="py-3 text-adaptive data-[state=active]:bg-background">TradeGuard.AI</TabsTrigger>
            </TabsList>
            <TabsContent value="tradeveda" className="mt-6 border rounded-lg p-6 bg-card">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-adaptive mb-4">TradeVeda Platform</h3>
                  <p className="text-adaptive-muted mb-4">
                    The central orchestration hub that integrates all trade documentation and compliance 
                    workflows into a seamless experience. TradeVeda serves as the overarching platform that 
                    brings together our specialized AI copilots.
                  </p>
                  <h4 className="font-semibold text-lg mb-2 text-adaptive">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <div className="bg-primary/20 p-1 rounded-full mt-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-adaptive">Centralized documentation workflow management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-primary/20 p-1 rounded-full mt-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-adaptive">Seamless integration with Patram.AI and TradeGuard.AI</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-primary/20 p-1 rounded-full mt-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-adaptive">Real-time visibility into document status and compliance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-primary/20 p-1 rounded-full mt-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-adaptive">Customizable workflows for different trade scenarios</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-primary/20 p-1 rounded-full mt-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-adaptive">Team collaboration with role-based access controls</span>
                    </li>
                  </ul>
                  <Button asChild className="btn-primary">
                    <Link to="/contact">Schedule Platform Demo</Link>
                  </Button>
                </div>
                <div className="bg-muted rounded-lg p-6">
                  <h4 className="font-semibold text-lg mb-2 text-adaptive">Ideal For:</h4>
                  <p className="text-adaptive-muted mb-4">
                    Trade operations teams, customs house agents, 3PLs, exporters, and compliance officers 
                    looking for a complete solution to manage all aspects of trade documentation and compliance.
                  </p>
                  <h4 className="font-semibold text-lg mb-2 text-adaptive">How It Works:</h4>
                  <p className="text-adaptive-muted">
                    TradeVeda's agentic AI framework coordinates between specialized AI copilots to automate
                    the entire trade documentation lifecycle, from document creation and validation to
                    compliance monitoring and risk assessment.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="patram" className="mt-6 border rounded-lg p-6 bg-card">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-adaptive mb-4">Patram.AI</h3>
                  <p className="text-adaptive-muted mb-4">
                    An intelligent documentation assistant that automates the creation, validation, and
                    management of trade documents with exceptional accuracy and regulatory compliance.
                  </p>
                  <h4 className="font-semibold text-lg mb-2 text-adaptive">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <div className="bg-primary/20 p-1 rounded-full mt-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-adaptive">Automated document generation from minimal inputs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-primary/20 p-1 rounded-full mt-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-adaptive">Intelligent data extraction from existing documents</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-primary/20 p-1 rounded-full mt-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-adaptive">Multi-country document format compliance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-primary/20 p-1 rounded-full mt-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-adaptive">Real-time validation against current regulations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-primary/20 p-1 rounded-full mt-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-adaptive">Intelligent form field recommendations and auto-completion</span>
                    </li>
                  </ul>
                  <Button asChild className="btn-primary">
                    <Link to="/products/tradeveda-patram-ai">Learn More About Patram.AI</Link>
                  </Button>
                </div>
                <div className="bg-muted rounded-lg p-6">
                  <h4 className="font-semibold text-lg mb-2 text-adaptive">Ideal For:</h4>
                  <p className="text-adaptive-muted mb-4">
                    Documentation specialists, export professionals, and trade operations teams that need
                    to significantly reduce the time and errors involved in document preparation.
                  </p>
                  <h4 className="font-semibold text-lg mb-2 text-adaptive">How It Works:</h4>
                  <p className="text-adaptive-muted">
                    Patram.AI uses advanced natural language processing and document understanding to
                    automatically generate compliant trade documents, extract data from existing paperwork,
                    and validate information against regulatory requirements.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="tradeguard" className="mt-6 border rounded-lg p-6 bg-card">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-adaptive mb-4">TradeGuard.AI</h3>
                  <p className="text-adaptive-muted mb-4">
                    A compliance monitoring and risk assessment copilot that continuously analyzes
                    trade documentation for potential regulatory violations and compliance issues.
                  </p>
                  <h4 className="font-semibold text-lg mb-2 text-adaptive">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <div className="bg-primary/20 p-1 rounded-full mt-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-adaptive">Real-time compliance monitoring across multiple jurisdictions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-primary/20 p-1 rounded-full mt-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-adaptive">Proactive risk assessment for potential compliance issues</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-primary/20 p-1 rounded-full mt-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-adaptive">Automated regulatory updates and compliance checks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-primary/20 p-1 rounded-full mt-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-adaptive">Compliance audit trails and documentation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-primary/20 p-1 rounded-full mt-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-adaptive">Smart alerts for potential compliance violations</span>
                    </li>
                  </ul>
                  <Button asChild className="btn-primary">
                    <Link to="/products/tradeveda-tradeguard-ai">Learn More About TradeGuard.AI</Link>
                  </Button>
                </div>
                <div className="bg-muted rounded-lg p-6">
                  <h4 className="font-semibold text-lg mb-2 text-adaptive">Ideal For:</h4>
                  <p className="text-adaptive-muted mb-4">
                    Compliance officers, risk management teams, and trade operations managers concerned
                    with maintaining regulatory compliance and avoiding costly violations.
                  </p>
                  <h4 className="font-semibold text-lg mb-2 text-adaptive">How It Works:</h4>
                  <p className="text-adaptive-muted">
                    TradeGuard.AI maintains a continuously updated knowledge base of international trade
                    regulations, analyzing all documentation in real-time to identify potential compliance
                    issues before they lead to violations or penalties.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo-video" ref={demoVideoRef} className="py-16 bg-muted scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-adaptive mb-4">See TradeVeda in Action</h2>
            <p className="text-lg text-adaptive-muted max-w-2xl mx-auto">
              Watch our comprehensive platform demonstration to see how our AI copilots transform
              trade documentation and compliance workflows
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-card rounded-lg shadow-lg border border-border mb-8 overflow-hidden">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/OBuNapaXt2I" 
                title="TradeVeda Platform Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow border border-border">
              <h3 className="font-semibold text-lg mb-4 text-adaptive">In This Demo You Will Learn:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-1 rounded-full mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-adaptive-muted">How to automate document generation with Patram.AI</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-1 rounded-full mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-adaptive-muted">Real-time compliance monitoring with TradeGuard.AI</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-1 rounded-full mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-adaptive-muted">Workflow orchestration in the TradeVeda platform</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-1 rounded-full mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-adaptive-muted">Integration capabilities with existing systems</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Sections */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-adaptive mb-4">Key Platform Capabilities</h2>
            <p className="text-lg text-adaptive-muted max-w-2xl mx-auto">
              TradeVeda offers comprehensive capabilities designed specifically for trade professionals
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16">
            {/* User Data Privacy */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-adaptive">User Data Privacy</h3>
                </div>
                <p className="text-adaptive-muted mb-6">
                  We prioritize the security and privacy of your sensitive trade data with enterprise-grade
                  protection measures and transparent privacy practices.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-1 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-adaptive">End-to-End Encryption</p>
                      <p className="text-adaptive-muted">All data is encrypted both in transit and at rest using industry-standard protocols</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-1 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-adaptive">Granular Access Controls</p>
                      <p className="text-adaptive-muted">Role-based permissions ensure users only access data they're authorized to view</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-1 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-adaptive">Secure Data Storage</p>
                      <p className="text-adaptive-muted">Data stored in compliant cloud environments with regular security audits</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-lg p-8 border border-border">
                <h4 className="font-semibold mb-4 text-adaptive">Our Commitment to Your Data</h4>
                <p className="text-adaptive-muted mb-4">
                  TradeVeda never uses your trade documentation data to train our AI models without explicit
                  permission. Your confidential trade information remains yours alone, with comprehensive
                  audit logs tracking all data access and usage.
                </p>
                <Button variant="outline" className="btn-secondary" asChild>
                  <Link to="/company#privacy">View Our Privacy Policy</Link>
                </Button>
              </div>
            </div>

            {/* Compliance Measures */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <FileCode className="h-8 w-8 text-primary" />
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-adaptive">Compliance Measures</h3>
                </div>
                <p className="text-adaptive-muted mb-6">
                  Our platform is built with compliance at its core, ensuring your trade operations
                  adhere to complex international regulations and standards.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-1 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-adaptive">Trade Law Adherence</p>
                      <p className="text-adaptive-muted">Continuously updated regulatory database spanning global trade requirements</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-1 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-adaptive">Export Control Compliance</p>
                      <p className="text-adaptive-muted">Automated screening against restricted party lists and export controls</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-1 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-adaptive">Comprehensive Audit Trails</p>
                      <p className="text-adaptive-muted">Complete documentation of all compliance checks and validations</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-lg p-8 shadow border border-border lg:order-1">
                <h4 className="font-semibold mb-4 text-adaptive">Proactive Compliance Management</h4>
                <p className="text-adaptive-muted mb-4">
                  TradeVeda doesn't just check for compliance issues after they occur—our AI copilots
                  proactively identify potential compliance risks before documents are finalized, helping
                  you prevent violations rather than just detect them.
                </p>
                <Button variant="outline" className="btn-secondary" asChild>
                  <Link to="/use-cases#export-compliance">View Compliance Case Study</Link>
                </Button>
              </div>
            </div>

            {/* Accuracy & Learning */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Repeat className="h-8 w-8 text-primary" />
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-adaptive">Accuracy & Learning</h3>
                </div>
                <p className="text-adaptive-muted mb-6">
                  Our AI copilots continuously improve through sophisticated machine learning models
                  and feedback mechanisms to deliver increasingly accurate results.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-1 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-adaptive">AI Training & Refinement</p>
                      <p className="text-adaptive-muted">Models trained on vast repositories of trade documentation and regulations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-1 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-adaptive">Feedback Loop Integration</p>
                      <p className="text-adaptive-muted">User feedback directly improves AI performance for your specific needs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-1 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-adaptive">Manual Error Reduction</p>
                      <p className="text-adaptive-muted">Intelligent validation eliminates common documentation mistakes</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-lg p-8 shadow border border-border">
                <h4 className="font-semibold mb-4 text-adaptive">Continuous Improvement</h4>
                <p className="text-adaptive-muted mb-4">
                  Our platform becomes more valuable over time as it learns from your specific documentation patterns and requirements. The more you use TradeVeda, the more tailored and accurate its outputs become for your organization.
                </p>
                <Button variant="outline" className="btn-secondary" asChild>
                  <a href="#">Schedule Accuracy Demonstration</a>
                </Button>
              </div>
            </div>

            {/* Integration */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="h-8 w-8 text-primary" />
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-adaptive">ERP Integration</h3>
                </div>
                <p className="text-adaptive-muted mb-6">
                  TradeVeda seamlessly connects with your existing ERP systems, enabling smooth data
                  flow and eliminating duplicate data entry requirements.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-1 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-adaptive">Secure API Connections</p>
                      <p className="text-adaptive-muted">Standard and custom API integrations with major ERP platforms</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-1 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-adaptive">Bidirectional Data Flow</p>
                      <p className="text-adaptive-muted">Synchronize information between TradeVeda and your ERP systems</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-1 rounded-full mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-adaptive">Implementation Support</p>
                      <p className="text-adaptive-muted">Expert assistance for smooth integration with your existing systems</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-lg p-8 shadow border border-border">
                <h4 className="font-semibold mb-4 text-adaptive">Supported ERP Systems</h4>
                <p className="text-adaptive-muted mb-4">
                  TradeVeda offers pre-built integrations with leading ERP systems including:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                  <div className="bg-muted rounded-lg p-3 flex items-center justify-center">
                    <p className="font-bold text-adaptive">SAP</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3 flex items-center justify-center">
                    <p className="font-bold text-adaptive">Oracle</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3 flex items-center justify-center">
                    <p className="font-bold text-adaptive">Microsoft</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3 flex items-center justify-center">
                    <p className="font-bold text-adaptive">Sage</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3 flex items-center justify-center">
                    <p className="font-bold text-adaptive">NetSuite</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3 flex items-center justify-center">
                    <p className="font-bold text-adaptive">Infor</p>
                  </div>
                </div>
                <Button variant="outline" className="btn-secondary" asChild>
                  <Link to="/contact">Discuss Your Integration Needs</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-adaptive mb-4">Trusted by Trade Professionals</h2>
            <p className="text-lg text-adaptive-muted max-w-2xl mx-auto">
              Hear from customs house agents, exporters, and compliance officers about their experience with TradeVeda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-adaptive">Transformative Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="text-adaptive-muted mb-4 italic">
                  "TradeVeda's AI copilots have transformed how we manage export documentation. What used to take hours now takes minutes, with significantly fewer errors."
                </blockquote>
                <div>
                  <p className="font-medium text-adaptive">Sarah Johnson</p>
                  <p className="text-sm text-adaptive-muted">Export Compliance Manager, Global Trade Solutions</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-adaptive">Compliance Confidence</CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="text-adaptive-muted mb-4 italic">
                  "With TradeGuard.AI constantly monitoring our documentation for compliance issues, we've eliminated penalties and have complete confidence in our trade operations."
                </blockquote>
                <div>
                  <p className="font-medium text-adaptive">David Chen</p>
                  <p className="text-sm text-adaptive-muted">Director of Customs Operations, Pacific Shipping</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-adaptive">Efficiency Breakthrough</CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="text-adaptive-muted mb-4 italic">
                  "As a customs house agent, Patram.AI has revolutionized our workflow. The accuracy and speed of document preparation has allowed us to handle more clients with less staff."
                </blockquote>
                <div>
                  <p className="font-medium text-adaptive">Maria Rodriguez</p>
                  <p className="text-sm text-adaptive-muted">Owner, Elite Customs Services</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <img 
                src="/lovable-uploads/ff9e5cb3-b82b-43ea-9259-c3017ffbedee-Photoroom.png" 
                alt="Liquidmind Logo" 
                className="h-16 w-auto"
              />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-adaptive mb-6">
              Ready to Transform Your Trade Documentation Process?
            </h2>
            <p className="text-lg mb-8 text-adaptive-muted">
              Schedule a personalized demonstration to see how TradeVeda's AI copilots can streamline your 
              trade documentation and compliance workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary" asChild>
                <Link to="/contact">Schedule Demo</Link>
              </Button>
              <Button variant="outline" size="lg" className="btn-secondary" asChild>
                <Link to="/use-cases">Explore Use Cases</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductTradeVeda;
