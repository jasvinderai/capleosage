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
        {/* Outer circle */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="#1e40af"
          strokeWidth="1.5"
          className={animated ? "animate-pulse" : ""}
        />
        
        {/* Maze paths - creating a circular maze pattern */}
        <path
          d="M 20 50 Q 30 30, 50 35 Q 70 30, 80 50"
          fill="none"
          stroke="#1e40af"
          strokeWidth="1.5"
          className={animated ? "animate-pulse" : ""}
          style={animated ? { animationDelay: "0.2s" } : {}}
        />
        
        <path
          d="M 50 20 Q 65 35, 50 50 Q 35 65, 50 80"
          fill="none"
          stroke="#1e40af"
          strokeWidth="1.5"
          className={animated ? "animate-pulse" : ""}
          style={animated ? { animationDelay: "0.4s" } : {}}
        />
        
        <path
          d="M 30 30 Q 40 40, 50 35 Q 60 30, 70 40"
          fill="none"
          stroke="#1e40af"
          strokeWidth="1.5"
          className={animated ? "animate-pulse" : ""}
          style={animated ? { animationDelay: "0.6s" } : {}}
        />
        
        <path
          d="M 30 70 Q 40 60, 50 65 Q 60 70, 70 60"
          fill="none"
          stroke="#1e40af"
          strokeWidth="1.5"
          className={animated ? "animate-pulse" : ""}
          style={animated ? { animationDelay: "0.8s" } : {}}
        />
        
        {/* Inner maze rings */}
        <circle
          cx="50"
          cy="50"
          r="25"
          fill="none"
          stroke="#1e40af"
          strokeWidth="1"
          strokeDasharray="5,3"
          className={animated ? "animate-spin" : ""}
          style={animated ? { animationDuration: "8s", animationDelay: "1s" } : {}}
        />
        
        <circle
          cx="50"
          cy="50"
          r="15"
          fill="none"
          stroke="#1e40af"
          strokeWidth="1"
          strokeDasharray="3,2"
          className={animated ? "animate-spin" : ""}
          style={animated ? { animationDuration: "6s", animationDirection: "reverse", animationDelay: "1.2s" } : {}}
        />
        
        {/* Center yellow dot */}
        <circle
          cx="50"
          cy="50"
          r="4"
          fill="#fbbf24"
          className={animated ? "animate-ping" : ""}
          style={animated ? { animationDelay: "1.5s" } : {}}
        />
        
        {/* Static center dot */}
        <circle
          cx="50"
          cy="50"
          r="3"
          fill="#f59e0b"
        />
      </svg>
    </div>
  );
}