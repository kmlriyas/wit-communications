import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="max-w-full lg:max-w-[70%] text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.85] mb-8"
          >
            WE BUILD <span className="text-stroke">FUTURE</span> <br />
            <span className="text-brand-primary">BRANDS</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/60 text-sm md:text-lg mb-10 leading-relaxed"
          >
            Wit Communications is a creative powerhouse dedicated to transforming startups into industry leaders through bold design and disruptive technology.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-start gap-4"
          >
            <button className="btn-primary flex items-center gap-2 group w-full sm:w-auto justify-center">
              Explore Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="flex items-center gap-3 px-6 py-3 text-sm font-bold uppercase tracking-wider hover:text-brand-primary transition-colors group w-full sm:w-auto justify-center">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-primary transition-colors">
                <Play className="w-4 h-4 fill-current" />
              </div>
              Watch Showreel
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>
    </section>
  );
}
