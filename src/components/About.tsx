import { motion, type Variants } from "framer-motion";
import { ShieldCheck, Target } from "lucide-react";
import AboutImg from "../assets/services.jpg";

const About = () => {
  const cardVars: Variants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* 🔥 IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">

              <img
                src={AboutImg}
                className="w-full h-[420px] object-cover"
              />

              <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]" />

              {/* glass badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl 
              bg-white/10 backdrop-blur-xl border border-white/20">
                <p className="text-white text-xs font-bold uppercase tracking-widest text-center">
                  Longest Serving Ship Contractors
                </p>
              </div>
            </div>

            <h3 className="text-3xl font-extrabold text-white mt-8">
              A Legacy Built on{" "}
              <span className="text-blue-500">Kilindini Harbour</span>
            </h3>

            <p className="text-slate-400 mt-4 leading-relaxed">
              MCTO has transformed maritime operations into a model of efficiency,
              delivering trusted services across Mombasa port with proven expertise.
            </p>
          </motion.div>

          {/* 🔥 CARDS */}
          <div className="grid gap-6">

            <motion.div
              variants={cardVars}
              initial="initial"
              whileInView="whileInView"
              className="p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-blue-600 rounded-xl">
                  <Target size={22} />
                </div>
                <h4 className="font-bold uppercase text-white">Our Vision</h4>
              </div>

              <p className="text-slate-400 text-sm">
                To lead East Africa in maritime services through innovation,
                efficiency, and operational excellence.
              </p>
            </motion.div>

            <motion.div
              variants={cardVars}
              initial="initial"
              whileInView="whileInView"
              className="p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-blue-600 rounded-xl">
                  <ShieldCheck size={22} />
                </div>
                <h4 className="font-bold uppercase text-white">Our Mission</h4>
              </div>

              <p className="text-slate-400 text-sm">
                Deliver safe, fast, and cost-effective cargo services aligned
                with global maritime standards.
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;