"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HighImpactQuote() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const lines = gsap.utils.toArray(".quote-line");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom center",
                scrub: 1,
            }
        });

        tl.from(lines, {
            opacity: 0.1,
            y: 50,
            stagger: 0.2,
            duration: 1,
            ease: "power2.out"
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-40 bg-primary text-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div ref={textRef} className="space-y-8 md:space-y-12">
                    <h3 className="quote-line text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
                        “Com <span className="text-accent italic font-serif">10 sessões</span> você perceberá a diferença,”
                    </h3>
                    <h3 className="quote-line text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] md:pl-20">
                        “com <span className="text-accent italic font-serif">20 sessões</span> os outros irão perceber a diferença”
                    </h3>
                    <h3 className="quote-line text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] md:pl-40">
                        “e com <span className="text-accent italic font-serif">30 sessões</span> você vai ter um novo corpo.”
                    </h3>
                </div>

                <div className="mt-20 flex justify-end">
                    <span className="text-accent font-bold tracking-widest uppercase text-sm border-t border-accent/30 pt-4">
                        — Joseph Pilates
                    </span>
                </div>
            </div>
        </section>
    );
}
