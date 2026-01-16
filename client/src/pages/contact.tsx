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
                Book your free 30-minute consultation today and discover how CAPLEO can accelerate your success.
              </p>
              
              <div className="bg-accent/20 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-3 text-accent">🕐 Free 30-Minute Strategy Session</h3>
                <p className="text-gray-100 mb-4">
                  Get personalized insights and actionable recommendations tailored to your business challenges.
                </p>
                <ul className="text-gray-100 space-y-2 text-sm">
                  <li>✓ Assess your current state and identify opportunities</li>
                  <li>✓ Discuss potential solutions and approaches</li>
                  <li>✓ Receive initial strategic recommendations</li>
                  <li>✓ No obligation or sales pressure</li>
                </ul>
              </div>
              
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
                  <span>+1 (825) 883-2507</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <span>capleosage@outlook.com</span>
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
      
      {/* Map Section */}
      <section className="py-16 bg-muted" data-testid="map-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Calgary Location</h2>
            <p className="text-lg text-muted-foreground">
              Conveniently located in the heart of Calgary's business district
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80772.13415645928!2d-114.15645553320312!3d51.04473491340524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sus!4v1703097654321!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CAPLEO Sage Solutions Office Location in Calgary"
                data-testid="office-map"
              ></iframe>
              
              <div className="p-6 bg-white">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Visit Our Office</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-accent" />
                        <span>50 Corner Meadows Manor NE, Calgary, AB</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-accent" />
                        <span>+1 (825) 883-2507</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-accent" />
                        <span></span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Office Hours</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>9:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                      <p className="text-sm text-accent-foreground">
                        <strong>Note:</strong> Consultations available by appointment outside regular hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
