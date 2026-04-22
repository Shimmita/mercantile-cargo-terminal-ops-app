import { motion, type Variants } from "framer-motion";

const About = () => {
  const cardVars: Variants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <section id="about" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blur Object */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-60 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-3">Decades of Port Operations</h2>
          <h3 className="text-5xl font-black text-slate-900 tracking-tighter">A Legacy of Excellence</h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Card 1: Vision (Glass Style) */}
          <motion.div 
            variants={cardVars}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-white/70 backdrop-blur-md border border-slate-200/60 shadow-xl shadow-slate-100/50"
          >
            <div className="w-16 h-1 w-1 bg-blue-600/30 rounded-full mb-8 mx-auto lg:mx-0"></div>
            <h4 className="text-3xl font-extrabold text-slate-950 mb-6 tracking-tight text-center lg:text-left">Our Vision</h4>
            <p className="text-slate-700 leading-relaxed text-lg text-center lg:text-left">
              As the arguably longest-serving ship contractors company in Mombasa Port, our vision is to lead the 
              industry in East Africa. We maintain peak efficiency and transformation-oriented work ethics, 
              ensuring satisfactory service provision to our esteemed clients through our vast experience.
            </p>
          </motion.div>

          {/* Card 2: Mission (Premium Gradient Style) */}
          <motion.div 
            variants={cardVars}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-gradient-to-br from-blue-900 to-blue-950 text-white shadow-2xl shadow-blue-900/30"
          >
            <div className="w-16 h-1 w-1 bg-white/20 rounded-full mb-8 mx-auto lg:mx-0"></div>
            <h4 className="text-3xl font-extrabold mb-6 tracking-tight text-center lg:text-left">Our Mission</h4>
            <p className="text-blue-100 leading-relaxed text-lg text-center lg:text-left opacity-90">
              We are dedicated to delivering effective, reliable, accountable, and fast service. We offer safe, 
              cost-effective operations that ensure a speedy vessel turnaround in line with the high expectations 
              of our global shipping clients.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;