import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronDown, Github, Linkedin, Download, ExternalLink } from "lucide-react";

// resume - interactive link configuration
const RESUME_URL = "https://mukulranjan3990.github.io/mukul-ranjan-resume/";

const titles = [
  "DevOps Engineer",
  "Cloud Architecture Learner",
  "Networking Enthusiast",
  "Frontend Developer",
  "AI Systems Builder"
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = index % titles.length;
    let fullText = titles[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => Math.max(prevDelta / 2, 30));
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(2000); // Wait before deleting
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setIndex(index + 1);
      setDelta(150);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[160px] animate-pulse" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 flex items-center space-x-3"
            >
              <div className="w-2 h-2 rounded-full bg-brand glow-shadow animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-slate-500 font-bold">
                Available for discovery / Engineering 2024
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[clamp(3rem,10vw,100px)] leading-[0.85] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 mb-8"
            >
              MUKUL<br/>RANJAN
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg md:text-2xl font-light text-slate-400 mb-12 max-w-xl leading-relaxed"
            >
              Building <span className="text-brand font-medium">{titles[index % titles.length]}</span> systems with a focus on recursive automation and architectural resilience.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a 
                href="#projects" 
                className="w-full sm:w-auto px-8 py-4 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-brand transition-all flex items-center justify-center gap-2 group"
              >
                Project Archive
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              
              {/* resume - interactive primary button */}
              <a 
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-brand text-black text-xs font-black uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2 ring-1 ring-white/10"
              >
                View Resume
                <ExternalLink size={14} strokeWidth={3} />
              </a>

              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 border border-slate-800 text-white text-xs font-black uppercase tracking-widest hover:bg-slate-900 transition-all flex items-center justify-center gap-2"
              >
                Inquire Status
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative aspect-[4/5] w-full max-w-[450px] mx-auto border border-slate-800 p-4 bg-slate-900/40"
            >
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-brand" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-brand opacity-50" />
              
              <div className="relative w-full h-full overflow-hidden bg-slate-950">
                 <img
                  src={`${import.meta.env.BASE_URL}profile2.png`}
                  alt="Mukul Ranjan"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-110 hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/80 backdrop-blur-md p-4 border border-white/10">
                    <span className="text-[10px] font-mono text-brand block mb-1 font-bold uppercase tracking-widest">Identification</span>
                    <span className="text-xs font-black text-white uppercase tracking-tight">Lead Software Architect</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -right-4 top-1/4 h-32 w-[1px] bg-brand/30" />
              <div className="absolute -left-4 bottom-1/4 h-32 w-[1px] bg-brand/30" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* resume - interactive floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed left-6 bottom-10 z-[60] hidden lg:block"
      >
        <a 
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-slate-950 border border-slate-800 p-2 pr-6 hover:border-brand transition-all group"
        >
          <div className="w-10 h-10 bg-brand/10 flex items-center justify-center text-brand">
            <Download size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-wider text-white">Full Profile</span>
            <span className="text-[8px] font-mono text-slate-500 uppercase">Interactive Resume 2024</span>
          </div>
          <motion.div 
            className="ml-2 text-brand opacity-0 group-hover:opacity-100 transition-opacity"
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ExternalLink size={12} />
          </motion.div>
        </a>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 right-10 text-slate-700"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono [writing-mode:vertical-lr]">Scroll</span>
          <ChevronDown size={20} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
