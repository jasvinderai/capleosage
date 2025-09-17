import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Clock, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-gradient py-20 text-white" data-testid="hero-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="hero-title">
              Reimagine Your Business with
              <span className="text-accent"> Data, Design, and Digital Strategy</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100" data-testid="hero-description">
              Quick wins, Real results—Calgary consulting for data and digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/assessment">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4"
                  data-testid="hero-cta-primary"
                >
                  Get Your Digital Readiness Score
                </Button>
              </Link>
              <Link href="/booking">
                <Button 
                  size="lg" 
                  className="bg-white hover:bg-gray-100 text-primary border-2 border-white px-8 py-4"
                  data-testid="hero-cta-secondary"
                >
                  Smart Consultation Booking
                </Button>
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8">
              <p className="text-sm text-gray-100">
                🎯 <strong>Free Assessment:</strong> 5-minute questionnaire reveals your transformation potential with personalized recommendations
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Based in Calgary, AB</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-accent" />
                <span>1-2 Week Quick Start</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern consulting team analyzing data" 
              className="rounded-xl shadow-2xl w-full h-auto"
              data-testid="hero-image"
            />
            
            {/* <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg" data-testid="hero-stats">
              <div className="flex items-center space-x-4">
                <div className="text-primary">
                  <div className="text-2xl font-bold">150+</div>
                  <div className="text-sm">Projects Delivered</div>
                </div>
                <div className="text-secondary">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
