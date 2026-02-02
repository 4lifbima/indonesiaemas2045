"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FileText,
    Video,
    Image as ImageIcon,
    FunnelSimple,
    ArrowRight,
    Download,
} from "@phosphor-icons/react";

const categories = [
    { id: "all", label: "Semua" },
    { id: "document", label: "Dokumen" },
    { id: "video", label: "Video" },
    { id: "infographic", label: "Infografis" },
];

const mediaItems = [
    {
        id: 1,
        type: "document",
        title: "RPJPN 2025-2045",
        description: "Dokumen Rencana Pembangunan Jangka Panjang Nasional",
        icon: FileText,
        color: "primary",
        date: "2024",
    },
    {
        id: 2,
        type: "video",
        title: "Sosialisasi Visi 2045",
        description: "Video penjelasan tentang Visi Indonesia Emas 2045",
        icon: Video,
        color: "secondary",
        date: "2024",
    },
    {
        id: 3,
        type: "infographic",
        title: "8 Agenda Pembangunan",
        description: "Infografis ringkasan 8 agenda pembangunan RPJPN",
        icon: ImageIcon,
        color: "accent",
        date: "2024",
    },
    {
        id: 4,
        type: "document",
        title: "Sasaran Pembangunan",
        description: "Dokumen target dan sasaran pembangunan 2045",
        icon: FileText,
        color: "primary",
        date: "2024",
    },
    {
        id: 5,
        type: "video",
        title: "Musrenbangnas RPJPN",
        description: "Rekaman Musyawarah Rencana Pembangunan Nasional",
        icon: Video,
        color: "secondary",
        date: "2023",
    },
    {
        id: 6,
        type: "infographic",
        title: "Visi Indonesia 2045",
        description: "Infografis visi dan target Indonesia Emas",
        icon: ImageIcon,
        color: "accent",
        date: "2024",
    },
];

const colorClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/20 text-accent",
};

export function MediaSection() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredItems =
        activeFilter === "all"
            ? mediaItems
            : mediaItems.filter((item) => item.type === activeFilter);

    return (
        <section id="media" className="section-padding">
            <div className="container-section">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        Publikasi
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6">
                        Dokumen &{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            Media
                        </span>
                    </h2>
                    <p className="text-text-secondary text-lg leading-relaxed">
                        Akses dokumen, video, dan materi terkait Rencana Pembangunan Jangka
                        Panjang Nasional 2025-2045.
                    </p>
                </motion.div>

                {/* Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center justify-center gap-2 mb-10"
                >
                    <FunnelSimple weight="fill" className="w-5 h-5 text-text-secondary mr-2" />
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            onClick={() => setActiveFilter(category.id)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === category.id
                                    ? "bg-primary text-white"
                                    : "bg-surface border border-border text-text-secondary hover:border-primary hover:text-primary"
                                }`}
                        >
                            {category.label}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="group relative bg-background border border-border rounded-xl overflow-hidden card-hover"
                            >
                                {/* Thumbnail */}
                                <div className="aspect-video bg-surface flex items-center justify-center relative overflow-hidden">
                                    <div
                                        className={`w-16 h-16 rounded-2xl flex items-center justify-center ${colorClasses[item.color as keyof typeof colorClasses]
                                            }`}
                                    >
                                        <item.icon weight="duotone" className="w-8 h-8" />
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="btn-primary py-2 px-4 text-sm"
                                        >
                                            <Download weight="bold" className="w-4 h-4" />
                                            Unduh
                                        </motion.button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <span
                                            className={`text-xs font-medium px-2 py-1 rounded-full ${colorClasses[item.color as keyof typeof colorClasses]
                                                }`}
                                        >
                                            {item.type === "document"
                                                ? "Dokumen"
                                                : item.type === "video"
                                                    ? "Video"
                                                    : "Infografis"}
                                        </span>
                                        <span className="text-xs text-text-secondary">{item.date}</span>
                                    </div>
                                    <h3 className="font-semibold text-text-primary mb-1 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-text-secondary line-clamp-2">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-secondary inline-flex"
                    >
                        Lihat Semua Publikasi
                        <ArrowRight weight="bold" className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
