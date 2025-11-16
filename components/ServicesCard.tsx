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
      className="h-full min-h-[400px] flex flex-col justify-between"
      spotlightColor="rgba(212, 175, 55, 0.15)"
    >
      {/* Icon */}
      <div className="flex items-start justify-center mb-8">{icon}</div>

      {/* Content */}
      <div className="mt-auto space-y-4">
        <span className="text-sm text-muted-foreground">{number}</span>
        <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </SpotlightCard>
  );
}
