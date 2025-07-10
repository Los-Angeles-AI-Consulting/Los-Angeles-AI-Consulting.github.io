import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Clients() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-blue-50 dark:from-background dark:to-gray-900 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              <span className="gradient-text">Our Clients</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Trusted by innovative companies across industries
            </p>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              See how we've helped businesses transform with AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card shadow-lg">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">Close Call Sports</h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    "Los Angeles AI Consulting transformed our data analytics capabilities, helping us predict market trends with unprecedented accuracy. Their expertise in AI implementation allowed us to make data-driven decisions that significantly improved our competitive advantage."
                  </p>
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      CCS
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-card-foreground mb-6">Why Choose Us?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver measurable results with cutting-edge AI solutions
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
                <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                <p className="text-muted-foreground">Client Satisfaction Rate</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="gradient-bg text-white hover:opacity-90">
              <Link href="/contact">Become Our Next Success Story</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
