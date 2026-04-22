import { motion, type Variants } from "framer-motion";
import { ArrowRight, Ship } from "lucide-react";

const Hero = () => {
  const containerVars: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVars: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background with darker tint for text standardizing */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?q=80&w=1974" 
          alt="Mombasa Container Terminal"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>

      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="relative z-10 max-w-4xl px-6 text-center"
      >
        {/* Small Tagline */}
        <motion.div variants={itemVars} className="flex justify-center items-center gap-2 text-blue-400 font-bold text-[10px] uppercase tracking-[0.4em] mb-4">
          <Ship size={14} /> Established Ship Contractors
        </motion.div>
        
        {/* Standardized Heading */}
        <motion.h1 variants={itemVars} className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          Mercantile Cargo Terminal <br className="hidden md:block" /> 
          Operations Limited
        </motion.h1>

        {/* Focused Subtext */}
        <motion.p variants={itemVars} className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Providing arguably the longest-serving port and vessel services in Mombasa. 
          Dedicated to safe, cost-effective, and rapid cargo handling at Kilindini Harbour.
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={itemVars} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#services" className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-bold text-sm tracking-wide hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
            View Services <ArrowRight size={16} />
          </a>
          <a href="#contact" className="backdrop-blur-sm border border-white/20 bg-white/5 text-white px-8 py-3.5 rounded-lg font-bold text-sm tracking-wide hover:bg-white/10 transition-all">
            Contact Operations
          </a>
        </motion.div>

        {/* Standardized Inline Stats */}
        <motion.div 
          variants={itemVars}
          className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          <div className="text-center">
            <span className="block text-2xl font-bold text-white">Mombasa</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400">Hub Location</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-bold text-white">24 / 7</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400">Terminal Ops</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-bold text-white">Legacy</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400">Trust Since Est.</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;