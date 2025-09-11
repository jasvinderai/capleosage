interface LogoProps {
  className?: string;
  animated?: boolean;
}

export function Logo({ className = "w-12 h-12", animated = false }: LogoProps) {
  return (
    <div className={`${className} relative`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle ring */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#1e40af"
          strokeWidth="2"
          className={animated ? "animate-pulse" : ""}
        />
        
        {/* Second ring with gaps */}
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke="#1e40af"
          strokeWidth="2"
          strokeDasharray="15,8"
          className={animated ? "animate-spin" : ""}
          style={animated ? { animationDuration: "12s", animationDelay: "0.3s" } : {}}
        />
        
        {/* Third ring with different pattern */}
        <circle
          cx="50"
          cy="50"
          r="31"
          fill="none"
          stroke="#1e40af"
          strokeWidth="2"
          strokeDasharray="8,6"
          className={animated ? "animate-spin" : ""}
          style={animated ? { animationDuration: "10s", animationDirection: "reverse", animationDelay: "0.6s" } : {}}
        />
        
        {/* Fourth ring */}
        <circle
          cx="50"
          cy="50"
          r="24"
          fill="none"
          stroke="#1e40af"
          strokeWidth="2"
          strokeDasharray="12,4"
          className={animated ? "animate-spin" : ""}
          style={animated ? { animationDuration: "8s", animationDelay: "0.9s" } : {}}
        />
        
        {/* Fifth ring */}
        <circle
          cx="50"
          cy="50"
          r="17"
          fill="none"
          stroke="#1e40af"
          strokeWidth="2"
          strokeDasharray="6,3"
          className={animated ? "animate-spin" : ""}
          style={animated ? { animationDuration: "6s", animationDirection: "reverse", animationDelay: "1.2s" } : {}}
        />
        
        {/* Inner ring */}
        <circle
          cx="50"
          cy="50"
          r="10"
          fill="none"
          stroke="#1e40af"
          strokeWidth="1.5"
          strokeDasharray="4,2"
          className={animated ? "animate-spin" : ""}
          style={animated ? { animationDuration: "4s", animationDelay: "1.5s" } : {}}
        />
        
        {/* Maze connecting lines */}
        <path
          d="M 35 50 L 65 50"
          stroke="#1e40af"
          strokeWidth="1.5"
          className={animated ? "animate-pulse" : ""}
          style={animated ? { animationDelay: "0.5s" } : {}}
        />
        <path
          d="M 50 35 L 50 65"
          stroke="#1e40af"
          strokeWidth="1.5"
          className={animated ? "animate-pulse" : ""}
          style={animated ? { animationDelay: "0.7s" } : {}}
        />
        
        {/* Center yellow dot with animation */}
        <circle
          cx="50"
          cy="50"
          r="5"
          fill="#fbbf24"
          className={animated ? "animate-ping" : ""}
          style={animated ? { animationDelay: "1.8s" } : {}}
        />
        
        {/* Static center dot */}
        <circle
          cx="50"
          cy="50"
          r="4"
          fill="#f59e0b"
        />
      </svg>
    </div>
  );
}