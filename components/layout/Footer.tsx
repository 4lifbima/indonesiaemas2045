"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    EnvelopeSimple,
    FacebookLogo,
    TwitterLogo,
    InstagramLogo,
    YoutubeLogo,
    LinkedinLogo,
    MapPin,
    Phone,
    ArrowRight,
} from "@phosphor-icons/react";

const quickLinks = [
    { label: "Beranda", href: "#beranda" },
    { label: "Visi & Misi", href: "#visi" },
    { label: "8 Agenda Pembangunan", href: "#agenda" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Publikasi", href: "#media" },
];

const documents = [
    { label: "RPJPN 2025-2045", href: "#" },
    { label: "Dokumen Visi", href: "#" },
    { label: "Infografis", href: "#" },
    { label: "Video Sosialisasi", href: "#" },
];

const socialLinks = [
    { icon: FacebookLogo, href: "#", label: "Facebook" },
    { icon: TwitterLogo, href: "#", label: "Twitter" },
    { icon: InstagramLogo, href: "#", label: "Instagram" },
    { icon: YoutubeLogo, href: "#", label: "YouTube" },
    { icon: LinkedinLogo, href: "#", label: "LinkedIn" },
];

export function Footer() {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail("");
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };

    return (
        <footer id="kontak" className="bg-surface border-t border-border">
            {/* Main Footer */}
            <div className="container-section section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-6 lg:px-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                                <span className="text-white font-bold text-xl">ID</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-text-primary text-xl leading-tight">
                                    Indonesia Emas
                                </span>
                                <span className="text-sm text-text-secondary font-medium">
                                    2045
                                </span>
                            </div>
                        </div>
                        <p className="text-text-secondary leading-relaxed mb-6">
                            Mewujudkan visi Indonesia sebagai negara maju, berdaulat, mandiri, dan
                            berkepribadian berlandaskan gotong royong.
                        </p>
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon weight="fill" className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-text-primary text-lg mb-6">
                            Navigasi
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-text-secondary hover:text-primary transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <ArrowRight
                                            weight="bold"
                                            className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                                        />
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Documents */}
                    <div>
                        <h3 className="font-semibold text-text-primary text-lg mb-6">
                            Dokumen
                        </h3>
                        <ul className="space-y-3">
                            {documents.map((doc) => (
                                <li key={doc.label}>
                                    <Link
                                        href={doc.href}
                                        className="text-text-secondary hover:text-primary transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <ArrowRight
                                            weight="bold"
                                            className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                                        />
                                        <span>{doc.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter & Contact */}
                    <div>
                        <h3 className="font-semibold text-text-primary text-lg mb-6">
                            Newsletter
                        </h3>
                        <p className="text-text-secondary mb-4">
                            Dapatkan informasi terbaru tentang Indonesia Emas 2045.
                        </p>
                        <form onSubmit={handleSubscribe} className="space-y-3">
                            <div className="relative">
                                <EnvelopeSimple className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email Anda"
                                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-border text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-primary transition-colors"
                                    required
                                />
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full btn-primary justify-center"
                            >
                                {isSubscribed ? "Terima kasih!" : "Berlangganan"}
                            </motion.button>
                        </form>

                        {/* Contact Info */}
                        <div className="mt-8 space-y-3">
                            <div className="flex items-start gap-3 text-text-secondary">
                                <MapPin weight="fill" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm">
                                    Jl. Taman Suropati No.2, Jakarta Pusat 10310
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-text-secondary">
                                <Phone weight="fill" className="w-5 h-5 text-primary flex-shrink-0" />
                                <span className="text-sm">(021) 3193 6207</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border">
                <div className="container-section py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-text-secondary text-sm text-center md:text-left">
                            © {new Date().getFullYear()} Indonesia Emas 2045. Kementerian PPN/Bappenas.
                        </p>
                        <div className="flex items-center gap-6 text-sm">
                            <Link
                                href="#"
                                className="text-text-secondary hover:text-primary transition-colors"
                            >
                                Kebijakan Privasi
                            </Link>
                            <Link
                                href="#"
                                className="text-text-secondary hover:text-primary transition-colors"
                            >
                                Syarat & Ketentuan
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
