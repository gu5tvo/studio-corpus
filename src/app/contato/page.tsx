"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Instagram, Facebook, Send, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContatoPage() {
    const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success">("idle");
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        whatsapp: "",
        mensagem: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("loading");

        const text = `Olá! Meu nome é ${formData.nome}.
        
*E-mail:* ${formData.email}
*WhatsApp:* ${formData.whatsapp}

*Mensagem:* 
${formData.mensagem}

---
_Enviado através do formulário de contato do site Studio Corpus._`;

        const whatsappUrl = `https://wa.me/5599991412100?text=${encodeURIComponent(text)}`;

        // Simulate a slight delay for better UX before redirecting
        setTimeout(() => {
            window.open(whatsappUrl, "_blank");
            setFormStatus("success");
            setFormData({ nome: "", email: "", whatsapp: "", mensagem: "" });
        }, 800);
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

                                <a href="mailto:studiocorpusitz@gmail.com" className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted font-bold uppercase tracking-widest mb-1">E-mail</p>
                                        <p className="text-xl font-bold text-primary">studiocorpusitz@gmail.com</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted font-bold uppercase tracking-widest mb-1">Localização</p>
                                        <p className="text-xl font-bold text-primary">R. Paraíba, 210 - Juçara<br />Imperatriz - MA</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm text-muted font-bold uppercase tracking-widest mb-6">Siga-nos</h3>
                                <div className="flex gap-4">
                                    <Link
                                        href="https://www.instagram.com/studiocorpusimp/"
                                        target="_blank"
                                        className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all group-hover:border-primary"
                                    >
                                        <Instagram size={20} />
                                    </Link>
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
                                            name="nome"
                                            value={formData.nome}
                                            onChange={handleChange}
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
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-8 py-5 rounded-full bg-white border border-transparent focus:border-accent focus:outline-none transition-all placeholder:text-muted/50"
                                                placeholder="seu@email.com"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary uppercase tracking-widest ml-4">WhatsApp</label>
                                            <input
                                                required
                                                type="tel"
                                                name="whatsapp"
                                                value={formData.whatsapp}
                                                onChange={handleChange}
                                                className="w-full px-8 py-5 rounded-full bg-white border border-transparent focus:border-accent focus:outline-none transition-all placeholder:text-muted/50"
                                                placeholder="(99) 00000-0000"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary uppercase tracking-widest ml-4">Como podemos ajudar?</label>
                                        <textarea
                                            required
                                            name="mensagem"
                                            value={formData.mensagem}
                                            onChange={handleChange}
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

            {/* Google Maps Section with Floating Card */}
            <section className="h-[600px] w-full relative overflow-hidden group">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.2882103733!2d-47.48473822502844!3d-5.5184481944615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92c55f86e7918dff%3A0x6c30834532e069f2!2sStudio%20Corpus%20Pilates!5e0!3m2!1spt-BR!2sbr!4v1704712345678!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale contrast-125 brightness-110 opacity-60 group-hover:opacity-100 transition-opacity duration-1000 origin-center scale-105 group-hover:scale-100 ease-out"
                />

                {/* Visual Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />

                {/* Floating Map Card */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-24 md:translate-x-0 w-[90%] md:w-96 p-10 bg-white/90 backdrop-blur-xl border border-secondary/50 rounded-[3rem] shadow-2xl transition-all duration-500 hover:shadow-accent/10 hover:-translate-y-[52%]">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-white">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-primary text-xl">Nossa Sede</h4>
                            <p className="text-xs text-muted font-bold uppercase tracking-widest">Imperatriz - MA</p>
                        </div>
                    </div>

                    <p className="text-primary font-medium mb-8 leading-relaxed">
                        Rua Paraíba, 210 - Juçara<br />
                        Próximo ao Hospital São Rafael
                    </p>

                    <a
                        href="https://www.google.com/maps/dir//Studio+Corpus+Pilates+-+R.+Para%C3%ADba,+210+-+Ju%C3%A7ara,+Imperatriz+-+MA,+65900-240"
                        target="_blank"
                        className="flex items-center justify-center gap-3 w-full py-5 bg-primary text-white rounded-full font-bold hover:bg-accent transition-all group/btn shadow-xl shadow-primary/20"
                    >
                        Como Chegar
                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
