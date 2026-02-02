"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CalendarBlank, CheckCircle } from "@phosphor-icons/react";

const timelineItems = [
    {
        year: "2025",
        title: "Awal Implementasi RPJPN",
        description:
            "Peluncuran Rencana Pembangunan Jangka Panjang Nasional 2025-2045 dan awal pelaksanaan pembangunan.",
        status: "active",
    },
    {
        year: "2029",
        title: "Evaluasi RPJMN Pertama",
        description:
            "Evaluasi tahap pertama RPJMN dan penyesuaian strategi berdasarkan capaian pembangunan.",
        status: "upcoming",
    },
    {
        year: "2034",
        title: "Transformasi Ekonomi Digital",
        description:
            "Target pencapaian transformasi digital ekonomi dan peningkatan kontribusi sektor teknologi.",
        status: "upcoming",
    },
    {
        year: "2039",
        title: "Infrastruktur Berkelanjutan",
        description:
            "Penyelesaian infrastruktur berkelanjutan dan pencapaian target energi terbarukan.",
        status: "upcoming",
    },
    {
        year: "2045",
        title: "Indonesia Emas",
        description:
            "Pencapaian visi Indonesia sebagai negara maju dengan pendapatan per kapita setara negara maju.",
        status: "goal",
    },
];

export function TimelineSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

    return (
        <section id="roadmap" className="section-padding bg-surface" ref={containerRef}>
            <div className="container-section">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                        Roadmap
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6">
                        Timeline Menuju{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                            2045
                        </span>
                    </h2>
                    <p className="text-text-secondary text-lg leading-relaxed">
                        Perjalanan 20 tahun pembangunan Indonesia menuju negara maju, berdaulat,
                        dan sejahtera.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line Background */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

                    {/* Animated Progress Line */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary -translate-x-1/2 origin-top"
                    />

                    {/* Timeline Items */}
                    <div className="space-y-12">
                        {timelineItems.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex items-start gap-8 ${index % 2 === 0
                                        ? "md:flex-row"
                                        : "md:flex-row-reverse md:text-right"
                                    }`}
                            >
                                {/* Content */}
                                <div className="flex-1 ml-20 md:ml-0">
                                    <div
                                        className={`bg-background border border-border rounded-xl p-6 card-hover ${item.status === "goal"
                                                ? "border-primary/50 bg-primary/5"
                                                : item.status === "active"
                                                    ? "border-accent/50 bg-accent/5"
                                                    : ""
                                            }`}
                                    >
                                        <div
                                            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-3 ${item.status === "goal"
                                                    ? "bg-primary/10 text-primary"
                                                    : item.status === "active"
                                                        ? "bg-accent/10 text-accent"
                                                        : "bg-surface text-text-secondary"
                                                }`}
                                        >
                                            {item.status === "active" ? (
                                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                            ) : item.status === "goal" ? (
                                                <CheckCircle weight="fill" className="w-4 h-4" />
                                            ) : (
                                                <CalendarBlank weight="fill" className="w-4 h-4" />
                                            )}
                                            {item.status === "active"
                                                ? "Berlangsung"
                                                : item.status === "goal"
                                                    ? "Sasaran Akhir"
                                                    : "Mendatang"}
                                        </div>
                                        <h3 className="text-xl font-bold text-text-primary mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-text-secondary leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Year Badge */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                                    <div
                                        className={`w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold border-4 ${item.status === "goal"
                                                ? "bg-primary text-white border-background"
                                                : item.status === "active"
                                                    ? "bg-accent text-white border-background"
                                                    : "bg-background text-text-primary border-border"
                                            }`}
                                    >
                                        {item.year.slice(2)}
                                    </div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
