"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "sonner";

const countries = [
  { code: "US", name: "United States", dialCode: "+1", emoji: "🇺🇸" },
  { code: "GB", name: "United Kingdom", dialCode: "+44", emoji: "🇬🇧" },
  { code: "CA", name: "Canada", dialCode: "+1", emoji: "🇨🇦" },
  { code: "AU", name: "Australia", dialCode: "+61", emoji: "🇦🇺" },
  { code: "DE", name: "Germany", dialCode: "+49", emoji: "🇩🇪" },
  { code: "FR", name: "France", dialCode: "+33", emoji: "🇫🇷" },
  { code: "IT", name: "Italy", dialCode: "+39", emoji: "🇮🇹" },
  { code: "ES", name: "Spain", dialCode: "+34", emoji: "🇪🇸" },
  { code: "PT", name: "Portugal", dialCode: "+351", emoji: "🇵🇹" },
  { code: "NL", name: "Netherlands", dialCode: "+31", emoji: "🇳🇱" },
  { code: "BE", name: "Belgium", dialCode: "+32", emoji: "🇧🇪" },
  { code: "CH", name: "Switzerland", dialCode: "+41", emoji: "🇨🇭" },
  { code: "AT", name: "Austria", dialCode: "+43", emoji: "🇦🇹" },
  { code: "SE", name: "Sweden", dialCode: "+46", emoji: "🇸🇪" },
  { code: "NO", name: "Norway", dialCode: "+47", emoji: "🇳🇴" },
  { code: "DK", name: "Denmark", dialCode: "+45", emoji: "🇩🇰" },
  { code: "FI", name: "Finland", dialCode: "+358", emoji: "🇫🇮" },
  { code: "IE", name: "Ireland", dialCode: "+353", emoji: "🇮🇪" },
  { code: "PL", name: "Poland", dialCode: "+48", emoji: "🇵🇱" },
  { code: "CZ", name: "Czech Republic", dialCode: "+420", emoji: "🇨🇿" },
  { code: "RO", name: "Romania", dialCode: "+40", emoji: "🇷🇴" },
  { code: "HU", name: "Hungary", dialCode: "+36", emoji: "🇭🇺" },
  { code: "GR", name: "Greece", dialCode: "+30", emoji: "🇬🇷" },
  { code: "RU", name: "Russia", dialCode: "+7", emoji: "🇷🇺" },
  { code: "UA", name: "Ukraine", dialCode: "+380", emoji: "🇺🇦" },
  { code: "TR", name: "Turkey", dialCode: "+90", emoji: "🇹🇷" },
  { code: "IL", name: "Israel", dialCode: "+972", emoji: "🇮🇱" },
  { code: "AE", name: "United Arab Emirates", dialCode: "+971", emoji: "🇦🇪" },
  { code: "SA", name: "Saudi Arabia", dialCode: "+966", emoji: "🇸🇦" },
  { code: "IN", name: "India", dialCode: "+91", emoji: "🇮🇳" },
  { code: "PK", name: "Pakistan", dialCode: "+92", emoji: "🇵🇰" },
  { code: "BD", name: "Bangladesh", dialCode: "+880", emoji: "🇧🇩" },
  { code: "CN", name: "China", dialCode: "+86", emoji: "🇨🇳" },
  { code: "JP", name: "Japan", dialCode: "+81", emoji: "🇯🇵" },
  { code: "KR", name: "South Korea", dialCode: "+82", emoji: "🇰🇷" },
  { code: "TW", name: "Taiwan", dialCode: "+886", emoji: "🇹🇼" },
  { code: "HK", name: "Hong Kong", dialCode: "+852", emoji: "🇭🇰" },
  { code: "SG", name: "Singapore", dialCode: "+65", emoji: "🇸🇬" },
  { code: "MY", name: "Malaysia", dialCode: "+60", emoji: "🇲🇾" },
  { code: "TH", name: "Thailand", dialCode: "+66", emoji: "🇹🇭" },
  { code: "VN", name: "Vietnam", dialCode: "+84", emoji: "🇻🇳" },
  { code: "ID", name: "Indonesia", dialCode: "+62", emoji: "🇮🇩" },
  { code: "PH", name: "Philippines", dialCode: "+63", emoji: "🇵🇭" },
  { code: "NZ", name: "New Zealand", dialCode: "+64", emoji: "🇳🇿" },
  { code: "BR", name: "Brazil", dialCode: "+55", emoji: "🇧🇷" },
  { code: "MX", name: "Mexico", dialCode: "+52", emoji: "🇲🇽" },
  { code: "AR", name: "Argentina", dialCode: "+54", emoji: "🇦🇷" },
  { code: "CO", name: "Colombia", dialCode: "+57", emoji: "🇨🇴" },
  { code: "CL", name: "Chile", dialCode: "+56", emoji: "🇨🇱" },
  { code: "PE", name: "Peru", dialCode: "+51", emoji: "🇵🇪" },
  { code: "VE", name: "Venezuela", dialCode: "+58", emoji: "🇻🇪" },
  { code: "EC", name: "Ecuador", dialCode: "+593", emoji: "🇪🇨" },
  { code: "UY", name: "Uruguay", dialCode: "+598", emoji: "🇺🇾" },
  { code: "PY", name: "Paraguay", dialCode: "+595", emoji: "🇵🇾" },
  { code: "BO", name: "Bolivia", dialCode: "+591", emoji: "🇧🇴" },
  { code: "ZA", name: "South Africa", dialCode: "+27", emoji: "🇿🇦" },
  { code: "NG", name: "Nigeria", dialCode: "+234", emoji: "🇳🇬" },
  { code: "EG", name: "Egypt", dialCode: "+20", emoji: "🇪🇬" },
  { code: "KE", name: "Kenya", dialCode: "+254", emoji: "🇰🇪" },
  { code: "GH", name: "Ghana", dialCode: "+233", emoji: "🇬🇭" },
  { code: "MA", name: "Morocco", dialCode: "+212", emoji: "🇲🇦" },
  { code: "TN", name: "Tunisia", dialCode: "+216", emoji: "🇹🇳" },
  { code: "DZ", name: "Algeria", dialCode: "+213", emoji: "🇩🇿" },
  { code: "UZ", name: "Uzbekistan", dialCode: "+998", emoji: "🇺🇿" },
  { code: "KZ", name: "Kazakhstan", dialCode: "+7", emoji: "🇰🇿" },
];

