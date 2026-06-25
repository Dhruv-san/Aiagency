"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, ChevronRight, ArrowRight, ChevronRight } from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative min-h-screen">
      {/* Navigation - Ultra Minimalist */}
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-8 py-12 flex justify-between items-center">
        <Link href="/" className="text-xl font-black uppercase tracking-[0.3em] text-white">Zeno</Link>
        <div className="flex gap-12 items-center">
          <Link href="/portfolio" className="text-[10px] font-bold uppercase tracking-widest text-white hover:opacity-50 transition-opacity">Portfolio</Link>
          <Link href="/contact" className="text-[10px] font-bold uppercase tracking-widest text-white hover:opacity-50 transition-opacity">Contact</Link>
          <div className="w-12 h-[1px] bg-white opacity-20" />
          <button className="group relative">
             <div className="w-8 h-[2px] bg-white mb-2 group-hover:w-4 transition-all" />
             <div className="w-8 h-[2px] bg-white group-hover:w-12 transition-all" />
          </button>
        </div>
      </nav>

      {/* Hero Section - High Fashion Editorial */}
      <section className="h-screen flex items-center justify-center px-8 relative overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-100 rounded-full blur-[120px] opacity-50 animate-pulse" />
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-200 rounded-full blur-[120px] opacity-30" />
        </div>

        <div className="z-10 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] uppercase tracking-[0.8em] text-zinc-400 mb-8 block font-black">Visual Engineering Studio</span>
            <h1 className="text-8xl md:text-[14vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">
               Future<br />
               <span className="text-zinc-200">Archive.</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
               <Link href="/contact" className="bg-black text-white px-12 py-6 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-4">
                 Book a Session <ChevronRight className="w-4 h-4" />
               </Link>
               <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 max-w-[200px] text-left leading-relaxed">
                 Elite AI production for brands that demand perfection.
               </p>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-12 flex gap-8 items-center z-10">
           <div className="flex gap-2">
             <div className="w-1 h-1 bg-black rounded-full" />
             <div className="w-1 h-1 bg-zinc-200 rounded-full" />
             <div className="w-1 h-1 bg-zinc-200 rounded-full" />
           </div>
           <span className="text-[8px] font-bold uppercase tracking-[0.3em]">Scroll to Explore</span>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-48 px-8 bg-black text-white relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 mb-12 block">The Zeno Manifesto</span>
            <h2 className="text-4xl md:text-7xl font-light leading-[1.1] mb-16 italic">
              &quot;We don&apos;t create &apos;AI art.&apos; We engineer <span className="font-bold not-italic">high-end commercial photography</span> using advanced digital engines. If it looks like AI, we didn&apos;t do it.&quot;
            </h2>
            <div className="grid md:grid-cols-3 gap-12 border-t border-zinc-800 pt-16">
               <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4">The Problem</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">Traditional shoots take weeks and cost millions. Generic AI looks cheap and synthetic.</p>
               </div>
               <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4">The Solution</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">Zeno bridges the gap. Proprietary pipelines meets elite human art direction.</p>
               </div>
               <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4">The Result</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">Flawless, magazine-quality visuals delivered on demand. No artifacts.</p>
               </div>
            </div>
          </motion.div>
        </div>
        {/* Background Text Decor */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[30vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
          MANIFESTO MANIFESTO
        </div>
      </section>

      {/* Product Showcase - Personal Branding */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
              className="relative aspect-[4/5] bg-zinc-100 overflow-hidden"
            >
              <Image
                src="/images/personal-branding.jpg"
                alt="Elite Personal Branding"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-[filter] duration-1000"
              />
            </motion.div>
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-6 block">01 / Personal Branding</span>
              <h2 className="text-5xl font-bold mb-8 leading-tight uppercase tracking-tighter">Organic Character.</h2>
              <p className="text-lg text-zinc-600 font-light leading-relaxed mb-8">
                Character-driven headshots and lifestyle portraits that look completely organic. We engineer lighting, texture, and soul into every pixel.
              </p>
              <div className="flex gap-4">
                 <span className="px-4 py-2 border border-zinc-200 rounded-full text-[10px] uppercase tracking-widest font-bold">Flawless</span>
                 <span className="px-4 py-2 border border-zinc-200 rounded-full text-[10px] uppercase tracking-widest font-bold">Organic</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Showcase - E-commerce */}
      <section className="py-32 px-8 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <motion.div
               className="order-2 md:order-1"
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-6 block">02 / E-Commerce</span>
              <h2 className="text-5xl font-bold mb-8 leading-tight uppercase tracking-tighter">Global Scale.</h2>
              <p className="text-lg text-zinc-600 font-light leading-relaxed mb-8">
                Photorealistic model and product campaigns in any setting globally. From the streets of Tokyo to a minimalist studio in Paris—without the travel budget.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] border-b-2 border-black pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-colors">
                View Campaign Details
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
              className="relative aspect-[4/5] bg-zinc-100 overflow-hidden order-1 md:order-2"
            >
              <Image
                src="/images/ecommerce.jpg"
                alt="E-Commerce & High-Fashion"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Showcase - Brand Imagery */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-24">
           <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-6 block">03 / Premium Brand Imagery</span>
           <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">Editorial Excellence.</h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-video bg-zinc-100 overflow-hidden rounded-sm"
            >
              <Image
                src="/images/brand-imagery.jpg"
                alt="Premium Brand Imagery"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
                 <p className="text-white text-xl font-light max-w-lg">
                   Editorial-grade visuals for websites, social campaigns, and digital assets. Pristine, authentic imagery delivered on demand.
                 </p>
              </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-48 px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
           <div className="mb-24">
              <h2 className="text-6xl font-bold tracking-tighter uppercase">Our Capability</h2>
           </div>
           <div className="grid md:grid-cols-3 gap-px bg-zinc-800">
              {[
                { title: "E-Commerce", desc: "Global campaigns with photorealistic models." },
                { title: "High-Fashion", desc: "Editorial-grade visuals for premium labels." },
                { title: "Personal Branding", desc: "Character-driven lifestyle portraits." },
                { title: "Art Direction", desc: "Elite human oversight on every render." },
                { title: "Custom Pipelines", desc: "Proprietary AI for brand-specific styles." },
                { title: "Rapid Scaling", desc: "From concept to final render in days." }
              ].map((service, i) => (
                <div key={i} className="bg-black p-12 hover:bg-zinc-900 transition-colors group">
                   <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{service.title}</h3>
                   <p className="text-zinc-500 text-sm leading-relaxed mb-8">{service.desc}</p>
                   <div className="w-8 h-px bg-zinc-700 group-hover:w-full transition-all duration-500" />
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Portfolio CTA */}
      <section className="py-32 px-8 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
              className="relative aspect-[16/9] bg-zinc-100 overflow-hidden"
            >
              <Image
                src="/images/portfolio-main.png"
                alt="Zeno Portfolio Teaser"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-[filter] duration-1000"
              />
            </motion.div>
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-6 block">Explore Our Work</span>
              <h2 className="text-5xl font-bold mb-8 leading-tight uppercase tracking-tighter">The Portfolio.</h2>
              <p className="text-lg text-zinc-600 font-light leading-relaxed mb-8">
                A curated selection of our most challenging and successful visual engineering projects. Pushing the boundaries of what is possible.
              </p>
              <Link href="/portfolio" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] border-b-2 border-black pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-colors">
                View Full Portfolio
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="h-screen flex flex-col items-center justify-center bg-white text-center px-8 relative overflow-hidden">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
        >
          <h2 className="text-7xl md:text-[12vw] font-black uppercase tracking-tighter mb-12">
            Ready to<br />Evolve?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-6 bg-black text-white px-16 py-8 rounded-full text-xl font-bold uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Start Inquiry <ArrowRight className="w-6 h-6" />
          </Link>
          <p className="mt-12 text-zinc-400 text-sm uppercase tracking-[0.4em]">Response within 24 hours</p>
        </motion.div>

        <div className="absolute bottom-12 text-[10px] uppercase tracking-[0.4em] text-zinc-300">
          Zeno Studio © 2024
        </div>
      </section>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1 bg-black origin-left z-[60]"
        style={{ scaleX: smoothProgress }}
      />
    </main>
  );
}
