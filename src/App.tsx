import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import Blog from './pages/Blog';
import ContactPage from './pages/ContactPage';
import { motion, useScroll, useSpring } from 'motion/react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <ScrollToTop />
      <main className="relative">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[60] origin-left"
          style={{ scaleX }}
        />

        {/* 3D Background */}
        <ThreeBackground />

        {/* Navigation */}
        <Navbar />

        {/* Content Sections */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          
          {/* Global Footer */}
          <Contact />
        </div>
      </main>
    </Router>
  );
}
