"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    CalendarBlank,
    Clock,
    MapPin,
    ArrowLeft,
    Link as LinkIcon,
    Share,
    DownloadSimple,
} from "@phosphor-icons/react";

// Kegiatan data - In production, this would come from a CMS or API
const kegiatanData: Record<string, {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    date: string;
    time: string;
    location: string;
    registrationLabel: string;
    registrationLink: string;
    description: string;
    agenda: { time: string; activity: string }[];
}> = {
    "konsultasi-publik": {
        id: "01",
        title: "Konsultasi Publik",
        subtitle: "Rancangan Awal RPJPN 2025-2045",
        image: "/informasi/Konsultasi-Publik.jpg",
        date: "Jum'at, 19 Mei 2023",
        time: "09.00 - 15.30 WITA",
        location: "Hotel Grand Mercure, Bali",
        registrationLabel: "FKP-RPJPN",
        registrationLink: "https://link.bappenas.go.id/FKPRPJPN",
        description: "Konsultasi Publik Rancangan Awal RPJPN 2025-2045 merupakan wadah untuk menampung masukan dan aspirasi masyarakat terhadap visi Indonesia Emas 2045. Kegiatan ini mengundang berbagai pemangku kepentingan untuk berdiskusi dan memberikan kontribusi pemikiran terhadap arah pembangunan jangka panjang Indonesia.",
        agenda: [
            { time: "09.00 - 09.30", activity: "Registrasi Peserta" },
            { time: "09.30 - 10.00", activity: "Pembukaan dan Sambutan" },
            { time: "10.00 - 11.30", activity: "Presentasi Rancangan Awal RPJPN 2025-2045" },
            { time: "11.30 - 12.30", activity: "Sesi Diskusi dan Tanya Jawab" },
            { time: "12.30 - 13.30", activity: "ISHOMA" },
            { time: "13.30 - 15.00", activity: "Forum Group Discussion (FGD)" },
            { time: "15.00 - 15.30", activity: "Penutupan" },
        ],
    },
    "musrenbangnas": {
        id: "02",
        title: "Musrenbangnas",
        subtitle: "Rancangan Awal RPJPN 2025-2045",
        image: "/informasi/Musrenbangnas.jpeg",
        date: "Senin, 22 Mei 2023",
        time: "09.00 - 16.45 WITA",
        location: "Jakarta Convention Center (JCC)",
        registrationLabel: "Musrenbangnas-RPJPN",
        registrationLink: "https://link.bappenas.go.id/Musrenbangnas-RPJPN",
        description: "Musyawarah Perencanaan Pembangunan Nasional (Musrenbangnas) merupakan forum tahunan yang mempertemukan pemerintah pusat, pemerintah daerah, dan pemangku kepentingan lainnya untuk menyepakati prioritas pembangunan nasional. Pada tahun ini, Musrenbangnas akan membahas Rancangan Awal RPJPN 2025-2045 sebagai landasan visi Indonesia Emas 2045.",
        agenda: [
            { time: "09.00 - 09.30", activity: "Registrasi Peserta" },
            { time: "09.30 - 10.00", activity: "Upacara Pembukaan" },
            { time: "10.00 - 11.00", activity: "Keynote Speech Presiden RI" },
            { time: "11.00 - 12.30", activity: "Sidang Pleno I: Paparan RPJPN 2025-2045" },
            { time: "12.30 - 13.30", activity: "ISHOMA" },
            { time: "13.30 - 15.30", activity: "Sidang Kelompok: Pembahasan per Bidang" },
            { time: "15.30 - 16.30", activity: "Sidang Pleno II: Penyampaian Hasil Sidang Kelompok" },
            { time: "16.30 - 16.45", activity: "Penutupan" },
        ],
    },
};

export default function KegiatanDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const kegiatan = kegiatanData[slug];

    if (!kegiatan) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-text-primary mb-4">404</h1>
                    <p className="text-text-secondary mb-8">Kegiatan tidak ditemukan</p>
                    <Link href="/#kegiatan" className="btn-primary">
                        Kembali ke Beranda
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="container-section">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <Link
                        href="/#kegiatan"
                        className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
                    >
                        <ArrowLeft weight="bold" className="w-5 h-5" />
                        <span>Kembali ke Rangkaian Kegiatan</span>
                    </Link>
                </motion.div>

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid lg:grid-cols-2 gap-12 mb-16"
                >
                    {/* Image */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src={kegiatan.image}
                            alt={kegiatan.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Info */}
                    <div className="flex flex-col justify-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4 w-fit">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            Kegiatan {kegiatan.id}
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-3">
                            {kegiatan.title}
                        </h1>
                        <p className="text-xl text-text-secondary mb-8">{kegiatan.subtitle}</p>

                        {/* Event Details */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3 text-text-secondary">
                                <CalendarBlank weight="fill" className="w-5 h-5 text-primary" />
                                <span>Hari, tanggal: {kegiatan.date}</span>
                            </div>
                            <div className="flex items-center gap-3 text-text-secondary">
                                <Clock weight="fill" className="w-5 h-5 text-primary" />
                                <span>Pukul: {kegiatan.time}</span>
                            </div>
                            <div className="flex items-center gap-3 text-text-secondary">
                                <MapPin weight="fill" className="w-5 h-5 text-primary" />
                                <span>{kegiatan.location}</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href={kegiatan.registrationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                <LinkIcon weight="bold" className="w-5 h-5" />
                                Daftar: {kegiatan.registrationLabel}
                            </a>
                            <button className="btn-secondary">
                                <Share weight="bold" className="w-5 h-5" />
                                Bagikan
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Description Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid lg:grid-cols-3 gap-12"
                >
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-text-primary mb-4">Tentang Kegiatan</h2>
                        <p className="text-text-secondary leading-relaxed mb-8">
                            {kegiatan.description}
                        </p>

                        {/* Agenda */}
                        <h3 className="text-xl font-bold text-text-primary mb-4">Rundown Acara</h3>
                        <div className="bg-surface rounded-2xl border border-border overflow-hidden">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-border bg-background">
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Waktu</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Kegiatan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {kegiatan.agenda.map((item, index) => (
                                        <tr key={index} className="border-b border-border last:border-0">
                                            <td className="px-6 py-4 text-sm text-primary font-medium whitespace-nowrap">
                                                {item.time}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-text-secondary">
                                                {item.activity}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-surface rounded-2xl border border-border p-6 sticky top-28">
                            <h3 className="text-lg font-bold text-text-primary mb-4">Informasi Registrasi</h3>
                            <p className="text-text-secondary text-sm mb-6">
                                Untuk menghadiri kegiatan ini, silakan daftar melalui link registrasi berikut:
                            </p>
                            <a
                                href={kegiatan.registrationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full justify-center mb-4"
                            >
                                <LinkIcon weight="bold" className="w-5 h-5" />
                                Daftar Sekarang
                            </a>
                            <button className="btn-secondary w-full justify-center">
                                <DownloadSimple weight="bold" className="w-5 h-5" />
                                Unduh Materi
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
