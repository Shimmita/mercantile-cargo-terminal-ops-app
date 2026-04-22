import { motion, type Variants } from "framer-motion";
import { ArrowRight, Ship } from "lucide-react";
import HeroImg from "../assets/ship.jpeg"; //

const Hero = () => {
  const containerVars: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVars: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">

      {/*  Background Image */}
      <div className="absolute inset-0">
        <img
          src={HeroImg}
          className="w-full h-full object-cover scale-105 blur-[0.5px]"
          alt="Ship Operations"
        />
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" />
      </div>

      {/* 🔥 Floating Glass Card */}
      <motion.div
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="relative z-10 max-w-4xl mx-4 md:mx-auto p-6 md:p-10 rounded-3xl 
        bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl text-center"
      >
        <motion.div variants={itemVars} className="flex justify-center gap-2 text-blue-400 text-[10px] uppercase tracking-[0.4em] mb-4">
          <Ship size={14} /> Ship Contractors
        </motion.div>

        <motion.h1 variants={itemVars} className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
          Mercantile Cargo Terminal <br /> Operations Limited
        </motion.h1>

        <motion.p variants={itemVars} className="text-slate-300 mb-8">
          Efficient, secure and professional vessel services at Kilindini Harbour, Mombasa Kenya.
        </motion.p>

        <motion.div variants={itemVars} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#services" className="bg-blue-600 px-6 py-3 rounded-xl text-white font-bold flex items-center gap-2 justify-center hover:bg-blue-700 transition">
            View Services <ArrowRight size={16} />
          </a>

          <a href="#contact" className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl text-white border border-white/20 hover:bg-white/20 transition">
            Contact
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;