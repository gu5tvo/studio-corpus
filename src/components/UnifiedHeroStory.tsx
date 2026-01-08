"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const storyImages = [
    "/images/hero.png",
    "https://images.unsplash.com/photo-1544367563-12123d815d19?auto=format&fit=crop&q=80&w=1000",
    "/images/about.png",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1000",
    "/images/hero.png",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000",
    "/images/about.png",
    "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1599058917233-358043bc15ee?auto=format&fit=crop&q=80&w=1000",
];

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
                end: "+=3000", // Unified scroll length
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            }
        });

        // STEP A: Hero Exit Animation (starts immediately)
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

        // STEP B: Story Grid Scale & Stagger (Starts as Hero fades)
        masterTl.fromTo(".story-grid-item", {
            scale: 0.5,
            opacity: 0,
        }, {
            scale: 1.2,
            opacity: 1,
            duration: 2,
            stagger: {
                amount: 1,
                from: "center",
                grid: [3, 3],
            },
            ease: "power2.inOut"
        }, 0.2); // Small overlap to prevent white gap

        // STEP C: Background Dimming
        masterTl.to(".story-overlay", {
            backgroundColor: "rgba(0,0,0,0.5)",
            duration: 1
        }, 0.5);

        // STEP D: Story Text Layers
        masterTl.to(".story-text-layer", {
            y: -100,
            opacity: 1,
            duration: 1.5,
            stagger: 0.5,
            ease: "power4.out"
        }, ">-0.5");

    }, { scope: mainRef });

    return (
        <div ref={mainRef} className="relative w-full overflow-hidden bg-white">
            <Navbar />

            {/* SHARED CONTAINER FOR PINNING */}
            <div className="relative h-screen w-full">

                {/* 1. HERO LAYER (On top initially) */}
                <div
                    ref={heroRef}
                    className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
                >
                    <div
                        ref={heroInnerRef}
                        className="relative w-full h-full bg-white shadow-2xl overflow-hidden origin-center pointer-events-auto"
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

                {/* 2. STORYTELLING LAYER (Revealed beneath) */}
                <div
                    ref={storyRef}
                    className="absolute inset-0 z-20 overflow-hidden bg-black"
                >
                    <div className="story-overlay absolute inset-0 z-10 pointer-events-none transition-colors duration-500" />

                    {/* Image Grid */}
                    <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4 p-4 md:p-8 scale-150 rotate-12 opacity-40">
                        {storyImages.map((src, i) => (
                            <div key={i} className="story-grid-item relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src={src}
                                    alt={`Story image ${i}`}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                        ))}
                    </div>

                    {/* Content Layers */}
                    <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center text-white pointer-events-none">
                        <div className="story-text-layer opacity-0 translate-y-20 max-w-4xl">
                            <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-6 block">A Jornada</span>
                            <h2 className="text-5xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8">
                                Resgate a sua <br />
                                <span className="text-white/40 italic font-serif">Essência.</span>
                            </h2>
                        </div>

                        <div className="story-text-layer opacity-0 translate-y-20 max-w-2xl">
                            <p className="text-xl md:text-2xl font-light leading-relaxed text-white/80">
                                Não é apenas sobre exercícios. É sobre reconectar cada fibra do seu ser com o potencial infinito de movimento que você possui.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
