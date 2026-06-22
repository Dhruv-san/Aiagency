"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, CheckCircle2, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call for that premium feel
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-50 -z-10" />

      {/* Navigation */}
      <nav className="p-12">
        <Link href="/" className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.4em] hover:text-zinc-500 transition-colors">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
          Return to Studio
        </Link>
      </nav>

      <div className="max-w-7xl mx-auto px-12 grid lg:grid-cols-2 gap-24 pt-12 pb-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-400 mb-8 block">Inquiry</span>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase mb-12">
            Let&apos;s<br />Engineer<br /><span className="text-zinc-200">Vision.</span>
          </h1>
          <div className="space-y-8 text-sm tracking-wide text-zinc-500 max-w-sm">
             <p>Our production pipeline is currently at high capacity. We prioritize brands that push the boundaries of digital commerce and fashion.</p>
             <p className="font-bold text-black uppercase tracking-widest pt-4">Expected response: &lt; 24 Hours</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] rounded-sm relative"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="space-y-12">
                <div className="relative group">
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    placeholder=" "
                    className="peer w-full border-b border-zinc-200 py-4 focus:border-black outline-none transition-colors text-xl font-light bg-transparent"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 top-4 text-[10px] uppercase tracking-[0.4em] text-zinc-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-black peer-[:not(:placeholder-shown)]:-top-4"
                  >
                    Full Name
                  </label>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      placeholder=" "
                      className="peer w-full border-b border-zinc-200 py-4 focus:border-black outline-none transition-colors text-xl font-light bg-transparent"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 top-4 text-[10px] uppercase tracking-[0.4em] text-zinc-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-black peer-[:not(:placeholder-shown)]:-top-4"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative group">
                    <input
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder=" "
                      className="peer w-full border-b border-zinc-200 py-4 focus:border-black outline-none transition-colors text-xl font-light bg-transparent"
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-0 top-4 text-[10px] uppercase tracking-[0.4em] text-zinc-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-black peer-[:not(:placeholder-shown)]:-top-4"
                    >
                      Phone Number
                    </label>
                  </div>
                </div>

                <div className="relative group">
                  <textarea
                    rows={4}
                    id="message"
                    name="message"
                    placeholder=" "
                    className="peer w-full border-b border-zinc-200 py-4 focus:border-black outline-none transition-colors text-xl font-light bg-transparent resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 top-4 text-[10px] uppercase tracking-[0.4em] text-zinc-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-black peer-[:not(:placeholder-shown)]:-top-4"
                  >
                    Project Brief / Inquiry
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group relative w-full bg-black text-white px-12 py-6 overflow-hidden rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] disabled:bg-zinc-300 disabled:scale-100"
              >
                <div className="relative z-10 flex items-center justify-center gap-3 text-xs font-black uppercase tracking-[0.4em]">
                  {loading ? "Transmitting..." : (
                    <>
                      Submit Inquiry <Send className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </div>
                <div className="absolute inset-0 bg-zinc-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center"
            >
              <div className="w-24 h-24 bg-zinc-950 rounded-full flex items-center justify-center mx-auto mb-12">
                 <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-6 tracking-tighter uppercase">Transmission Sent.</h2>
              <p className="text-zinc-500 text-lg font-light leading-relaxed mb-12">
                Your vision has been received. Our team will review your inquiry and contact you within <span className="text-black font-bold">24 hours</span>.
              </p>
              <Link
                href="/"
                className="inline-block text-[10px] font-black uppercase tracking-[0.5em] border-b-2 border-black pb-2 hover:text-zinc-400 hover:border-zinc-200 transition-all"
              >
                Return to Gallery
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>

      <footer className="fixed bottom-12 left-12 mix-blend-difference text-white">
         <p className="text-[10px] font-bold tracking-[0.5em] uppercase opacity-40 italic">Zeno Digital Studio / Est. 2024</p>
      </footer>
    </main>
  );
}
