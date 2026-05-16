import React from "react";
import { motion } from "motion/react";
import { 
  Code, Network, Cloud, BrainCircuit, Rocket, 
  Terminal, Globe, Shield 
} from "lucide-react";

const milestones = [
  {
    year: "2023",
    title: "Started Web Development",
    description: "Beginning the journey into the digital world. Mastered HTML, CSS, and basic JavaScript principles while building responsive interfaces.",
    icon: Globe,
    color: "bg-blue-500",
    glow: "shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]"
  },
  {
    year: "2024",
    title: "Learned Networking",
    description: "Deep dive into TCP/IP, OSI Model, and Cisco configurations. Understood how data travels securely across infrastructures.",
    icon: Network,
    color: "bg-purple-500",
    glow: "shadow-[0_0_20px_-5px_rgba(139,92,246,0.5)]"
  },
  {
    year: "2024",
    title: "Entered DevOps & Cloud",
    description: "Shifted focus towards scalability. Started working with Docker, Linux administration, and foundational Cloud concepts.",
    icon: Cloud,
    color: "bg-cyan-500",
    glow: "shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)]"
  },
  {
    year: "2025",
    title: "Built AI Troubleshooting Project",
    description: "Integrated AI with networking to create an intelligent monitoring system with automated fault detection and root cause analysis.",
    icon: BrainCircuit,
    color: "bg-emerald-500",
    glow: "shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)]"
  },
  {
    year: "Present",
    title: "System Design & Automation",
    description: "Current focus on advanced infrastructure as code, Kubernetes orchestration, and complex system architectures.",
    icon: Rocket,
    color: "bg-orange-500",
    glow: "shadow-[0_0_20px_-5px_rgba(249,115,22,0.5)]"
  }
];

const Journey = () => {
  return (
    <section id="journey" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h3 className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em] font-bold mb-4">03 / CAREER TRAJECTORY</h3>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
            THE <span className="text-brand">JOURNEY</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-2 bottom-0 w-[1px] bg-slate-800" />

          <div className="space-y-12">
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-12 group"
              >
                <div className="absolute left-[31px] top-6 w-3 h-3 rounded-full bg-slate-950 border-2 border-brand glow-shadow z-10" />
                
                <span className="text-[11px] font-mono text-brand mt-6 font-black w-24 shrink-0 text-right uppercase">
                  {milestone.year}
                </span>

                <div className="editorial-card bg-slate-900/60 p-8 flex-1 group-hover:border-brand/30">
                  <h4 className="text-lg font-black text-white mb-2 uppercase tracking-tight">
                    {milestone.title}
                  </h4>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">
                    Infrastructure & Automation
                  </p>
                  <p className="text-slate-400 text-[13px] leading-relaxed font-light">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
