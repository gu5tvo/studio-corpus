"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function InteractiveEnding() {
    const containerRef = useRef<HTMLDivElement>(null);
    const circleRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Magnetic effect logic
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const target = circleRef.current;
            if (!target) return;

            const rect = target.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const distanceX = clientX - centerX;
            const distanceY = clientY - centerY;

            gsap.to(target, {
                x: distanceX * 0.2,
                y: distanceY * 0.2,
                duration: 0.6,
                ease: "power2.out"
            });

            gsap.to(textRef.current, {
                x: distanceX * 0.1,
                y: distanceY * 0.1,
                duration: 0.6,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = () => {
            gsap.to([circleRef.current, textRef.current], {
                x: 0,
                y: 0,
                duration: 0.6,
                ease: "elastic.out(1, 0.3)"
            });
        };

        const currentContainer = containerRef.current;
        if (currentContainer) {
            currentContainer.addEventListener("mousemove", handleMouseMove);
            currentContainer.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (currentContainer) {
                currentContainer.removeEventListener("mousemove", handleMouseMove);
                currentContainer.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-40 bg-white flex flex-col items-center justify-center overflow-hidden">
            <div className="text-center mb-20 px-6">
                <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Pronta para começar?</span>
                <h2 className="text-5xl md:text-9xl font-bold text-primary leading-[0.8] tracking-tighter">
                    Sua melhor <br />
                    versão é <span className="italic font-serif text-primary/30">agora.</span>
                </h2>
            </div>

            <Link href="/agendar" className="relative group cursor-none md:cursor-default">
                <div
                    ref={circleRef}
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-2xl overflow-hidden"
                >
                    <div className="absolute inset-0 bg-accent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

                    <div ref={textRef} className="relative z-10 text-white flex flex-col items-center gap-2">
                        <span className="font-bold text-lg md:text-2xl uppercase tracking-widest">Agendar</span>
                        <ArrowUpRight size={32} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                </div>
            </Link>
        </section>
    );
}