export function CTASection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    countryCode: "US",
    leadershipRole: "",
    areaOfInquiry: [] as string[],
    source: "",
  });
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCountry =
    countries.find((c) => c.code === formData.countryCode) || countries[0];

  // Check if step 1 required fields are filled
  const isStep1Valid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.company.trim() !== "" &&
    formData.email.trim() !== "";

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      country.dialCode.includes(countrySearch) ||
      country.code.toLowerCase().includes(countrySearch.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCountryDropdownOpen(false);
        setCountrySearch("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const leadershipRoles = [
    "Politician/Public Servant",
    "Non-Profit Director",
    "Philanthropist/Humanitarian",
    "Architect/Engineer",
    "Creative/Artist",
    "Researcher/Academic",
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
    "Referral",
    "Social Media",
    "Advertisement",
    "Google Search",
    "Event",
    "Other",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          countryDialCode: selectedCountry.dialCode,
        }),
      });

      if (response.ok) {
        toast.success("Message sent!", {
          description:
            "Thank you for reaching out. We'll get back to you soon.",
        });
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          phone: "",
          countryCode: "US",
          leadershipRole: "",
          areaOfInquiry: [],
          source: "",
        });
        setStep(1);
      } else {
        toast.error("Failed to send message", {
          description:
            "Something went wrong. Please try again or contact us directly.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message", {
        description:
          "Something went wrong. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
          <div className="relative overflow-hidden rounded-3xl border border-neutral-800 min-h-[500px] lg:min-h-[700px]">
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
          </div>

          {/* Right side - Form */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-[500px] lg:min-h-[700px]">
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
              {step === 1 ? (
                <div className="flex-1 flex flex-col">
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
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="bg-transparent border border-neutral-700 rounded-lg px-4 h-[46px] focus-visible:ring-0 focus-visible:border-white transition-colors"
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
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="bg-transparent border border-neutral-700 rounded-lg px-4 h-[46px] focus-visible:ring-0 focus-visible:border-white transition-colors"
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
                        placeholder="Acme Inc."
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-transparent border border-neutral-700 rounded-lg px-4 h-[46px] focus-visible:ring-0 focus-visible:border-white transition-colors"
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
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-transparent border border-neutral-700 rounded-lg px-4 h-[46px] focus-visible:ring-0 focus-visible:border-white transition-colors"
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
                        <div className="flex gap-2">
                          {/* Country Code Dropdown */}
                          <div className="relative" ref={dropdownRef}>
                            <button
                              type="button"
                              onClick={() =>
                                setIsCountryDropdownOpen(!isCountryDropdownOpen)
                              }
                              className="flex items-center gap-2 bg-transparent border border-neutral-700 rounded-lg px-3 h-[46px] text-foreground focus:outline-none focus:border-white transition-colors min-w-[90px] justify-between"
                            >
                              <img
                                src={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`}
                                width={24}
                                height={16}
                                alt={selectedCountry.name}
                                className="object-cover"
                              />
                              <svg
                                className={`w-4 h-4 transition-transform ${isCountryDropdownOpen ? "rotate-180" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>

                            {isCountryDropdownOpen && (
                              <div className="absolute top-full left-0 mt-1 w-[280px] bg-neutral-900 border border-neutral-700 rounded-lg shadow-xl z-50 max-h-[300px] overflow-hidden">
                                {/* Search Input */}
                                <div className="p-2 border-b border-neutral-700">
                                  <div className="relative">
                                    <svg
                                      className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                      />
                                    </svg>
                                    <input
                                      type="text"
                                      placeholder="Search"
                                      value={countrySearch}
                                      onChange={(e) =>
                                        setCountrySearch(e.target.value)
                                      }
                                      className="w-full bg-neutral-800 border border-neutral-700 rounded-md pl-9 pr-3 py-2 text-sm text-foreground focus:outline-none focus:border-neutral-500"
                                      autoFocus
                                    />
                                  </div>
                                </div>

                                {/* Country List */}
                                <div className="overflow-y-auto max-h-60">
                                  {filteredCountries.map((country) => (
                                    <button
                                      key={country.code}
                                      type="button"
                                      onClick={() => {
                                        setFormData({
                                          ...formData,
                                          countryCode: country.code,
                                        });
                                        setIsCountryDropdownOpen(false);
                                        setCountrySearch("");
                                      }}
                                      className={`w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-neutral-800 transition-colors ${
                                        formData.countryCode === country.code
                                          ? "bg-neutral-800"
                                          : ""
                                      }`}
                                    >
                                      <img
                                        src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                                        width={20}
                                        height={14}
                                        alt={country.name}
                                        className="object-cover"
                                      />
                                      <span className="text-sm text-foreground">
                                        {country.name}
                                      </span>
                                      <span className="text-sm text-neutral-500 ml-auto">
                                        {country.dialCode}
                                      </span>
                                    </button>
                                  ))}
                                  {filteredCountries.length === 0 && (
                                    <div className="px-3 py-4 text-sm text-neutral-500 text-center">
                                      No countries found
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Phone Number Input */}
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(555) 000-0000"
                            value={formData.phone}
                            onChange={handleChange}
                            className="flex-1 bg-transparent border border-neutral-700 rounded-lg px-4 h-[46px] focus-visible:ring-0 focus-visible:border-white transition-colors truncate"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Next button */}
                  <div className="flex justify-end mt-8">
                    <Button
                      type="button"
                      onClick={handleNext}
                      disabled={!isStep1Valid}
                      className="bg-cyan-400 hover:bg-cyan-300 text-black font-medium px-8 py-3 rounded-lg text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col">
                  <div className="space-y-6 flex-1">
                    {/* Leadership Role */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="leadershipRole"
                        className="text-sm font-medium text-muted-foreground"
                      >
                        Leadership Role <span className="text-red-400">*</span>
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
                      disabled={isSubmitting}
                      className="bg-neutral-800 hover:bg-neutral-700 text-white font-medium px-8 py-3 rounded-lg text-base transition-colors disabled:opacity-50"
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-cyan-400 hover:bg-cyan-300 text-black font-medium px-8 py-3 rounded-lg text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin h-4 w-4"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
