import React from "react";
import { motion } from "motion/react";
import { Award, ShieldCheck, CheckCircle2, Cloud, Terminal, Globe } from "lucide-react";

const certs = [
  { name: "Web Development", issuer: "Meta/Coursera", date: "2023", icon: Globe, color: "text-blue-400" },
  { name: "Git & GitHub Masterclass", issuer: "Udemy", date: "2024", icon: Terminal, color: "text-purple-400" },
  { name: "Linux Fundamentals", issuer: "Cisco Networking Academy", date: "2024", icon: ShieldCheck, color: "text-emerald-400" },
  { name: "Cloud Computing Basics", issuer: "Google Cloud", date: "2024", icon: Cloud, color: "text-cyan-400" },
  { name: "DevOps Foundations", issuer: "LinkedIn Learning", date: "2025", icon: Award, color: "text-orange-400" },
  { name: "Cybersecurity Basics", issuer: "IBM", date: "2025", icon: ShieldCheck, color: "text-red-400" },
];

const Certifications = () => {
  return (
    <section id="certs" className="py-24 px-6 relative">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="mb-20">
          <h3 className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em] font-bold mb-4">05 / VALIDATION</h3>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
            PROFESSIONAL <span className="text-brand">CERTIFICATIONS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="editorial-card bg-slate-900/60 p-8 text-left hover:border-brand/40 group flex items-start gap-6"
            >
              <div className={`p-4 bg-slate-800 rounded-xl ${cert.color} group-hover:bg-brand/10 transition-colors flex-shrink-0`}>
                <cert.icon size={22} />
              </div>
              
              <div>
                <h4 className="text-sm font-black text-white mb-1 uppercase tracking-tight group-hover:text-brand transition-colors">
                  {cert.name}
                </h4>
                <p className="text-[10px] text-slate-500 mb-4 font-bold uppercase tracking-widest">
                  {cert.issuer}
                </p>
                <div className="flex items-center gap-2 text-[9px] font-mono text-slate-600 uppercase tracking-widest py-1 px-3 bg-slate-950 rounded border border-slate-800">
                   <span>COMPLETED / {cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-zinc-500 text-sm font-medium uppercase tracking-widest flex items-center justify-center gap-3"
        >
          <CheckCircle2 size={16} className="text-neon-blue" />
          Always Learning, Always Improving
        </motion.p>
      </div>
    </section>
  );
};

export default Certifications;
