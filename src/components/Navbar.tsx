import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Github, Linkedin, FileText, Mail } from "lucide-react";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Stack", href: "#stack" },
    { name: "Journey", href: "#journey" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-3 bg-slate-950/80 backdrop-blur-md border-b border-slate-800" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group"
        >
          <div className="w-8 h-8 rounded-full border border-slate-800 overflow-hidden bg-slate-900 flex-shrink-0 grayscale group-hover:grayscale-0 transition-all">
            <img
               src={`${import.meta.env.BASE_URL}profile2.png`}
               alt="Mukul Ranjan"
               referrerPolicy="no-referrer"
               className="w-full h-full object-cover grayscale brightness-110 hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 font-bold group-hover:text-white transition-colors">MUKUL / 2024</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[11px] uppercase tracking-widest font-semibold text-slate-500 hover:text-slate-200 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            onClick={() => window.open('/resume.pdf', '_blank')}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-4 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-tighter hover:bg-brand transition-colors"
          >
            Resume.pdf
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-400 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-zinc-400 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex space-x-6 pt-4 border-t border-white/5">
                <Github size={20} className="text-zinc-500" />
                <Linkedin size={20} className="text-zinc-500" />
                <Mail size={20} className="text-zinc-500" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
