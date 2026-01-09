"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function UnifiedHeroStory() {
    const mainRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const storyRef = useRef<HTMLDivElement>(null);
    const heroInnerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // 1. Initial Hero Entrance
        const introTl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });
        introTl.from(".hero-badge", { opacity: 0, y: 30, duration: 1 })
            .from(".hero-title", { opacity: 0, scale: 0.9, duration: 1.5, ease: "expo.out" }, "-=0.8")
            .from(".hero-description", { opacity: 0, y: 20, duration: 1 }, "-=1")
            .from(".hero-cta", { opacity: 0, y: 20, duration: 1 }, "-=0.8");

        // 2. Master Orchestration Timeline
        const masterTl = gsap.timeline({
            scrollTrigger: {
                trigger: mainRef.current,
                start: "top top",
                end: "+=2000", // Slightly shorter as we have less content here now
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            }
        });

        // STEP A: Hero Exit Animation
        masterTl.to(heroInnerRef.current, {
            scale: 0.8,
            opacity: 0,
            y: -100,
            borderRadius: "6rem",
            ease: "power2.inOut",
            duration: 1
        }, 0);

        masterTl.to(".hero-title", {
            y: -100,
            opacity: 0,
            duration: 0.5
        }, 0);

        // STEP B: Quote Reveal (Beneath Hero)
        masterTl.fromTo(".quote-part", {
            y: 100,
            opacity: 0,
            scale: 0.9,
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            stagger: 0.3,
            ease: "power4.out"
        }, 0.2);

    }, { scope: mainRef });

    return (
        <div ref={mainRef} className="relative w-full overflow-hidden bg-white min-h-screen">
            <Navbar />

            <div className="relative h-screen w-full">

                {/* 1. HERO LAYER */}
                <div
                    ref={heroRef}
                    className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
                >
                    <div
                        ref={heroInnerRef}
                        className="relative w-full h-full bg-[#f8f9fa] shadow-2xl overflow-hidden origin-center pointer-events-auto"
                    >
                        {/* Background Video Layer */}
                        <div className="absolute inset-0 z-0">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover scale-105"
                                poster="/images/hero.png"
                            >
                                <source
                                    src="https://joy1.videvo.net/videvo_files/video/free/2019-11/large_prev/190828_07_Yoga_08.mp4"
                                    type="video/mp4"
                                />
                                Seu navegador não suporta vídeos.
                            </video>
                        </div>

                        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] z-[1]" />

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
                                <Link
                                    href="https://wa.me/5599991412100?text=Olá!%20Vi%20o%20site%20do%20Studio%20Corpus%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos."
                                    target="_blank"
                                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:pr-10"
                                >
                                    <span className="relative z-10">Começar transformação</span>
                                    <div className="absolute inset-0 bg-accent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                                    <ArrowDown size={20} className="relative z-10 transition-transform group-hover:translate-y-1" />
                                </Link>
                            </div>
                        </div>

                        {/* Decor elements */}
                        <div className="absolute top-1/2 left-10 w-64 h-80 bg-gray-200 rounded-[2rem] -rotate-6 hidden lg:block opacity-40 mix-blend-multiply" />
                        <div className="absolute top-1/2 right-10 w-64 h-80 bg-gray-200 rounded-[2rem] rotate-6 hidden lg:block opacity-40 mix-blend-multiply" />
                    </div>
                </div>

                {/* 2. QUOTE REVEAL LAYER (Revealed beneath) */}
                <div
                    ref={storyRef}
                    className="absolute inset-0 z-20 overflow-hidden bg-primary flex items-center justify-center"
                >
                    <div className="relative z-20 max-w-7xl px-6 text-center">
                        <div className="space-y-6 md:space-y-10">
                            <h2 className="quote-part text-4xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter">
                                “Pilates desenvolve um <br />
                                <span className="text-accent italic font-serif">corpo uniforme</span>,”
                            </h2>
                            <h2 className="quote-part text-3xl md:text-6xl font-medium text-white/80 leading-tight tracking-tight">
                                corrige posturas erradas, restaura a <br />
                                vitalidade física, vigora a mente...
                            </h2>
                            <h2 className="quote-part text-4xl md:text-7xl font-bold text-white tracking-tighter">
                                ...e eleva o <span className="text-accent">espírito.</span>”
                            </h2>
                        </div>
                        <div className="quote-part mt-16">
                            <span className="text-accent font-bold tracking-[0.4em] uppercase text-xs">
                                — Joseph Pilates
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
