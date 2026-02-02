"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    CurrencyDollar,
    UsersThree,
    Globe,
    GraduationCap,
    Leaf,
} from "@phosphor-icons/react";

const sasaranItems = [
    {
        id: 1,
        label: "Sasaran Visi 1",
        title: "Pendapatan per Kapita Setara Negara Maju",
        description:
            "Pendapatan per kapita Indonesia menjadi ke-5 terbesar dunia sekitar USD23.000-30.300. Kontribusi PDB maritim mencapai 15,0 persen dan kontribusi PDB industri pengolahan 28,0 persen.",
        image: "/sasaran/ap1_2023-05-21-013919_qesc.jpg",
        icon: CurrencyDollar,
    },
    {
        id: 2,
        label: "Sasaran Visi 2",
        title: "Kemiskinan Menurun dan Ketimpangan Berkurang",
        description:
            "Tingkat kemiskinan pada kisaran 0,5-0,8 persen, ketimpangan pendapatan antar penduduk menurun dengan Rasio Gini 0,29-0,32 dan ketimpangan antar wilayah menurun dengan peningkatan kontribusi PDRB KTI menjadi 28,5 persen.",
        image: "/sasaran/ap2_2023-05-21-013926_kmge.jpg",
        icon: UsersThree,
    },
    {
        id: 3,
        label: "Sasaran Visi 3",
        title: "Kepemimpinan dan Pengaruh di Dunia Internasional Meningkat",
        description:
            "Penguatan diplomasi internasional dan kepemimpinan global, pengaruh budaya, peran aktif dalam organisasi internasional, serta berkontribusi terhadap penyelesaian isu-isu global. Global Power Index masuk ke dalam 15 besar dunia.",
        image: "/sasaran/ap3_2023-05-21-013913_vvpp.jpg",
        icon: Globe,
    },
    {
        id: 4,
        label: "Sasaran Visi 4",
        title: "Daya Saing Sumber Daya Manusia Meningkat",
        description:
            "Peningkatan kualitas SDM secara merata melalui peningkatan pendidikan, pelatihan dan pengembangan, sikap dan etos kerja, penguasaan teknologi, inovasi dan kreativitas, dan kesehatan yang diukur melalui peningkatan Indeks Modal Manusia (Human Capital Index) menjadi 0,73.",
        image: "/sasaran/ap4_2023-10-11-033843_aawq.jpg",
        icon: GraduationCap,
    },
    {
        id: 5,
        label: "Sasaran Visi 5",
        title: "Intensitas Emisi GRK Menurun menuju Net Zero Emission",
        description:
            "Tingkat penurunan intensitas emisi Gas Rumah Kaca (GRK) mencapai 93,5% serta Indeks Kualitas Lingkungan Hidup meningkat menjadi 83,0.",
        image: "/sasaran/ap5_2023-05-21-013858_fapb.jpg",
        icon: Leaf,
    },
];

function FlipCard({ item, index }: { item: typeof sasaranItems[0]; index: number }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-shrink-0 w-[280px] sm:w-[300px] h-[420px] perspective-1000"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer ${isFlipped ? "rotate-y-180" : ""
                    }`}
            >
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-xl">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-secondary/60" />

                    {/* Label Badge */}
                    <div className="absolute top-4 left-4 right-4">
                        <span className="inline-block px-3 py-1.5 rounded-full bg-primary text-white text-xs font-semibold">
                            {item.label}
                        </span>
                    </div>

                    {/* Title at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-white font-semibold text-lg leading-tight text-center">
                            {item.title}
                        </h3>
                    </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-xl bg-secondary">
                    {/* Header */}
                    <div className="p-5 border-b border-white/10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                                <item.icon weight="duotone" className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-white font-bold text-2xl">0{item.id}</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                        <h4 className="text-white font-bold text-lg mb-4 leading-tight">
                            {item.title}
                        </h4>
                        <p className="text-white/80 text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function VisiSection() {
    return (
        <section id="visi" className="section-padding bg-surface overflow-hidden">
            <div className="container-section">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-2">
                        Sasaran{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Utama
                        </span>
                    </h2>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
                        RPJPN 2025-2045
                    </h3>
                </motion.div>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="relative">
                {/* Gradient Fade Left */}
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />

                {/* Gradient Fade Right */}
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

                {/* Scrollable Cards */}
                <div className="flex gap-6 overflow-x-auto px-8 md:px-16 lg:px-24 pb-8 pt-4 scrollbar-hide scroll-smooth snap-x snap-mandatory">
                    {sasaranItems.map((item, index) => (
                        <div key={item.id} className="snap-center">
                            <FlipCard item={item} index={index} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll Hint */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-center mt-4"
            >
                <p className="text-text-secondary text-sm">
                    ← Geser untuk melihat semua sasaran →
                </p>
            </motion.div>
        </section>
    );
}
