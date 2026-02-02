"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const menuItems = [
    { label: "Beranda", href: "#beranda" },
    { label: "Visi & Misi", href: "#visi" },
    { label: "Agenda", href: "#agenda" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Media", href: "#media" },
    { label: "Kontak", href: "#kontak" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when clicking on a link
    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "glass shadow-lg"
                    : "bg-transparent"
                    }`}
            >
                <nav className="container-section" role="navigation" aria-label="Menu utama">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center group">
                            <Image
                                src="/img/icon-navbar.png"
                                alt="Indonesia Emas 2045"
                                width={150}
                                height={76}
                                className="h-12 w-auto object-contain"
                                priority
                            />
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-8">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-text-secondary hover:text-primary font-medium transition-colors relative group"
                                >
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center gap-4">
                            <ThemeToggle />

                            {/* Mobile Menu Button */}
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:border-primary transition-colors"
                                aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
                                aria-expanded={isMobileMenuOpen}
                            >
                                {isMobileMenuOpen ? (
                                    <X weight="bold" className="w-5 h-5 text-text-primary" />
                                ) : (
                                    <List weight="bold" className="w-5 h-5 text-text-primary" />
                                )}
                            </motion.button>
                        </div>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Slide-in Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-background border-l border-border z-50 lg:hidden"
                        >
                            <div className="flex flex-col h-full">
                                {/* Header */}
                                <div className="flex items-center justify-between p-6 border-b border-border">
                                    <span className="font-semibold text-lg text-text-primary">Menu</span>
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:border-primary transition-colors"
                                        aria-label="Tutup menu"
                                    >
                                        <X weight="bold" className="w-5 h-5 text-text-primary" />
                                    </button>
                                </div>

                                {/* Menu Items */}
                                <nav className="flex-1 overflow-y-auto p-6">
                                    <ul className="space-y-2">
                                        {menuItems.map((item, index) => (
                                            <motion.li
                                                key={item.href}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    onClick={handleLinkClick}
                                                    className="flex items-center px-4 py-3 rounded-xl text-text-secondary hover:text-primary hover:bg-surface font-medium transition-all"
                                                >
                                                    {item.label}
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </nav>

                                {/* Footer */}
                                <div className="p-6 border-t border-border">
                                    <p className="text-sm text-text-secondary text-center">
                                        © 2025 Indonesia Emas 2045
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
