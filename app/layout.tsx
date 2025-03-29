import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BackgroundGlow } from "@/components/background-glow";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shivam - MERN Developer | JavaScript Programmer",
  description:
    "Personal portfolio website of Shivam, a MERN Developer and JavaScript Programmer",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark">
          <BackgroundGlow />
          <main className="min-h-screen flex flex-col items-center justify-center py-8 px-4">
            <div className="w-full max-w-4xl">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
