import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <span className="text-brand-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">About Us</span>
          <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tighter mt-4">
            CRAFTING <br /> THE FUTURE OF <br /> <span className="text-stroke">COMMUNICATION</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-8 text-xl text-white/70 leading-relaxed">
            <p>
              Founded with a vision to bridge the gap between technology and creativity, Wit Communications has evolved into a powerhouse of digital innovation. We believe that every brand has a story worth telling, and we use our expertise to ensure that story is heard loud and clear.
            </p>
            <p>
              Our team is a diverse mix of designers, developers, and strategists who share a common passion for excellence. We push the boundaries of what's possible, constantly exploring new technologies and design trends to keep our clients ahead of the curve.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-4xl font-display font-bold text-brand-primary mb-2">100%</h3>
              <p className="text-sm uppercase tracking-widest font-bold opacity-60">Client Satisfaction</p>
            </div>
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-4xl font-display font-bold text-brand-primary mb-2">15+</h3>
              <p className="text-sm uppercase tracking-widest font-bold opacity-60">Industry Awards</p>
            </div>
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-4xl font-display font-bold text-brand-primary mb-2">24/7</h3>
              <p className="text-sm uppercase tracking-widest font-bold opacity-60">Support & Care</p>
            </div>
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-4xl font-display font-bold text-brand-primary mb-2">50+</h3>
              <p className="text-sm uppercase tracking-widest font-bold opacity-60">Creative Minds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
