import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/lb_long_icon.png"
            alt="The Louvreblanc"
            width={300}
            height={60}
            className="h-12 w-auto"
          />
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <Link
            href="/"
            className="text-foreground hover:underline transition-all duration-300 cursor-pointer"
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className="text-foreground hover:underline transition-all duration-300 cursor-pointer"
          >
            Portfolio
          </Link>
          <Link
            href="/services"
            className="text-foreground hover:underline transition-all duration-300 cursor-pointer"
          >
            Services
          </Link>
          <Link
            href="/leadership"
            className="text-foreground hover:underline transition-all duration-300 cursor-pointer"
          >
            Leadership
          </Link>
          <Link
            href="/resources"
            className="text-foreground hover:underline transition-all duration-300 cursor-pointer"
          >
            Resources
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-muted hover:bg-[#d4af37]/20 flex items-center justify-center transition-all duration-300 cursor-pointer group"
            aria-label="LinkedIn"
          >
            <svg
              className="w-6 h-6 text-foreground group-hover:text-[#d4af37] transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-muted hover:bg-[#d4af37]/20 flex items-center justify-center transition-all duration-300 cursor-pointer group"
            aria-label="Twitter"
          >
            <svg
              className="w-6 h-6 text-foreground group-hover:text-[#d4af37] transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-muted hover:bg-[#d4af37]/20 flex items-center justify-center transition-all duration-300 cursor-pointer group"
            aria-label="Facebook"
          >
            <svg
              className="w-6 h-6 text-foreground group-hover:text-[#d4af37] transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          © {currentYear} The Louvreblanc Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
