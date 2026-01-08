"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Sun, Moon, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const timetable = [
    {
        period: "Manhã",
        icon: <Sun className="text-amber-500" size={32} />,
        slots: [
            { time: "08:00", status: "Turma Aberta", type: "Pilates / Fisioterapia" },
            { time: "09:00", status: "Turma Aberta", type: "Pilates / Fisioterapia" },
            { time: "10:00", status: "Turma Aberta", type: "Pilates / Fisioterapia" },
        ]
    },
    {
        period: "Noite",
        icon: <Moon className="text-indigo-400" size={32} />,
        slots: [
            { time: "18:00", status: "Turma Aberta", type: "Pilates / Fisioterapia" },
            { time: "19:00", status: "Turma Aberta", type: "Pilates / Fisioterapia" },
            { time: "20:00", status: "Turma Aberta", type: "Pilates / Fisioterapia" },
        ]
    }
];

export default function HorariosPage() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline();

        tl.from(".schedule-header", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power4.out"
        })
            .from(".period-block", {
                opacity: 0,
                y: 30,
                stagger: 0.3,
                duration: 1,
                ease: "power3.out"
            }, "-=0.5")
            .from(".slot-card", {
                opacity: 0,
                scale: 0.95,
                stagger: 0.1,
                duration: 0.8,
                ease: "back.out(1.7)"
            }, "-=0.8");

    }, { scope: containerRef });

    return (
        <main className="bg-white min-h-screen">
            <SmoothScroll>
                <div ref={containerRef} className="relative z-10 pt-32 pb-20 px-6">
                    <Navbar />

                    <div className="max-w-6xl mx-auto">
                        <header className="schedule-header text-center mb-24">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-primary font-bold text-xs uppercase tracking-widest mb-6">
                                <Calendar size={14} className="text-accent" />
                                Disponibilidade
                            </span>
                            <h1 className="text-6xl md:text-8xl font-bold text-primary tracking-tighter leading-[0.9]">
                                Nossas <br />
                                <span className="text-accent italic font-serif">Turmas.</span>
                            </h1>
                            <p className="mt-8 text-xl text-muted max-w-2xl mx-auto leading-relaxed">
                                Escolha o melhor momento para cuidar de você. Nossas turmas são limitadas para garantir atenção personalizada.
                            </p>
                        </header>

                        <div className="grid md:grid-cols-2 gap-12">
                            {timetable.map((group, groupIdx) => (
                                <div key={groupIdx} className="period-block space-y-8">
                                    <div className="flex items-center gap-4 border-b border-primary/5 pb-6">
                                        <div className="w-16 h-16 rounded-2xl bg-secondary/5 flex items-center justify-center">
                                            {group.icon}
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-primary">{group.period}</h2>
                                            <p className="text-muted text-sm uppercase tracking-widest font-medium">Sessões disponíveis</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {group.slots.map((slot, i) => (
                                            <div
                                                key={i}
                                                className="slot-card group relative p-8 rounded-3xl border border-secondary bg-white hover:border-accent transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 overflow-hidden"
                                            >
                                                <div className="relative z-10 flex items-center justify-between">
                                                    <div className="flex items-center gap-6">
                                                        <div className="flex flex-col">
                                                            <span className="text-4xl font-bold text-primary tracking-tighter group-hover:text-accent transition-colors">
                                                                {slot.time}
                                                            </span>
                                                            <span className="text-xs font-bold text-accent uppercase tracking-[0.2em] mt-1">Horas</span>
                                                        </div>
                                                        <div className="h-10 w-[1px] bg-primary/10" />
                                                        <div>
                                                            <p className="font-bold text-primary text-lg">{slot.type}</p>
                                                            <div className="flex items-center gap-2 mt-1">
                                                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                                <span className="text-xs font-medium text-muted uppercase tracking-wider">{slot.status}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link
                                                        href="/agendar"
                                                        className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 -rotate-45 group-hover:rotate-0"
                                                    >
                                                        <ArrowRight size={20} />
                                                    </Link>
                                                </div>
                                                {/* Hover Glow Effect */}
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-24 p-12 rounded-[3rem] bg-primary text-white overflow-hidden relative group">
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="text-center md:text-left">
                                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Não encontrou o seu horário?</h3>
                                    <p className="text-white/60 text-lg">Consulte nossa equipe para horários personalizados ou lista de espera.</p>
                                </div>
                                <Link
                                    href="/contato"
                                    className="px-10 py-5 bg-accent text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-accent/20"
                                >
                                    Falar com consultor
                                </Link>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent opacity-10 blur-[80px] rounded-full group-hover:opacity-20 transition-opacity" />
                        </div>
                    </div>

                    <Footer />
                </div>
            </SmoothScroll>
        </main>
    );
}
