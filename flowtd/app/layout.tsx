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
      <body className="antialiased glass-bg min-h-screen">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}