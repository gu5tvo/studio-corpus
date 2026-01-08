"use client";

import { motion } from "framer-motion";
import { Activity, Heart, Star, ShieldCheck } from "lucide-react";
import Link from "next/link";

const features = [
    {
        icon: Activity,
        title: "Pilates Clínico",
        description: "Exercícios precisos para reabilitação e fortalecimento muscular focado.",
        color: "bg-blue-100 text-blue-600",
    },
    {
        icon: Heart,
        title: "Fisioterapia Pélvica",
        description: "Cuidado especializado para a saúde íntima da mulher em todas as fases.",
        color: "bg-pink-100 text-pink-600",
    },
    {
        icon: ShieldCheck,
        title: "Tratamento de Dor",
        description: "Terapias manuais e tecnológicas para alívio imediato e duradouro.",
        color: "bg-green-100 text-green-600",
    },
];

export default function FeatureHighlights() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary font-semibold text-sm mb-6">
                            <Star size={14} className="fill-accent text-accent" />
                            <span>Por que nos escolher?</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                            Cuidado que vai além do <span className="text-accent underline decoration-4 decoration-accent/20 underline-offset-4">movimento.</span>
                        </h2>
                        <p className="text-lg text-muted mb-10 leading-relaxed">
                            Não somos apenas uma clínica. Somos um espaço de transformação onde seu corpo reencontra o equilíbrio. Unimos tecnologia e toque humano.
                        </p>
                        <Link href="/sobre" className="text-primary font-bold hover:text-accent transition-colors flex items-center gap-2 group">
                            Conheça nossa metodologia
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </motion.div>

                    {/* Right Cards */}
                    <div className="grid gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-secondary p-8 rounded-[2rem] hover:shadow-lg transition-all border border-transparent hover:border-primary/5 flex items-start gap-6 group"
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform`}>
                                    <feature.icon size={26} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                                    <p className="text-muted leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
