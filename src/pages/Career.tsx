import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Career = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-background dark:bg-black text-foreground dark:text-white text-center relative min-h-[60vh] flex items-center border-b border-border">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/lovable-uploads/1000_F_189442607_M97GnxD1SLYaO3Rd2B3Iby2bH9DcmrJz.jpg")',
            backgroundSize: 'cover',
          }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Let's make the world better together!</h1>
          <Button size="lg" className="bg-primary text-white font-bold px-8 py-4 text-lg rounded-full shadow-lg hover:scale-105 transition-transform" asChild>
            <Link to="#">EXPLORE VACANCIES</Link>
          </Button>
        </div>
      </section>

      {/* Unity in Diversity */}
      <section className="py-16 bg-muted dark:bg-brand-charcoal text-foreground dark:text-white text-center relative border-b border-border">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unity in Diversity</h2>
          <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-300 mb-4">
            Join our innovative team where diverse backgrounds drive financial revolution. Embrace a collaborative environment uniting varied perspectives. Shape the future of finance with us today!
          </p>
        </div>
      </section>

      {/* Positive Learning Curve */}
      <section className="py-16 bg-background dark:bg-black text-foreground dark:text-white text-center relative border-b border-border">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/lovable-uploads/Learning-Curve-Detailed-Analysis-and-Interpretation.jpg")',
            backgroundSize: 'cover',
          }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Positive Learning Curve</h2>
          <p className="text-lg md:text-xl text-white/90 mb-4">
            Join our team to explore innovative use cases and experiment with proof of concepts in a dynamic learning environment. Empowerment drives us to push boundaries and contribute to groundbreaking solutions in financial operations. Unlock your potential and embark on a journey of continuous growth with us today.
          </p>
        </div>
      </section>

      {/* Create Something Better Section */}
      <section className="py-16 bg-muted dark:bg-brand-charcoal text-foreground dark:text-white text-center relative border-b border-border">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Create something better for the world through innovation</h2>
          <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-300 mb-4">
            Our team dedicated to various initiatives, uplifting underprivileged communities, and advocating for education. Make a tangible impact through our robust programs, driving innovation while fostering positive change. Join us in making a difference today.
          </p>
        </div>
      </section>

      {/* Second CTA */}
      <section className="py-20 bg-background dark:bg-black text-foreground dark:text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <Button size="lg" className="bg-primary text-white font-bold px-8 py-4 text-lg rounded-full shadow-lg hover:scale-105 transition-transform" asChild>
            <Link to="#">EXPLORE VACANCIES</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Career; 