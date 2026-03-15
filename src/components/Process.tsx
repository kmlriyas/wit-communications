import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your startup's vision, market, and competition to find your unique edge."
  },
  {
    number: "02",
    title: "Strategy",
    description: "Crafting a precise roadmap that aligns your goals with user needs and market opportunities."
  },
  {
    number: "03",
    title: "Design",
    description: "Creating bold, high-fidelity visual languages that resonate with your target audience."
  },
  {
    number: "04",
    title: "Launch",
    description: "Executing a flawless rollout with data-driven optimization for maximum impact."
  }
];

export default function Process() {
  return (
    <section className="section-padding bg-brand-gray/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs"
            >
              Our Methodology
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-display text-3xl md:text-5xl font-bold tracking-tighter mt-4"
            >
              HOW WE <span className="text-stroke">ACCELERATE</span> YOUR GROWTH
            </motion.h2>
          </div>
          <p className="text-white/50 max-w-xs text-sm md:text-base">
            A systematic approach designed specifically for the fast-paced startup ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="font-display text-6xl md:text-8xl font-bold text-white/5 group-hover:text-brand-primary/10 transition-colors duration-500 absolute -top-10 -left-4 -z-10">
                {step.number}
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold mb-4 group-hover:text-brand-primary transition-colors">{step.title}</h3>
              <p className="text-white/50 text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
              <div className="w-full h-px bg-white/10 mt-8 group-hover:bg-brand-primary/30 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
