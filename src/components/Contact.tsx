import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <footer id="contact" className="section-padding bg-brand-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 inline-block"
            >
              Get in Touch
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.85] mb-12"
            >
              LET'S BUILD <br /> SOMETHING <br />
              <span className="text-stroke">LEGENDARY.</span>
            </motion.h2>
            
            <div className="space-y-6">
              <a href="mailto:hello@witcommunications.in" className="flex items-center gap-4 text-lg md:text-2xl font-display font-bold hover:text-brand-primary transition-colors group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                hello@witcommunications.in
              </a>
              <a href="tel:+910000000000" className="flex items-center gap-4 text-lg md:text-2xl font-display font-bold hover:text-brand-primary transition-colors group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-primary transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                +91 000 000 0000
              </a>
              <div className="flex items-center gap-4 text-lg md:text-2xl font-display font-bold group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                Bangalore, India
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <form className="space-y-8 glass p-8 md:p-12 rounded-[2.5rem]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-brand-primary outline-none transition-colors text-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-brand-primary outline-none transition-colors text-sm" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Message</label>
                <textarea rows={3} className="w-full bg-transparent border-b border-white/10 py-3 focus:border-brand-primary outline-none transition-colors resize-none text-sm" placeholder="Tell us about your project..." />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full flex items-center justify-center gap-2 group"
              >
                Send Message
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>

            <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start">
              {[
                { icon: Instagram, name: 'Instagram' },
                { icon: Twitter, name: 'Twitter' },
                { icon: Linkedin, name: 'LinkedIn' }
              ].map((social) => (
                <a key={social.name} href="#" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-brand-primary transition-colors">
                  <social.icon className="w-4 h-4" /> {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
          <p>© 2026 WIT COMMUNICATIONS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
