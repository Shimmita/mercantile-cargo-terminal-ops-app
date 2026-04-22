import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import LogoImg from "../assets/logo.png"; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-[100] px-4 md:px-6 py-4">
      <motion.div 
        className={`max-w-7xl mx-auto flex justify-between items-center px-6 py-2 rounded-xl transition-all duration-500 border ${
          scrolled || isOpen
            ? "bg-slate-900/90 backdrop-blur-md border-white/10 shadow-xl" 
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Brand Identity / Logo */}
        <a 
          href="#home" 
          onClick={scrollToTop}
          className="flex items-center gap-3 group transition-transform active:scale-95"
        >
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center overflow-hidden rounded-lg">
            <img 
              src={LogoImg} 
              alt="MCTO Logo" 
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg leading-none tracking-tight">MCTO</span>
            <span className="hidden md:block text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-1 group-hover:text-blue-400 transition-colors">
              Mercantile Cargo Terminal Operations Ltd
            </span>
          </div>
        </a>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-xs font-bold text-slate-300 hover:text-white transition-colors uppercase tracking-widest relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-xs font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20 active:scale-95">
            Operations
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 mx-auto max-w-[95%] bg-slate-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)} 
                  className="text-white text-sm font-bold uppercase tracking-widest border-b border-white/5 pb-2 hover:text-blue-400 transition-colors"
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs">
                Operations Desk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;