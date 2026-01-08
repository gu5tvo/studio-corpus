"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function ScreeningForm() {
    const [formData, setFormData] = useState({
        nome: "",
        idade: "",
        dorPrincipal: "",
        tempoDor: "",
    });

    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `Olá! Gostaria de uma triagem para o Studio Corpus.%0A%0A*Dados da Paciente:*%0A- *Nome:* ${formData.nome}%0A- *Idade:* ${formData.idade}%0A- *Queixa:* ${formData.dorPrincipal}%0A- *Tempo:* ${formData.tempoDor}`;

        window.open(`https://wa.me/5599991406087?text=${message}`, "_blank");
        setIsSent(true);
    };

    return (
        <section id="contato" className="py-24 bg-primary relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <svg width="100%" height="100%">
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Inicie sua jornada de <span className="text-accent">transformação.</span>
                    </h2>
                    <p className="text-secondary/80 text-xl leading-relaxed mb-8">
                        Preencha os dados ao lado para uma triagem rápida. Analisaremos sua queixa e entraremos em contato para agendar sua avaliação personalizada.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-white">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                <CheckCircle2 size={20} className="text-accent" />
                            </div>
                            <span className="font-medium text-lg">Avaliação individual detalhada</span>
                        </div>
                        <div className="flex items-center gap-4 text-white">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                <CheckCircle2 size={20} className="text-accent" />
                            </div>
                            <span className="font-medium text-lg">Plano de tratamento exclusivo</span>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[40px] p-8 md:p-10 shadow-2xl"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-6">
                            <div>
                                <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">Seu Nome</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Ex: Maria Silva"
                                    className="w-full bg-secondary/30 border-transparent focus:border-accent focus:ring-0 rounded-2xl p-4 text-primary font-medium"
                                    value={formData.nome}
                                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">Idade</label>
                                    <input
                                        required
                                        type="number"
                                        placeholder="Ex: 45"
                                        className="w-full bg-secondary/30 border-transparent focus:border-accent focus:ring-0 rounded-2xl p-4 text-primary font-medium"
                                        value={formData.idade}
                                        onChange={(e) => setFormData({ ...formData, idade: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">Tempo da Dor</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Ex: 3 meses"
                                        className="w-full bg-secondary/30 border-transparent focus:border-accent focus:ring-0 rounded-2xl p-4 text-primary font-medium"
                                        value={formData.tempoDor}
                                        onChange={(e) => setFormData({ ...formData, tempoDor: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">Onde você sente dor?</label>
                                <textarea
                                    required
                                    rows={3}
                                    placeholder="Ex: Dor na lombar que irradia para a perna..."
                                    className="w-full bg-secondary/30 border-transparent focus:border-accent focus:ring-0 rounded-2xl p-4 text-primary font-medium"
                                    value={formData.dorPrincipal}
                                    onChange={(e) => setFormData({ ...formData, dorPrincipal: e.target.value })}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-accent text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-accent/90 transition-all shadow-lg active:scale-95"
                        >
                            Enviar via WhatsApp
                            <Send size={20} />
                        </button>
                        <p className="text-center text-xs text-muted font-medium">Sua conversa será iniciada automaticamente no WhatsApp.</p>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
