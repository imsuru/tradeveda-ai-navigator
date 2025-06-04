import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { MessageSquare, Check, ArrowDown, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProductPatramAI = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleCardClick = (content: string) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <MessageSquare className="h-20 w-20 text-primary mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-adaptive mb-6">Patram.AI</h1>
            <p className="text-xl text-adaptive-muted mb-8">
              The intelligent documentation assistant that automates trade document creation, validation, and management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary" asChild>
                <Link to="/products/tradeveda-patram-ai">See Full Platform</Link>
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
        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-background rounded-lg shadow-lg p-8 max-w-md w-full relative">
              <button onClick={closeModal} className="absolute top-2 right-2 text-adaptive hover:text-adaptive text-2xl">&times;</button>
              <div className="text-adaptive">{modalContent}</div>
            </div>
          </div>
        )}
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-adaptive mb-4">Intelligent Document Assistant</h2>
            <p className="text-lg text-adaptive-muted max-w-2xl mx-auto">
              Patram.AI automates and optimizes the entire document lifecycle for international trade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border text-adaptive p-6 cursor-pointer transition-transform hover:scale-105" onClick={() => handleCardClick('Patram.AI can generate compliant trade documents from minimal inputs using advanced AI that understands international trade requirements. This feature saves time and reduces errors in document creation.') }>
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-adaptive">AI-Powered Creation</h3>
              <p className="text-adaptive-muted text-center">
                Generate compliant trade documents from minimal inputs with our advanced AI that understands 
                international trade requirements.
              </p>
            </Card>
            
            <Card className="bg-card border-border text-adaptive p-6 cursor-pointer transition-transform hover:scale-105" onClick={() => handleCardClick('Patram.AI instantly validates documents against current regulatory requirements, ensuring compliance before submission and reducing the risk of costly errors.') }>
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-adaptive">Real-Time Validation</h3>
              <p className="text-adaptive-muted text-center">
                Instantly validate documents against current regulatory requirements to ensure compliance
                before submission.
              </p>
            </Card>
            
            <Card className="bg-card border-border text-adaptive p-6 cursor-pointer transition-transform hover:scale-105" onClick={() => handleCardClick('Patram.AI extracts critical information from existing documents with high accuracy using advanced OCR and machine learning, streamlining your workflow and reducing manual data entry.') }>
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <ArrowDown className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-adaptive">Smart Extraction</h3>
              <p className="text-adaptive-muted text-center">
                Extract critical information from existing documents with high accuracy using our 
                advanced OCR and machine learning technologies.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Video */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-adaptive mb-4">See Patram.AI in Action</h2>
            <p className="text-lg text-adaptive-muted max-w-2xl mx-auto">
              Watch how Patram.AI streamlines your document creation and management workflow
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-card rounded-lg shadow-lg border border-border mb-8 overflow-hidden">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/OBuNapaXt2I"
                title="Patram.AI Demo Video"
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
              Patram.AI connects with all major ERP systems to ensure smooth data flow
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
              Ready to Transform Your Trade Documentation Process?
            </h2>
            <p className="text-lg mb-8 text-adaptive-muted">
              Schedule a personalized demonstration to see how Patram.AI can streamline your 
              document creation and management workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary" asChild>
                <Link to="/products/tradeveda-patram-ai">Explore Full Platform</Link>
              </Button>
              <Button variant="outline" size="lg" className="btn-secondary" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductPatramAI;
