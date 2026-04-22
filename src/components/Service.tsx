import { AnimatePresence, motion } from "framer-motion";
import {
    Anchor,
    Box,
    ChevronRight,
    ClipboardCheck,
    Shield,
    Truck,
    X
} from "lucide-react";
import { useEffect, useState } from "react";

// Assets
import ImgRoRo from "../assets/blades.jpg";
import ImgLashing from "../assets/lashing.jpg";
import ImgContainer from "../assets/services.jpg";
import ImgBreakBulk from "../assets/service_1.jpg";

const servicesData = [
    {
        id: 1,
        title: "Break Bulk Cargo",
        img: ImgBreakBulk,
        icon: <Anchor size={20} />,
        shortDesc:
            "Comprehensive inspection and tallying for non-containerized cargo.",
        subSections: [
            {
                title: "Operational Oversight",
                items: [
                    "Pre-discharging inspections",
                    "Discharge/Loading tallies",
                    "Out Turn Reports",
                    "Damage monitoring"
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Containerised Cargo",
        img: ImgContainer,
        icon: <Box size={20} />,
        shortDesc:
            "End-to-end container logistics and specialized clerical support.",
        subSections: [
            {
                title: "Staff & EDI",
                items: [
                    "Chief Tally clerks",
                    "Bay & Berth control",
                    "EDI maintenance",
                    "Stowage planning"
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Ro-Ro Vessels",
        img: ImgRoRo,
        icon: <Truck size={20} />,
        shortDesc:
            "Specialized handling for vehicles and specialized units.",
        subSections: [
            {
                title: "Vehicle Logistics",
                items: [
                    "Deck Tally counting",
                    "VVR Inspections",
                    "Private Drivers",
                    "Mechanical support"
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Lashing & Security",
        img: ImgLashing,
        icon: <Shield size={20} />,
        shortDesc:
            "Professional securing and 24/7 terminal watchman services.",
        subSections: [
            {
                title: "Safety & Integrity",
                items: [
                    "Maritime Lashing",
                    "24/7 Security",
                    "Vessel Cleaning",
                    "Trimming services"
                ]
            }
        ]
    }
];

const Services = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const selectedService = servicesData.find(s => s.id === selectedId);

    // Lock scroll + ESC close
    useEffect(() => {
        document.body.style.overflow = selectedId ? "hidden" : "unset";

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedId(null);
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [selectedId]);

    return (
        <section id="services" className="py-24 bg-slate-950">
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <h2 className="text-blue-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-3">
                        Core Capabilities
                    </h2>
                    <h3 className="text-3xl font-extrabold text-white uppercase">
                        Terminal Services
                    </h3>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {servicesData.map((service) => (
                        <motion.div
                            key={service.id}
                            whileHover={{ y: -8 }}
                            className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden flex flex-col group"
                        >
                            {/* IMAGE */}
                            <div className="h-48 relative overflow-hidden">
                                <img
                                    src={service.img}
                                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                                <div className="absolute bottom-4 left-4 p-2 bg-blue-600 text-white rounded-lg">
                                    {service.icon}
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h4 className="text-white font-bold mb-2 uppercase">
                                    {service.title}
                                </h4>

                                <p className="text-slate-400 text-sm mb-6">
                                    {service.shortDesc}
                                </p>

                                <button
                                    onClick={() => setSelectedId(service.id)}
                                    className="mt-auto flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-white transition"
                                >
                                    View Details <ChevronRight size={14} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 🔥 MODAL */}
                <AnimatePresence>
                    {selectedService && (
                        <motion.div
                            onClick={(e) => {
                                if (e.target === e.currentTarget) setSelectedId(null);
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-[120] flex items-center justify-center p-4 
              bg-slate-950/40 backdrop-blur-lg backdrop-saturate-150"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 40 }}
                                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                                className="w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl 
                bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col"
                            >

                                {/* IMAGE HERO */}
                                <div className="relative h-64">
                                    <img
                                        src={selectedService.img}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

                                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                        <div>
                                            <h4 className="text-2xl font-extrabold text-white uppercase">
                                                {selectedService.title}
                                            </h4>
                                            <p className="text-blue-400 text-xs uppercase tracking-widest">
                                                Service Details
                                            </p>
                                        </div>

                                        <button
                                            onClick={() => setSelectedId(null)}
                                            className="bg-white/10 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/20"
                                        >
                                            <X size={18} />
                                        </button>
                                    </div>
                                </div>

                                {/* CONTENT */}
                                <div className="p-8 overflow-y-auto no-scrollbar space-y-8">
                                    {/* Description */}
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        {selectedService.shortDesc}
                                    </p>

                                    {/* Sections */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {selectedService.subSections?.map((sub, idx) => (
                                            <div
                                                key={idx}
                                                className="p-6 rounded-2xl bg-slate-800/50 border border-white/10 backdrop-blur-md"
                                            >
                                                <h5 className="flex items-center gap-2 text-blue-400 font-bold uppercase text-xs tracking-widest mb-4">
                                                    <ClipboardCheck size={14} /> {sub.title}
                                                </h5>

                                                <ul className="space-y-3">
                                                    {sub.items.map((item, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex items-start gap-3 text-sm text-slate-300"
                                                        >
                                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>

                                </div>

                                {/* FOOTER */}
                                <div className="p-2 border-t border-white/10 flex justify-end">
                                    <button
                                        onClick={() => setSelectedId(null)}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest"
                                    >
                                        Close
                                    </button>
                                </div>

                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default Services;