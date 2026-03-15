import React from 'react';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Services from './Services';
import Process from './Process';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <>
      <Hero />
      
      <section id="about-preview" className="section-padding glass">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-brand-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 inline-block"
              >
                Who We Are
              </motion.span>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8">
                WE ARE <br /> <span className="text-brand-primary">WIT.</span>
              </h2>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-10">
                A collective of creative minds, strategic thinkers, and digital pioneers. We don't just build websites or design logos; we create lasting connections between brands and people.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl md:text-4xl font-display font-bold text-brand-primary">10+</h4>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl md:text-4xl font-display font-bold text-brand-primary">200+</h4>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Projects Delivered</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] md:aspect-square rounded-[2rem] overflow-hidden"
            >
              <img 
                src="https://picsum.photos/seed/agency/800/800" 
                alt="Our Agency" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      <Services />
      <Process />
      <Portfolio limit={6} />
    </>
  );
}
