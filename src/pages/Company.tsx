import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Company = () => {
  return (
    <Layout>
      {/* About Us Section */}
      <section className="py-20 bg-background dark:bg-black text-foreground dark:text-white relative min-h-[60vh] flex items-center border-b border-border">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/lovable-uploads/istockphoto-1081869338-1024x1024.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: '50% 30%',
          }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white text-left">About Us</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto backdrop-blur-sm bg-black/10 p-6 rounded-lg text-center">
            Liquidmind AI is redefining trade finance and supply chain management with intelligent AI agents that automate workflows, optimize liquidity, and enhance compliance. Designed for large and mid-sized enterprises, our AI-driven products eliminate inefficiencies, improve decision-making, and scale effortlessly with business growth.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-background dark:bg-black text-foreground dark:text-white relative min-h-[60vh] flex items-center border-b border-border">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/lovable-uploads/tuvsud-vision-mission.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: '50% 30%',
          }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-left">Our Mission</h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto backdrop-blur-sm bg-black/10 p-6 rounded-lg text-center">
            Our mission is to empower enterprises with AI-driven intelligence to optimize global trade, finance, and compliance. We build intelligent AI agents that automate complex workflows, enhance decision-making, and drive efficiency—helping businesses unlock new opportunities, reduce risk, and scale seamlessly in an evolving digital economy.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-adaptive mb-4">Why Enterprises Choose Liquidmind AI?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-adaptive">AI-Powered Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-adaptive-muted">
                  Automate complex trade, finance, and compliance workflows, reducing operational costs and improving accuracy.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-adaptive">Actionable Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-adaptive-muted">
                  Leverage AI-powered insights to optimize liquidity, manage risk, and enhance financial strategies.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-adaptive">Security & Compliance First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-adaptive-muted">
                  Designed to meet stringent financial and regulatory standards, ensuring data integrity, fraud detection, and risk mitigation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-adaptive">Seamless Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-adaptive-muted">
                  Connect effortlessly with ERP systems, banking platforms, and trade networks, ensuring smooth interoperability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Minds Section */}
      <section id="minds-behind-liquidmind-ai" className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-adaptive mb-12">Meet the Minds Behind Liquidmind AI</h2>

          <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto items-center">
              <div className="flex justify-center md:justify-end">
                <img src="/lovable-uploads/43db47_5824786e73dd4b7fad94523d8a791b07mv2 (1).png" alt="Naveen Athresh" className="rounded-lg object-cover" />
              </div>
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-xl font-bold text-adaptive">Naveen Athresh</h3>
                <p className="text-primary">Founder/CEO and Chief Product Officer (March 2024)</p>
                <p className="text-adaptive-muted text-sm leading-relaxed">
                  Naveen runs liquidmind.ai in the mixed reality, digital commerce/Fintech space. A TEDx speaker, Forbes India 2020 top 100 leader (the only leader selected from Rakuten), he has consistently built 200+ member led high performance teams from scratch, led cross geo Product Engineering and Data sciences teams. He has been regularly featured as a thought leader across leading business dailies. Most recently, Naveen was featured on the January 2024 featured section with an elite list of business people globally (mostly USA) on a Global business magazine (Business Today) and USAwire in an article called "Thought leaders making an impact in the world".
                </p>
              </div>

              <div className="flex justify-center md:justify-end md:order-2">
                <img src="/lovable-uploads/This one_edited.png" alt="Meet Bhatt" className="rounded-lg object-cover" />
              </div>
              <div className="space-y-4 text-center md:text-left md:order-1">
                <h3 className="text-xl font-bold text-adaptive">Meet Bhatt</h3>
                <p className="text-primary">Co Founder and Chief Commercial Officer (CCO)</p>
                <p className="text-adaptive-muted text-sm leading-relaxed">
                  Bhatt underwent Executive Education Program on Strategies for Winning in International Markets (SWIM) from IIM Ahmedabad. He holds a Diploma in Internet Laws and Policies from Gujarat National Law University, and B.Tech. in Information Technology from CHARUSAT. He has worked in Corporate, Military, and Legal Risk Consultation domains as a Data Analyst and Product Manager. Bhatt is passionate about the military, data science, product management, internet laws and policies, and psychology. He has a commitment to discipline, strategic thinking, and people-centric leadership, which he has applied to building innovative financial-technology solutions with various teams at Liquidmind AI. Join us on this transformative journey to empower businesses to take control of their financial futures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-adaptive mb-6 text-center">Locate Us</h2>
          <div className="max-w-4xl mx-auto">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.714980734708!2d77.5331581750989!3d12.924168388610175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fb9a6040323%3A0xe844902811614166!2sLiquidmind+Office%2C+Banashankari+III+Stage%2C+Kathriguppe%2C+Bangalore%2C+Karnataka+560085%2C+India!5e0!3m2!1sen!2sin!4v1717167631958!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border border-border"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Us/Locate Us Section (Minimal) */}
      {/* This section is included in the footer via Layout component */}

    </Layout>
  );
};

export default Company;
