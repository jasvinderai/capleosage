import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      content: "CAPLEO transformed our data architecture and delivered insights that increased our operational efficiency by 35%. Their Calgary team understood our local market needs perfectly.",
      name: "Michael Chen",
      position: "COO",
      company: "Alberta Energy Corp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60"
    },
    {
      content: "The digital transformation roadmap they created saved us 6 months and $2M in implementation costs. Outstanding strategic thinking and execution.",
      name: "Sarah Williams",
      position: "CTO",
      company: "FinTech Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60"
    },
    {
      content: "Their brand transformation work doubled our lead generation within 3 months. The team's design expertise is world-class with local market insight.",
      name: "David Rodriguez",
      position: "VP Marketing",
      company: "Calgary Retail Group",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60"
    }
  ];

  return (
    <section className="py-20 bg-muted" data-testid="testimonials-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary" data-testid="testimonials-title">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground" data-testid="testimonials-subtitle">Proven results across industries in Calgary and beyond</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card p-8 shadow-lg" data-testid={`testimonial-${index}`}>
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={`${testimonial.name} testimonial photo`}
                    className="w-12 h-12 rounded-full mr-4"
                    data-testid={`testimonial-image-${index}`}
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}, {testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
