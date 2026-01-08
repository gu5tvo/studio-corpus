"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function LayeredParallax() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const items = gsap.utils.toArray(".parallax-item");

        items.forEach((item: any, i) => {
            const speed = item.dataset.speed || 1;
            gsap.to(item, {
                y: (i % 2 === 0 ? -200 : 200) * speed,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        });

        // Background color shift
        gsap.to(containerRef.current, {
            backgroundColor: "#f8f9fa",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom center",
                scrub: true
            }
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative min-h-screen py-32 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                <div className="relative z-10">
                    <span className="text-accent font-bold tracking-widest uppercase text-sm mb-6 block">Tecnologia & Arte</span>
                    <h3 className="text-5xl md:text-7xl font-bold text-primary mb-8 leading-[0.9] tracking-tighter">
                        O futuro do <br />
                        <span className="text-secondary-foreground/20">Bem-estar.</span>
                    </h3>
                    <p className="text-xl text-muted max-w-md leading-relaxed">
                        Combinamos precisão clínica com uma sensibilidade artística para criar um ambiente onde a cura acontece naturalmente.
                    </p>
                </div>

                <div className="relative h-[600px] w-full">
                    {/* Floating Parallax Elements */}
                    <div
                        data-speed="1.5"
                        className="parallax-item absolute top-0 right-0 w-64 h-80 rounded-[3rem] overflow-hidden shadow-2xl z-20"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1544367563-12123d815d19?q=80&w=1000&auto=format&fit=crop"
                            alt="Parallax 1"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div
                        data-speed="0.8"
                        className="parallax-item absolute bottom-0 left-0 w-72 h-96 rounded-[3rem] overflow-hidden shadow-xl z-10"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop"
                            alt="Parallax 2"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div
                        data-speed="1.2"
                        className="parallax-item absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/20 rounded-full blur-3xl z-0"
                    />
                </div>
            </div>
        </section>
    );
}
