import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowRight, TrendingUp, AlertTriangle, Target, RotateCcw } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertAssessmentResultSchema } from "@shared/schema";

interface Question {
  id: string;
  question: string;
  options: Array<{
    value: string;
    label: string;
    score: number;
  }>;
}

interface AssessmentResult {
  score: number;
  level: string;
  recommendations: string[];
  nextSteps: string[];
}

const questions: Question[] = [
  {
    id: "data_usage",
    question: "How does your business currently use data for decision-making?",
    options: [
      { value: "spreadsheets", label: "Mainly spreadsheets and basic reports", score: 1 },
      { value: "some_analytics", label: "Some analytics tools, but limited insights", score: 2 },
      { value: "regular_analysis", label: "Regular data analysis with dedicated tools", score: 3 },
      { value: "advanced", label: "Advanced analytics and predictive modeling", score: 4 }
    ]
  },
  {
    id: "tech_infrastructure",
    question: "How would you describe your current technology infrastructure?",
    options: [
      { value: "outdated", label: "Mostly outdated systems, manual processes", score: 1 },
      { value: "mixed", label: "Mix of old and new systems, some integration issues", score: 2 },
      { value: "modern", label: "Modern systems with good integration", score: 3 },
      { value: "cutting_edge", label: "Cutting-edge, fully integrated tech stack", score: 4 }
    ]
  },
  {
    id: "digital_processes",
    question: "What percentage of your business processes are digitized?",
    options: [
      { value: "under_25", label: "Less than 25%", score: 1 },
      { value: "25_50", label: "25-50%", score: 2 },
      { value: "50_75", label: "50-75%", score: 3 },
      { value: "over_75", label: "More than 75%", score: 4 }
    ]
  },
  {
    id: "team_digital_skills",
    question: "How would you rate your team's digital skills and adaptability?",
    options: [
      { value: "basic", label: "Basic - need significant training", score: 1 },
      { value: "moderate", label: "Moderate - some training needed", score: 2 },
      { value: "good", label: "Good - minimal training needed", score: 3 },
      { value: "excellent", label: "Excellent - highly adaptable", score: 4 }
    ]
  },
  {
    id: "growth_challenges",
    question: "What's your biggest challenge in scaling your business?",
    options: [
      { value: "manual_processes", label: "Too many manual processes", score: 1 },
      { value: "data_insights", label: "Lack of data-driven insights", score: 2 },
      { value: "system_integration", label: "Poor system integration", score: 2 },
      { value: "competitive_edge", label: "Need better competitive advantages", score: 3 }
    ]
  }
];

function calculateResult(answers: Record<string, string>): AssessmentResult {
  const totalScore = Object.entries(answers).reduce((sum, [questionId, answer]) => {
    const question = questions.find(q => q.id === questionId);
    const option = question?.options.find(opt => opt.value === answer);
    return sum + (option?.score || 0);
  }, 0);

  const percentage = (totalScore / (questions.length * 4)) * 100;

  if (percentage >= 80) {
    return {
      score: percentage,
      level: "Digital Leader",
      recommendations: [
        "Focus on advanced analytics and AI implementation",
        "Explore predictive modeling for competitive advantage",
        "Consider innovation partnerships and emerging technologies"
      ],
      nextSteps: [
        "Advanced AI consultation",
        "Innovation strategy session",
        "Competitive analysis review"
      ]
    };
  } else if (percentage >= 60) {
    return {
      score: percentage,
      level: "Digital Progressive",
      recommendations: [
        "Optimize existing systems for better integration",
        "Implement advanced analytics and reporting",
        "Enhance team digital capabilities"
      ],
      nextSteps: [
        "Digital optimization audit",
        "Analytics implementation plan",
        "Team training program"
      ]
    };
  } else if (percentage >= 40) {
    return {
      score: percentage,
      level: "Digital Developing",
      recommendations: [
        "Prioritize core system modernization",
        "Implement basic data analytics",
        "Begin digital process transformation"
      ],
      nextSteps: [
        "Digital transformation roadmap",
        "System assessment and planning",
        "Quick wins identification"
      ]
    };
  } else {
    return {
      score: percentage,
      level: "Digital Starter",
      recommendations: [
        "Start with foundational digital infrastructure",
        "Implement basic data collection and reporting",
        "Focus on essential process digitization"
      ],
      nextSteps: [
        "Digital foundation assessment",
        "Priority process identification",
        "Technology roadmap creation"
      ]
    };
  }
}

