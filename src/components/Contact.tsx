import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, Mail, MapPin, Linkedin, Github, MessageSquare, Loader2, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    _honeypot: "" // Honeypot field
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "", _honeypot: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Failed to connect to the server.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em] font-bold mb-4 italic">06 / COMMUNICATION</h3>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-[1] mb-8 uppercase">
                LET'S <span className="text-brand">COLABORATE</span><br/>ON SOMETHING EPIC.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed font-light">
                Whether you have a specific project in mind or just want to discuss cloud architecture, 
                I'm always open to meaningful conversations.
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                { label: "Location", value: "Uttarakhand, India" },
                { label: "LinkedIn", value: "@mukul-ranjan", link: "#" },
                { label: "GitHub", value: "@mukul-ranjan", link: "#" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-slate-800 text-slate-500 group-hover:text-brand transition-colors text-xs font-mono font-bold">
                    0{i+1}
                  </div>
                  <div>
                    <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-0.5">{item.label}</p>
                    {item.link ? (
                      <a href={item.link} className="text-white text-sm font-black uppercase tracking-tight hover:text-brand transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-white text-sm font-black uppercase tracking-tight">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <div className="editorial-card bg-slate-900/60 p-10 md:p-12 relative overflow-hidden">
              {status === "success" && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-md p-10 text-center"
                >
                  <div className="w-16 h-16 border-2 border-brand rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="text-brand" size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Message Dispatched</h3>
                  <p className="text-slate-500 text-sm max-w-xs font-light">
                    The transmission was successful. I will respond to your inquiry shortly.
                  </p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="mt-8 px-8 py-3 border border-slate-800 text-xs font-black uppercase tracking-widest text-white hover:bg-slate-900 transition-colors"
                  >
                    Send Another
                  </button>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Honeypot field - visually hidden */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <input 
                    type="text" 
                    name="_honeypot" 
                    tabIndex={-1} 
                    autoComplete="off" 
                    value={formData._honeypot} 
                    onChange={handleChange} 
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="JOHN DOE" 
                      className={`w-full bg-slate-950/50 border-b ${errors.name ? 'border-red-500/50' : 'border-slate-800'} focus:border-brand px-0 py-3 text-sm focus:outline-none transition-colors text-white uppercase font-bold tracking-tight placeholder:text-slate-700`}
                    />
                    {errors.name && <p className="text-[9px] font-mono text-red-500 uppercase font-bold">{errors.name}</p>}
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Email Reference</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="HELLO@WORLD.COM" 
                      className={`w-full bg-slate-950/50 border-b ${errors.email ? 'border-red-500/50' : 'border-slate-800'} focus:border-brand px-0 py-3 text-sm focus:outline-none transition-colors text-white uppercase font-bold tracking-tight placeholder:text-slate-700`}
                    />
                    {errors.email && <p className="text-[9px] font-mono text-red-500 uppercase font-bold">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Subject Protocol</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="INFRASTRUCTURE INQUIRY" 
                    className={`w-full bg-slate-950/50 border-b ${errors.subject ? 'border-red-500/50' : 'border-slate-800'} focus:border-brand px-0 py-3 text-sm focus:outline-none transition-colors text-white uppercase font-bold tracking-tight placeholder:text-slate-700`}
                  />
                  {errors.subject && <p className="text-[9px] font-mono text-red-500 uppercase font-bold">{errors.subject}</p>}
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Information Payload</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="DESCRIBE YOUR VISION..." 
                    className={`w-full bg-slate-950/50 border-b ${errors.message ? 'border-red-500/50' : 'border-slate-800'} focus:border-brand px-0 py-3 text-sm focus:outline-none transition-colors text-white uppercase font-bold tracking-tight placeholder:text-slate-700 resize-none`}
                  />
                  {errors.message && <p className="text-[9px] font-mono text-red-500 uppercase font-bold">{errors.message}</p>}
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-[10px] font-mono font-bold uppercase tracking-widest">{errorMessage}</p>
                )}

                <button 
                  disabled={status === "loading"}
                  className="px-10 py-4 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-brand transition-all flex items-center justify-center gap-4 disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <Loader2 className="animate-spin" size={18} />
                  ) : (
                    <>
                      <span>Transmit Request</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
