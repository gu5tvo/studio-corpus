"use client";

import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".testimonial-left > *", {
            opacity: 0,
            x: -50,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".testimonial-left",
                start: "top 80%",
            }
        });

        gsap.from(".testimonial-card", {
            opacity: 0,
            scale: 0.9,
            duration: 1,
            ease: "expo.out",
            scrollTrigger: {
                trigger: ".testimonial-card",
                start: "top 85%",
            }
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-20 md:py-32 bg-secondary/20 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="testimonial-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/10 bg-white text-primary font-bold text-xs uppercase tracking-widest mb-8">
                            <Star size={12} className="fill-accent text-accent" />
                            Histórias Reais
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-primary leading-tight mb-8">
                            A confiança de quem já <span className="text-accent">viveu</span> a mudança.
                        </h2>

                        <div className="flex gap-4">
                            <button className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-primary">←</button>
                            <button className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-primary">→</button>
                        </div>
                    </div>

                    <div className="testimonial-card bg-white p-10 md:p-14 rounded-[3rem] shadow-xl relative">
                        <Quote className="absolute top-10 left-10 text-primary/5 w-20 h-20" />
                        <p className="text-xl md:text-2xl text-primary font-medium leading-relaxed mb-8 relative z-10">
                            "Cheguei ao Studio sem conseguir pegar meu neto no colo por causa da dor lombar. Em 3 meses de Pilates Clínico, recuperei não só minha força, mas minha alegria de viver."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
                                    alt="Maria Helena"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-bold text-primary">Maria Helena</p>
                                <p className="text-sm text-muted">Aluna há 2 anos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
