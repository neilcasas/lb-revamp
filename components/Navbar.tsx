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
            ? "bg-black/80 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/lb_long_icon.png"
                alt="The Louvreblanc"
                width={200}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  className={`text-sm font-medium transition-colors hover:text-[#d4af37] ${
                    pathname === item.link ? "text-[#d4af37]" : "text-white"
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
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className={`text-3xl font-normal transition-colors hover:text-[#d4af37] ${
                pathname === item.link ? "text-[#d4af37]" : "text-white"
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
