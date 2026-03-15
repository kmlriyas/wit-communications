import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 glass shadow-lg' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative h-10 w-auto flex items-center">
            <img 
              src="/logo.png" 
              alt="Wit Communications" 
              className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.querySelector('.logo-fallback')?.classList.remove('hidden');
              }}
            />
            <div className="logo-fallback hidden flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center">
                <span className="text-brand-black text-lg font-black">W</span>
              </div>
              <span className="font-display text-xl font-bold tracking-tighter">WIT</span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
                location.pathname === link.href ? 'text-brand-primary' : 'text-white/70 hover:text-brand-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary !py-2 !px-5"
          >
            Start a Project
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-brand-black/98 backdrop-blur-2xl border-b border-white/10 overflow-hidden lg:hidden"
          >
            <div className="flex flex-col gap-6 items-center py-12 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xl font-display font-bold uppercase tracking-widest transition-colors ${
                    location.pathname === link.href ? 'text-brand-primary' : 'text-white/70 hover:text-brand-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button className="btn-primary w-full max-w-xs mt-4">
                Start a Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
