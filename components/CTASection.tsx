"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function CTASection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    leadershipRole: "",
    areaOfInquiry: [] as string[],
    source: "",
  });

  const leadershipRoles = [
    "C-Suite Executive",
    "Director / VP",
    "Manager",
    "Individual Contributor",
    "Entrepreneur / Founder",
    "Other",
  ];

  const areasOfInquiry = [
    "Writing",
    "Design",
    "Research",
    "Project Management",
    "Partnerships",
    "Other Allied Services",
  ];

  const sources = [
    "Google Search",
    "Social Media",
    "Referral",
    "Event / Conference",
    "News / Press",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleAreaOfInquiry = (area: string) => {
    setFormData((prev) => ({
      ...prev,
      areaOfInquiry: prev.areaOfInquiry.includes(area)
        ? prev.areaOfInquiry.filter((a) => a !== area)
        : [...prev.areaOfInquiry, area],
    }));
  };

  const handleNext = () => {
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <section className="w-full bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Image with text overlay */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-neutral-800 min-h-[500px] lg:min-h-[700px]"
          >
            <Image
              src="/pillars.png"
              alt="Classical architecture pillars"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight">
                Let&apos;s Talk
                <br />
                <span className="italic">Your Next Big Idea</span>
              </h2>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-[500px] lg:min-h-[700px]"
          >
            {/* Step Indicator */}
            <div className="flex justify-center gap-3 mb-8">
              <div
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  step === 1 ? "bg-white" : "bg-neutral-600"
                }`}
              />
              <div
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  step === 2 ? "bg-white" : "bg-neutral-600"
                }`}
              />
            </div>

            <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex flex-col"
                  >
                    <h3 className="text-2xl md:text-3xl text-neutral-300 mb-8">
                      Tell Us About Yourself
                    </h3>

                    <div className="space-y-6 flex-1">
                      {/* Name fields - side by side */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="firstName"
                            className="text-sm font-medium text-muted-foreground"
                          >
                            First name <span className="text-red-400">*</span>
                          </Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="bg-transparent border border-neutral-700 rounded-lg px-4 py-3 focus-visible:ring-0 focus-visible:border-white transition-colors"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="lastName"
                            className="text-sm font-medium text-muted-foreground"
                          >
                            Last name <span className="text-red-400">*</span>
                          </Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="bg-transparent border border-neutral-700 rounded-lg px-4 py-3 focus-visible:ring-0 focus-visible:border-white transition-colors"
                            required
                          />
                        </div>
                      </div>

                      {/* Company field */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="company"
                          className="text-sm font-medium text-muted-foreground"
                        >
                          Company or Organization{" "}
                          <span className="text-red-400">*</span>
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          className="bg-transparent border border-neutral-700 rounded-lg px-4 py-3 focus-visible:ring-0 focus-visible:border-white transition-colors"
                          required
                        />
                      </div>

                      {/* Email and Phone - side by side */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="email"
                            className="text-sm font-medium text-muted-foreground"
                          >
                            Email <span className="text-red-400">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-transparent border border-neutral-700 rounded-lg px-4 py-3 focus-visible:ring-0 focus-visible:border-white transition-colors"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="phone"
                            className="text-sm font-medium text-muted-foreground"
                          >
                            Phone
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="bg-transparent border border-neutral-700 rounded-lg px-4 py-3 focus-visible:ring-0 focus-visible:border-white transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Next button */}
                    <div className="flex justify-end mt-8">
                      <Button
                        type="button"
                        onClick={handleNext}
                        className="bg-cyan-400 hover:bg-cyan-300 text-black font-medium px-8 py-3 rounded-lg text-base transition-colors"
                      >
                        Next
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex flex-col"
                  >
                    <div className="space-y-6 flex-1">
                      {/* Leadership Role */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="leadershipRole"
                          className="text-sm font-medium text-muted-foreground"
                        >
                          Leadership Role{" "}
                          <span className="text-red-400">*</span>
                        </Label>
                        <select
                          id="leadershipRole"
                          name="leadershipRole"
                          value={formData.leadershipRole}
                          onChange={handleChange}
                          className="w-full bg-transparent border border-neutral-700 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                          required
                        >
                          <option value="" className="bg-neutral-900">
                            I am a...
                          </option>
                          {leadershipRoles.map((role) => (
                            <option
                              key={role}
                              value={role}
                              className="bg-neutral-900"
                            >
                              {role}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Area of Inquiry */}
                      <div className="space-y-3">
                        <Label className="text-sm font-medium text-muted-foreground">
                          Area of Inquiry
                        </Label>
                        <div className="grid grid-cols-2 gap-3">
                          {areasOfInquiry.map((area) => (
                            <button
                              key={area}
                              type="button"
                              onClick={() => toggleAreaOfInquiry(area)}
                              className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all duration-200 ${
                                formData.areaOfInquiry.includes(area)
                                  ? "border-white bg-white/10 text-white"
                                  : "border-neutral-700 text-neutral-400 hover:border-neutral-500"
                              }`}
                            >
                              {area}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Source */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="source"
                          className="text-sm font-medium text-muted-foreground"
                        >
                          Source
                        </Label>
                        <select
                          id="source"
                          name="source"
                          value={formData.source}
                          onChange={handleChange}
                          className="w-full bg-transparent border border-neutral-700 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-neutral-900">
                            How did you hear about us?
                          </option>
                          {sources.map((source) => (
                            <option
                              key={source}
                              value={source}
                              className="bg-neutral-900"
                            >
                              {source}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Back and Submit buttons */}
                    <div className="flex justify-between mt-8">
                      <Button
                        type="button"
                        onClick={handleBack}
                        className="bg-neutral-800 hover:bg-neutral-700 text-white font-medium px-8 py-3 rounded-lg text-base transition-colors"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="bg-cyan-400 hover:bg-cyan-300 text-black font-medium px-8 py-3 rounded-lg text-base transition-colors"
                      >
                        Submit
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
