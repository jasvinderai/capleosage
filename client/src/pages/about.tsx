import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Jasvinder Sethi",
      position: "Chief Data & Analytics Officer",
      experience: "10+ years in data engineering",
      bio: "Former senior data architect at major Calgary energy companies. Specialized in building scalable data platforms that drive business insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Geetika Kour",
      position: "Co-Founder & CTO",
      experience: "7+ years in digital transformation",
      bio: "Digital transformation specialist with extensive experience in ERP implementations and change management across various industries.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Seerath Sethi",
      position: "Chief Design Officer",
      experience: "5+ years in design strategy",
      bio: "Award-winning design strategist with expertise in brand transformation and user experience optimization for enterprise clients.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    }
  ];

  const values = [
    {
      title: "Calgary-First Approach",
      description: "We understand the unique challenges and opportunities of the Western Canadian business environment."
    },
    {
      title: "Measurable Results",
      description: "Every engagement is designed to deliver quantifiable business value with clear ROI metrics."
    },
    {
      title: "Collaborative Partnership",
      description: "We work alongside your team as true partners, transferring knowledge and building internal capabilities."
    },
    {
      title: "Technical Excellence",
      description: "Our solutions are built on proven technologies and industry best practices."
    }
  ];

  const stats = [
    { number: "15+", label: "Projects Completed", description: "Across various industries" },
    { number: "10+", label: "Years Combined Experience ", description: "Across consulting, data, and design strategy " },
    { number: "3+", label: "Key Service Areas ", description: "Data Engineering | Digital Transformation | Design Strategy " },
    { number: "100%", label: "Commitment to Results  ", description: "Focused on measurable business impact" }
  ];


  return (
    <>
      <Helmet>
        <title>About CAPLEO Sage Solutions | Calgary Consulting Firm</title>
        <meta name="description" content="Learn about CAPLEO Sage Solutions, Calgary's premier consulting firm specializing in data engineering, digital transformation, and design enhancement." />
      </Helmet>
      
      <div data-testid="about-page">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="about-hero-title">
                Transforming Calgary Businesses Through Innovation
              </h1>
              <p className="text-xl text-gray-100 mb-8" data-testid="about-hero-subtitle">
                CAPLEO Sage Solutions combines deep technical expertise with strategic business acumen to deliver transformational outcomes for Calgary businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-primary" data-testid="company-story-title">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Founded in Calgary, CAPLEO Sage Solutions was born from a vision: to transform cutting-edge technology into practical, results-driven solutions for businesses.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Leveraging our founders’ extensive experience in the energy, finance, and technology sectors, we saw a common challenge—many Calgary businesses struggled to unlock the full potential of their data and digital assets.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our mission is simple: deliver world-class consulting services that combine deep industry knowledge with a practical understanding of local market dynamics.

Today, CAPLEO Sage Solutions is proud to be a trusted partner for digital transformation, helping businesses across Western Canada drive measurable results through strategic technology adoption.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Calgary business district skyline" 
                  className="rounded-xl shadow-lg w-full h-auto"
                  data-testid="company-story-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-primary" data-testid="values-title">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These core principles guide every client engagement and internal decision we make.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4" data-testid={`value-${index}`}>
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-primary" data-testid="team-title">Meet Our Founders</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experienced leaders with deep Calgary market knowledge and proven track records.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden" data-testid={`team-member-${index}`}>
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0">
                      <img 
                        src={member.image}
                        alt={`${member.name} - ${member.position}`}
                        className="w-full h-64 md:h-full object-cover"
                        data-testid={`team-member-image-${index}`}
                      />
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
                        <p className="text-secondary font-medium mb-2">{member.position}</p>
                        <p className="text-sm text-muted-foreground mb-4">{member.experience}</p>
                        <p className="text-muted-foreground">{member.bio}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4" data-testid="stats-title">Our Impact</h2>
              <p className="text-xl text-gray-100">
                Numbers that reflect our commitment to Calgary business success.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-4 gap-8" data-testid="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="text-center" data-testid={`stat-${index}`}>
                  <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                  <div className="text-xl font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-100">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
