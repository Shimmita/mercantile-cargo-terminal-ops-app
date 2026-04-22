import { motion, type Variants } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { icon: <MapPin />, text: "Clock Tower Building-Kilindini, Mombasa, Kenya" },
    { icon: <Mail />, text: "info@mcto.co.ke" },
    { icon: <Phone />, text: "+254 738 888 845" },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-slate-200 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-6 italic">Connect With MCTO</h2>
            <p className="text-slate-600 mb-10 text-lg">
              Ready to streamline your cargo operations? Reach out to our 24/7 operations desk at the Port of Mombasa.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 text-slate-700">
                  <div className="text-blue-600">{item.icon}</div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-blue-600 outline-none" />
            <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-blue-600 outline-none" />
            <textarea placeholder="How can we help?" rows={4} className="w-full p-4 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-blue-600 outline-none" />
            <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;