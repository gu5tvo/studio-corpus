"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // initial entry animations
        const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

        tl.from(".hero-badge", { opacity: 0, y: 30, duration: 1 })
            .from(".hero-title", { opacity: 0, scale: 0.9, duration: 1.5, ease: "expo.out" }, "-=0.8")
            .from(".hero-description", { opacity: 0, y: 20, duration: 1 }, "-=1")
            .from(".hero-cta", { opacity: 0, y: 20, duration: 1 }, "-=0.8");

        // Radical Scroll Animation (Exit Transition)
        const scrollTl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1.5,
            }
        });

        scrollTl.to(innerRef.current, {
            scale: 0.8,
            opacity: 0.5,
            y: 100,
            borderRadius: "6rem",
            ease: "power2.inOut"
        });

        scrollTl.to(".hero-title", {
            y: -50,
            opacity: 0,
            duration: 0.5
        }, 0);

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative h-[120vh] bg-secondary/30">
            <Navbar />

            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
                <div
                    ref={innerRef}
                    className="relative w-full h-full bg-white shadow-2xl overflow-hidden origin-bottom"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary via-white to-secondary opacity-50" />

                    <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center max-w-5xl mx-auto mt-10">

                        <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/10 bg-white/80 backdrop-blur-md text-primary font-bold text-xs uppercase tracking-widest mb-8 shadow-sm">
                            <Image
                                src="/brand/logo-icon.png"
                                alt="Icon"
                                width={32}
                                height={32}
                                className="w-8 h-8 object-contain"
                            />
                            Studio Corpus
                        </div>

                        <h1 className="hero-title text-[12vw] md:text-[8vw] font-bold text-primary leading-[0.8] tracking-tighter mb-4">
                            Corpo <span className="text-secondary-foreground/20">&</span> <br />
                            Mente.
                        </h1>

                        <p className="hero-description text-xl md:text-2xl text-muted max-w-xl mx-auto leading-relaxed mb-12">
                            Um espaço de fisioterapia e pilates desenhado para transformar sua relação com o movimento.
                        </p>

                        <div className="hero-cta">
                            <Link href="/agendar" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:pr-10">
                                <span className="relative z-10">Começar transformção</span>
                                <div className="absolute inset-0 bg-accent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                                <ArrowDown size={20} className="relative z-10 transition-transform group-hover:translate-y-1" />
                            </Link>
                        </div>
                    </div>

                    <div className="absolute top-1/2 left-10 w-64 h-80 bg-gray-200 rounded-[2rem] -rotate-6 hidden lg:block opacity-40 mix-blend-multiply" />
                    <div className="absolute top-1/2 right-10 w-64 h-80 bg-gray-200 rounded-[2rem] rotate-6 hidden lg:block opacity-40 mix-blend-multiply" />
                </div>
            </div>
        </div>
    );
}
