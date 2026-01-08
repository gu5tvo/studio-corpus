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
        title: "Pilates Clínico",
        description: "Reabilitação e fortalecimento.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Fisioterapia Pélvica",
        description: "Cuidado íntimo feminino.",
        image: "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Tratamento de Dor",
        description: "Alívio imediato e duradouro.",
        image: "https://images.unsplash.com/photo-1544367563-12123d815d19?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "Gestantes",
        description: "Preparação para o parto.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1000&auto=format&fit=crop&q=60",
    },
];

export default function HorizontalScrollSection() {
    const targetRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Horizontal Scroll
        const totalMove = trackRef.current!.scrollWidth - window.innerWidth + 200; // adding some padding

        gsap.to(trackRef.current, {
            x: -totalMove,
            ease: "none",
            scrollTrigger: {
                trigger: targetRef.current,
                start: "top top",
                end: () => `+=${totalMove}`,
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
            <div className="flex h-screen w-full flex-col justify-center overflow-hidden pl-6 md:pl-24">

                <div className="scroll-header mb-12 max-w-xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/10 bg-secondary/50 text-primary font-bold text-xs uppercase tracking-widest mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        Nossas Especialidades
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold text-primary tracking-tight">
                        Cuidado em <br /> <span className="text-gray-300">Movimento.</span>
                    </h2>
                </div>

                <div ref={trackRef} className="flex gap-8 w-max pr-24">
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
