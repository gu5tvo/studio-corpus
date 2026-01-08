"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function StickyImageSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageWrapperRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Text reveal
        gsap.from(textRef.current!.children, {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 80%",
            }
        });

        // Image Parallax and Scale Up
        gsap.fromTo(".parallax-image",
            { scale: 0.95 },
            {
                scale: 1,
                scrollTrigger: {
                    trigger: imageWrapperRef.current,
                    start: "top 90%",
                    end: "bottom top",
                    scrub: true,
                }
            }
        );

        gsap.to(".parallax-bg", {
            y: "20%",
            ease: "none",
            scrollTrigger: {
                trigger: imageWrapperRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div ref={textRef}>
                        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Manifesto</span>
                        <h3 className="text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight">
                            O corpo foi feito para se <br />
                            <span className="italic font-serif text-primary/50">mover.</span>
                        </h3>
                        <p className="text-xl text-muted leading-relaxed mb-6">
                            Acreditamos que a saúde não é a ausência de doença, mas a presença de vitalidade. Nosso espaço foi desenhado para inspirar esse movimento.
                        </p>
                        <p className="text-xl text-muted leading-relaxed">
                            Cada detalhe, da iluminação à arquitetura, convida ao relaxamento e ao foco no que mais importa: você.
                        </p>
                    </div>

                    <div ref={imageWrapperRef} className="parallax-image h-[600px] w-full rounded-[3rem] overflow-hidden relative">
                        <div className="parallax-bg absolute inset-0 w-full h-[120%] -top-[10%] bg-primary">
                            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1544367563-12123d815d19?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-80 mix-blend-overlay" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                        </div>

                        <div className="absolute bottom-10 left-10 z-10">
                            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-3xl text-white max-w-xs">
                                <p className="font-bold text-xl mb-2">Ambiente Integrado</p>
                                <p className="text-sm text-white/80">Projetado para o seu conforto.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
