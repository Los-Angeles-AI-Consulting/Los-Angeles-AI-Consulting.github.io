import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function HeroSection() {
  return (
    <section className="pt-16 min-h-screen bg-gradient-to-br from-background to-blue-50 dark:from-background dark:to-gray-900 hero-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            <span className="gradient-text">Clarity in a World of Chaos</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            When is the last time you stopped to take a deep breath? We live in unprecedented times, with technology changing and evolving faster than any one person could keep track of. What AI tools are worth investing in, what will be obsolete in another month, and what can you not afford to miss?
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
            At Los Angeles AI Consulting, we combine technical expertise with domain understanding to help you embrace the future with clarity and confidence. Whether you're a small business just starting out or a well established corporation looking to expand, find out how AI can work for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-bg text-white hover:opacity-90">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link href="/services">Learn More</Link>
            </Button>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="mt-20 animate-slide-up">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="AI Technology Consulting" 
            className="rounded-2xl shadow-2xl mx-auto max-w-4xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
