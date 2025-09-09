import { Card, CardContent } from "@/components/ui/card";

export default function Framework() {
  const stages = [
    {
      number: 1,
      title: "Discovery & Diagnostic",
      description: "Comprehensive assessment to understand current state, identify opportunities, and define strategic roadmap.",
      activities: [
        "Current state assessment",
        "Stakeholder interviews",
        "Gap analysis & opportunity mapping",
        "Strategic roadmap development"
      ],
      timeline: "1-3 weeks",
      deliverable: "Comprehensive assessment report with actionable recommendations",
      borderColor: "border-secondary"
    },
    {
      number: 2,
      title: "Pilot & Enable",
      description: "Implement proof-of-concept solutions, validate approaches, and build foundational capabilities.",
      activities: [
        "Pilot implementation",
        "Team training & enablement",
        "Process documentation",
        "Performance measurement"
      ],
      timeline: "4-8 weeks",
      deliverable: "Working pilot solution with success metrics and scaling plan",
      borderColor: "border-primary"
    },
    {
      number: 3,
      title: "Scale & Sustain",
      description: "Full-scale implementation with governance frameworks to ensure long-term success and continuous improvement.",
      activities: [
        "Enterprise-wide rollout",
        "Governance establishment",
        "Continuous improvement setup",
        "Success measurement & optimization"
      ],
      timeline: "12-24 weeks",
      deliverable: "Production-ready solution with ongoing support framework",
      borderColor: "border-accent"
    }
  ];

  return (
    <section id="framework" className="py-20" data-testid="framework-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary" data-testid="framework-title">Our Proven 3-Stage Framework</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="framework-subtitle">
            A systematic approach that ensures successful project outcomes through discovery, pilot implementation, and scalable solutions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {stages.map((stage, index) => (
            <Card key={index} className={`bg-card p-8 shadow-lg border-l-4 ${stage.borderColor}`} data-testid={`framework-stage-${index}`}>
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-4 ${
                    index === 0 ? 'bg-secondary text-secondary-foreground' :
                    index === 1 ? 'bg-primary text-primary-foreground' :
                    'bg-accent text-accent-foreground'
                  }`}>
                    {stage.number}
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{stage.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {stage.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Activities:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {stage.activities.map((activity, activityIndex) => (
                        <li key={activityIndex}>• {activity}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Timeline:</h4>
                    <p className="text-sm text-muted-foreground">{stage.timeline}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Deliverable:</h4>
                    <p className="text-sm text-muted-foreground">{stage.deliverable}</p>
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
