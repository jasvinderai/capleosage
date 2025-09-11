import { Helmet } from "react-helmet";
import BusinessAssessment from "@/components/assessment/business-assessment";

export default function Assessment() {
  return (
    <>
      <Helmet>
        <title>Digital Readiness Assessment | CAPLEO Sage Solutions | Calgary</title>
        <meta name="description" content="Take our free 5-minute Digital Readiness Assessment and discover your business transformation potential. Get personalized recommendations from Calgary's data experts." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Discover Your Digital Potential
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take our comprehensive assessment to understand where your business stands 
              in the digital landscape and receive personalized recommendations for growth.
            </p>
          </div>
          
          <BusinessAssessment />
          
          <div className="text-center mt-16">
            <div className="bg-card rounded-lg p-8 max-w-4xl mx-auto shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Why Take This Assessment?
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h3 className="font-semibold mb-2">Get Clear Direction</h3>
                  <p className="text-sm text-muted-foreground">
                    Understand exactly where to focus your digital transformation efforts for maximum impact.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Save Time & Money</h3>
                  <p className="text-sm text-muted-foreground">
                    Avoid costly mistakes by following a data-driven roadmap tailored to your current capabilities.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Competitive Advantage</h3>
                  <p className="text-sm text-muted-foreground">
                    Discover opportunities your competitors might be missing in the Calgary market.
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