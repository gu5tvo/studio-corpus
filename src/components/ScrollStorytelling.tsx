"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const images = [
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

export default function ScrollStorytelling() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=2000",
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            }
        });

        // Grid Animation: Scale and Radial Stagger
        tl.to(".story-grid-item", {
            scale: 1.2,
            opacity: 1,
            duration: 2,
            stagger: {
                amount: 1,
                from: "center",
                grid: [3, 3],
            },
            ease: "power4.inOut"
        });

        // Layered Text Animation
        tl.to(".story-text-layer", {
            y: -100,
            opacity: 1,
            duration: 1.5,
            stagger: 0.5,
            ease: "power4.out"
        }, "-=1.5");

        // Subtle background dimming
        tl.to(".story-overlay", {
            backgroundColor: "rgba(0,0,0,0.4)",
            duration: 1
        }, 0);

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-white">
            <div className="story-overlay absolute inset-0 z-10 pointer-events-none transition-colors duration-500" />

            {/* Image Grid */}
            <div ref={gridRef} className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4 p-4 md:p-8 scale-150 rotate-12 opacity-40">
                {images.map((src, i) => (
                    <div key={i} className="story-grid-item relative w-full h-full rounded-2xl overflow-hidden shadow-2xl scale-50 opacity-0">
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
            <div ref={textRef} className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center text-white pointer-events-none">
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
        </section>
    );
}
