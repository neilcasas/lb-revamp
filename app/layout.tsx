import type { Metadata } from "next";
import { Teachers, Montserrat } from "next/font/google";
import "./globals.css";

const teachers = Teachers({
  variable: "--font-teacher",
  subsets: ["latin"],
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
        className={`${teachers.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
