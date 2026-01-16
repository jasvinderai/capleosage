import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Rocket, Palette, Check, Clock, DollarSign } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Database,
      title: "Data Engineering & Analytics",
      description: "Transform raw data into strategic insights with robust data pipelines, governance frameworks, and advanced analytics solutions.",
      category: "Data & Analytics",
      duration: "4-16 weeks",
      pricing: "Engagements scoped based on complexity and goals",
      features: [
        "Data maturity & readiness assessment (1–2 week audit)",
        "Data strategy & roadmap (3–6 weeks)",
        "Analytics & BI delivery (Power BI, Tableau, Looker) + dashboard design",
        "ETL/ELT pipeline implementation",
        "Data governance program",
        "Real-time data processing solutions"
      ],
      deliverables: [
        "Comprehensive data strategy document",
        "Interactive dashboards and reports",
        "Automated data pipelines",
        "Data governance framework",
        "Training and documentation"
      ]
    },
    {
      icon: Rocket,
      title: "Digital Transformation Advisory",
      description: "Navigate complex digital initiatives with strategic roadmaps, technology selection, and change management expertise.",
      category: "Digital Strategy",
      duration: "6-20 weeks",
      pricing: "Let’s define the problem first, then the price",
      features: [
        "Digital maturity assessment & DX roadmap",
        "Business case & ROI modeling for DX projects",
        "ERP/CRM vendor selection and implementation advisory",
        "Digital operating model & PMO as a service",
        "Change management & adoption programs",
        "AI & Automation Readiness"
      ],
      deliverables: [
        "Digital transformation roadmap",
        "Technology selection recommendations",
        "Change management plan",
        "Implementation timeline",
        "ROI projections and KPIs"
      ]
    },
    {
      icon: Palette,
      title: "Design Enhancement",
      description: "Elevate your brand presence and user experience through strategic design thinking and comprehensive brand enhancement.",
      category: "Design & Brand",
      duration: "3-12 weeks",
      pricing: "Start with a conversation—pricing follows clarity",
      features: [
        "Digital Presence Audit",
        "Brand Identity Refresh",
        "Service design & journey mapping",
        "Designing printed and marketing materials",
        "Brand evaluation",
        "Social media post design",
        "Brand guidelines"
      ],
      deliverables: [
        "Brand identity system",
        "Digital presence strategy",
        "Marketing material designs",
        "Brand guidelines document",
        "User journey maps"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services | CAPLEO Sage Solutions | Data Engineering, Digital Transformation & Design</title>
        <meta name="description" content="Comprehensive consulting services in Data Engineering & Analytics, Digital Transformation Advisory, and Design Transformation. Calgary's premier consulting firm." />
      </Helmet>
      
      <div className="py-20" data-testid="services-page">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-primary" data-testid="services-page-title">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="services-page-subtitle">
              Comprehensive consulting solutions designed to transform your business through data-driven insights, digital innovation, and strategic design.
            </p>
          </div>
          
          <div className="space-y-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="overflow-hidden" data-testid={`service-detail-${index}`}>
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-3 gap-0">
                      <div className="lg:col-span-2 p-8">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="p-3 bg-secondary/10 rounded-lg">
                            <IconComponent className="h-8 w-8 text-secondary" />
                          </div>
                          <div>
                            <Badge variant="secondary" className="mb-2">{service.category}</Badge>
                            <h2 className="text-3xl font-bold text-primary">{service.title}</h2>
                          </div>
                        </div>
                        
                        <p className="text-lg text-muted-foreground mb-8">
                          {service.description}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-xl font-semibold mb-4 text-foreground">Service Features</h3>
                            <ul className="space-y-3">
                              {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start space-x-3">
                                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-semibold mb-4 text-foreground">Key Deliverables</h3>
                            <ul className="space-y-3">
                              {service.deliverables.map((deliverable, deliverableIndex) => (
                                <li key={deliverableIndex} className="flex items-start space-x-3">
                                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{deliverable}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-semibold mb-6 text-foreground">Service Details</h3>
                          
                          <div className="space-y-4 mb-8">
                            <div className="flex items-center space-x-3">
                              <Clock className="h-5 w-5 text-secondary" />
                              <div>
                                <div className="font-medium text-foreground">Duration</div>
                                <div className="text-sm text-muted-foreground">{service.duration}</div>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                              <DollarSign className="h-5 w-5 text-accent" />
                              <div>
                                <div className="font-medium text-foreground">Investment</div>
                                <div className="text-sm text-muted-foreground">{service.pricing}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <a 
                            href="/contact" 
                            className="block w-full bg-primary text-primary-foreground py-3 rounded-lg text-center font-medium hover:bg-primary/90 transition-colors"
                            data-testid={`service-contact-${index}`}
                          >
                            Get Started
                          </a>
                          <a 
                            href="/contact" 
                            className="block w-full border border-border text-foreground py-3 rounded-lg text-center font-medium hover:bg-muted transition-colors"
                            data-testid={`service-consultation-${index}`}
                          >
                            Free Consultation
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
