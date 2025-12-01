"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Squeeze as Hamburger } from "hamburger-react";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "Home", link: "/" },
  { label: "Portfolio", link: "/portfolio" },
  { label: "Services", link: "/services" },
  { label: "Leadership", link: "/leadership" },
  { label: "Resources", link: "/resources" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#141416]/95 backdrop-blur-lg border-b border-white/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-2 sm:py-3">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/lb_long.png"
                alt="The Louvreblanc"
                width={200}
                height={40}
                className="h-10 w-auto sm:h-12 lg:h-14"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  className={`text-sm font-medium transition-colors border-b-2 pb-1 ${
                    pathname === item.link
                      ? "text-white border-white"
                      : "text-white/70 border-transparent hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden">
              <Hamburger
                toggled={mobileMenuOpen}
                toggle={setMobileMenuOpen}
                size={24}
                color="#ffffff"
                duration={0.3}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#141416]/95 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className={`text-3xl font-normal transition-colors border-b-2 pb-1 ${
                pathname === item.link
                  ? "text-white border-white"
                  : "text-white/70 border-transparent hover:text-white"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
