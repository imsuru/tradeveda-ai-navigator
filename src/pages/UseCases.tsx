import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Truck, Landmark } from "lucide-react";

// We'll assume the original UseCases content but update the styling to match the dark theme
const UseCases = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background dark:bg-brand-dark py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-foreground dark:text-white">Trade Documentation Use Cases</h1>
            <p className="text-lg text-muted-foreground dark:text-gray-300 mb-8">
              Discover how our AI-powered solutions are transforming trade documentation across industries
            </p>
          </div>
        </div>
      </section>

      {/* Featured Use Cases - Updated with more vibrant design */}
      <section className="py-16 bg-muted dark:bg-brand-charcoal">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Exporters & Manufacturers Card - Updated */}
            <Card className="bg-card dark:bg-black/60 border-border dark:border-gray-300 text-foreground dark:text-white hover:shadow-lg transition-all duration-300">
              <CardHeader className="pt-8 pb-4">
                <div className="flex justify-center mb-6">
                  <div className="bg-primary/10 dark:bg-brand-blue/10 p-5 rounded-full">
                    <Briefcase className="text-primary dark:text-brand-blue h-12 w-12" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-semibold text-center">Exporters & Manufacturers</CardTitle>
                <CardDescription className="text-muted-foreground dark:text-gray-300 text-center mt-2">
                  Streamlining documentation for global product shipments
                </CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground dark:text-gray-300 px-8 py-4">
                <p className="text-center">
                  Reduce paperwork errors and accelerate customs clearance with AI-powered documentation that ensures compliance with destination country requirements.
                </p>
              </CardContent>
              <CardFooter className="pt-2 pb-8 flex justify-center">
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 dark:bg-brand-blue dark:hover:bg-brand-blue/80 text-primary-foreground dark:text-white font-medium transition-all duration-300 transform hover:scale-[1.02]"
                  asChild
                >
                  <Link to="/contact">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Freight Forwarders Card - Updated */}
            <Card className="bg-card dark:bg-black/60 border-border dark:border-gray-300 text-foreground dark:text-white hover:shadow-lg transition-all duration-300">
              <CardHeader className="pt-8 pb-4">
                <div className="flex justify-center mb-6">
                  <div className="bg-primary/10 dark:bg-brand-blue/10 p-5 rounded-full">
                    <Truck className="text-primary dark:text-brand-blue h-12 w-12" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-semibold text-center">Freight Forwarders</CardTitle>
                <CardDescription className="text-muted-foreground dark:text-gray-300 text-center mt-2">
                  Optimizing documentation workflow for logistics providers
                </CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground dark:text-gray-300 px-8 py-4">
                <p className="text-center">
                  Automate document preparation, verification, and submission across multiple shipments and clients while ensuring regulatory compliance.
                </p>
              </CardContent>
              <CardFooter className="pt-2 pb-8 flex justify-center">
                <Button 
                  variant="default"
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 dark:bg-brand-blue dark:hover:bg-brand-blue/80 text-primary-foreground dark:text-white font-medium transition-all duration-300 transform hover:scale-[1.02]"
                  asChild
                >
                  <Link to="/contact">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Banks & Financial Institutions Card - Updated */}
            <Card className="bg-card dark:bg-black/60 border-border dark:border-gray-300 text-foreground dark:text-white hover:shadow-lg transition-all duration-300">
              <CardHeader className="pt-8 pb-4">
                <div className="flex justify-center mb-6">
                  <div className="bg-primary/10 dark:bg-brand-blue/10 p-5 rounded-full">
                    <Landmark className="text-primary dark:text-brand-blue h-12 w-12" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-semibold text-center">Banks & Financial Institutions</CardTitle>
                <CardDescription className="text-muted-foreground dark:text-gray-300 text-center mt-2">
                  Enhancing trade finance document verification
                </CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground dark:text-gray-300 px-8 py-4">
                <p className="text-center">
                  Reduce processing time and risk with AI-powered verification of trade finance documents, ensuring accuracy and compliance with international standards.
                </p>
              </CardContent>
              <CardFooter className="pt-2 pb-8 flex justify-center">
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 dark:bg-brand-blue dark:hover:bg-brand-blue/80 text-primary-foreground dark:text-white font-medium transition-all duration-300 transform hover:scale-[1.02]"
                  asChild
                >
                  <Link to="/contact">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry-Specific Use Cases */}
      <section className="py-16 bg-background dark:bg-brand-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-lg mb-4 text-foreground dark:text-white">Industry-Specific Solutions</h2>
            <p className="text-lg text-muted-foreground dark:text-gray-300">
              Our AI copilots are tailored to meet the unique documentation requirements of various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card dark:bg-brand-charcoal p-6 rounded-lg border border-border dark:border-gray-300">
              <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-white">Pharmaceutical Exports</h3>
              <ul className="space-y-3 text-muted-foreground dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary dark:text-phytogreen mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automated compliance with pharmaceutical export regulations and drug control measures</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary dark:text-phytogreen mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Temperature-controlled shipping documentation and chain of custody records</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary dark:text-phytogreen mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Integrated product safety and certification documentation</span>
                </li>
              </ul>
            </div>

            <div className="bg-card dark:bg-brand-charcoal p-6 rounded-lg border border-border dark:border-gray-300">
              <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-white">Food & Agricultural Products</h3>
              <ul className="space-y-3 text-muted-foreground dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary dark:text-phytogreen mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Phytosanitary certificate generation and management</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary dark:text-phytogreen mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Food safety compliance documentation across different regulatory regimes</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary dark:text-phytogreen mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Organic certification and sustainability documentation management</span>
                </li>
              </ul>
            </div>

            <div className="bg-card dark:bg-brand-charcoal p-6 rounded-lg border border-border dark:border-gray-300">
              <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-white">Electronics & High-Tech</h3>
              <ul className="space-y-3 text-muted-foreground dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary dark:text-phytogreen mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Technical compliance documentation for electronics exports</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary dark:text-phytogreen mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dual-use technology export control documentation</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary dark:text-phytogreen mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automated certificates of origin and product specification documents</span>
                </li>
              </ul>
            </div>

            <div className="bg-card dark:bg-brand-charcoal p-6 rounded-lg border border-border dark:border-gray-300">
              <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-white">Textile & Apparel</h3>
              <ul className="space-y-3 text-muted-foreground dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary dark:text-phytogreen mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fabric composition and origin documentation</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary dark:text-phytogreen mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Compliance with textile labeling regulations in different markets</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary dark:text-phytogreen mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fair trade and ethical manufacturing certification management</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link to="/contact">Contact Us About Your Industry</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Teaser */}
      <section className="py-16 bg-muted dark:bg-brand-charcoal">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-md mb-4 text-foreground dark:text-white">Success Stories</h2>
            <p className="text-lg text-muted-foreground dark:text-gray-300">
              See how organizations are transforming their trade documentation processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card dark:bg-black/60 border-border dark:border-gray-300 text-foreground dark:text-white hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Global Electronics Manufacturer</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground dark:text-gray-300">
                <p>Reduced documentation processing time by 68% and virtually eliminated customs delays due to paperwork errors.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-border dark:border-gray-300 text-foreground hover:bg-accent dark:text-white dark:hover:bg-gray-200/10">
                  Read Case Study
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-card dark:bg-black/60 border-border dark:border-gray-300 text-foreground dark:text-white hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Multinational Logistics Provider</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground dark:text-gray-300">
                <p>Cut compliance review time by 75% while improving accuracy and reducing risk exposure for sensitive shipments.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-border dark:border-gray-300 text-foreground hover:bg-accent dark:text-white dark:hover:bg-gray-200/10">
                  Read Case Study
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-card dark:bg-black/60 border-border dark:border-gray-300 text-foreground dark:text-white hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Pharmaceutical Exporter</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground dark:text-gray-300">
                <p>Achieved 100% compliance with complex pharmaceutical export regulations across 37 countries.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-border dark:border-gray-300 text-foreground hover:bg-accent dark:text-white dark:hover:bg-gray-200/10">
                  Read Case Study
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UseCases;
