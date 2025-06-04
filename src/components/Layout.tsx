import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';
import { Mail, Linkedin, Facebook, Instagram, Twitter, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import NewsletterSignup from "./NewsletterSignup";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', city: '' });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add your submit logic here
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      <Dialog>
        <header className="border-b sticky top-0 z-50 w-full bg-background">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <Link to="/" className="flex items-center">
              <div className="relative">
                <img 
                  src={theme === 'dark' 
                    ? "/lovable-uploads/ff9e5cb3-b82b-43ea-9259-c3017ffbedee-Photoroom.png"
                    : "/lovable-uploads/day-mode/liquid-mind-logo-day.png"} 
                  alt="Liquidmind®.ai" 
                  className="h-12 w-auto dark:invert-0"
                />
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center md:gap-3 lg:gap-4">
              <Link to="/" className="text-sm font-medium text-adaptive hover:text-primary transition-colors whitespace-nowrap">
                Home
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="link" className="text-sm font-medium text-adaptive hover:text-primary transition-colors p-0 h-auto flex items-center gap-1 whitespace-nowrap">
                    Products <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px] bg-background border-border">
                  <DropdownMenuItem asChild className="hover:bg-accent focus:bg-accent">
                    <Link to="/products/tradeveda" className="cursor-pointer w-full">Tradeveda</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-accent focus:bg-accent">
                    <Link to="/products/patram-ai" className="cursor-pointer w-full">Patram.AI</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-accent focus:bg-accent">
                    <Link to="/products/tradeguard-ai" className="cursor-pointer w-full">TradeGuard.AI</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="link" className="text-sm font-medium text-adaptive hover:text-primary transition-colors p-0 h-auto flex items-center gap-1 whitespace-nowrap">
                    Company <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px] bg-background border-border">
                  <DropdownMenuItem asChild className="hover:bg-accent focus:bg-accent">
                    <Link to="/company" className="cursor-pointer w-full">About Us</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-accent focus:bg-accent">
                    <Link to="/timeline" className="cursor-pointer w-full">Timeline</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-accent focus:bg-accent">
                    <Link to="/press-and-media" className="cursor-pointer w-full">Press & Media</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-accent focus:bg-accent">
                    <Link to="/giving-back" className="cursor-pointer w-full">Giving Back</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="hover:bg-accent focus:bg-accent">
                      Legal
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="bg-background border-border">
                      <DropdownMenuItem asChild className="hover:bg-accent focus:bg-accent">
                        <Link to="/privacy-policy" className="cursor-pointer w-full">Privacy Policy</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="hover:bg-accent focus:bg-accent">
                        <Link to="/terms-of-service" className="cursor-pointer w-full">Terms of Service</Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link to="/use-cases" className="text-sm font-medium text-adaptive hover:text-primary transition-colors whitespace-nowrap">
                Use Cases
              </Link>
              
              <Link to="/career" className="text-sm font-medium text-adaptive hover:text-primary transition-colors whitespace-nowrap">
                Career
              </Link>
              
              <Link to="/newsletter" className="text-sm font-medium text-adaptive hover:text-primary transition-colors whitespace-nowrap">
                Newsletter
              </Link>
              
              <Link to="/discussion" className="text-sm font-medium text-adaptive hover:text-primary transition-colors whitespace-nowrap">
                Discussion
              </Link>
            </nav>
            
            <div className="flex items-center md:gap-3 lg:gap-4">
              <Link to="/contact" className="hidden md:inline-flex">
                <Button variant="outline" size="sm" className="btn-secondary whitespace-nowrap">
                  Contact Us
                </Button>
              </Link>
              <DialogTrigger asChild>
                <Button size="sm" className="btn-primary whitespace-nowrap">Get Started</Button>
              </DialogTrigger>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="h-9 w-9 rounded-full btn-secondary"
              >
                <Sun className={`h-4 w-4 transition-all ${theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} />
                <Moon className={`absolute h-4 w-4 transition-all ${theme === 'dark' ? '-rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button variant="outline" size="sm" className="md:hidden btn-secondary">
                Menu
              </Button>
            </div>
          </div>
        </header>
        <DialogContent className="bg-brand-charcoal max-w-xl w-full">
          <DialogHeader>
            <DialogTitle className="text-2xl text-brand-blue mb-2">Get Started</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-white mb-1">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="w-full p-2 rounded bg-brand-dark border border-brand-blue/30 text-white placeholder:text-gray-400" placeholder="Name" />
              </div>
              <div className="flex-1">
                <label className="block text-white mb-1">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} className="w-full p-2 rounded bg-brand-dark border border-brand-blue/30 text-white placeholder:text-gray-400" placeholder="Phone" />
              </div>
            </div>
            <div>
              <label className="block text-white mb-1">Business Email</label>
              <input name="email" value={form.email} onChange={handleChange} required className="w-full p-2 rounded bg-brand-dark border border-brand-blue/30 text-white placeholder:text-gray-400" placeholder="Business Email" />
            </div>
            <div>
              <label className="block text-white mb-1">Select your city <span className="text-brand-blue">*</span></label>
              <input name="city" value={form.city} onChange={handleChange} required className="w-full p-2 rounded bg-brand-dark border border-brand-blue/30 text-white placeholder:text-gray-400" placeholder="Type your city name" />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="terms" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="accent-brand-blue w-5 h-5" required />
              <label htmlFor="terms" className="text-white text-sm">I agree to the terms & conditions <a href="#" className="underline text-brand-blue">View terms and conditions</a></label>
            </div>
            <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/80 text-white rounded-full py-3 text-lg font-semibold mt-2">SUBMIT</Button>
          </form>
        </DialogContent>
      </Dialog>
      <main className="flex-1">{children}</main>
      <footer className="border-t bg-background">
        <div className="px-4 md:px-6 lg:px-8 max-w-[1400px] mx-auto py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold mb-4 text-foreground">Contact Us</h4>
              <p className="text-sm text-muted-foreground">
                Banashankari III Stage<br/>
                Kathriguppe<br/>
                Bangalore<br/>
                Karnataka - 560085<br/>
                India
              </p>
              <p className="text-sm text-muted-foreground">
                Email: <a href="mailto:support@liquidmind.ai" className="hover:text-primary transition-colors">support@liquidmind.ai</a>
              </p>
              <div className="flex space-x-3 pt-2">
                <a href="https://www.linkedin.com/company/liquid-mind-product-consulting-inc./posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <span className="text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 14-8 14s-8-8-8-14a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <a href="mailto:support@liquidmind.ai" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/liquidmindaifintech/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/liquidmind.ai/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <span className="text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17A2.5 2.5 0 0 1 5 14.5V15h14v-1.5a2.5 2.5 0 0 1 2.5-2.5H22a0 0 0 0 0 0 0v6a0 0 0 0 0 0 0h-0.5A2.5 2.5 0 0 1 19.5 17Z"/><path d="M19.5 17a2.5 2.5 0 0 1 2.5 2.5V22h-17a2.5 2.5 0 0 1 2.5-2.5H19.5Z"/><path d="M12 15V8"/><path d="M8 17V8"/><path d="M16 17V8"/><path d="M2 15V8"/></svg>
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg flex items-center text-foreground">
                <Link to="/" className="flex items-center">
                  <img 
                    src={theme === 'dark' 
                      ? "/lovable-uploads/ff9e5cb3-b82b-43ea-9259-c3017ffbedee-Photoroom.png"
                      : "/lovable-uploads/day-mode/liquid-mind-logo-day.png"} 
                    alt="Liquidmind®.ai" 
                    className="h-16 w-auto"
                  />
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                Empowering trade professionals with AI-powered copilots for simplified documentation and compliance.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Products</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/products/tradeveda" className="text-muted-foreground hover:text-primary transition-colors">
                    Tradeveda
                  </Link>
                </li>
                <li>
                  <Link to="/products/patram-ai" className="text-muted-foreground hover:text-primary transition-colors">
                    Patram.AI
                  </Link>
                </li>
                <li>
                  <Link to="/products/tradeguard-ai" className="text-muted-foreground hover:text-primary transition-colors">
                    TradeGuard.AI
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/company" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/use-cases" className="text-muted-foreground hover:text-primary transition-colors">
                    Use Cases
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Stay Updated</h4>
              <NewsletterSignup minimal={true} />
            </div>
          </div>
          
          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Liquidmind®.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
