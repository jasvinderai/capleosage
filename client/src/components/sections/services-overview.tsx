import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Rocket, Palette, Check } from "lucide-react";

export default function ServicesOverview() {
  const services = [
    {
      icon: Database,
      title: "Data Engineering & Analytics",
      description: "Transform raw data into strategic insights with robust data pipelines, governance frameworks, and advanced analytics solutions.",
      features: [
        "Data maturity & readiness assessment",
        "Analytics & BI delivery (Power BI, Tableau, Looker)",
        "ETL/ELT pipeline implementation",
        "Data governance program"
      ],
      ctaText: "Free 30min Consultation",
      ctaClass: "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
    },
    {
      icon: Rocket,
      title: "Digital Transformation Advisory",
      description: "Navigate complex digital initiatives with strategic roadmaps, technology selection, and change management expertise.",
      features: [
        "Digital maturity assessment & DX roadmap",
        "ERP/CRM vendor selection advisory",
        "Change management & adoption programs",
        "AI & Automation readiness"
      ],
      ctaText: "Free 30min Consultation",
      ctaClass: "bg-primary hover:bg-primary/90 text-primary-foreground"
    },
    {
      icon: Palette,
      title: "Design Transformation & Enhancement",
      description: "Elevate your brand presence and user experience through strategic design thinking and comprehensive brand enhancement.",
      features: [
        "Digital presence audit & optimization",
        "Brand identity refresh & guidelines",
        "Service design & journey mapping",
        "Marketing materials design"
      ],
      ctaText: "Free 30min Consultation",
      ctaClass: "bg-accent hover:bg-accent/90 text-accent-foreground"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted" data-testid="services-overview">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary" data-testid="services-title">Our Core Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="services-subtitle">
            Integrated consulting solutions designed to accelerate your digital transformation journey and drive measurable business outcomes.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="service-card bg-card p-8 shadow-lg" data-testid={`service-card-${index}`}>
                <CardContent className="p-0">
                  <div className="text-4xl mb-6">
                    <IconComponent className="h-12 w-12 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/contact">
                    <Button className={`w-full ${service.ctaClass}`} data-testid={`service-cta-${index}`}>
                      {service.ctaText}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
