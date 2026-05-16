import React from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Twitter, ArrowUp, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="grid grid-cols-12 gap-6 items-center border-t border-slate-800 pt-10 pb-20 max-w-7xl mx-auto px-6">
      <div className="col-span-12 lg:col-span-7 flex flex-wrap gap-12">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-slate-600 mb-2 font-bold font-mono">Location</span>
          <span className="text-xs font-medium uppercase tracking-tight">Uttarakhand, India</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-slate-600 mb-2 font-bold font-mono">Education</span>
          <span className="text-xs font-medium uppercase tracking-tight">B.Tech CSE — 2027</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-slate-600 mb-2 font-bold font-mono">Status</span>
          <span className="text-xs font-medium uppercase tracking-tight flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            Active Engineering
          </span>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end items-center gap-6">
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">© {new Date().getFullYear()} / MR-ENGINEERING-PORTFOLIO</span>
        <button 
          onClick={scrollToTop}
          className="px-6 py-2 bg-brand text-black text-[10px] font-black uppercase tracking-widest hover:bg-white transition-colors"
        >
          Scroll Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
