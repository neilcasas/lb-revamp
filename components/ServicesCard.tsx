"use client";

import React from "react";
import SpotlightCard from "./SpotlightCard";

interface ServicesCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function ServicesCard({
  number,
  title,
  description,
  icon,
}: ServicesCardProps) {
  return (
    <SpotlightCard
      className="h-full min-h-[400px] flex flex-col"
      spotlightColor="rgba(255, 255, 255, 0.25)"
    >
      {/* Icon - Fixed height */}
      <div className="flex items-center justify-center h-32 mb-8">{icon}</div>

      {/* Content - Fixed structure */}
      <div className="flex flex-col space-y-4">
        <span className="text-sm text-muted-foreground">{number}</span>
        <h3 className="text-2xl font-semibold text-foreground min-h-14">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </SpotlightCard>
  );
}
