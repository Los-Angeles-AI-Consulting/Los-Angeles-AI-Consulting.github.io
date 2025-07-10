import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Brain, Microscope, Sparkles, Zap, Cpu } from "lucide-react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Playground() {
  const experiments = [
    {
      icon: Bot,
      title: "AI Art Generation",
      description: "Experimenting with DALL-E and Midjourney to create stunning visual content. We explore the boundaries of AI creativity and how it can be applied to marketing and branding.",
      category: "Generative AI"
    },
    {
      icon: Brain,
      title: "Language Models",
      description: "Custom GPT implementations for specific industry use cases. We've developed specialized models for legal document analysis, medical diagnosis assistance, and creative writing.",
      category: "NLP"
    },
    {
      icon: Microscope,
      title: "Research Tools",
      description: "AI-powered research assistants that can analyze vast amounts of data, summarize findings, and generate insights. These tools have revolutionized how we approach market research.",
      category: "Data Analysis"
    },
    {
      icon: Sparkles,
      title: "Creative AI",
      description: "Exploring the intersection of AI and creativity through music generation, poetry writing, and interactive storytelling applications.",
      category: "Creative Tech"
    },
    {
      icon: Zap,
      title: "Automation Scripts",
      description: "Smart automation tools that learn from patterns and optimize workflows. From email management to social media posting, we're pushing the boundaries of intelligent automation.",
      category: "Automation"
    },
    {
      icon: Cpu,
      title: "Edge AI",
      description: "Experimenting with running AI models on edge devices for real-time processing without cloud dependency. Perfect for IoT applications and privacy-conscious solutions.",
      category: "Edge Computing"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-blue-50 dark:from-background dark:to-gray-900 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              <span className="gradient-text">Playground</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Who says consultants can't have a little fun? Check out some of our personal experiments with generative AI tools and see how they compare.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
              Follow us on social media for more content, and show us your AI creations.
            </p>
          </div>
        </div>
      </section>

      {/* Experiments Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Experiments</h2>
            <p className="text-xl text-muted-foreground">
              Pushing the boundaries of what's possible with AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiments.map((experiment, index) => {
              const Icon = experiment.icon;
              return (
                <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="gradient-bg w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-xs text-primary font-semibold mb-2 uppercase tracking-wide">
                      {experiment.category}
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">{experiment.title}</h3>
                    <p className="text-muted-foreground">{experiment.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-card-foreground mb-6">Interactive Demos</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience our AI tools in action (Coming Soon)
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-muted/30 border-2 border-dashed border-primary/30">
              <CardContent className="p-8 text-center">
                <div className="gradient-bg w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">AI Chatbot Demo</h3>
                <p className="text-muted-foreground mb-4">
                  Try our custom-trained chatbot that can answer questions about AI consulting
                </p>
                <Button variant="outline" disabled>
                  Launch Demo (Coming Soon)
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/30 border-2 border-dashed border-primary/30">
              <CardContent className="p-8 text-center">
                <div className="gradient-bg w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">Content Generator</h3>
                <p className="text-muted-foreground mb-4">
                  See how AI can help generate marketing copy and business content
                </p>
                <Button variant="outline" disabled>
                  Try Generator (Coming Soon)
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Share Your AI Creations</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Follow us on social media for more content, and show us your AI creations. Tag us in your posts!
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-background rounded-lg hover:bg-primary hover:text-white transition-colors shadow-lg"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-background rounded-lg hover:bg-primary hover:text-white transition-colors shadow-lg"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-background rounded-lg hover:bg-primary hover:text-white transition-colors shadow-lg"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
            
            <p className="text-muted-foreground">
              Use hashtag <span className="font-semibold gradient-text">#LAAIConsulting</span> to get featured!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
