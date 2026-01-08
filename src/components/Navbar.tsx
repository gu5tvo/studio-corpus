"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Sobre", href: "/sobre" },
        { name: "Tratamentos", href: "/tratamentos" },
        { name: "Blog", href: "/blog" },
        { name: "Contato", href: "/contato" },
    ];

    return (
        <nav className={`fixed top-6 left-0 right-0 z-50 transition-all duration-300 px-6`}>
            <div className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${scrolled
                ? "bg-white/80 backdrop-blur-xl shadow-lg border border-white/20 py-3 px-6"
                : "bg-transparent py-4 px-0"
                }`}>
                <div className="flex justify-between items-center">

                    {/* Logo Area */}
                    <Link href="/" className="flex items-center gap-2 group relative">
                        <div className="transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/brand/logo-full.png"
                                alt="Studio Corpus"
                                width={240}
                                height={80}
                                className="h-16 w-auto object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Links - Pill Style */}
                    <div className="hidden md:flex items-center bg-secondary/50 rounded-full px-2 py-1 backdrop-blur-sm border border-white/10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-6 py-2 rounded-full text-primary font-medium text-sm hover:bg-white hover:shadow-sm transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="https://wa.me/5599991406087"
                            target="_blank"
                            className="bg-accent text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 hover:-translate-y-0.5"
                        >
                            Agendar Agora
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden w-10 h-10 flex items-center justify-center bg-secondary rounded-full text-primary"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div className="absolute top-24 left-6 right-6 bg-white rounded-3xl shadow-2xl p-6 border border-secondary animate-in slide-in-from-top-4 duration-300">
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-4 py-3 rounded-xl hover:bg-secondary text-primary font-bold text-lg transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="h-px bg-secondary my-2" />
                        <Link
                            href="/agendar"
                            className="bg-accent text-white px-4 py-3 rounded-xl font-bold text-center"
                            onClick={() => setMobileOpen(false)}
                        >
                            Agendar Avaliação
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
