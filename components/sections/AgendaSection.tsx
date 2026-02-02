"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Users,
    ChartLineUp,
    Gear,
    Scales,
    Tree,
    Buildings,
    HardDrives,
    ArrowsClockwise,
} from "@phosphor-icons/react";

const agendaItems = [
    {
        id: 1,
        icon: Users,
        title: "Transformasi Sosial",
        shortTitle: "Sosial",
        description:
            "Meningkatkan kualitas kehidupan manusia pada seluruh siklus kehidupan dan menciptakan masyarakat yang lebih sejahtera, adil dan kohesif.",
        highlights: [
            "Peningkatan kualitas pendidikan",
            "Layanan kesehatan universal",
            "Perlindungan sosial inklusif",
            "Pemberdayaan masyarakat",
        ],
    },
    {
        id: 2,
        icon: ChartLineUp,
        title: "Transformasi Ekonomi",
        shortTitle: "Ekonomi",
        description:
            "Meningkatkan produktivitas melalui peningkatan iptek, inovasi, ekonomi produktif, penerapan ekonomi hijau, transformasi digital, dan integrasi ekonomi.",
        highlights: [
            "Industri manufaktur 4.0",
            "Ekonomi digital & syariah",
            "Ekonomi biru & bioekonomi",
            "UMKM dan koperasi",
        ],
    },
    {
        id: 3,
        icon: Gear,
        title: "Transformasi Tata Kelola",
        shortTitle: "Tata Kelola",
        description:
            "Membangun regulasi dan tata kelola yang berintegritas dan adaptif untuk mendukung pembangunan berkelanjutan.",
        highlights: [
            "Regulasi yang adaptif",
            "Birokrasi yang efisien",
            "Pelayanan publik digital",
            "Tata kelola berintegritas",
        ],
    },
    {
        id: 4,
        icon: Scales,
        title: "Supremasi Hukum & Stabilitas",
        shortTitle: "Hukum",
        description:
            "Memantapkan stabilitas ekonomi, politik, hukum dan keamanan nasional, serta memperkuat ketangguhan diplomasi Indonesia di tingkat global.",
        highlights: [
            "Penegakan hukum yang adil",
            "Keamanan nasional",
            "Diplomasi global",
            "Pertahanan yang kuat",
        ],
    },
    {
        id: 5,
        icon: Tree,
        title: "Ketahanan Sosial Budaya & Ekologi",
        shortTitle: "Ekologi",
        description:
            "Memantapkan ketangguhan individu, keluarga, masyarakat dan lingkungan yang mampu mengoptimalkan modal sosial budaya dan menjaga keberlanjutan alam.",
        highlights: [
            "Pelestarian budaya",
            "Keberlanjutan lingkungan",
            "Ketahanan bencana",
            "Modal sosial kuat",
        ],
    },
    {
        id: 6,
        icon: Buildings,
        title: "Pembangunan Kewilayahan",
        shortTitle: "Wilayah",
        description:
            "Mewujudkan pembangunan kewilayahan yang merata dan berkeadilan melalui pengembangan kebijakan pembangunan daerah secara umum.",
        highlights: [
            "Pemerataan pembangunan",
            "Pengembangan daerah",
            "Konektivitas wilayah",
            "Keadilan spasial",
        ],
    },
    {
        id: 7,
        icon: HardDrives,
        title: "Sarana dan Prasarana",
        shortTitle: "Infrastruktur",
        description:
            "Menjadi faktor kunci sebagai pilar pendukung pemenuhan agenda transformasi sosial, ekonomi, dan tata kelola yang berkualitas dan ramah lingkungan.",
        highlights: [
            "Infrastruktur berkelanjutan",
            "Energi terbarukan",
            "Konektivitas digital",
            "Transportasi modern",
        ],
    },
    {
        id: 8,
        icon: ArrowsClockwise,
        title: "Kesinambungan Pembangunan",
        shortTitle: "Kontinuitas",
        description:
            "Diwujudkan melalui kaidah pelaksanaan yang efektif, serta pembiayaan pembangunan yang inovatif untuk menjamin keberlanjutan program.",
        highlights: [
            "Pelaksanaan efektif",
            "Pembiayaan inovatif",
            "Monitoring berkelanjutan",
            "Evaluasi terukur",
        ],
    },
];

export function AgendaSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="agenda" className="section-padding">
            <div className="container-section">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                        RPJPN 2025-2045
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6">
                        8 Agenda{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                            Pembangunan
                        </span>
                    </h2>
                    <p className="text-text-secondary text-lg leading-relaxed">
                        Delapan agenda pembangunan RPJPN 2025-2045 yang menjadi fondasi untuk
                        mewujudkan Indonesia Emas 2045.
                    </p>
                </motion.div>

                {/* Tabs Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-2 mb-10"
                >
                    {agendaItems.map((item, index) => (
                        <motion.button
                            key={item.id}
                            onClick={() => setActiveTab(index)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === index
                                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                                    : "bg-surface border border-border text-text-secondary hover:border-primary hover:text-primary"
                                }`}
                        >
                            <span className="hidden sm:inline">{item.shortTitle}</span>
                            <span className="sm:hidden">{item.id}</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-surface border border-border rounded-2xl p-8 md:p-12"
                    >
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Left Content */}
                            <div>
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    {(() => {
                                        const IconComponent = agendaItems[activeTab].icon;
                                        return <IconComponent weight="duotone" className="w-8 h-8" />;
                                    })()}
                                </div>
                                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                                    Agenda {agendaItems[activeTab].id}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                                    {agendaItems[activeTab].title}
                                </h3>
                                <p className="text-text-secondary leading-relaxed text-lg">
                                    {agendaItems[activeTab].description}
                                </p>
                            </div>

                            {/* Right Content - Highlights */}
                            <div className="bg-background rounded-xl p-6 border border-border">
                                <h4 className="font-semibold text-text-primary mb-4">
                                    Fokus Utama:
                                </h4>
                                <ul className="space-y-3">
                                    {agendaItems[activeTab].highlights.map((highlight, index) => (
                                        <motion.li
                                            key={highlight}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                                            <span className="text-text-secondary">{highlight}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* All Agendas Grid (Mobile) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                    {agendaItems.map((item, index) => (
                        <motion.button
                            key={item.id}
                            onClick={() => setActiveTab(index)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                            className={`p-4 rounded-xl border text-center transition-all duration-300 ${activeTab === index
                                    ? "bg-primary/10 border-primary"
                                    : "bg-surface border-border hover:border-primary/50"
                                }`}
                        >
                            <div
                                className={`w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center ${activeTab === index
                                        ? "bg-primary text-white"
                                        : "bg-background text-primary"
                                    }`}
                            >
                                <item.icon weight="duotone" className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-medium text-text-primary">
                                {item.shortTitle}
                            </span>
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
}
