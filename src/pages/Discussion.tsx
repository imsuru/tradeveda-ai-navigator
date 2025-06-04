import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ChevronDown, ChevronUp, MessageSquare, Plus } from "lucide-react";
import Layout from "@/components/Layout";

interface Comment {
  id: number;
  author: string;
  authorAvatar: string;
  content: string;
  date: string;
  likes: number;
}

interface Discussion {
  id: number;
  title: string;
  author: string;
  authorAvatar: string;
  content: string;
  date: string;
  likes: number;
  comments: Comment[];
  isExpanded: boolean;
}

const Discussion = () => {
  const { toast } = useToast();
  const [newComment, setNewComment] = useState("");
  
  // Sample discussions data
  const [discussions, setDiscussions] = useState<Discussion[]>([
    {
      id: 1,
      title: "Best practices for handling export documentation in multiple countries?",
      author: "Sarah Johnson",
      authorAvatar: "SJ",
      content: "We're expanding our export operations to several new countries and I'm looking for advice on efficiently managing the different documentation requirements. Has anyone implemented a system that works well across different regulatory environments?",
      date: "May 5, 2023",
      likes: 24,
      isExpanded: false,
      comments: [
        {
          id: 1,
          author: "David Chen",
          authorAvatar: "DC",
          content: "We've had great success using TradeVeda's platform for this exact purpose. The country-specific templates and automated compliance checks have saved us countless hours and prevented several potential violations.",
          date: "May 6, 2023",
          likes: 12
        },
        {
          id: 2,
          author: "Maria Rodriguez",
          authorAvatar: "MR",
          content: "I recommend starting with a thorough documentation audit for each country you're expanding into. Identify the common elements across all forms, then build a centralized database of your product information that can feed into country-specific document templates.",
          date: "May 6, 2023",
          likes: 8
        }
      ]
    },
    {
      id: 2,
      title: "Has anyone integrated AI documentation tools with SAP?",
      author: "James Wilson",
      authorAvatar: "JW",
      content: "We're looking to streamline our documentation process by connecting our SAP ERP system with an AI-powered documentation solution. Has anyone successfully implemented this kind of integration, particularly with TradeVeda or similar platforms?",
      date: "April 28, 2023",
      likes: 18,
      isExpanded: false,
      comments: [
        {
          id: 3,
          author: "Raj Patel",
          authorAvatar: "RP",
          content: "We completed an integration between SAP and TradeVeda last quarter. The API connection was straightforward, but I recommend working with their implementation team to ensure the data mapping is correct for your specific SAP configuration.",
          date: "April 29, 2023",
          likes: 15
        }
      ]
    },
    {
      id: 3,
      title: "Strategies for reducing customs clearance delays?",
      author: "Lisa Thompson",
      authorAvatar: "LT",
      content: "We're consistently facing 2-3 day delays in customs clearance, primarily due to documentation issues. I'm interested in hearing what strategies others have implemented to streamline this process and reduce delays.",
      date: "April 15, 2023",
      likes: 32,
      isExpanded: false,
      comments: [
        {
          id: 4,
          author: "Michael Brown",
          authorAvatar: "MB",
          content: "We reduced our customs delays by over 75% by implementing pre-clearance document verification using TradeGuard.AI. The system flags potential issues before documents are submitted, giving us time to correct them.",
          date: "April 16, 2023",
          likes: 21
        },
        {
          id: 5,
          author: "Jennifer Lee",
          authorAvatar: "JL",
          content: "Working directly with a customs broker who has expertise in your specific industry and product types can make a huge difference. They can often anticipate requirements that general guidelines might miss.",
          date: "April 17, 2023",
          likes: 14
        },
        {
          id: 6,
          author: "Carlos Vega",
          authorAvatar: "CV",
          content: "We've had success by creating country-specific documentation checklists and having a dedicated review process before submission. Simple but effective for catching those small errors that cause big delays.",
          date: "April 18, 2023",
          likes: 11
        }
      ]
    }
  ]);

  const toggleDiscussion = (id: number) => {
    setDiscussions(discussions.map(discussion => 
      discussion.id === id 
        ? { ...discussion, isExpanded: !discussion.isExpanded } 
        : discussion
    ));
  };

  const handleAddComment = (discussionId: number) => {
    if (!newComment.trim()) {
      toast({
        title: "Comment cannot be empty",
        variant: "destructive",
      });
      return;
    }

    setDiscussions(discussions.map(discussion => 
      discussion.id === discussionId 
        ? { 
            ...discussion, 
            comments: [
              ...discussion.comments,
              {
                id: Math.max(...discussion.comments.map(c => c.id)) + 1,
                author: "You",
                authorAvatar: "YO",
                content: newComment,
                date: "Just now",
                likes: 0
              }
            ]
          } 
        : discussion
    ));

    setNewComment("");
    toast({
      title: "Comment added",
      description: "Your comment has been added to the discussion.",
    });
  };

  const startNewDiscussion = () => {
    // In a real app, this would open a new discussion form or modal
    toast({
      title: "Create new discussion",
      description: "This would open a new discussion creation form in a real application.",
    });
  };

  return (
    <Layout>
      <section className="py-16 bg-background dark:bg-brand-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="heading-lg mb-2 text-foreground dark:text-white">Community Discussions</h1>
              <p className="text-muted-foreground dark:text-gray-300">
                Connect with other trade professionals to share knowledge and solve challenges
              </p>
            </div>
            <Button onClick={startNewDiscussion} className="hidden md:flex bg-primary hover:bg-primary/80 text-primary-foreground">
              <Plus className="mr-2 h-4 w-4" /> Start New Discussion
            </Button>
          </div>

          {/* Mobile New Discussion Button */}
          <div className="md:hidden mb-6">
            <Button onClick={startNewDiscussion} className="w-full bg-primary hover:bg-primary/80 text-primary-foreground">
              <Plus className="mr-2 h-4 w-4" /> Start New Discussion
            </Button>
          </div>

          <div className="space-y-6">
            {discussions.map((discussion) => (
              <Card key={discussion.id} className="overflow-hidden bg-card hover:bg-card/80 dark:bg-brand-charcoal border-border dark:border-brand-blue/20 text-foreground dark:text-white transition-all duration-200 hover:shadow-lg">
                <CardHeader className="cursor-pointer" onClick={() => toggleDiscussion(discussion.id)}>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">{discussion.title}</CardTitle>
                    {discussion.isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground dark:text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground dark:text-gray-400" />
                    )}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground dark:text-gray-400 mt-2">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarFallback>{discussion.authorAvatar}</AvatarFallback>
                    </Avatar>
                    <span>{discussion.author}</span>
                    <span className="mx-2">•</span>
                    <span>{discussion.date}</span>
                    <span className="mx-2">•</span>
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>{discussion.comments.length}</span>
                  </div>
                </CardHeader>
                
                {discussion.isExpanded && (
                  <>
                    <CardContent>
                      <div className="mb-6">
                        <p className="text-muted-foreground dark:text-gray-300">{discussion.content}</p>
                      </div>
                      
                      <div className="mt-8">
                        <h3 className="font-semibold text-lg mb-4 text-foreground dark:text-white">Comments</h3>
                        <div className="space-y-6">
                          {discussion.comments.map((comment) => (
                            <div key={comment.id} className="border-b border-border dark:border-brand-blue/10 pb-4 last:border-0 last:pb-0">
                              <div className="flex items-center mb-2">
                                <Avatar className="h-8 w-8 mr-2">
                                  <AvatarFallback>{comment.authorAvatar}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium text-foreground dark:text-white">{comment.author}</p>
                                  <p className="text-xs text-muted-foreground dark:text-gray-400">{comment.date}</p>
                                </div>
                              </div>
                              <p className="text-muted-foreground dark:text-gray-300 ml-10">{comment.content}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <div className="flex gap-2">
                          <Input 
                            placeholder="Add a comment..." 
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="bg-background dark:bg-black/30 border-border dark:border-brand-blue/20 text-foreground dark:text-white placeholder:text-muted-foreground dark:placeholder:text-gray-500"
                          />
                          <Button onClick={() => handleAddComment(discussion.id)} className="bg-primary hover:bg-primary/80 text-primary-foreground">Post</Button>
                        </div>
                      </div>
                    </CardContent>
                  </>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Discussion;
