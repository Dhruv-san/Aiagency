import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zeno | Premium AI Photoshoot Studio",
  description: "Hyper-realistic, magazine-quality visuals for forward-thinking brands. Zero plastic, all soul.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-black overflow-x-hidden`}>
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
