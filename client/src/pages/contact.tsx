import { Helmet } from "react-helmet";
import ContactForm from "@/components/forms/contact-form";
import { Phone, Mail, MapPin, Clock, TrendingUp } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact CAPLEO Sage Solutions | Free Calgary Consulting Assessment</title>
        <meta name="description" content="Get your free business assessment from Calgary's leading consulting firm. Contact us for Data Engineering, Digital Transformation, and Design services." />
      </Helmet>
      
      <section className="py-20 bg-primary text-white" data-testid="contact-page">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl font-bold mb-6" data-testid="contact-title">Ready to Transform Your Business?</h1>
              <p className="text-xl mb-8 text-gray-100" data-testid="contact-subtitle">
                Get started with a free assessment and discover how CAPLEO can accelerate your success.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Quick Start</h4>
                    <p className="text-gray-100">Free assessment delivered within 1-2 weeks</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Proven ROI</h4>
                    <p className="text-gray-100">Average 20-50% efficiency improvements</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Local Expertise</h4>
                    <p className="text-gray-100">Calgary-based team with deep market knowledge</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4" data-testid="contact-info">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <span>+1 (403) 555-0123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <span>hello@capleosage.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>Calgary, Alberta, Canada</span>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
