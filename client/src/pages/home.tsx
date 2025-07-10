import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Brain, Microscope } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Value Proposition */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-card-foreground mb-6">Value You Can Measure</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              According to a 2024 study commissioned by Microsoft, for every $1 a company invested in generative AI the average return on investment was $3.7x, with top leaders seeing an average ROI of $10.3. However, 30% of responders lacked in-house AI skills, and another 26% lacked employees with the skills needed to work with AI.
            </p>
            <p className="text-lg text-muted-foreground mt-4 max-w-4xl mx-auto">
              Los Angeles AI Consulting brings your team up to date with the best tools for a fraction of the price of hiring an in-house specialist. With quick turnaround times, you don't have to wonder whether investing in new technology will pay off - you can watch it happen in months, weeks or even days.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-muted/30">
              <CardContent className="text-center p-6">
                <div className="text-4xl font-bold gradient-text mb-2">$3.7x</div>
                <p className="text-muted-foreground">Average ROI on AI Investment</p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30">
              <CardContent className="text-center p-6">
                <div className="text-4xl font-bold gradient-text mb-2">$10.3x</div>
                <p className="text-muted-foreground">Top Leaders' Average ROI</p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30">
              <CardContent className="text-center p-6">
                <div className="text-4xl font-bold gradient-text mb-2">30%</div>
                <p className="text-muted-foreground">Companies Lacking AI Skills</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-16 text-center">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Professional Team Meeting" 
              className="rounded-2xl shadow-xl mx-auto max-w-4xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Analytics Dashboard Showcase */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-card-foreground mb-6">Advanced Analytics Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See performance at a glance or dive into the details with our AI-powered analytics dashboards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Business Analytics Dashboard" 
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80" 
              alt="Data Visualization Dashboard" 
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80" 
              alt="AI Analytics Interface" 
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Insights from the Frontlines of AI</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Follow us on social media to stay ahead of the curve with expert insights into the world of AI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="gradient-bg w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">AI Art Generation</h3>
                <p className="text-muted-foreground">Experimenting with DALL-E and Midjourney</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="gradient-bg w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">Language Models</h3>
                <p className="text-muted-foreground">Custom GPT implementations</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="gradient-bg w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Microscope className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">Research Tools</h3>
                <p className="text-muted-foreground">AI-powered research assistants</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
