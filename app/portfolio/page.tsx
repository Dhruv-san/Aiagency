"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

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
          <div className="grid grid-cols-1 gap-32">
            {/* Main Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
              className="relative aspect-[4/5] md:aspect-video bg-zinc-100 overflow-hidden"
            >
              <Image
                src="/images/portfolio-main.png"
                alt="Zeno Portfolio Piece"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Placeholder for future images */}
            <div className="grid md:grid-cols-2 gap-8">
               <div className="aspect-square bg-zinc-50 border border-zinc-100 flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-300">Archive_002 / Upcoming</span>
               </div>
               <div className="aspect-square bg-zinc-50 border border-zinc-100 flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-300">Archive_003 / Upcoming</span>
               </div>
            </div>
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