export default function BusinessAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactInfo, setContactInfo] = useState({ name: "", email: "", company: "" });
  
  const { toast } = useToast();
  
  const assessmentMutation = useMutation({
    mutationFn: async (assessmentData: any) => {
      const payload = insertAssessmentResultSchema.parse(assessmentData);
      
      const response = await fetch("/api/assessments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to save assessment");
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/assessments"] });
      toast({
        title: "Assessment Saved!",
        description: "Your results have been saved. We'll follow up with personalized recommendations.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Save Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const assessmentResult = calculateResult(newAnswers);
      setResult(assessmentResult);
      setShowResults(true);
      setShowContactForm(true);
    }
  };

  const handleSaveAssessment = () => {
    if (!result) return;
    
    const assessmentData = {
      name: contactInfo.name || null,
      email: contactInfo.email || null,
      company: contactInfo.company || null,
      dataUsage: answers.data_usage,
      techInfrastructure: answers.tech_infrastructure,
      digitalProcesses: answers.digital_processes,
      teamSkills: answers.team_skills,
      growthChallenges: answers.growth_challenges,
      score: Math.round(result.score),
      level: result.level,
    };
    
    assessmentMutation.mutate(assessmentData);
    setShowContactForm(false);
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setResult(null);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-blue-600";
    if (score >= 40) return "text-yellow-600";
    return "text-orange-600";
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <Target className="h-8 w-8 text-green-600" />;
    if (score >= 60) return <TrendingUp className="h-8 w-8 text-blue-600" />;
    if (score >= 40) return <AlertTriangle className="h-8 w-8 text-yellow-600" />;
    return <RotateCcw className="h-8 w-8 text-orange-600" />;
  };

  if (showResults && result) {
    return (
      <div className="max-w-4xl mx-auto p-6" data-testid="assessment-results">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              {getScoreIcon(result.score)}
            </div>
            <CardTitle className="text-3xl mb-2">Your Digital Readiness Score</CardTitle>
            <div className={`text-6xl font-bold ${getScoreColor(result.score)}`}>
              {Math.round(result.score)}%
            </div>
            <p className="text-xl text-muted-foreground">
              Level: <span className="font-semibold text-primary">{result.level}</span>
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                Recommended Focus Areas
              </h3>
              <ul className="space-y-3">
                {result.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Target className="h-5 w-5 text-blue-600 mr-2" />
                Your Next Steps
              </h3>
              <ul className="space-y-3">
                {result.nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {showContactForm && (
              <div className="bg-muted/30 rounded-lg p-6">
                <h4 className="font-semibold mb-4">Get Personalized Recommendations (Optional)</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Save your results and we'll follow up with personalized recommendations for your business.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <Input
                    placeholder="Your name"
                    value={contactInfo.name}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, name: e.target.value }))}
                    data-testid="assessment-name"
                  />
                  <Input
                    type="email"
                    placeholder="Email address"
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, email: e.target.value }))}
                    data-testid="assessment-email"
                  />
                  <Input
                    placeholder="Company name"
                    value={contactInfo.company}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, company: e.target.value }))}
                    data-testid="assessment-company"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={handleSaveAssessment}
                    disabled={assessmentMutation.isPending}
                    className="bg-accent hover:bg-accent/90"
                    data-testid="save-assessment"
                  >
                    {assessmentMutation.isPending ? "Saving..." : "Save Results & Get Follow-up"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowContactForm(false)}
                    data-testid="skip-save"
                  >
                    Skip
                  </Button>
                </div>
              </div>
            )}

            <div className="bg-primary/5 rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold mb-3">Ready to Take Action?</h4>
              <p className="text-muted-foreground mb-6">
                Let's discuss your specific results and create a custom roadmap for your business transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  className="bg-accent hover:bg-accent/90"
                  data-testid="book-consultation-btn"
                >
                  <a href="/booking">Book Free Consultation</a>
                </Button>
                <Button 
                  variant="outline" 
                  onClick={restart}
                  data-testid="retake-assessment-btn"
                >
                  Retake Assessment
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6" data-testid="business-assessment">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Digital Readiness Assessment
          </CardTitle>
          <p className="text-center text-muted-foreground">
            Discover your business's digital transformation potential in 5 minutes
          </p>
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <h3 className="text-lg font-medium">
              {questions[currentQuestion].question}
            </h3>
            <RadioGroup onValueChange={handleAnswer} data-testid="assessment-options">
              {questions[currentQuestion].options.map((option, index) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem 
                    value={option.value} 
                    id={option.value}
                    data-testid={`option-${index}`}
                  />
                  <Label 
                    htmlFor={option.value} 
                    className="flex-1 cursor-pointer"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}