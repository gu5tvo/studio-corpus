"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        category: "Pilates",
        questions: [
            {
                q: "Para quem o Pilates é indicado?",
                a: "Para todos! Desde atletas de elite até pessoas em processo de reabilitação, gestantes e idosos. O método é adaptável a qualquer nível de condicionamento físico."
            },
            {
                q: "Com que frequência devo praticar?",
                a: "Para resultados consistentes, recomendamos de 2 a 3 vezes por semana. Como dizia Joseph Pilates: 'Com 10 sessões você sente a diferença, com 20 os outros percebem, e com 30 você tem um novo corpo'."
            },
            {
                q: "O Pilates ajuda em dores nas costas?",
                a: "Sim, é um dos melhores métodos para isso. O foco no fortalecimento do 'core' (centro do corpo) e no alinhamento postural reduz drasticamente a sobrecarga na coluna."
            }
        ]
    },
    {
        category: "Quiropraxia & Outros",
        questions: [
            {
                q: "O que é a Quiropraxia e ela dói?",
                a: "É uma técnica que foca no alinhamento da coluna para liberar o sistema nervoso. O ajuste em si não dói, e muitos pacientes sentem um alívio imediato de tensão após a sessão."
            },
            {
                q: "Por que a Ventosaterapia deixa marcas roxas?",
                a: "Aquelas marcas são o resultado da sucção que aumenta o fluxo sanguíneo e libera toxinas nos tecidos. Elas são indolores e desaparecem em poucos dias."
            },
            {
                q: "Trabalham com tratamento para Escoliose?",
                a: "Sim! Temos protocolos específicos baseados em evidências para estabilização e redução da progressão de curvas na coluna para jovens e adultos."
            }
        ]
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<string | null>("0-0");

    const toggle = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <section className="py-32 bg-white px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-20">
                    <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-6 block">Dúvidas Frequentes</span>
                    <h2 className="text-5xl md:text-7xl font-bold text-primary tracking-tighter">
                        Perguntas <br /> <span className="text-accent italic font-serif">Comuns.</span>
                    </h2>
                </div>

                <div className="space-y-12">
                    {faqs.map((group, groupIdx) => (
                        <div key={groupIdx}>
                            <h3 className="text-muted font-bold text-xs uppercase tracking-[0.2em] mb-8 border-l-2 border-accent pl-4">
                                {group.category}
                            </h3>
                            <div className="space-y-4">
                                {group.questions.map((faq, i) => {
                                    const id = `${groupIdx}-${i}`;
                                    const isOpen = openIndex === id;
                                    return (
                                        <div
                                            key={id}
                                            className={`rounded-3xl border transition-all duration-300 ${isOpen ? 'border-primary bg-secondary/10' : 'border-secondary bg-white'}`}
                                        >
                                            <button
                                                onClick={() => toggle(id)}
                                                className="w-full px-8 py-6 flex items-center justify-between text-left"
                                            >
                                                <span className="text-lg md:text-xl font-bold text-primary mr-4">{faq.q}</span>
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-secondary text-primary'}`}>
                                                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                                                </div>
                                            </button>
                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="px-8 pb-8 text-muted text-lg leading-relaxed">
                                                            {faq.a}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
