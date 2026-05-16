import React from "react";
import { motion } from "motion/react";
import { 
  Cloud, Server, Layout, Terminal, 
  Settings, Network, Shield, Cpu, 
  Code, Command, Globe, Database,
  Box, Workflow, Boxes, Play,
  Waypoints, Router, Hash, Activity,
  CodeXml, FileJson, Palette, Eye,
  Search, ShieldAlert, GitBranch, Zap,
  BarChart, Layers
} from "lucide-react";

const stack = [
  {
    category: "DevOps & Cloud",
    icon: Cloud,
    items: [
      { name: "Docker", icon: Box, color: "#2496ED" },
      { name: "Jenkins", icon: Workflow, color: "#D24939" },
      { name: "K8s", icon: Boxes, color: "#326CE5" },
      { name: "GitHub", icon: Play, color: "#2088FF" },
      { name: "Linux", icon: Terminal, color: "#FCC624" },
      { name: "AWS", icon: Cloud, color: "#FF9900" }
    ]
  },
  {
    category: "Networking",
    icon: Network,
    items: [
      { name: "TCP/IP", icon: Network, color: "#00599C" },
      { name: "VLANs", icon: Waypoints, color: "#A8B9CC" },
      { name: "DNS", icon: Globe, color: "#4285F4" },
      { name: "DHCP", icon: Router, color: "#FF6C37" },
      { name: "IPv6", icon: Hash, color: "#8E44AD" },
      { name: "NPM", icon: Activity, color: "#CB3837" }
    ]
  },
  {
    category: "Programming",
    icon: Code,
    items: [
      { name: "Python", icon: CodeXml, color: "#3776AB" },
      { name: "React", icon: Layers, color: "#61DAFB" },
      { name: "Next.js", icon: Layout, color: "#FFFFFF" },
      { name: "Tailwind", icon: Palette, color: "#06B6D4" },
      { name: "Node.js", icon: FileJson, color: "#339933" },
      { name: "TypeScript", icon: Command, color: "#3178C6" }
    ]
  },
  {
    category: "Security & Tools",
    icon: Shield,
    items: [
      { name: "NMAP", icon: Search, color: "#4E9BCD" },
      { name: "Wireshark", icon: Eye, color: "#1679A7" },
      { name: "Kali", icon: ShieldAlert, color: "#2F2F2F" },
      { name: "Git", icon: GitBranch, color: "#F05032" },
      { name: "Postman", icon: Zap, color: "#FF6C37" },
      { name: "Grafana", icon: BarChart, color: "#F46800" }
    ]
  }
];

const TechStack = () => {
  return (
    <section id="stack" className="py-24 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 text-white">
          <h3 className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em] font-bold mb-4">02 / TECHNOLOGIES</h3>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-4">
            CORE <span className="text-brand">ECOSYSTEM</span>
          </h2>
          <p className="text-slate-500 text-sm font-light max-w-lg mx-auto">
            A diverse toolkit specialized in infrastructure resilience, network security, and high-performance development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stack.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="editorial-card bg-slate-900/40 p-6 flex flex-col border-slate-800/50"
            >
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-8 font-black flex items-center gap-2">
                <group.icon size={12} className="text-brand" />
                {group.category}
              </h4>

              <div className="grid grid-cols-2 gap-3 mt-auto">
                {group.items.map((tech) => (
                  <motion.div 
                    key={tech.name} 
                    whileHover={{ 
                      y: -5,
                      scale: 1.02,
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      borderColor: tech.color + "40"
                    }}
                    className="relative group aspect-square bg-slate-950/40 border border-slate-800 flex flex-col items-center justify-center p-4 transition-all duration-300"
                  >
                    {/* Dynamic Glow */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity blur-2xl rounded-full"
                      style={{ backgroundColor: tech.color }}
                    />
                    
                    <tech.icon 
                      size={28} 
                      style={{ color: tech.color }}
                      className="mb-3 transition-transform duration-500 group-hover:scale-110 drop-shadow-lg" 
                    />
                    
                    <span className="text-[10px] font-black text-slate-200 uppercase tracking-tighter group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                    
                    <div 
                      className="absolute bottom-0 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                      style={{ backgroundColor: tech.color }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>


        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 border border-slate-800 bg-slate-900/40 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-brand" />
          
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 border border-brand/20 flex items-center justify-center text-brand">
              <Terminal size={24} />
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Active Research</h4>
              <p className="text-white text-lg font-black tracking-tight uppercase leading-none">
                System Design & Kubernetes Hardening
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
             <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">Est. Completion 2024</span>
             <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border border-slate-900 bg-slate-800 flex items-center justify-center">
                    <Cpu size={12} className="text-slate-600" />
                  </div>
                ))}
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
