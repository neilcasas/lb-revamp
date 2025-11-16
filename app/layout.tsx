import type { Metadata } from "next";
import { Instrument_Serif, Montserrat } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Louvreblanc Consulting",
  description: "A powerful strategic mechanism for the powerful",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${instrumentSerif.variable} ${montserrat.variable} antialiased flex flex-col min-h-screen`}
      >
        <SmoothScrollProvider>
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
