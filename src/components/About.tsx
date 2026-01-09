"use client";

import { motion } from "framer-motion";
import { User, Heart, Sparkles } from "lucide-react";

export default function About() {
    return (
        <section id="sobre" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Sobre a Fisioterapeuta</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                        Uma abordagem dedicada ao seu cuidado integral.
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-xl text-muted leading-relaxed mb-6">
                            No Studio Corpus, acreditamos que a dor não deve ser uma companheira constante. Minha missão é ajudar você a redescobrir a força do seu corpo, especialmente após os 40 anos.
                        </p>
                        <p className="text-lg text-muted/80 leading-relaxed mb-8">
                            Unindo a ciência da fisioterapia com a precisão do pilates, desenvolvi um método que foca não apenas no sintoma, mas na causa da dor lombar e nos desequilíbrios posturais. Aqui, cada atendimento é único, humanizado e focado nos seus objetivos de vida.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-4 bg-secondary/20 rounded-2xl">
                                <div className="mt-1 text-primary"><Heart size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-primary">Cuidado Humano</h4>
                                    <p className="text-sm text-muted">Atenção plena em cada movimento.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-secondary/20 rounded-2xl">
                                <div className="mt-1 text-primary"><Sparkles size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-primary">Resultados Reais</h4>
                                    <p className="text-sm text-muted">Foco no seu bem-estar diário.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl ring-1 ring-primary/10">
                                <img src="/images/about.png" alt="Fisioterapeuta Studio Corpus" className="w-full h-full object-cover" />
                            </div>
                            <div className="h-48 bg-primary rounded-3xl overflow-hidden flex flex-col items-center justify-center p-8 text-white text-center shadow-lg">
                                <span className="text-4xl font-bold">10+</span>
                                <p className="text-xs uppercase mt-2 opacity-80 font-bold tracking-widest">anos de experiência</p>
                            </div>
                        </div>
                        <div className="pt-12 space-y-4">
                            <div className="h-48 bg-accent rounded-3xl overflow-hidden flex flex-col items-center justify-center p-8 text-white text-center shadow-lg">
                                <span className="text-4xl font-bold">500+</span>
                                <p className="text-xs uppercase mt-2 opacity-80 font-bold tracking-widest">Vidas Transformadas</p>
                            </div>
                            <div className="h-64 bg-secondary rounded-3xl overflow-hidden shadow-inner flex items-center justify-center border border-primary/5">
                                <Sparkles size={64} className="text-primary/20" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
