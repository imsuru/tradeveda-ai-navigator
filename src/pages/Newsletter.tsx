import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Layout from "@/components/Layout";
import NewsletterSignup from "@/components/NewsletterSignup";
import { ChevronRight } from "lucide-react";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const Newsletter = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  // Sample articles data
  const allArticles: Article[] = [
    {
      id: 1,
      title: "The Future of AI in Trade Documentation",
      excerpt: "How artificial intelligence is transforming the way businesses handle international trade paperwork.",
      date: "May 10, 2023",
      category: "Technology"
    },
    {
      id: 2,
      title: "5 Common Compliance Mistakes in International Trade",
      excerpt: "Learn about the most frequent compliance errors and how to avoid them in your global operations.",
      date: "April 25, 2023",
      category: "Compliance"
    },
    {
      id: 3,
      title: "Case Study: How Company X Reduced Documentation Time by 70%",
      excerpt: "A real-world example of AI implementation in trade documentation management.",
      date: "April 12, 2023",
      category: "Case Study"
    },
    {
      id: 4,
      title: "New Regulations Affecting Global Trade in 2023",
      excerpt: "Stay updated on the latest regulatory changes impacting international trade this year.",
      date: "March 28, 2023",
      category: "Regulations"
    },
    {
      id: 5,
      title: "The Role of Machine Learning in Customs Clearance",
      excerpt: "How advanced algorithms are streamlining the customs process for importers and exporters.",
      date: "March 15, 2023",
      category: "Technology"
    },
    {
      id: 6,
      title: "Building Resilient Supply Chains with Better Documentation",
      excerpt: "Strategies for using improved documentation processes to strengthen your supply chain.",
      date: "February 27, 2023",
      category: "Strategy"
    },
    {
      id: 7,
      title: "Interview: The Changing Role of Customs House Agents",
      excerpt: "Industry experts discuss how technology is transforming the work of CHAs worldwide.",
      date: "February 12, 2023",
      category: "Interview"
    },
    {
      id: 8,
      title: "Best Practices for Export Documentation Compliance",
      excerpt: "Essential guidelines for maintaining compliance in your export documentation.",
      date: "January 30, 2023",
      category: "Compliance"
    },
    {
      id: 9,
      title: "The Impact of Blockchain on Trade Documentation",
      excerpt: "Exploring how distributed ledger technology is creating new possibilities for secure trade documents.",
      date: "January 18, 2023",
      category: "Technology"
    },
    {
      id: 10,
      title: "Trade Documentation Errors: The Hidden Cost to Your Business",
      excerpt: "Calculating the true financial impact of documentation mistakes on your bottom line.",
      date: "January 5, 2023",
      category: "Business"
    },
    {
      id: 11,
      title: "How 3PLs Are Leveraging AI for Better Documentation Management",
      excerpt: "Third-party logistics providers share their experiences implementing AI documentation solutions.",
      date: "December 20, 2022",
      category: "Logistics"
    },
    {
      id: 12,
      title: "2023 Trade Compliance Outlook: What to Expect",
      excerpt: "Predictions and insights for the year ahead in trade compliance and regulation.",
      date: "December 8, 2022",
      category: "Compliance"
    },
  ];

  // Calculate current articles to display
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = allArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(allArticles.length / articlesPerPage);

  const changePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-background dark:bg-brand-dark py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="heading-lg mb-4 text-foreground dark:text-white">TradeVeda Newsletter</h1>
              <p className="text-lg text-muted-foreground dark:text-gray-300 mb-6">
                The latest insights, articles, and resources on trade documentation, 
                compliance, and AI innovation in global trade.
              </p>
            </div>
            
            <div className="lg:col-span-1 bg-card dark:bg-brand-charcoal p-6 rounded-lg shadow-sm border border-border dark:border-brand-blue/20 sticky top-24">
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 md:py-16 bg-muted dark:bg-brand-charcoal">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentArticles.map((article) => (
              <Card key={article.id} className="bg-card hover:bg-card/80 dark:bg-black/60 text-foreground dark:text-white border-border dark:border-brand-blue/20 transition-all duration-200 hover:shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm text-muted-foreground dark:text-gray-400">{article.date}</span>
                    <span className="text-xs bg-primary/20 dark:bg-primary/20 text-primary px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-gray-300 line-clamp-3">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 dark:bg-brand-charcoal dark:hover:bg-brand-charcoal/90 text-primary-foreground dark:text-white shadow-md border-none"
                  >
                    Read Article
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12">
            <Pagination>
              <PaginationContent className="text-foreground dark:text-white">
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious href="#" onClick={(e) => {
                      e.preventDefault();
                      changePage(currentPage - 1);
                    }} 
                    className="text-foreground dark:text-white hover:text-primary dark:hover:text-primary"/>
                  </PaginationItem>
                )}
                
                {Array.from({ length: totalPages }).map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink 
                      href="#" 
                      isActive={currentPage === index + 1}
                      onClick={(e) => {
                        e.preventDefault();
                        changePage(index + 1);
                      }}
                      className={currentPage === index + 1 ? "bg-primary text-primary-foreground" : "text-foreground dark:text-white hover:text-primary dark:hover:text-primary"}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationNext href="#" onClick={(e) => {
                      e.preventDefault();
                      changePage(currentPage + 1);
                    }} 
                    className="text-foreground dark:text-white hover:text-primary dark:hover:text-primary"/>
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>

      {/* Floating Subscribe Button (mobile only) */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <Button size="lg" variant="special" className="rounded-full shadow-lg">
          Subscribe
        </Button>
      </div>
    </Layout>
  );
};

export default Newsletter;
