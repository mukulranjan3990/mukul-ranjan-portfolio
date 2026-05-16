import React from "react";
import { motion } from "motion/react";
import { Code2, BookOpen, GraduationCap, Trophy } from "lucide-react";

const stats = [
  { label: "LeetCode Problems", value: "220+", icon: Code2, color: "text-orange-500" },
  { label: "HackerRank Problems", value: "230+", icon: Trophy, color: "text-green-500" },
  { label: "Frontend Projects", value: "10+", icon: BookOpen, color: "text-blue-500" },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em] font-bold mb-4">01 / BACKGROUND</h3>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
                PASSION FOR SCALABLE <span className="text-brand">INFRASTRUCTURE</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed font-light mb-6">
                I'm a computer science student specializing in <span className="text-slate-200 font-medium">DevOps</span>, Cloud Architecture, and Networking. 
                My journey started with a fascination for how large-scale systems stay operational 
                and secure under heavy loads.
              </p>
              <p className="text-slate-500 text-base leading-relaxed font-light">
                Currently pursuing my B.Tech at Uttarakhand University, I've dedicated my time to 
                mastering infrastructure automation, network security, and modern frontend 
                development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="editorial-card editorial-card-hover group"
                >
                  <div className="text-4xl font-black text-brand mb-1">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-tighter text-slate-500 font-bold">
                    {stat.label}
                  </div>
                  <div className="h-1 w-full bg-slate-800 mt-4 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-brand" 
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="editorial-card bg-slate-900/60 p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none">
              <GraduationCap size={240} />
            </div>

            <h3 className="text-[10px] uppercase tracking-widest text-slate-500 mb-8 font-bold">Education Timeline</h3>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <span className="text-[10px] font-mono text-brand mt-1 font-bold">2023 - 2027</span>
                <div>
                  <p className="text-sm font-black text-white uppercase tracking-tight">B.Tech in Computer Science</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Uttarakhand University</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
              <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Focus Specialization:</h5>
              <div className="flex flex-wrap gap-2 text-white">
                {["Cloud Architecture", "Net-Security", "Automation"].map(tag => (
                  <span key={tag} className="text-[9px] px-2 py-1 bg-slate-800 rounded font-mono uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
