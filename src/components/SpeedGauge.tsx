import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SpeedGaugeProps {
  speed: number;
  maxSpeed: number;
  className?: string;
}

export const SpeedGauge = ({ speed, maxSpeed, className }: SpeedGaugeProps) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const calculatedPercentage = (speed / maxSpeed) * 100;
    setPercentage(Math.min(calculatedPercentage, 100));
  }, [speed, maxSpeed]);

  return (
    <div className={cn("gauge-container", className)} style={{ "--speed": `${percentage}` } as React.CSSProperties}>
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        <circle cx="50" cy="50" r="45" className="gauge-bg" />
        <circle
          cx="50"
          cy="50"
          r="45"
          className="gauge-fill animate-gauge"
          pathLength="100"
        />
      </svg>
      <div className="gauge-center">
        <div className="text-center">
          <span className="text-4xl font-bold">{speed}</span>
          <span className="text-sm ml-1">km/h</span>
        </div>
      </div>
    </div>
  );
};