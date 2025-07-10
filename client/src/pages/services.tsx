import { ServicesSection } from "@/components/services-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-blue-50 dark:from-background dark:to-gray-900 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              <span className="gradient-text">Our Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transforming Vision Into AI Powered Reality
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
              If you can imagine it, we can help you build it with the power of AI. Our team works with your unique business needs to translate your goals into value using a combination of scalable architecture, best-in-class tools for your industry and custom software development.
            </p>
            <Button asChild size="lg" className="gradient-bg text-white hover:opacity-90">
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Additional Services Detail */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-card-foreground mb-6">What We Deliver</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you need a RAG, LLM, business intelligence tool, generative AI, predictive analytics, or custom machine learning algorithm we've got you covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">RAG Systems</h3>
                <p className="text-muted-foreground">Retrieval-Augmented Generation for enhanced AI responses</p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Large Language Models</h3>
                <p className="text-muted-foreground">Custom LLM implementations for your specific use case</p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Business Intelligence</h3>
                <p className="text-muted-foreground">AI-powered analytics and reporting tools</p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Generative AI</h3>
                <p className="text-muted-foreground">Content creation and automation solutions</p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Predictive Analytics</h3>
                <p className="text-muted-foreground">Forecast trends and optimize decision-making</p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Custom ML Algorithms</h3>
                <p className="text-muted-foreground">Tailored machine learning solutions for unique challenges</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
