import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FlowTD - Trusted Extension of Your Mind",
  description: "FlowTD transforms task management from a burden into a strategic advantage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen">
        <div className="fixed inset-0 bg-gradient-to-br from-blue-100/50 via-purple-100/30 to-pink-100/50 pointer-events-none" />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}