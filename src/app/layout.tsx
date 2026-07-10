import type { Metadata } from "next";
import { Space_Grotesk, Urbanist } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TGT Nexus",
  description: "TGT Nexus - Full-service web development and design company",
  icons: {
    icon: "/assets/logo-mark.svg",
    shortcut: "/assets/logo-mark.svg",
    apple: "/assets/logo-mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${urbanist.variable} antialiased`}
    >
      <body className="bg-[#f3f4f6] text-[#030712]">{children}</body>
    </html>
  );
}
