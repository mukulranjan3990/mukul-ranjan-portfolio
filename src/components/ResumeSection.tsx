import React from "react";
import { motion } from "motion/react";
import { ExternalLink, FileText, ArrowRight } from "lucide-react";

// resume - external link configuration
const RESUME_URL = "https://mukulranjan3990.github.io/mukul-ranjan-resume/";

const ResumeSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* resume - decorative background */}
      <div className="absolute inset-0 bg-slate-950/50 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-900/40 border border-slate-800 p-8 md:p-16 relative group">
          <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-[60px] font-black select-none group-hover:text-brand transition-colors">
            CV_2024
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-10 h-10 bg-brand/10 flex items-center justify-center text-brand">
                  <FileText size={20} />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-slate-500 font-bold">
                  Professional Documentation
                </span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-none"
              >
                Access Full <br />
                <span className="text-brand">Expertise Protocol</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-400 max-w-md mb-8 leading-relaxed font-light"
              >
                For a detailed breakdown of technical competencies, professional history, and engineering certifications, please view the interactive resume deployment.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {/* resume - interactive jump link */}
                <a 
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-8 py-4 bg-brand text-black text-xs font-black uppercase tracking-[0.2em] hover:brightness-110 transition-all group"
                >
                  Jump to Resume
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video md:aspect-square bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center group-hover:border-brand/30 transition-colors"
            >
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:20px_20px]" />
              <div className="relative text-center p-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 border border-brand/20 rounded-full flex items-center justify-center mb-6 mx-auto"
                >
                  <div className="w-24 h-24 border border-brand/40 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 border border-brand rounded-full animate-pulse" />
                  </div>
                </motion.div>
                <div className="font-mono text-[10px] text-brand uppercase tracking-widest">Awaiting Command_</div>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="space-y-1">
                  <div className="h-1 w-12 bg-brand" />
                  <div className="h-1 w-8 bg-slate-800" />
                </div>
                <ExternalLink size={24} className="text-slate-800" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
