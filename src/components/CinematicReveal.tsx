"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

export default function CinematicReveal() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (textRef.current) {
            const split = new SplitType(textRef.current, { types: "chars,words" });

            gsap.from(split.chars, {
                opacity: 0.1,
                y: 20,
                rotateX: -90,
                stagger: 0.05,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    end: "top 20%",
                    scrub: true,
                }
            });

            return () => {
                split.revert();
            };
        }
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-40 md:py-60 px-6 bg-white flex items-center justify-center">
            <div className="max-w-6xl mx-auto">
                <h2
                    ref={textRef}
                    className="text-5xl md:text-8xl font-bold text-primary text-center leading-[0.95] tracking-tighter"
                    style={{ perspective: "1000px" }}
                >
                    Redefinindo o que seu corpo é capaz de sentir e alcançar hoje.
                </h2>
            </div>
        </section>
    );
}
