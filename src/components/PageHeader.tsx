"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    description: string;
    highlight?: string;
}

export default function PageHeader({ title, description, highlight }: PageHeaderProps) {
    return (
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-secondary/30">
            {/* Background Elements */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold text-primary mb-6"
                >
                    {title} {highlight && <span className="text-accent">{highlight}</span>}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
                >
                    {description}
                </motion.p>
            </div>
        </section>
    );
}
