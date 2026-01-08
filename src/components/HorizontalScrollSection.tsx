"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const cards = [
    {
        id: 1,
        title: "Pilates",
        description: "Fortalecimento consciente e reabilitação funcional.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 2,
        title: "Quiropraxia",
        description: "Alinhamento vertebral e saúde do sistema nervoso.",
        image: "https://images.unsplash.com/photo-1502139214982-d0ad755818d8?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 3,
        title: "Ventosaterapia",
        description: "Alívio de tensões musculares e melhora da circulação.",
        image: "https://images.unsplash.com/photo-1611010344440-ad067ca65609?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 4,
        title: "Escoliose",
        description: "Tratamento específico com foco em alinhamento.",
        image: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 5,
        title: "Estética",
        description: "Cuidados faciais e corporais para seu bem-estar.",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1200",
    },
];

export default function HorizontalScrollSection() {
    const targetRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!trackRef.current) return;

        // More robust distance calculation
        const getScrollAmount = () => {
            const trackWidth = trackRef.current?.offsetWidth || 0;
            return trackWidth - window.innerWidth + 100; // Adding buffer to see the full last card
        };

        gsap.to(trackRef.current, {
            x: () => -getScrollAmount(),
            ease: "none",
            scrollTrigger: {
                trigger: targetRef.current,
                start: "top top",
                end: () => `+=${getScrollAmount() * 1.5}`, // Longer scroll for smoother experience
                scrub: 1,
                pin: true,
                invalidateOnRefresh: true,
            }
        });

        // Cards entry stagger
        gsap.from(".horizontal-card", {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: targetRef.current,
                start: "top 70%",
            }
        });

    }, { scope: targetRef });

    return (
        <section ref={targetRef} className="relative bg-white overflow-hidden">
            <div className="flex h-screen w-full flex-col justify-center overflow-hidden">

                <div className="scroll-header mb-12 max-w-xl pl-6 md:pl-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/10 bg-secondary/50 text-primary font-bold text-xs uppercase tracking-widest mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        Nossas Especialidades
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold text-primary tracking-tight">
                        Cuidado em <br /> <span className="text-gray-300">Movimento.</span>
                    </h2>
                </div>

                <div ref={trackRef} className="flex gap-8 w-max pr-24 pl-6 md:pl-24">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="horizontal-card group relative h-[60vh] w-[85vw] md:w-[600px] overflow-hidden rounded-[2.5rem] bg-secondary"
                        >
                            <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                unoptimized
                            />

                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

                            <div className="absolute top-0 right-0 p-8">
                                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                                    <ArrowUpRight size={24} />
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-none">
                                    {card.title}
                                </h3>
                                <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
