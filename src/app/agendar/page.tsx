"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function AgendarPage() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setTimeout(() => setStatus("success"), 2000);
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <section className="pt-40 pb-20 px-6 bg-secondary/10">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-secondary-foreground/40 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Agendamento Online</span>
                    <h1 className="text-5xl md:text-8xl font-bold text-primary leading-tight tracking-tighter mb-8">
                        Comece o seu <br />
                        <span className="text-secondary-foreground/20 italic font-serif">Legado.</span>
                    </h1>
                </div>
            </section>

            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-16">

                        {/* Benefits Panel */}
                        <div className="lg:col-span-5 space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-primary mb-6">Por que começar agora?</h2>
                                <p className="text-muted leading-relaxed">
                                    Não espere a dor limitar seus movimentos. No Studio Corpus, cada sessão é um passo em direção a uma vida mais plena e ativa.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { icon: <Sparkles size={20} />, title: "Avaliação Exclusiva", desc: "Diagnóstico preciso para seu caso único." },
                                    { icon: <Calendar size={20} />, title: "Horários Flexíveis", desc: "Se encaixamos na sua rotina corrida." },
                                    { icon: <Clock size={20} />, title: "Tempo de Qualidade", desc: "Foco total do especialista em você." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 p-6 rounded-3xl border border-primary/5 bg-secondary/5">
                                        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-accent shadow-sm">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                                            <p className="text-sm text-muted">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Booking Form */}
                        <div className="lg:col-span-7">
                            <div className="bg-primary p-8 md:p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

                                {status === "success" ? (
                                    <div className="relative z-10 py-20 text-center flex flex-col items-center">
                                        <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-8">
                                            <CheckCircle2 size={48} className="text-accent" />
                                        </div>
                                        <h3 className="text-4xl font-bold mb-4 tracking-tight">Solicitação Recebida</h3>
                                        <p className="text-white/60 max-w-sm mb-12">Iremos retornar em até 24h para confirmar sua vaga e horário de preferência.</p>
                                        <button
                                            onClick={() => setStatus("idle")}
                                            className="font-bold text-accent underline"
                                        >
                                            Fazer outra solicitação
                                        </button>
                                    </div>
                                ) : (
                                    <div className="relative z-10">
                                        <h3 className="text-2xl md:text-3xl font-bold mb-10 tracking-tight">Reserve sua Vaga</h3>
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Nome</label>
                                                    <input required className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-8 text-white focus:outline-none focus:border-accent transition-all" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Telefone</label>
                                                    <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-8 text-white focus:outline-none focus:border-accent transition-all" />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Serviço de Interesse</label>
                                                <select className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-8 text-white focus:outline-none focus:border-accent appearance-none transition-all">
                                                    <option className="bg-primary">Fisioterapia Clínica</option>
                                                    <option className="bg-primary">Pilates Clínico</option>
                                                    <option className="bg-primary">Osteopatia</option>
                                                    <option className="bg-primary">Avaliação 3D</option>
                                                </select>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Mensagem Adicional (Opcional)</label>
                                                <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-[2rem] py-4 px-8 text-white focus:outline-none focus:border-accent transition-all resize-none" />
                                            </div>

                                            <button
                                                disabled={status === "submitting"}
                                                className="w-full bg-accent text-white py-6 rounded-full font-bold text-xl hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-3 group"
                                            >
                                                {status === "submitting" ? "Processando..." : (
                                                    <>Confirmar Solicitação <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></>
                                                )}
                                            </button>
                                        </form>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
