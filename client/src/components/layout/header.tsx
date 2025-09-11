import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/ui/logo";
import { Menu } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Services", href: "/services" },
    { name: "Framework", href: "/#framework" },
    { name: "About", href: "/about" },
    { name: "Insights", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return location === href;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" data-testid="header">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2" data-testid="logo-link">
            <Logo className="w-10 h-10" />
            <div>
              <h1 className="text-xl font-bold">
                <span className="text-[#1e40af] tracking-wider">CAPLEO</span>
                <span className="text-secondary font-light ml-1">Sage Solutions</span>
              </h1>
              <p className="text-xs text-accent font-medium tracking-wide uppercase">Your Business, Our Guidance</p>
            </div>
          </Link>
          
          <nav className="hidden lg:flex space-x-8" data-testid="desktop-nav">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors ${
                  isActive(item.href)
                    ? "text-primary font-medium"
                    : "text-foreground hover:text-primary"
                }`}
                data-testid={`nav-link-${item.name.toLowerCase().replace(" ", "-")}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link href="/contact">
              <Button 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                data-testid="cta-button"
              >
                Free 30min Consultation
              </Button>
            </Link>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" data-testid="mobile-menu-trigger">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8" data-testid="mobile-nav">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg transition-colors ${
                        isActive(item.href)
                          ? "text-primary font-medium"
                          : "text-foreground hover:text-primary"
                      }`}
                      data-testid={`mobile-nav-link-${item.name.toLowerCase().replace(" ", "-")}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
