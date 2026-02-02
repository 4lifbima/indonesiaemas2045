"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, FileText } from "@phosphor-icons/react";
import { AnimatedBlob } from "@/components/ui/AnimatedBlob";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

export function HeroSection() {
    return (
        <section
            id="beranda"
            className="relative flex items-center justify-center overflow-hidden min-h-screen pt-32 lg:py-42"
        >
            {/* Animated Blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <AnimatedBlob
                    color="primary"
                    size="xl"
                    animation="float"
                    className="top-[-10%] right-[-10%]"
                    delay={0}
                />
                <AnimatedBlob
                    color="secondary"
                    size="lg"
                    animation="float-reverse"
                    className="bottom-[10%] left-[-5%]"
                    delay={0.5}
                />
                <AnimatedBlob
                    color="accent"
                    size="md"
                    animation="float-slow"
                    className="top-[20%] left-[15%]"
                    delay={1}
                />
                <AnimatedBlob
                    color="primary"
                    size="sm"
                    animation="float-reverse"
                    className="bottom-[30%] right-[10%]"
                    delay={0.3}
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/80 pointer-events-none" />

            {/* Content */}
            <div className="container-section relative z-10 text-center py-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        RPJPN 2025-2045
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight mb-6"
                    >
                        Indonesia{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Emas
                        </span>{" "}
                        2045
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Mewujudkan visi Indonesia sebagai negara{" "}
                        <span className="text-text-primary font-medium">maju</span>,{" "}
                        <span className="text-text-primary font-medium">berdaulat</span>, dan{" "}
                        <span className="text-text-primary font-medium">sejahtera</span> dengan
                        pendapatan per kapita setara negara maju.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <motion.a
                            href="#visi"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-primary"
                        >
                            Jelajahi Visi
                            <ArrowRight weight="bold" className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                            href="https://drive.google.com/file/d/1BvGbA2pC7O8pGKiYmRHT9KWVD7FSQbG5/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-secondary"
                        >
                            <FileText weight="bold" className="w-5 h-5" />
                            Download dokumen
                        </motion.a>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.9, duration: 1 }}
                        className="mt-16 relative max-w-5xl mx-auto"
                    >
                        {/* Decorative glow behind image */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/10 to-secondary/20 rounded-3xl blur-2xl opacity-60" />

                        {/* Image container */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-background">
                            <Image
                                src="/img/beranda.webp"
                                alt="Indonesia Emas 2045 - Visi Pembangunan Nasional"
                                width={1200}
                                height={675}
                                className="w-full h-auto object-cover"
                                priority
                            />
                            {/* Elegant gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <ScrollIndicator targetId="visi" />
                </div>
            </div>
        </section>
    );
}
