"use client";

import CountUp from "./CountUp";

interface Statistic {
  value: number;
  suffix?: string;
  label: string;
}

interface StatisticsSectionProps {
  statistics?: Statistic[];
  title?: string;
}

export function StatisticsSection({
  statistics = [
    { value: 100, label: "lorem ipsum" },
    { value: 98, suffix: "%", label: "lorem ipsum" },
    { value: 350, suffix: "+", label: "lorem ipsum" },
    { value: 28, suffix: "+", label: "lorem ipsum" },
  ],
  title = "We take pride in our numbers.",
}: StatisticsSectionProps) {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-center text-xl md:text-2xl text-muted-foreground mb-12">
          {title}
        </h2>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              {/* Number with CountUp */}
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">
                <CountUp
                  from={0}
                  to={stat.value}
                  duration={2}
                  separator=","
                  className="inline-block"
                />
                {stat.suffix && (
                  <span className="inline-block">{stat.suffix}</span>
                )}
              </div>

              {/* Label */}
              <p className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
