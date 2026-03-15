import React from 'react';
import { motion } from 'motion/react';
import { Palette, Globe, Megaphone, PenTool, Zap, Users, Rocket, Target, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: "MVP Development",
    description: "Rapid prototyping and development for startups to validate ideas and launch fast."
  },
  {
    icon: Target,
    title: "Pitch Deck Design",
    description: "Compelling visual storytelling that helps startups secure funding and win investors."
  },
  {
    icon: BarChart3,
    title: "Growth Hacking",
    description: "Data-driven marketing strategies designed to scale your user base exponentially."
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Crafting unique visual languages that define your startup's soul and market position."
  },
  {
    icon: Globe,
    title: "Web Experiences",
    description: "Immersive, high-performance digital products built with cutting-edge tech."
  },
  {
    icon: Megaphone,
    title: "Digital Strategy",
    description: "Comprehensive roadmaps to navigate the complex digital landscape and dominate."
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs"
          >
            Startup Solutions
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mt-4"
          >
            FUELING <span className="text-stroke">INNOVATION</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 md:p-10 rounded-[2rem] hover:bg-white/10 transition-all duration-500 group border-white/5"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-brand-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <service.icon className="w-6 h-6 md:w-8 md:h-8 text-brand-primary group-hover:text-brand-black transition-colors" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold mb-4 group-hover:text-brand-primary transition-colors">{service.title}</h3>
              <p className="text-white/50 text-sm md:text-base leading-relaxed group-hover:text-white/80 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
