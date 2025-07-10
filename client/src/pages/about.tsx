import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-blue-50 dark:from-background dark:to-gray-900 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              <span className="gradient-text">About Us</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Meet the team behind Los Angeles AI Consulting
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Founder</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                      alt="Heron Ziegel - Founder" 
                      className="w-48 h-48 rounded-full object-cover shadow-xl"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-3xl font-bold text-card-foreground mb-2">Heron Ziegel</h3>
                    <p className="text-xl text-primary mb-6">Founder & CEO</p>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Heron Ziegel has had a diverse career in tech, from working as an AVP data analyst for TD Bank to training AI chatbots. He has a degree in Data Science with a focus in Computational Analytics from Temple University and was featured in the Wall Street Journal at the age of 24.
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                      Heron has developed custom machine learning and data analytics solutions to help a number of organizations improve their business performance. He formerly studied graphic design and advertising at Virginia Commonwealth University and views data science and programming as new creative mediums.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-card-foreground mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bringing clarity to the world of AI and helping businesses harness its power
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Clarity in a World of Chaos</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We live in unprecedented times, with technology changing and evolving faster than any one person could keep track of. What AI tools are worth investing in, what will be obsolete in another month, and what can you not afford to miss?
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Los Angeles AI Consulting, we combine technical expertise with domain understanding to help you embrace the future with clarity and confidence. Whether you're a small business just starting out or a well established corporation looking to expand, we help you find out how AI can work for you.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="AI Technology" 
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              What drives us to deliver exceptional AI solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card">
              <CardContent className="p-6 text-center">
                <div className="gradient-bg w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">Expertise</h3>
                <p className="text-muted-foreground">Deep technical knowledge combined with practical business understanding</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card">
              <CardContent className="p-6 text-center">
                <div className="gradient-bg w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">I</span>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">Innovation</h3>
                <p className="text-muted-foreground">Staying at the forefront of AI technology and creative problem-solving</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card">
              <CardContent className="p-6 text-center">
                <div className="gradient-bg w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">Results</h3>
                <p className="text-muted-foreground">Measurable outcomes that drive real business value and growth</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's discuss how AI can work for your unique business needs
          </p>
          <Button asChild size="lg" className="gradient-bg text-white hover:opacity-90">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
