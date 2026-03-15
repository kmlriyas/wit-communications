import React from 'react';
import { motion } from 'motion/react';
import { projects } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';

export default function Portfolio({ limit }: { limit?: number }) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs"
            >
              Portfolio
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mt-4"
            >
              CRAFTING <span className="text-stroke">LEGACIES</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-white/50 text-sm md:text-base"
          >
            A glimpse into our world of branding, digital strategy, and creative storytelling for the next generation of startups.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-brand-gray/50 border border-white/5">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-brand-primary flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <ArrowUpRight className="text-brand-black w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <span className="text-brand-primary font-bold text-[10px] uppercase tracking-[0.2em]">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mt-2 group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="text-white/20 font-display font-bold text-2xl md:text-3xl">
                  0{index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
