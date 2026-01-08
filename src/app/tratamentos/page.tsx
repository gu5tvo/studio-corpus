"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const treatments = [
    {
        title: "Fisioterapia Clínica",
        description: "Abordagem baseada em evidências para o tratamento de dores agudas e crônicas, lesões esportivas e pós-operatórios.",
        image: "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=1000&auto=format&fit=crop",
        benefits: ["Alívio imediato da dor", "Recuperação funcional", "Prevenção de recidivas"]
    },
    {
        title: "Pilates Clínico",
        description: "O método Pilates adaptado para a reabilitação, focando no controle motor, estabilidade e fortalecimento consciente.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop",
        benefits: ["Correção postural", "Fortalecimento do core", "Flexibilidade assistida"]
    },
    {
        title: "Osteopatia",
        description: "Terapia manual que busca o equilíbrio do corpo através da manipulação de tecidos, articulações e órgãos.",
        image: "https://images.unsplash.com/photo-1544367563-12123d815d19?q=80&w=1000&auto=format&fit=crop",
        benefits: ["Equilíbrio sistêmico", "Liberação miofascial", "Melhora da mobilidade"]
    },
    {
        title: "RPG",
        description: "Reeducação Postural Global para tratar desvios da coluna e tensões musculares crônicas através de alongamentos dinâmicos.",
        image: "https://images.unsplash.com/photo-1599058917233-358043bc15ee?q=80&w=1000&auto=format&fit=crop",
        benefits: ["Alinhamento vertebral", "Consciência corporal", "Redução de escolioses"]
    }
];

export default function TratamentosPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <section className="pt-40 pb-20 px-6 bg-secondary/10">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-6 block">Nossos Serviços</span>
                    <h1 className="text-5xl md:text-8xl font-bold text-primary leading-tight tracking-tighter mb-8">
                        Excelência no <br />
                        <span className="text-accent">Cuidado.</span>
                    </h1>
                    <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
                        Combinamos técnicas avançadas e um olhar individualizado para entregar os melhores resultados em reabilitação e bem-estar.
                    </p>
                </div>
            </section>

            {/* List of Treatments */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid gap-32">
                        {treatments.map((item, i) => (
                            <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}>
                                <div className="flex-1 relative aspect-[16/10] w-full rounded-[3rem] overflow-hidden shadow-2xl">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>
                                <div className="flex-1 space-y-8">
                                    <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tighter">{item.title}</h2>
                                    <p className="text-xl text-muted leading-relaxed">
                                        {item.description}
                                    </p>
                                    <div className="space-y-4">
                                        {item.benefits.map((benefit, j) => (
                                            <div key={j} className="flex items-center gap-3 text-primary font-medium">
                                                <CheckCircle2 className="text-accent" size={20} />
                                                {benefit}
                                            </div>
                                        ))}
                                    </div>
                                    <Link
                                        href="/agendar"
                                        className="inline-flex items-center gap-2 text-accent font-bold group"
                                    >
                                        Saber mais sobre {item.title}
                                        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-6 bg-primary text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Pronto para sua melhor versão?</h2>
                    <p className="text-xl text-white/60 mb-12 leading-relaxed">
                        Agende sua avaliação agora e descubra o plano de tratamento ideal para seus objetivos.
                    </p>
                    <Link
                        href="/agendar"
                        className="bg-accent text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-accent/90 transition-all shadow-xl shadow-accent/20"
                    >
                        Agendar Avaliação
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
