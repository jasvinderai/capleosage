import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Helmet } from "react-helmet";
import Home from "@/pages/home";
import Services from "@/pages/services";
import About from "@/pages/about";
import CaseStudies from "@/pages/case-studies";
import Blog from "@/pages/blog";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/case-studies" component={CaseStudies} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <title>CAPLEO Sage Solutions | Data Engineering & Digital Transformation Consulting | Calgary</title>
          <meta name="description" content="Calgary-based consulting firm specializing in Data Engineering, Digital Transformation Advisory, and Design Enhancement. Get your free assessment today." />
          <meta property="og:title" content="CAPLEO Sage Solutions | Calgary Consulting Excellence" />
          <meta property="og:description" content="Transform your business with data-driven insights, digital innovation, and strategic design. Calgary's premier consulting firm." />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://capleosage.com" />
          <script type="application/ld+json">
            {`{
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "CAPLEO Sage Solutions",
              "description": "Calgary-based consulting firm specializing in Data Engineering, Digital Transformation Advisory, and Design Enhancement",
              "url": "https://capleosage.com",
              "telephone": "+1-403-555-0123",
              "email": "hello@capleosage.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Calgary",
                "addressRegion": "AB",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "51.0447",
                "longitude": "-114.0719"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "51.0447",
                  "longitude": "-114.0719"
                },
                "geoRadius": "100000"
              },
              "services": [
                "Data Engineering",
                "Digital Transformation Advisory",
                "Design Transformation & Enhancement"
              ]
            }`}
          </script>
        </Helmet>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
