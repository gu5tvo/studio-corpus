"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Heart, Shield, Award, Users, ArrowRight } from "lucide-react";

export default function SobrePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section - Minimalist */}
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-6 block">Nossa Essência</span>
                    <h1 className="text-6xl md:text-9xl font-bold text-primary leading-[0.8] tracking-tighter mb-12">
                        Muito além da <br />
                        <span className="italic font-serif text-primary/30 text-[10vw] md:text-[7vw]">Fisioterapia.</span>
                    </h1>
                </div>
            </section>

            {/* Manifesto Section */}
            <section className="py-20 px-6 bg-secondary/10">
                <div className="max-w-4xl mx-auto">
                    <p className="text-2xl md:text-4xl text-primary font-medium leading-[1.3] text-center mb-0">
                        No Studio Corpus, acreditamos que o movimento é a expressão mais pura da vida. Nossa missão é devolver a você a liberdade de mover-se sem dor, com força, equilíbrio e consciência.
                    </p>
                </div>
            </section>

            {/* History & Space Section */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
                        <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1593077546263-ef048ec2a8c0?q=80&w=1000&auto=format&fit=crop"
                                alt="Studio Interior"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 tracking-tighter">Um espaço concebido para a sua cura.</h2>
                            <p className="text-lg text-muted leading-relaxed mb-6">
                                Fundado com o propósito de humanizar a reabilitação, o Studio Corpus une a precisão tecnológica da fisioterapia 3D com a acolhida de um ambiente sereno e sofisticado.
                            </p>
                            <p className="text-lg text-muted leading-relaxed">
                                Cada detalhe do nosso espaço foi pensado para que você se sinta em casa, enquanto recebe o tratamento de elite que seu corpo merece. Não somos apenas uma clínica; somos um parceiro na sua jornada de bem-estar.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-20 items-center flex-row-reverse">
                        <div className="md:order-2 relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1544367563-12123d815d19?q=80&w=1000&auto=format&fit=crop"
                                alt="Physiotherapy session"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="md:order-1">
                            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 tracking-tighter">Ciência e Sensibilidade.</h2>
                            <p className="text-lg text-muted leading-relaxed mb-6">
                                Nossa metodologia integra os pilares do Pilates Clínico, Osteopatia e Treinamento Funcional para criar diagnósticos precisos e tratamentos duradouros.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mt-12">
                                <div className="p-6 bg-secondary/20 rounded-3xl">
                                    <Award className="text-accent mb-4" size={32} />
                                    <h4 className="font-bold text-primary mb-2">Exatidão</h4>
                                    <p className="text-sm text-muted">Avaliações baseadas em evidências científicas.</p>
                                </div>
                                <div className="p-6 bg-secondary/20 rounded-3xl">
                                    <Heart className="text-accent mb-4" size={32} />
                                    <h4 className="font-bold text-primary mb-2">Empatia</h4>
                                    <p className="text-sm text-muted">Cuidado focado na sua história e necessidade.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-32 px-6 bg-primary text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">Nossos Pilares</h2>
                        <p className="text-white/60">O que nos guia todos os dias.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: <Shield />, title: "Ética", desc: "Transparência total em cada etapa do tratamento." },
                            { icon: <Users />, title: "Humanização", desc: "Você não é um sintoma, é uma pessoa completa." },
                            { icon: <Heart />, title: "Paixão", desc: "Amamos o que fazemos e isso transparece no resultado." },
                            { icon: <Award />, title: "Excelência", desc: "Busca contínua por inovação e atualização técnica." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 border border-white/10 rounded-3xl hover:bg-white/5 transition-colors">
                                <div className="text-accent mb-6">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <h2 className="text-5xl md:text-8xl font-bold text-primary leading-tight tracking-tighter">
                            Especialistas <br /> em <span className="text-accent">Você.</span>
                        </h2>
                        <p className="text-xl text-muted max-w-sm mb-4">
                            Membros altamente qualificados dedicados à sua reabilitação e bem-estar.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { name: "Dr. Gustavo Passinho", role: "Fisioterapeuta & Osteopata", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop" },
                            { name: "Dra. Ana Silva", role: "Especialista em Pilates Clínico", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop" },
                            { name: "Dra. Beatriz Santos", role: "Fisioterapia Esportiva", img: "https://images.unsplash.com/photo-1559839734-2b71f1e59816?q=80&w=1000&auto=format&fit=crop" },
                        ].map((member, i) => (
                            <div key={i} className="group cursor-default">
                                <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 shadow-xl">
                                    <Image src={member.img} alt={member.name} fill className="object-cover" />
                                </div>
                                <h4 className="text-2xl font-bold text-primary mb-1">{member.name}</h4>
                                <p className="text-accent font-medium">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto bg-secondary/30 rounded-[4rem] p-12 md:p-24 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 tracking-tighter">Comece sua transformação hoje.</h2>
                    <Link href="/agendar" className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-bold text-xl hover:bg-primary/90 transition-all">
                        Agendar minha avaliação <ArrowRight size={24} />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
