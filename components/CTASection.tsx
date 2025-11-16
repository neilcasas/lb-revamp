"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
            className="bg-black rounded-3xl border border-neutral-800 p-8 md:p-12 lg:p-16 flex flex-col justify-center min-h-[500px] lg:min-h-[700px]"
          >
            <h3 className="text-2xl md:text-3xl text-neutral-300 mb-8">
              Fill This Form Below
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  Your Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-transparent border-b border-t-0 border-x-0 border-neutral-700 rounded-none px-0 focus-visible:ring-0 focus-visible:border-white transition-colors"
                  required
                />
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Your Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter the e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent border-b border-t-0 border-x-0 border-neutral-700 rounded-none px-0 focus-visible:ring-0 focus-visible:border-white transition-colors"
                  required
                />
              </div>

              {/* Project field */}
              <div className="space-y-2">
                <Label
                  htmlFor="project"
                  className="text-sm font-medium text-foreground"
                >
                  More About The Project
                </Label>
                <textarea
                  id="project"
                  name="project"
                  placeholder="Tell us about your project..."
                  value={formData.project}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-b border-t-0 border-x-0 border-neutral-700 rounded-none px-0 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-white transition-colors resize-none"
                  required
                />
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                className="w-full bg-white hover:bg-neutral-200 text-black font-medium py-6 rounded-full text-base transition-colors"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
