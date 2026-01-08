"use client";

import { useRef, useState } from "react";
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

const DAYS = ["Seg", "Ter", "Qua", "Qui", "Sex"];
const HOURS = ["08:00", "09:00", "10:00", "18:00", "19:00", "20:00"];

export default function HorariosPage() {
    const [plan, setPlan] = useState<2 | 3>(2);
    const [selectedSlots, setSelectedSlots] = useState<string[]>([]);
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
            .from(".plan-selector", {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.5")
            .from(".grid-header", {
                opacity: 0,
                y: 20,
                stagger: 0.05,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.6")
            .from(".grid-slot", {
                opacity: 0,
                scale: 0.9,
                stagger: {
                    each: 0.01,
                    from: "random"
                },
                duration: 0.5,
                ease: "power2.out"
            }, "-=0.4");

    }, { scope: containerRef });

    const toggleSlot = (slotId: string) => {
        if (selectedSlots.includes(slotId)) {
            setSelectedSlots(prev => prev.filter(id => id !== slotId));
        } else {
            if (selectedSlots.length < plan) {
                setSelectedSlots(prev => [...prev, slotId]);
            }
        }
    };

    const getFormattedSchedule = () => {
        return selectedSlots.map(id => {
            const [day, hour] = id.split("-");
            return `${day} às ${hour}h`;
        }).join(", ");
    };

    const whatsappLink = `https://wa.me/5599991412100?text=${encodeURIComponent(
        `Olá! Gostaria de agendar meu plano de ${plan}x na semana no Studio Corpus. Meus horários escolhidos: ${getFormattedSchedule()}`
    )}`;

    return (
        <main className="bg-[#fcfdfd] min-h-screen">
            <SmoothScroll>
                <div ref={containerRef} className="relative z-10 pt-32 pb-20 px-4 md:px-6">
                    <Navbar />

                    <div className="max-w-7xl mx-auto">
                        {/* Header Section */}
                        <header className="schedule-header text-center mb-16">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-primary font-bold text-xs uppercase tracking-widest mb-6">
                                <Calendar size={14} className="text-accent" />
                                Quadro de Horários
                            </span>
                            <h1 className="text-5xl md:text-8xl font-bold text-primary tracking-tighter leading-[0.9]">
                                Monte sua <br />
                                <span className="text-accent italic font-serif">Agenda.</span>
                            </h1>
                            <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
                                Escolha seu plano e selecione os melhores horários para sua rotina. Turmas exclusivas com atenção máxima.
                            </p>
                        </header>

                        {/* Plan Selector */}
                        <div className="plan-selector flex flex-col items-center mb-12">
                            <h3 className="text-sm font-bold text-primary/40 uppercase tracking-[0.2em] mb-6">Selecione seu plano</h3>
                            <div className="flex p-1 bg-secondary/10 rounded-2xl border border-secondary">
                                <button
                                    onClick={() => { setPlan(2); setSelectedSlots([]); }}
                                    className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${plan === 2 ? 'bg-primary text-white shadow-xl' : 'text-primary/60 hover:text-primary'}`}
                                >
                                    2x por Semana
                                </button>
                                <button
                                    onClick={() => { setPlan(3); setSelectedSlots([]); }}
                                    className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${plan === 3 ? 'bg-primary text-white shadow-xl' : 'text-primary/60 hover:text-primary'}`}
                                >
                                    3x por Semana
                                </button>
                            </div>
                        </div>

                        {/* Weekly Board */}
                        <div className="relative overflow-x-auto pb-8">
                            <div className="min-w-[800px]">
                                {/* Grid Header */}
                                <div className="grid grid-cols-[100px_repeat(5,1fr)] gap-4 mb-4">
                                    <div className="flex items-center justify-center">
                                        <Clock size={20} className="text-muted/30" />
                                    </div>
                                    {DAYS.map(day => (
                                        <div key={day} className="grid-header py-4 rounded-2xl bg-white border border-secondary text-center shadow-sm">
                                            <span className="text-primary font-bold tracking-widest uppercase text-sm">{day}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Grid Body */}
                                {HOURS.map(hour => (
                                    <div key={hour} className="grid grid-cols-[100px_repeat(5,1fr)] gap-4 mb-4">
                                        <div className="flex items-center justify-center">
                                            <span className="text-primary/40 font-bold text-lg">{hour}</span>
                                        </div>
                                        {DAYS.map(day => {
                                            const id = `${day}-${hour}`;
                                            const isSelected = selectedSlots.includes(id);
                                            const isFull = selectedSlots.length >= plan && !isSelected;

                                            return (
                                                <button
                                                    key={id}
                                                    onClick={() => toggleSlot(id)}
                                                    disabled={isFull}
                                                    className={`grid-slot relative h-24 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center p-2 group
                                                        ${isSelected
                                                            ? 'bg-accent border-accent text-white shadow-lg shadow-accent/20'
                                                            : 'bg-white border-secondary hover:border-primary/20 hover:bg-secondary/5 text-primary'
                                                        }
                                                        ${isFull ? 'opacity-30 grayscale cursor-not-allowed' : 'cursor-pointer'}
                                                    `}
                                                >
                                                    <span className={`text-xs font-bold uppercase tracking-widest mb-1 ${isSelected ? 'text-white/80' : 'text-primary/30'}`}>
                                                        Turma
                                                    </span>
                                                    <span className="font-serif italic text-lg opacity-80 group-hover:opacity-100">Disponível</span>

                                                    {isSelected && (
                                                        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white shadow-sm" />
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Summary Bar */}
                        <div className="mt-12 p-8 md:p-12 rounded-[3.5rem] bg-primary text-white shadow-2xl relative overflow-hidden">
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                                <div className="text-center md:text-left">
                                    <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                                        <div className="px-4 py-1 rounded-full bg-accent text-[10px] uppercase font-black tracking-widest">
                                            Plano {plan}x
                                        </div>
                                        <span className="text-white/40 text-sm font-medium">
                                            {selectedSlots.length} de {plan} horários selecionados
                                        </span>
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
                                        {selectedSlots.length === 0
                                            ? "Escolha seus horários"
                                            : selectedSlots.length < plan
                                                ? `Faltam ${plan - selectedSlots.length} horários...`
                                                : "Horários definidos!"
                                        }
                                    </h3>
                                    {selectedSlots.length === plan && (
                                        <p className="mt-4 text-white/60 font-medium italic">"{getFormattedSchedule()}"</p>
                                    )}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    {selectedSlots.length === plan ? (
                                        <Link
                                            href={whatsappLink}
                                            target="_blank"
                                            className="px-12 py-6 bg-accent text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-accent/40 flex items-center gap-3"
                                        >
                                            Confirmar no WhatsApp
                                            <ArrowRight size={20} />
                                        </Link>
                                    ) : (
                                        <div className="px-12 py-6 bg-white/10 text-white/30 rounded-full font-bold text-xl border border-white/5 line-through decoration-white/20">
                                            Selecione os horários
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Decorative background circle */}
                            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent opacity-10 blur-[100px] rounded-full" />
                        </div>

                        <div className="mt-20 text-center text-muted text-sm px-4">
                            <p className="max-w-xl mx-auto">
                                * Os horários estão sujeitos a confirmação de disponibilidade no momento do agendamento oficial via WhatsApp.
                            </p>
                        </div>
                    </div>

                    <Footer />
                </div>
            </SmoothScroll>
        </main>
    );
}
