"use client";

import { motion } from "motion/react";
import { ServicesCard } from "./ServicesCard";
import { Badge } from "./ui/badge";

export function ServicesSection() {
  const services = [
    {
      number: "/01",
      title: "Writing & Influence",
      description:
        "Publication Development, Lobbying & Policy Advisory, Intelligence Briefings, Compliance & Risk Management, Operational Manuals & Playbooks.",
      icon: (
        <svg
          className="w-24 h-24 text-neutral-600"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="60"
            y="70"
            width="80"
            height="100"
            rx="4"
            fill="currentColor"
            opacity="0.7"
          />
          <rect
            x="75"
            y="90"
            width="50"
            height="4"
            rx="2"
            fill="currentColor"
            opacity="0.9"
          />
          <rect
            x="75"
            y="100"
            width="50"
            height="4"
            rx="2"
            fill="currentColor"
            opacity="0.9"
          />
          <rect
            x="75"
            y="110"
            width="35"
            height="4"
            rx="2"
            fill="currentColor"
            opacity="0.9"
          />
        </svg>
      ),
    },
    {
      number: "/02",
      title: "Design & Creativity",
      description:
        "Marketing & Branding, Website Development & UX/UI Design, Architectural Visualization, Corporate Identity Systems, Product Design QA & Testing.",
      icon: (
        <svg
          className="w-24 h-24 text-neutral-600"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="50"
            y="60"
            width="100"
            height="80"
            rx="8"
            fill="currentColor"
            opacity="0.7"
          />
          <circle cx="130" cy="70" r="15" fill="currentColor" opacity="0.9" />
          <rect
            x="60"
            y="90"
            width="60"
            height="8"
            rx="4"
            fill="currentColor"
            opacity="0.4"
          />
          <rect
            x="60"
            y="105"
            width="40"
            height="8"
            rx="4"
            fill="currentColor"
            opacity="0.4"
          />
        </svg>
      ),
    },
    {
      number: "/03",
      title: "Project Management & Execution",
      description:
        "Electoral Campaign Management, Fundraising & Capital Raising, Strategic Event Management, Crisis and Reputation Management, Organizational Development.",
      icon: (
        <svg
          className="w-24 h-24 text-neutral-600"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="50"
            y="60"
            width="100"
            height="80"
            rx="8"
            fill="currentColor"
            opacity="0.7"
          />
          <circle cx="70" cy="75" r="4" fill="currentColor" opacity="0.5" />
          <circle cx="82" cy="75" r="4" fill="currentColor" opacity="0.5" />
          <circle cx="100" cy="100" r="20" fill="currentColor" opacity="0.9" />
          <line
            x1="85"
            y1="100"
            x2="95"
            y2="100"
            stroke="black"
            strokeWidth="3"
          />
          <line
            x1="105"
            y1="100"
            x2="115"
            y2="100"
            stroke="black"
            strokeWidth="3"
          />
          <line
            x1="100"
            y1="85"
            x2="100"
            y2="95"
            stroke="black"
            strokeWidth="3"
          />
          <line
            x1="100"
            y1="105"
            x2="100"
            y2="115"
            stroke="black"
            strokeWidth="3"
          />
        </svg>
      ),
    },
    {
      number: "/04",
      title: "Research & Analysis",
      description:
        "Academic Research Support, Medical Research Support, Data Analytics, Workflow Automation & Digital Reporting Systems.",
      icon: (
        <svg
          className="w-24 h-24 text-neutral-600"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="60"
            y="120"
            width="20"
            height="40"
            rx="4"
            fill="currentColor"
            opacity="0.6"
          />
          <rect
            x="90"
            y="90"
            width="20"
            height="70"
            rx="4"
            fill="currentColor"
            opacity="0.8"
          />
          <rect
            x="120"
            y="70"
            width="20"
            height="90"
            rx="4"
            fill="currentColor"
            opacity="0.9"
          />
          <line
            x1="50"
            y1="165"
            x2="150"
            y2="165"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Badge */}
        <div className="mb-12">
          <Badge
            variant="outline"
            className="text-sm px-4 py-2 rounded-full border-neutral-800 text-foreground"
          >
            <svg
              className="w-4 h-4 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            Our Services
          </Badge>
        </div>

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal text-foreground leading-tight">
              <span className="italic">What</span> We Do
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A powerful strategic mechanism for the powerful, providing public
              relations, writing, design, research, and project management
              services with an unwavering commitment to excellence.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <ServicesCard
                number={service.number}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
