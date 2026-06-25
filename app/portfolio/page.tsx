"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const portfolioImages = [
  "/images/portfolio-main.png",
  "/images/portfolio-2.png",
  "/images/portfolio-3.png",
  "/images/portfolio-4.png",
  "/images/portfolio-5.png",
  "/images/portfolio-6.png",
  "/images/portfolio-7.png",
  "/images/portfolio-8.png",
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 md:px-8 py-8 md:py-12 flex justify-between items-center">
        <Link href="/" className="text-xl font-black uppercase tracking-[0.3em] text-white">Zeno</Link>
        <Link href="/contact" className="text-[10px] font-bold uppercase tracking-widest text-white hover:opacity-50 transition-opacity">Contact</Link>
      </nav>

      {/* Hero / Header */}
      <section className="pt-48 pb-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-zinc-400 hover:text-black transition-colors mb-12">
              <ArrowLeft className="w-3 h-3" /> Back to Studio
            </Link>
            <h1 className="text-7xl md:text-[10vw] break-words hyphens-auto max-w-full font-black uppercase tracking-tighter leading-[0.8] mb-8">
              The<br />Portfolio.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Image Grid / Content */}
      <section className="px-6 md:px-8 pb-48">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioImages.map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: (index % 2) * 0.2,
                  ease: [0.77, 0, 0.175, 1]
                }}
                className="relative aspect-square bg-zinc-100 overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Zeno Portfolio Piece ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority={index < 4}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-8 border-t border-zinc-100 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-400">
          All visuals engineered by Zeno Studio © 2024
        </p>
      </footer>
    </main>
  );
}
