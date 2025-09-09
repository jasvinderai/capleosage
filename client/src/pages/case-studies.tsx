import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, TrendingUp } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Calgary Energy Firm: 40% Efficiency Gain",
      client: "Alberta Energy Corp",
      industry: "Energy",
      service: "Data Engineering",
      challenge: "Manual data processing across multiple systems was causing delays and inaccuracies in operational reporting, hindering decision-making capabilities.",
      solution: "Implemented real-time data pipeline processing 2TB+ daily operations data, enabling predictive maintenance and reducing downtime through automated analytics.",
      results: "40% increase in operational efficiency, 60% reduction in data processing time, $2.3M annual cost savings through predictive maintenance.",
      timeline: "12 weeks",
      roi: "320%",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      featured: true
    },
    {
      title: "FinTech Startup: Scalable Architecture",
      client: "Calgary FinTech Solutions",
      industry: "Financial Technology",
      service: "Digital Transformation",
      challenge: "Rapid growth was straining existing systems, leading to performance issues and inability to scale for projected 10x user growth.",
      solution: "Designed cloud-native architecture supporting 10x user growth, integrated payment systems, and automated compliance reporting with real-time monitoring.",
      results: "1000% user growth capacity, 50% reduction in system downtime, automated compliance reduced manual effort by 80%.",
      timeline: "16 weeks",
      roi: "450%",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      featured: true
    },
    {
      title: "Retail Chain: Brand Revitalization",
      client: "Calgary Retail Group",
      industry: "Retail",
      service: "Design Transformation",
      challenge: "Declining customer engagement and outdated brand presence across 25 locations were impacting sales and market position.",
      solution: "Complete brand refresh including digital presence, in-store experience, and customer journey optimization across all locations with unified brand guidelines.",
      results: "180% increase in lead generation, 45% improvement in customer satisfaction scores, 25% increase in average transaction value.",
      timeline: "20 weeks",
      roi: "280%",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      featured: true
    },
    {
      title: "Manufacturing Automation Initiative",
      client: "Calgary Manufacturing Inc",
      industry: "Manufacturing",
      service: "Digital Transformation",
      challenge: "Legacy systems and manual processes were limiting production capacity and quality control capabilities.",
      solution: "Implemented IoT sensors, automated quality control systems, and real-time production monitoring with predictive maintenance algorithms.",
      results: "30% increase in production capacity, 90% reduction in quality control errors, 25% decrease in maintenance costs.",
      timeline: "14 weeks",
      roi: "240%",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      featured: false
    },
    {
      title: "Healthcare Data Integration",
      client: "Alberta Health Services",
      industry: "Healthcare",
      service: "Data Engineering",
      challenge: "Fragmented patient data across multiple systems was hindering care coordination and clinical decision-making.",
      solution: "Created unified patient data platform with real-time integration, secure data sharing, and advanced analytics for clinical insights.",
      results: "60% improvement in care coordination, 40% reduction in duplicate tests, enhanced patient outcomes through data-driven decisions.",
      timeline: "18 weeks",
      roi: "190%",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      featured: false
    },
    {
      title: "Professional Services Digital Makeover",
      client: "Calgary Law Partners",
      industry: "Professional Services",
      service: "Design Transformation",
      challenge: "Outdated digital presence and client communication processes were affecting firm's competitive position and client acquisition.",
      solution: "Comprehensive digital transformation including website redesign, client portal development, and streamlined service delivery processes.",
      results: "200% increase in online inquiries, 70% improvement in client satisfaction, streamlined operations reduced service delivery time by 35%.",
      timeline: "10 weeks",
      roi: "310%",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      featured: false
    }
  ];

  const featuredCases = caseStudies.filter(cs => cs.featured);
  const otherCases = caseStudies.filter(cs => !cs.featured);

  return (
    <>
      <Helmet>
        <title>Case Studies | CAPLEO Sage Solutions | Success Stories from Calgary</title>
        <meta name="description" content="Discover how CAPLEO Sage Solutions has helped Calgary businesses achieve measurable results through data engineering, digital transformation, and design enhancement." />
      </Helmet>
      
      <div className="py-20" data-testid="case-studies-page">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-primary" data-testid="case-studies-title">Success Stories</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="case-studies-subtitle">
              Real results from Calgary businesses across industries. See how our proven methodologies deliver measurable outcomes.
            </p>
          </div>
          
          {/* Featured Case Studies */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-primary">Featured Case Studies</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredCases.map((caseStudy, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow" data-testid={`featured-case-${index}`}>
                  <img 
                    src={caseStudy.image}
                    alt={`${caseStudy.title} - Case study visualization`}
                    className="w-full h-48 object-cover"
                    data-testid={`case-study-image-${index}`}
                  />
                  
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Badge variant="secondary" className="mr-2">{caseStudy.service}</Badge>
                      <Badge variant="outline">{caseStudy.industry}</Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-primary">{caseStudy.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                      {caseStudy.solution}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          Timeline:
                        </span>
                        <span className="font-medium">{caseStudy.timeline}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground flex items-center">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          ROI:
                        </span>
                        <span className="font-medium text-secondary">{caseStudy.roi}</span>
                      </div>
                    </div>
                    
                    <button className="text-primary font-medium hover:underline text-sm">
                      Learn More →
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Case Studies */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary">Additional Success Stories</h2>
            <div className="space-y-8">
              {otherCases.map((caseStudy, index) => (
                <Card key={index} className="overflow-hidden" data-testid={`other-case-${index}`}>
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-3 gap-0">
                      <img 
                        src={caseStudy.image}
                        alt={`${caseStudy.title} - Case study visualization`}
                        className="w-full h-64 lg:h-full object-cover"
                        data-testid={`case-study-image-${index + featuredCases.length}`}
                      />
                      
                      <div className="lg:col-span-2 p-8">
                        <div className="flex items-center mb-4">
                          <Badge variant="secondary" className="mr-2">{caseStudy.service}</Badge>
                          <Badge variant="outline" className="mr-2">{caseStudy.industry}</Badge>
                          <span className="text-sm text-muted-foreground">{caseStudy.client}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-4 text-primary">{caseStudy.title}</h3>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                            <p className="text-sm text-muted-foreground mb-4">{caseStudy.challenge}</p>
                            
                            <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                            <p className="text-sm text-muted-foreground">{caseStudy.solution}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Results</h4>
                            <p className="text-sm text-muted-foreground mb-4">{caseStudy.results}</p>
                            
                            <div className="flex space-x-6">
                              <div>
                                <div className="font-medium text-foreground">Timeline</div>
                                <div className="text-sm text-muted-foreground">{caseStudy.timeline}</div>
                              </div>
                              <div>
                                <div className="font-medium text-foreground">ROI</div>
                                <div className="text-sm text-secondary font-medium">{caseStudy.roi}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <button className="text-primary font-medium hover:underline">
                          View Full Case Study →
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
