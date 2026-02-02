"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CalendarBlank, Clock, ArrowRight, Link as LinkIcon } from "@phosphor-icons/react";

const kegiatanItems = [
    {
        id: "01",
        title: "Konsultasi Publik",
        subtitle: "Rancangan Awal RPJPN 2025-2045",
        image: "/informasi/Konsultasi-Publik.jpg",
        date: "Jum'at, 19 Mei 2023",
        time: "09.00 - 15.30 WITA",
        registrationLabel: "FKP-RPJPN",
        registrationLink: "https://link.bappenas.go.id/FKPRPJPN",
        slug: "konsultasi-publik",
    },
    {
        id: "02",
        title: "Musrenbangnas",
        subtitle: "Rancangan Awal RPJPN 2025-2045",
        image: "/informasi/Musrenbangnas.jpeg",
        date: "Senin, 22 Mei 2023",
        time: "09.00 - 16.45 WITA",
        registrationLabel: "Musrenbangnas-RPJPN",
        registrationLink: "https://link.bappenas.go.id/Musrenbangnas-RPJPN",
        slug: "musrenbangnas",
    },
];

export function KegiatanSection() {
    return (
        <section id="kegiatan" className="section-padding bg-surface">
            <div className="container-section">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
                        Rangkaian{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Kegiatan
                        </span>
                    </h2>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
                        RPJPN 2025-2045
                    </h3>
                </motion.div>

                {/* Kegiatan Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {kegiatanItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-background rounded-2xl border border-border overflow-hidden card-hover"
                        >
                            {/* Card Header */}
                            <div className="flex items-center gap-3 p-6 border-b border-border">
                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">{item.id}</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-primary text-xl">{item.title}</h4>
                                    <p className="text-text-secondary text-sm">{item.subtitle}</p>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="grid md:grid-cols-2 gap-6 p-6">
                                {/* Image */}
                                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface border border-border">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Info */}
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h5 className="font-semibold text-text-primary mb-4">Informasi Umum</h5>

                                        {/* Date & Time */}
                                        <div className="space-y-2 mb-4">
                                            <div className="flex items-center gap-2 text-text-secondary text-sm">
                                                <CalendarBlank weight="fill" className="w-4 h-4 text-primary" />
                                                <span>Hari, tanggal: {item.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-text-secondary text-sm">
                                                <Clock weight="fill" className="w-4 h-4 text-primary" />
                                                <span>Pukul: {item.time}</span>
                                            </div>
                                        </div>

                                        {/* Registration Link */}
                                        <div className="mb-4">
                                            <p className="text-sm text-text-secondary mb-1">Link Registrasi:</p>
                                            <a
                                                href={item.registrationLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
                                            >
                                                <LinkIcon weight="bold" className="w-3 h-3" />
                                                {item.registrationLabel}
                                            </a>
                                        </div>

                                        <p className="text-xs text-text-secondary mb-4">
                                            Untuk informasi selengkapnya dapat klik tautan dibawah:
                                        </p>
                                    </div>

                                    {/* CTA Button */}
                                    <Link
                                        href={`/rangkaian-kegiatan/${item.slug}`}
                                        className="btn-primary w-full sm:w-auto justify-center text-center hover:scale-[1.02] active:scale-[0.98] transition-transform"
                                    >
                                        Informasi
                                        <ArrowRight weight="bold" className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <motion.a
                        href="https://indonesia2045.go.id/rangkaian-kegiatan"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-secondary inline-flex"
                    >
                        Lihat Semua Kegiatan
                        <ArrowRight weight="bold" className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
