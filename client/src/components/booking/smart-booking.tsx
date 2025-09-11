import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar as CalendarIcon, Clock, Users, Target, ArrowRight, CheckCircle, Lightbulb } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertBookingSchema } from "@shared/schema";

interface BookingData {
  name: string;
  email: string;
  company: string;
  role: string;
  businessType: string;
  challenges: string[];
  priority: string;
  timeline: string;
  preferredTime: string;
  selectedDate: Date | undefined;
  selectedTimeSlot: string;
  consultationType: string;
  duration: string;
}

const businessTypes = [
  "Energy & Oil Gas",
  "Technology & Software",
  "Financial Services",
  "Healthcare",
  "Retail & E-commerce",
  "Manufacturing",
  "Professional Services",
  "Other"
];

const challengeOptions = [
  { id: "data", label: "Data management & analytics" },
  { id: "systems", label: "Outdated systems & technology" },
  { id: "processes", label: "Manual processes & inefficiencies" },
  { id: "growth", label: "Scaling challenges" },
  { id: "competitive", label: "Competitive disadvantage" },
  { id: "compliance", label: "Regulatory & compliance issues" },
  { id: "integration", label: "System integration problems" },
  { id: "skills", label: "Team digital skills gap" }
];

const timeSlots = [
  "Morning (8:00 AM - 12:00 PM)",
  "Afternoon (12:00 PM - 5:00 PM)",
  "Evening (5:00 PM - 8:00 PM)"
];

