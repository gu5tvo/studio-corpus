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

const DAYS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
const TIMES = ["08:00", "09:00", "10:00", "18:00", "19:00", "20:00"];

export default function HorariosPage() {
    const [step, setStep] = useState(0);
    const [plan, setPlan] = useState<2 | 3>(2);
    const [selectedDays, setSelectedDays] = useState<string[]>([]);
    const [selectedTimes, setSelectedTimes] = useState<Record<string, string>>({});
    const containerRef = useRef<HTMLDivElement>(null);
    const stepRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Initial header animation
        gsap.from(".schedule-header", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power4.out"
        });
    }, { scope: containerRef });

    const animateStepChange = (nextStep: number) => {
        const tl = gsap.timeline();
        tl.to(stepRef.current, {
            opacity: 0,
            x: -20,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                setStep(nextStep);
                gsap.fromTo(stepRef.current,
                    { opacity: 0, x: 20 },
                    { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
                );
            }
        });
    };

    const toggleDay = (day: string) => {
        if (selectedDays.includes(day)) {
            setSelectedDays(prev => prev.filter(d => d !== day));
            const newTimes = { ...selectedTimes };
            delete newTimes[day];
            setSelectedTimes(newTimes);
        } else if (selectedDays.length < plan) {
            setSelectedDays(prev => [...prev, day]);
        }
    };

    const setTimeForDay = (day: string, time: string) => {
        setSelectedTimes(prev => ({ ...prev, [day]: time }));
    };

    const getFormattedSchedule = () => {
        return selectedDays.map(day => `${day} às ${selectedTimes[day]}h`).join(", ");
    };

    const whatsappLink = `https://wa.me/5599991412100?text=${encodeURIComponent(
        `Olá! Gostaria de agendar meu plano de ${plan}x na semana no Studio Corpus. Meus horários escolhidos: ${getFormattedSchedule()}`
    )}`;

    const isStep2Complete = selectedDays.length === plan;
    const isStep3Complete = Object.keys(selectedTimes).length === plan;

    return (
        <main className="bg-[#fcfdfd] min-h-screen">
            <SmoothScroll>
                <div ref={containerRef} className="relative z-10 pt-32 pb-20 px-4 md:px-6">
                    <Navbar />

                    <div className="max-w-4xl mx-auto">
                        {/* Header Section */}
                        <header className="schedule-header text-center mb-16">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-primary font-bold text-xs uppercase tracking-widest mb-6">
                                <Calendar size={14} className="text-accent" />
                                {step === 0 ? "Informações Importantes" : `Passo ${step} de 3`}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold text-primary tracking-tighter leading-[0.9]">
                                {step === 0 && <>Como funciona <br /><span className="text-accent italic font-serif">Nossos Horários?</span></>}
                                {step === 1 && <>Qual a sua <br /><span className="text-accent italic font-serif">Frequência?</span></>}
                                {step === 2 && <>Escolha seus <br /><span className="text-accent italic font-serif">Dias.</span></>}
                                {step === 3 && <>Defina seus <br /><span className="text-accent italic font-serif">Horários.</span></>}
                            </h1>
                        </header>

                        {/* Wizard Container */}
                        <div ref={stepRef} className="min-h-[400px]">
                            {/* STEP 0: Introduction */}
                            {step === 0 && (
                                <div className="space-y-12">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="p-8 rounded-[2.5rem] bg-white border border-secondary shadow-sm">
                                            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                                                <Sun size={24} />
                                            </div>
                                            <h3 className="text-2xl font-bold text-primary mb-4">Metodologia Studio Corpus</h3>
                                            <p className="text-muted leading-relaxed">
                                                Trabalhamos com turmas reduzidas para garantir que cada aluno receba atenção total durante os exercícios de Pilates e sessões de Fisioterapia.
                                            </p>
                                        </div>
                                        <div className="p-8 rounded-[2.5rem] bg-white border border-secondary shadow-sm">
                                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                                <Clock size={24} />
                                            </div>
                                            <h3 className="text-2xl font-bold text-primary mb-4">Blocos de Horário</h3>
                                            <p className="text-muted leading-relaxed mb-4">
                                                Nossas sessões ocorrem em dois grandes períodos do dia, facilitando sua rotina:
                                            </p>
                                            <ul className="space-y-2">
                                                <li className="flex items-center gap-2 text-primary font-medium">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                                    Manhã: 08h às 10h
                                                </li>
                                                <li className="flex items-center gap-2 text-primary font-medium">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                                    Noite: 18h às 20h
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="p-10 rounded-[3rem] bg-secondary/5 border border-primary/5 flex flex-col md:flex-row items-center gap-8 justify-between">
                                        <div className="max-w-md text-center md:text-left">
                                            <h4 className="text-xl font-bold text-primary mb-2">Pronto para reservar sua turma?</h4>
                                            <p className="text-muted">Abaixo você poderá simular sua agenda e nos enviar sua preferência via WhatsApp.</p>
                                        </div>
                                        <button
                                            onClick={() => animateStepChange(1)}
                                            className="px-12 py-6 bg-primary text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-primary/20 flex items-center gap-3 whitespace-nowrap"
                                        >
                                            Iniciar Agendamento
                                            <ArrowRight size={20} />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* STEP 1: Plan Selection */}
                            {step === 1 && (
                                <div className="space-y-8 flex flex-col items-center">
                                    <p className="text-muted text-lg text-center max-w-lg leading-relaxed">
                                        Para começarmos, escolha quantas vezes na semana você pretende frequentar o estúdio.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                                        {[2, 3].map((f) => (
                                            <button
                                                key={f}
                                                onClick={() => { setPlan(f as 2 | 3); setSelectedDays([]); setSelectedTimes({}); animateStepChange(2); }}
                                                className="group relative p-10 rounded-[2.5rem] bg-white border border-secondary hover:border-accent transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 overflow-hidden text-center"
                                            >
                                                <div className="relative z-10">
                                                    <span className="text-6xl font-bold text-primary mb-2 block group-hover:text-accent transition-colors">{f}x</span>
                                                    <span className="text-muted font-bold tracking-widest uppercase text-xs">Por semana</span>
                                                </div>
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* STEP 2: Day Selection */}
                            {step === 2 && (
                                <div className="space-y-10">
                                    <div className="flex items-center justify-between">
                                        <button onClick={() => animateStepChange(1)} className="text-primary/40 hover:text-primary flex items-center gap-2 font-bold transition-colors">
                                            <ArrowRight size={18} className="rotate-180" /> Voltar
                                        </button>
                                        <span className="text-sm font-bold text-primary/40 uppercase tracking-widest">
                                            Selecione {plan} dias
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                        {DAYS.map((day) => {
                                            const isSelected = selectedDays.includes(day);
                                            const isFull = selectedDays.length >= plan && !isSelected;
                                            return (
                                                <button
                                                    key={day}
                                                    onClick={() => toggleDay(day)}
                                                    disabled={isFull}
                                                    className={`h-32 rounded-3xl border transition-all duration-300 flex flex-col items-center justify-center gap-2
                                                        ${isSelected
                                                            ? 'bg-accent border-accent text-white shadow-xl shadow-accent/20 scale-105'
                                                            : 'bg-white border-secondary hover:border-primary/20 text-primary'
                                                        }
                                                        ${isFull ? 'opacity-30 grayscale cursor-not-allowed' : 'cursor-pointer'}
                                                    `}
                                                >
                                                    <span className="text-xs font-black uppercase tracking-widest opacity-50">{day.substring(0, 3)}</span>
                                                    <span className="font-bold text-lg">{day}</span>
                                                </button>
                                            );
                                        })}
                                    </div>

                                    {isStep2Complete && (
                                        <div className="flex justify-center pt-8">
                                            <button
                                                onClick={() => animateStepChange(3)}
                                                className="px-12 py-6 bg-primary text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-primary/20 flex items-center gap-3"
                                            >
                                                Próximo Passo
                                                <ArrowRight size={20} />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* STEP 3: Time Selection */}
                            {step === 3 && (
                                <div className="space-y-12">
                                    <div className="flex items-center justify-between">
                                        <button onClick={() => animateStepChange(2)} className="text-primary/40 hover:text-primary flex items-center gap-2 font-bold transition-colors">
                                            <ArrowRight size={18} className="rotate-180" /> Voltar
                                        </button>
                                        <span className="text-sm font-bold text-primary/40 uppercase tracking-widest">
                                            Defina os horários
                                        </span>
                                    </div>

                                    <div className="space-y-16">
                                        {selectedDays.map((day) => (
                                            <div key={day} className="space-y-6">
                                                <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                                                    <div className="w-2 h-8 bg-accent rounded-full" />
                                                    {day}
                                                </h3>
                                                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                                                    {TIMES.map((time) => (
                                                        <button
                                                            key={time}
                                                            onClick={() => setTimeForDay(day, time)}
                                                            className={`py-6 rounded-2xl border transition-all duration-300 font-bold
                                                                ${selectedTimes[day] === time
                                                                    ? 'bg-primary border-primary text-white shadow-lg scale-105'
                                                                    : 'bg-white border-secondary hover:border-primary/20 text-primary'
                                                                }
                                                            `}
                                                        >
                                                            {time}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Summary Bar */}
                        {step === 3 && isStep3Complete && (
                            <div className="mt-20 p-8 md:p-12 rounded-[3.5rem] bg-accent text-white shadow-2xl relative overflow-hidden card-summary">
                                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                                    <div className="text-center md:text-left">
                                        <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                                            <div className="px-4 py-1 rounded-full bg-white/20 text-[10px] uppercase font-black tracking-widest">
                                                Resumo da Agenda
                                            </div>
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight mb-4">
                                            Plano {plan}x na Semana
                                        </h3>
                                        <p className="text-white font-medium italic text-lg opacity-90 break-words max-w-xl">
                                            "{getFormattedSchedule()}"
                                        </p>
                                    </div>

                                    <Link
                                        href={whatsappLink}
                                        target="_blank"
                                        className="px-12 py-6 bg-white text-primary rounded-full font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-black/5 flex items-center gap-3"
                                    >
                                        Enviar Proposta
                                        <ArrowRight size={20} />
                                    </Link>
                                </div>
                                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary opacity-10 blur-[100px] rounded-full" />
                            </div>
                        )}

                        <div className="mt-20 text-center text-muted text-sm px-4">
                            <p className="max-w-xl mx-auto opacity-40">
                                Passo {step} de 3 • Studio Corpus Fisioterapia e Pilates
                            </p>
                        </div>
                    </div>

                    <Footer />
                </div>
            </SmoothScroll>
        </main>
    );
}
