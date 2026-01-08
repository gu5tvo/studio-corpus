"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Instagram, Facebook, Send, CheckCircle2 } from "lucide-react";

export default function ContatoPage() {
    const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("loading");
        // Simulate API call
        setTimeout(() => {
            setFormStatus("success");
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-6 block">Fale Conosco</span>
                    <h1 className="text-6xl md:text-9xl font-bold text-primary leading-[0.8] tracking-tighter mb-12">
                        Vamos <br />
                        <span className="italic font-serif text-primary/30 text-[10vw] md:text-[7vw]">Conversar.</span>
                    </h1>
                </div>
            </section>

            {/* Contact Grid */}
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20">
                        {/* Info Column */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-primary mb-6">Informações de Contato</h2>
                                <p className="text-lg text-muted max-w-md leading-relaxed">
                                    Estamos prontos para tirar suas dúvidas e ajudar você a encontrar o melhor caminho para sua saúde.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <a href="tel:+5599991412100" className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted font-bold uppercase tracking-widest mb-1">Telefone / WhatsApp</p>
                                        <p className="text-xl font-bold text-primary">(99) 99141-2100</p>
                                    </div>
                                </a>

                                <a href="mailto:contato@studiocorpus.com" className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted font-bold uppercase tracking-widest mb-1">E-mail</p>
                                        <p className="text-xl font-bold text-primary">contato@studiocorpus.com</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted font-bold uppercase tracking-widest mb-1">Localização</p>
                                        <p className="text-xl font-bold text-primary">Av. Principal, 123 - Centro<br />São Luís, MA</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm text-muted font-bold uppercase tracking-widest mb-6">Siga-nos</h3>
                                <div className="flex gap-4">
                                    <a href="#" className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                                        <Instagram size={20} />
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                                        <Facebook size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="bg-secondary/10 rounded-[3.5rem] p-8 md:p-12">
                            {formStatus === "success" ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-primary">Mensagem Enviada!</h3>
                                    <p className="text-muted max-w-xs">Recebemos seu contato. Nossa equipe entrará em contato em breve.</p>
                                    <button
                                        onClick={() => setFormStatus("idle")}
                                        className="text-accent font-bold underline"
                                    >
                                        Enviar outra mensagem
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary uppercase tracking-widest ml-4">Nome Completo</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full px-8 py-5 rounded-full bg-white border border-transparent focus:border-accent focus:outline-none transition-all placeholder:text-muted/50"
                                            placeholder="Como podemos te chamar?"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary uppercase tracking-widest ml-4">E-mail</label>
                                            <input
                                                required
                                                type="email"
                                                className="w-full px-8 py-5 rounded-full bg-white border border-transparent focus:border-accent focus:outline-none transition-all placeholder:text-muted/50"
                                                placeholder="seu@email.com"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary uppercase tracking-widest ml-4">WhatsApp</label>
                                            <input
                                                required
                                                type="tel"
                                                className="w-full px-8 py-5 rounded-full bg-white border border-transparent focus:border-accent focus:outline-none transition-all placeholder:text-muted/50"
                                                placeholder="(99) 00000-0000"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary uppercase tracking-widest ml-4">Como podemos ajudar?</label>
                                        <textarea
                                            required
                                            rows={4}
                                            className="w-full px-8 py-6 rounded-[2rem] bg-white border border-transparent focus:border-accent focus:outline-none transition-all placeholder:text-muted/50 resize-none"
                                            placeholder="Conte-nos um pouco sobre seu objetivo ou dúvida..."
                                        />
                                    </div>

                                    <button
                                        disabled={formStatus === "loading"}
                                        type="submit"
                                        className="w-full bg-primary text-white py-6 rounded-full font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                                    >
                                        {formStatus === "loading" ? "Enviando..." : (
                                            <>
                                                Enviar Mensagem <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-[400px] w-full bg-secondary/40 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-muted font-medium uppercase tracking-[0.3em]">Mapa Interativo Disponível em Breve</p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
