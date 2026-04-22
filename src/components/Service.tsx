import { motion } from "framer-motion";
import { Ship, ShieldAlert, Box, Anchor, Layers, type LucideIcon } from "lucide-react";

interface ServiceItem {
  title: string;
  desc: string;
  Icon: LucideIcon;
}

const services: ServiceItem[] = [
  { title: "Break Bulk Cargo", desc: "Expert handling of large commodities, raw materials, and non-containerized goods.", Icon: Anchor },
  { title: "Containerised Cargo", desc: "Optimized discharge and loading services for standard and specialized container units.", Icon: Box },
  { title: "Lashing & Unlashing", desc: "Specialized securing services to ensure maritime safety and prevent cargo shifting.", Icon: Layers },
  { title: "Security & Watch", desc: "Rigorous port security protocols to ensure the integrity of your cargo.", Icon: ShieldAlert },
  { title: "Cleaning & Trimming", desc: "Professional vessel maintenance and cargo hold cleaning for rapid turnaround.", Icon: Ship },
];

const Services = () => {
  return (
    <section id="services" className="py-32 dark-section relative">
      {/* Dynamic background element */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-blue-950/40 rounded-full blur-[120px] opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 text-center">
          <h2 className="text-blue-400 font-bold tracking-[0.2em] uppercase text-xs mb-3">Core Expertise</h2>
          <h3 className="text-5xl font-black text-white tracking-tighter">Ship Contracting Solutions</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group p-9 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 shadow-xl shadow-black/10"
            >
              {/* Modern Icon Wrapper */}
              <div className="w-14 h-14 rounded-2xl bg-white/10 group-hover:bg-blue-600 transition-colors flex items-center justify-center mb-8 border border-white/10 shadow-inner">
                <item.Icon className="w-7 h-7 text-white/90 group-hover:text-white" strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed tracking-wide font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;