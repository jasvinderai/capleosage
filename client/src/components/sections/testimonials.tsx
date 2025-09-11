import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Target, Zap, Award, MapPin } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Proven Expertise",
      description: "Our founders bring 15+ years of experience from major Calgary energy companies, fintech, and award-winning design agencies."
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Results-Focused Approach",
      description: "We don't just deliver projects - we deliver measurable business outcomes that directly impact your bottom line."
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Rapid Implementation",
      description: "Get up and running in 1-2 weeks with our streamlined processes and proven methodologies."
    },
    {
      icon: <MapPin className="h-8 w-8 text-accent" />,
      title: "Local Calgary Knowledge",
      description: "Deep understanding of Alberta's business landscape, regulations, and market dynamics across energy, tech, and retail sectors."
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "End-to-End Solutions",
      description: "From data engineering to digital transformation to design enhancement - we handle the complete journey."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-accent" />,
      title: "Transparent Process",
      description: "Clear communication, regular updates, and no surprises. You'll know exactly what we're doing and why."
    }
  ];

  return (
    <section className="py-20 bg-muted" data-testid="why-choose-us-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary" data-testid="why-choose-us-title">Why Choose CAPLEO Sage Solutions</h2>
          <p className="text-xl text-muted-foreground" data-testid="why-choose-us-subtitle">Your trusted partner for data-driven business transformation</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-card p-8 shadow-lg hover:shadow-xl transition-shadow" data-testid={`reason-${index}`}>
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-accent/10 mr-4">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{reason.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-primary/5 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">Ready to Transform Your Business?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join Calgary businesses who are leveraging data, technology, and design to drive growth. 
              Start with a free 30-minute consultation to discuss your specific challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-md font-medium transition-colors"
                data-testid="cta-consultation"
              >
                Book Free Consultation
              </a>
              <a 
                href="/services" 
                className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-md font-medium transition-colors"
                data-testid="cta-services"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}