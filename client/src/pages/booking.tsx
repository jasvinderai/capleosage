import { Helmet } from "react-helmet";
import SmartBooking from "@/components/booking/smart-booking";

export default function Booking() {
  return (
    <>
      <Helmet>
        <title>Smart Consultation Booking | CAPLEO Sage Solutions | Calgary</title>
        <meta name="description" content="Book your personalized consultation with Calgary's digital transformation experts. Smart booking system matches you with the perfect consultation type." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Schedule Your Consultation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our smart booking system will recommend the perfect consultation type 
              based on your specific needs and challenges.
            </p>
          </div>
          
          <SmartBooking />
          
          <div className="text-center mt-16">
            <div className="bg-card rounded-lg p-8 max-w-4xl mx-auto shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-primary">
                What Makes Our Consultations Different?
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h3 className="font-semibold mb-2">Personalized Approach</h3>
                  <p className="text-sm text-muted-foreground">
                    Every consultation is tailored to your specific industry, challenges, and business goals.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Actionable Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Walk away with concrete next steps and a clear understanding of your transformation path.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">No Sales Pressure</h3>
                  <p className="text-sm text-muted-foreground">
                    Focused purely on providing value and understanding if we're the right fit for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}