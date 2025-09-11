import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Target, 
  Cog, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle, 
  Clock,
  Users,
  BarChart3,
  Lightbulb
} from "lucide-react";

interface ProcessPhase {
  id: string;
  title: string;
  icon: React.ReactNode;
  duration: string;
  description: string;
  activities: string[];
  deliverables: string[];
  color: string;
  bgColor: string;
}

const processPhases: ProcessPhase[] = [
  {
    id: "discovery",
    title: "Discovery & Assessment",
    icon: <Search className="h-8 w-8" />,
    duration: "1-2 weeks",
    description: "Deep dive into your current state, challenges, and opportunities",
    activities: [
      "Stakeholder interviews and workshops",
      "Current system and process audit",
      "Data landscape assessment",
      "Gap analysis and opportunity identification"
    ],
    deliverables: [
      "Current State Assessment Report",
      "Digital Readiness Scorecard",
      "Opportunity Roadmap"
    ],
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    id: "strategy",
    title: "Strategy & Planning",
    icon: <Target className="h-8 w-8" />,
    duration: "2-3 weeks",
    description: "Develop a tailored transformation strategy aligned with your business goals",
    activities: [
      "Solution architecture design",
      "Technology stack recommendations",
      "Resource and timeline planning",
      "Risk assessment and mitigation"
    ],
    deliverables: [
      "Transformation Strategy Document",
      "Technical Architecture Blueprint",
      "Implementation Roadmap",
      "ROI Projections"
    ],
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    id: "implementation",
    title: "Implementation & Build",
    icon: <Cog className="h-8 w-8" />,
    duration: "4-12 weeks",
    description: "Execute the transformation with agile methodology and continuous feedback",
    activities: [
      "Agile development sprints",
      "System integration and migration",
      "User training and change management",
      "Quality assurance and testing"
    ],
    deliverables: [
      "Live Production Systems",
      "Integration Documentation",
      "User Training Materials",
      "Test Results & QA Reports"
    ],
    color: "text-yellow-600",
    bgColor: "bg-yellow-50"
  },
  {
    id: "optimization",
    title: "Optimization & Growth",
    icon: <TrendingUp className="h-8 w-8" />,
    duration: "Ongoing",
    description: "Monitor, measure, and continuously improve for sustained success",
    activities: [
      "Performance monitoring and analytics",
      "Continuous improvement cycles",
      "Advanced feature development",
      "Strategic consulting and support"
    ],
    deliverables: [
      "Performance Dashboard",
      "Monthly Analytics Reports",
      "Optimization Recommendations",
      "Ongoing Support Plan"
    ],
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  }
];

export default function InteractiveProcess() {
  const [activePhase, setActivePhase] = useState<string>("discovery");
  const [showDetails, setShowDetails] = useState(false);

  const currentPhase = processPhases.find(phase => phase.id === activePhase);

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30" data-testid="interactive-process">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Our Proven Methodology</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic, transparent approach that transforms your business step by step. 
            Click each phase to explore our detailed process.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
            {processPhases.map((phase, index) => (
              <div key={phase.id} className="flex flex-col items-center lg:flex-1">
                <Button
                  variant={activePhase === phase.id ? "default" : "outline"}
                  className={`w-16 h-16 rounded-full p-0 mb-4 transition-all duration-300 ${
                    activePhase === phase.id 
                      ? `bg-primary hover:bg-primary/90 ${phase.color}` 
                      : "hover:bg-muted"
                  }`}
                  onClick={() => {
                    setActivePhase(phase.id);
                    setShowDetails(true);
                  }}
                  data-testid={`phase-${phase.id}`}
                >
                  <div className={activePhase === phase.id ? "text-white" : phase.color}>
                    {phase.icon}
                  </div>
                </Button>
                
                <h3 className={`font-semibold text-center mb-2 ${
                  activePhase === phase.id ? "text-primary" : "text-muted-foreground"
                }`}>
                  {phase.title}
                </h3>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {phase.duration}
                </div>

                {index < processPhases.length - 1 && (
                  <ArrowRight className="hidden lg:block h-6 w-6 text-muted-foreground mt-8 absolute transform translate-x-20" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Phase Details */}
        {currentPhase && (
          <Card className={`shadow-xl transition-all duration-500 ${showDetails ? 'opacity-100 transform translate-y-0' : 'opacity-80'}`}>
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-6">
                    <div className={`p-4 rounded-lg ${currentPhase.bgColor} mr-4`}>
                      <div className={currentPhase.color}>
                        {currentPhase.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{currentPhase.title}</h3>
                      <p className="text-muted-foreground">{currentPhase.duration}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6">
                    {currentPhase.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Users className="h-5 w-5 mr-2 text-accent" />
                      Key Activities
                    </h4>
                    <ul className="space-y-2">
                      {currentPhase.activities.map((activity, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-accent" />
                    Deliverables
                  </h4>
                  <ul className="space-y-3 mb-8">
                    {currentPhase.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{deliverable}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`${currentPhase.bgColor} rounded-lg p-6`}>
                    <h5 className="font-semibold mb-3 flex items-center">
                      <Lightbulb className={`h-5 w-5 mr-2 ${currentPhase.color}`} />
                      Why This Phase Matters
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      {currentPhase.id === "discovery" && "Understanding your current state prevents costly mistakes and ensures we build solutions that actually solve your problems."}
                      {currentPhase.id === "strategy" && "Proper planning reduces implementation time by 40% and ensures alignment between technology and business objectives."}
                      {currentPhase.id === "implementation" && "Agile execution with continuous feedback ensures you see value quickly and can adapt as business needs evolve."}
                      {currentPhase.id === "optimization" && "Ongoing optimization ensures your investment continues to pay dividends and evolves with your growing business."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8 pt-6 border-t">
                <p className="text-muted-foreground mb-4">
                  Ready to start your transformation journey?
                </p>
                <Button asChild className="bg-accent hover:bg-accent/90" data-testid="process-cta">
                  <a href="/contact">Schedule Your Discovery Session</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Process Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="text-center p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <h4 className="font-semibold mb-2">Transparent Process</h4>
            <p className="text-sm text-muted-foreground">
              Know exactly what we're doing, when, and why at every step of your transformation.
            </p>
          </Card>
          
          <Card className="text-center p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <h4 className="font-semibold mb-2">Proven Results</h4>
            <p className="text-sm text-muted-foreground">
              Our methodology has been refined through dozens of successful Calgary business transformations.
            </p>
          </Card>
          
          <Card className="text-center p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <h4 className="font-semibold mb-2">Continuous Value</h4>
            <p className="text-sm text-muted-foreground">
              See measurable improvements from week one, with value building throughout the entire process.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}