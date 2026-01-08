"use client";

import { motion } from "framer-motion";
import { Activity, Dumbbell, ShieldCheck, Zap } from "lucide-react";

export default function Services() {
    const treatments = [
        {
            title: "Pilates",
            description: "Equilíbrio entre força e flexibilidade para um corpo funcional.",
            icon: <Dumbbell className="text-accent" size={32} />,
            badge: "Essencial"
        },
        {
            title: "Quiropraxia",
            description: "Alinhamento e mobilidade para sua coluna vertebral.",
            icon: <Zap className="text-accent" size={32} />,
        },
        {
            title: "Ventosaterapia",
            description: "Liberação tensional e detox para seus tecidos musculares.",
            icon: <Activity className="text-accent" size={32} />,
        },
        {
            title: "Escoliose",
            description: "Cuidados específicos e protocolos de correção postural.",
            icon: <ShieldCheck className="text-accent" size={32} />,
        },
    ];

    return (
        <section id="tratamentos" className="py-24 bg-secondary/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">Tratamentos Especializados</h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Soluções personalizadas para quem busca viver com mais liberdade e sem as restrições impostas pela dor.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {treatments.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all border border-primary/5 relative group overflow-hidden"
                        >
                            <div className="mb-6 relative z-10">{item.icon}</div>
                            <h3 className="text-xl font-bold text-primary mb-4 relative z-10">{item.title}</h3>
                            <p className="text-muted leading-relaxed relative z-10">{item.description}</p>

                            {item.badge && (
                                <span className="absolute top-4 right-4 bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                                    {item.badge}
                                </span>
                            )}

                            {/* Subtle hover background decoration */}
                            <div className="absolute bottom-[-20%] right-[-20%] w-32 h-32 bg-secondary/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