export default function SmartBooking() {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    name: "",
    email: "",
    company: "",
    role: "",
    businessType: "",
    challenges: [],
    priority: "",
    timeline: "",
    preferredTime: "",
    selectedDate: undefined,
    selectedTimeSlot: "",
    consultationType: "",
    duration: ""
  });

  const updateBookingData = (field: keyof BookingData, value: string | string[] | Date | undefined) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleChallengeChange = (challengeId: string, checked: boolean) => {
    const updatedChallenges = checked 
      ? [...bookingData.challenges, challengeId]
      : bookingData.challenges.filter(id => id !== challengeId);
    updateBookingData("challenges", updatedChallenges);
  };

  const getRecommendedConsultation = () => {
    const { challenges, businessType, priority } = bookingData;
    
    if (challenges.includes("data") || challenges.includes("systems")) {
      return {
        type: "Technical Assessment",
        duration: "60 minutes",
        description: "Deep dive into your current systems and data infrastructure with technical recommendations.",
        preparation: "Please prepare: Current system overview, data flow diagrams (if available), key pain points"
      };
    } else if (challenges.includes("processes") || challenges.includes("growth")) {
      return {
        type: "Business Process Review",
        duration: "45 minutes",
        description: "Analyze your current processes and identify automation and optimization opportunities.",
        preparation: "Please prepare: Process documentation, team structure, current workflow pain points"
      };
    } else if (challenges.includes("competitive") || businessType === "Technology & Software") {
      return {
        type: "Strategic Planning Session",
        duration: "75 minutes",
        description: "Strategic discussion on digital transformation roadmap and competitive positioning.",
        preparation: "Please prepare: Business goals, competitive landscape info, growth targets"
      };
    } else {
      return {
        type: "General Discovery Call",
        duration: "30 minutes",
        description: "Initial discussion to understand your needs and determine the best path forward.",
        preparation: "Please prepare: Brief overview of your business and main challenges"
      };
    }
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return bookingData.name && bookingData.email && bookingData.company && bookingData.role;
      case 2:
        return bookingData.businessType && bookingData.challenges.length > 0;
      case 3:
        return bookingData.priority && bookingData.timeline;
      case 4:
        return bookingData.selectedDate && bookingData.selectedTimeSlot;
      default:
        return true;
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Let's Get To Know You</h3>
        <p className="text-muted-foreground">Basic information to personalize your consultation</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            value={bookingData.name}
            onChange={(e) => updateBookingData("name", e.target.value)}
            placeholder="John Smith"
            data-testid="booking-name"
          />
        </div>
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={bookingData.email}
            onChange={(e) => updateBookingData("email", e.target.value)}
            placeholder="john@company.com"
            data-testid="booking-email"
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="company">Company Name *</Label>
          <Input
            id="company"
            value={bookingData.company}
            onChange={(e) => updateBookingData("company", e.target.value)}
            placeholder="ABC Corporation"
            data-testid="booking-company"
          />
        </div>
        <div>
          <Label htmlFor="role">Your Role *</Label>
          <Input
            id="role"
            value={bookingData.role}
            onChange={(e) => updateBookingData("role", e.target.value)}
            placeholder="CEO, CTO, Operations Manager..."
            data-testid="booking-role"
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Tell Us About Your Business</h3>
        <p className="text-muted-foreground">Help us understand your industry and challenges</p>
      </div>
      
      <div>
        <Label htmlFor="businessType">Industry/Business Type *</Label>
        <Select value={bookingData.businessType} onValueChange={(value) => updateBookingData("businessType", value)}>
          <SelectTrigger data-testid="booking-business-type">
            <SelectValue placeholder="Select your industry" />
          </SelectTrigger>
          <SelectContent>
            {businessTypes.map(type => (
              <SelectItem key={type} value={type}>{type}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label className="text-base font-medium">Current Challenges (Select all that apply) *</Label>
        <div className="grid md:grid-cols-2 gap-3 mt-4">
          {challengeOptions.map(challenge => (
            <div key={challenge.id} className="flex items-center space-x-2">
              <Checkbox
                id={challenge.id}
                checked={bookingData.challenges.includes(challenge.id)}
                onCheckedChange={(checked) => handleChallengeChange(challenge.id, checked as boolean)}
                data-testid={`challenge-${challenge.id}`}
              />
              <Label htmlFor={challenge.id} className="text-sm">{challenge.label}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Project Details</h3>
        <p className="text-muted-foreground">Help us understand your priorities and timeline</p>
      </div>
      
      <div>
        <Label htmlFor="priority">What's your biggest priority? *</Label>
        <Select value={bookingData.priority} onValueChange={(value) => updateBookingData("priority", value)}>
          <SelectTrigger data-testid="booking-priority">
            <SelectValue placeholder="Select your main priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="immediate">Fix immediate problems (urgent)</SelectItem>
            <SelectItem value="efficiency">Improve efficiency & reduce costs</SelectItem>
            <SelectItem value="growth">Enable business growth & scaling</SelectItem>
            <SelectItem value="competitive">Gain competitive advantage</SelectItem>
            <SelectItem value="future">Future-proof the business</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="timeline">Ideal Timeline *</Label>
        <Select value={bookingData.timeline} onValueChange={(value) => updateBookingData("timeline", value)}>
          <SelectTrigger data-testid="booking-timeline">
            <SelectValue placeholder="When would you like to start?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asap">As soon as possible</SelectItem>
            <SelectItem value="month">Within 1 month</SelectItem>
            <SelectItem value="quarter">Within 3 months</SelectItem>
            <SelectItem value="planning">Just planning for the future</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="preferredTime">Preferred Meeting Time</Label>
        <Select value={bookingData.preferredTime} onValueChange={(value) => updateBookingData("preferredTime", value)}>
          <SelectTrigger data-testid="booking-time">
            <SelectValue placeholder="Choose your preferred time" />
          </SelectTrigger>
          <SelectContent>
            {timeSlots.map(slot => (
              <SelectItem key={slot} value={slot}>{slot}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const availableTimeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", 
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  const renderStep4 = () => {
    const recommendation = getRecommendedConsultation();
    
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Schedule Your Session</h3>
          <p className="text-muted-foreground">Choose your preferred date and time</p>
        </div>
        
        <Card className="border-accent/20 bg-accent/5 mb-6">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <CalendarIcon className="h-5 w-5 mr-2 text-accent" />
              <span className="font-medium">Recommended: {recommendation.type}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Clock className="h-4 w-4 mr-2" />
              <span>Duration: {recommendation.duration}</span>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label className="text-base font-medium mb-4 block">Select Date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                  data-testid="date-picker"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {bookingData.selectedDate ? format(bookingData.selectedDate, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={bookingData.selectedDate}
                  onSelect={(date) => updateBookingData("selectedDate", date)}
                  disabled={(date) => 
                    date < new Date() || date.getDay() === 0 || date.getDay() === 6
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div>
            <Label className="text-base font-medium mb-4 block">Available Times *</Label>
            <div className="grid grid-cols-2 gap-2">
              {availableTimeSlots.map((slot) => (
                <Button
                  key={slot}
                  variant={bookingData.selectedTimeSlot === slot ? "default" : "outline"}
                  className="text-sm"
                  onClick={() => updateBookingData("selectedTimeSlot", slot)}
                  data-testid={`time-slot-${slot.replace(/[:\s]/g, "-")}`}
                >
                  {slot}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {bookingData.selectedDate && bookingData.selectedTimeSlot && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              <span className="font-medium text-green-800">Booking Confirmed</span>
            </div>
            <p className="text-sm text-green-700">
              {recommendation.type} scheduled for {format(bookingData.selectedDate, "EEEE, MMMM do")} at {bookingData.selectedTimeSlot}
            </p>
          </div>
        )}
      </div>
    );
  };

  const { toast } = useToast();
  
  const bookingMutation = useMutation({
    mutationFn: async (bookingData: any) => {
      const payload = insertBookingSchema.parse({
        ...bookingData,
        challenges: bookingData.challenges,
        selectedDate: bookingData.selectedDate,
      });
      
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to book consultation");
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
      toast({
        title: "Booking Confirmed!",
        description: "Your consultation has been booked. You'll receive a calendar invite shortly.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Booking Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleConfirmBooking = () => {
    const recommendation = getRecommendedConsultation();
    const submissionData = {
      ...bookingData,
      consultationType: recommendation.type,
      duration: recommendation.duration,
    };
    bookingMutation.mutate(submissionData);
  };

  const renderStep5 = () => {
    const recommendation = getRecommendedConsultation();
    
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Perfect Match!</h3>
          <p className="text-muted-foreground">Based on your responses, here's our recommendation</p>
        </div>
        
        <Card className="border-accent/20 bg-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CalendarIcon className="h-5 w-5 mr-2 text-accent" />
              Your Consultation Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-medium">Type:</span>
                <span>{recommendation.type}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Duration:</span>
                <span>{recommendation.duration}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Date:</span>
                <span>{bookingData.selectedDate ? format(bookingData.selectedDate, "EEEE, MMMM do") : "Not selected"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Time:</span>
                <span>{bookingData.selectedTimeSlot || "Not selected"}</span>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <p className="text-muted-foreground text-sm">{recommendation.description}</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2 flex items-center">
                <Lightbulb className="h-4 w-4 mr-2 text-blue-600" />
                To Prepare
              </h4>
              <p className="text-sm text-muted-foreground">{recommendation.preparation}</p>
            </div>
          </CardContent>
        </Card>
        
        <div className="bg-primary/5 rounded-lg p-6 text-center">
          <h4 className="font-semibold mb-3">Ready to Schedule?</h4>
          <p className="text-muted-foreground mb-6">
            We'll send you a calendar link with available times and a brief preparation guide.
          </p>
          <Button 
            className="bg-accent hover:bg-accent/90 w-full md:w-auto"
            onClick={handleConfirmBooking}
            disabled={bookingMutation.isPending}
            data-testid="confirm-booking"
          >
            {bookingMutation.isPending ? "Booking..." : "Confirm & Send Calendar Link"}
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-6" data-testid="smart-booking">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">
            Smart Consultation Booking
          </CardTitle>
          <div className="flex justify-center items-center space-x-4 mt-4">
            {[1, 2, 3, 4, 5].map(step => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep 
                    ? 'bg-primary text-white' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {step < currentStep ? <CheckCircle className="h-4 w-4" /> : step}
                </div>
                {step < 5 && (
                  <ArrowRight className={`h-4 w-4 mx-2 ${
                    step < currentStep ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </CardHeader>
        
        <CardContent>
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
          {currentStep === 5 && renderStep5()}
          
          {currentStep < 5 && (
            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button 
                variant="outline" 
                onClick={prevStep}
                disabled={currentStep === 1}
                data-testid="booking-back"
              >
                Back
              </Button>
              <Button 
                onClick={nextStep}
                disabled={!canProceed()}
                data-testid="booking-next"
              >
                Next Step
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}