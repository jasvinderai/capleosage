import { useState, useEffect } from "react";
import { Logo } from "./logo";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Small delay before hiding
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8 flex justify-center">
          <Logo className="w-24 h-24" animated={true} />
        </div>
        
        {/* Company Name */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-wider">CAPLEO</h1>
          <h2 className="text-2xl font-light text-accent mb-3">SAGE SOLUTIONS</h2>
          <p className="text-sm text-accent font-medium tracking-wide uppercase">Your Business, Our Guidance</p>
        </div>
        
        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="bg-white/20 rounded-full h-1 mb-4">
            <div 
              className="bg-accent h-1 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/60 text-sm">Loading {progress}%</p>
        </div>
      </div>
    </div>
  );
}