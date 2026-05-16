import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, ChevronRight, X } from "lucide-react";
import { cn } from "../lib/utils";

const projects = [
  {
    id: 1,
    title: "Intelligent Network Monitoring System",
    subtitle: "AI Troubleshooting Assistant",
    description: "A comprehensive network surveillance platform that uses AI concepts for real-time fault detection and root cause analysis in complex topologies.",
    features: [
      "Cisco Packet Tracer simulation integration",
      "Graph-based fault detection algorithms",
      "AI-driven troubleshooting assistant",
      "Dynamic JSON-based architecture"
    ],
    tech: ["Python", "Networking", "JSON", "AI Concepts", "Monitoring"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop",
    color: "from-blue-600/20 to-cyan-600/20"
  },
  {
    id: 2,
    title: "Myntra-Style E-Commerce",
    subtitle: "Modern Frontend UI",
    description: "A highly responsive and interactive e-commerce frontend inspired by Myntra, featuring advanced filtering and seamless UI transitions.",
    features: [
      "Fully responsive grid architecture",
      "Complex multi-category filtering",
      "Dark/Light mode seamless switching",
      "Interactive cart & wishlist system"
    ],
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2000&auto=format&fit=crop",
    color: "from-purple-600/20 to-pink-600/20"
  },
  {
    id: 3,
    title: "Premium Portfolio System",
    subtitle: "Developer Showcase Platform",
    description: "A high-performance portfolio website with cinematic animations, full-stack contact integration, and adaptive layouts.",
    features: [
      "Framer Motion advanced transitions",
      "Server-side contact form processing",
      "Dynamic typography and theme switching",
      "SEO & Accessibility optimized"
    ],
    tech: ["React", "Express", "Tailwind", "Framer Motion"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    color: "from-neon-blue/20 to-neon-purple/20"
  }
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-20 space-y-4">
        <h3 className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">04 / SELECTED WORKS</h3>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
          PROJECT <span className="text-brand">ARCHIVE</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            layoutId={`card-${project.id}`}
            key={project.id}
            onClick={() => setSelectedId(project.id)}
            className="editorial-card group cursor-pointer flex flex-col h-full bg-slate-900/40 relative overflow-hidden group hover:bg-slate-900/60 border border-slate-800"
          >
            <div className="relative h-48 overflow-hidden">
               <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
               <div className="absolute top-0 right-0 p-4 z-10">
                 <span className="text-[10px] font-mono text-slate-400 bg-slate-950/80 px-2 py-1 rounded backdrop-blur-sm border border-slate-800">PROJ_0{(i+1)}</span>
               </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="mb-4">
                <h3 className="text-brand font-mono text-[10px] uppercase tracking-widest mb-1 font-bold">{project.subtitle}</h3>
                <h2 className="text-xl font-black text-white group-hover:text-brand transition-colors tracking-tight uppercase leading-none">{project.title}</h2>
              </div>
              
              <p className="text-xs text-slate-400 mb-6 font-light leading-relaxed line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.slice(0, 3).map(t => (
                  <span key={t} className="px-2 py-0.5 bg-slate-950 border border-slate-800 text-[9px] font-mono text-slate-500 rounded uppercase">
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-[9px] font-mono text-slate-700 flex items-center">+ {project.tech.length - 3} MORE</span>
                )}
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand/5 blur-3xl rounded-full -z-10" />
          </motion.div>
        ))}
      </div>

      {/* Hero Modal Overlay */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-${selectedId}`}
              className="glass max-w-4xl w-full max-h-[90vh] rounded-[2rem] overflow-hidden relative border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 z-10 p-2 glass rounded-full hover:bg-white/20 transition-all"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-1/2 h-64 lg:h-auto relative">
                   <img 
                    src={projects.find(p => p.id === selectedId)?.image} 
                    className="w-full h-full object-cover"
                   />
                   <div className={cn("absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60")} />
                </div>

                <div className="lg:w-1/2 p-10 overflow-y-auto no-scrollbar">
                  <span className="text-neon-blue font-mono text-xs uppercase tracking-widest block mb-4">Project Case Study</span>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    {projects.find(p => p.id === selectedId)?.title}
                  </h2>
                  <p className="text-zinc-400 leading-relaxed mb-8">
                    {projects.find(p => p.id === selectedId)?.description}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h5 className="text-sm font-bold text-white mb-4 uppercase tracking-widest flex items-center gap-2">
                        <ChevronRight size={16} className="text-neon-blue" />
                        Key Features
                      </h5>
                      <ul className="space-y-3">
                        {projects.find(p => p.id === selectedId)?.features.map((f, i) => (
                          <li key={i} className="text-zinc-400 text-sm flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-neon-blue mt-1.5 shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                       <div className="flex flex-wrap gap-2">
                          {projects.find(p => p.id === selectedId)?.tech.map(t => (
                            <span key={t} className="text-[10px] text-zinc-500 font-bold border border-white/5 px-3 py-1 rounded-full uppercase tracking-tighter">
                              {t}
                            </span>
                          ))}
                       </div>
                       <div className="flex gap-4">
                          <a href="#" className="p-3 glass rounded-xl hover:bg-white/10 transition-colors"><Github size={20} /></a>
                          <a href="#" className="p-3 bg-white text-black rounded-xl hover:bg-zinc-200 transition-colors"><ExternalLink size={20} /></a>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
