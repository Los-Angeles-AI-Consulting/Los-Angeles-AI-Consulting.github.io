import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Route, ServerCog, TrendingUp } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: GraduationCap,
      title: "AI Mastery Workshops",
      description: "From prompt writing to creating data pipelines, learn from the experts how to make the most out of your AI powered software."
    },
    {
      icon: Route,
      title: "Strategic Planning",
      description: "Los Angeles AI Consulting surveys your business needs to recommend the best tools for the job. We create a detailed road map for your company's AI powered data strategy. We compare different software solutions for cloud storage, chatbot management, content creation, and any other tools which will boost your revenue within your budget."
    },
    {
      icon: ServerCog,
      title: "Personalized Research and Development",
      description: "Do you have a great idea for your own AI powered app? Do you need proprietary software that keeps your data safe from third party access and complies with industry regulations? With a decade of experience in software development, we have the skills to create dynamic and fully customizable AI products."
    },
    {
      icon: TrendingUp,
      title: "AI Powered Data Analytics",
      description: "We use a variety of powerful AI tools to predict financial trends, marketing strategy, asset health, and more. We create automatically updated dashboards to visualize your data so that you can see performance at a glance or dive into the details."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming Vision Into AI Powered Reality
          </p>
          <p className="text-lg text-muted-foreground mt-4 max-w-4xl mx-auto">
            If you can imagine it, we can help you build it with the power of AI. Our team works with your unique business needs to translate your goals into value using a combination of scalable architecture, best-in-class tools for your industry and custom software development. Whether you need a RAG, LLM, business intelligence tool, generative AI, predictive analytics, or custom machine learning algorithm we've got you covered.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="bg-card shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="gradient-bg w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
