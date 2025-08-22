import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HomeNavbar from "@portfolio/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Firas Mosbehi",
  description: "Firas Mosbehi Portfolio", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="dWRISc3-7YweJASb5n2ijKWi2bbmaLQDIOk4hI22_O8" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen lg:h-screen flex flex-col`}
      >
        <HomeNavbar />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
