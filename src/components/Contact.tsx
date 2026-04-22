import { motion, type Variants } from "framer-motion";
import { Building2, Mail, MapPin, Phone, SendHorizontal } from "lucide-react";

const Contact = () => {
    const formItemVars: Variants = {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 }
    };

    return (
        <section id="contact" className="py-24 bg-slate-950 relative">

            {/* background glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <h2 className="text-blue-500 text-xs uppercase tracking-[0.4em] mb-3">
                        Get In Touch
                    </h2>
                    <h3 className="text-3xl font-extrabold text-white uppercase">
                        Contact Operations Desk
                    </h3>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">

                    {/* 🔥 INFO CARDS */}
                    <div className="space-y-6">

                        <div className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10">
                            <h4 className="text-white text-xs uppercase mb-6 border-b border-white/10 pb-3">
                                Official Location
                            </h4>

                            <div className="space-y-5 text-sm text-slate-300">
                                <div className="flex gap-3">
                                    <Building2 className="text-blue-500" size={18} />
                                    <div>
                                        <p className="text-white font-bold">Clock Tower Building</p>
                                        <p>Kilindini, Mombasa</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <MapPin className="text-blue-500" size={18} />
                                    <div>
                                        <p className="text-white font-bold">Mailing Address</p>
                                        <p>P.O Box 81454-80100</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-blue-600/20 backdrop-blur-xl border border-blue-500/20">
                            <h4 className="text-white text-xs uppercase mb-6 border-b border-blue-500/20 pb-3">
                                Fast Contact
                            </h4>

                            <div className="space-y-3 text-sm text-slate-200">
                                <div className="flex gap-2"><Phone size={16} /> 0738888845</div>
                                <div className="flex gap-2"><Phone size={16} /> 0733852667</div>
                                <div className="flex gap-2"><Mail size={16} /> info@mcto.co.ke</div>
                            </div>
                        </div>

                    </div>

                    {/* 🔥 FORM */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="lg:col-span-2 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
                    >
                        <form className="grid md:grid-cols-2 gap-6">

                            <motion.input
                                variants={formItemVars}
                                placeholder="Full Name"
                                className="bg-slate-800 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-600 outline-none"
                            />

                            <motion.input
                                variants={formItemVars}
                                placeholder="Email Address"
                                className="bg-slate-800 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-600 outline-none"
                            />

                            <select
                                className="md:col-span-2 bg-slate-800 border border-white/10 rounded-xl p-4 text-sm text-white focus:ring-2 focus:ring-blue-600 outline-none"
                            >
                                <option>Select Service Required</option>

                                {/* Cargo */}
                                <option>Break Bulk Cargo Handling</option>
                                <option>Containerised Cargo Operations</option>
                                <option>Ro-Ro Vehicle Handling</option>
                                <option>Consultation Services</option>

                                {/* Terminal Ops */}
                                <option>Vessel Loading / Discharge</option>
                                <option>Stevedoring Services</option>
                                <option>Cargo Tally & Inspection</option>

                                {/* Logistics */}
                                <option>Container Tracking & EDI</option>
                                <option>Warehouse Coordination</option>
                                <option>Transport Coordination</option>

                                {/* Security */}
                                <option>Lashing & Unlashing</option>
                                <option>Cargo Security / Watchman</option>

                                {/* Maintenance */}
                                <option>Mechanical Support / Repairs</option>
                                <option>Cleaning & Trimming Services</option>

                                {/* General */}
                                <option>General Inquiry</option>
                                <option>Partnership / Business Proposal</option>
                                <option>Technical Support</option>
                                <option>Other</option>
                            </select>

                            <motion.textarea
                                rows={4}
                                placeholder="Your Message..."
                                className="md:col-span-2 bg-slate-800 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-slate-400"
                            />

                            <button
                                className="md:col-span-2 flex items-center 
                                justify-center gap-3  bg-blue-600 hover:bg-blue-700 
                                text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-blue-600/20 active:scale-[0.98]"
                            >
                                <span>Submit Request</span>
                                <SendHorizontal size={18} className="translate-y-[1px]" />
                            </button>

                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;