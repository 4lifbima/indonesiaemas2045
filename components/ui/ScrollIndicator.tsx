"use client";

import { motion } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";

interface ScrollIndicatorProps {
    targetId?: string;
    className?: string;
}

export function ScrollIndicator({ targetId = "visi", className = "" }: ScrollIndicatorProps) {
    const handleClick = () => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.button
            onClick={handleClick}
            className={`flex flex-col items-center gap-2 text-text-secondary hover:text-primary transition-colors ${className}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
            aria-label="Scroll ke bagian selanjutnya"
        >
            <span className="text-sm font-medium">Scroll</span>
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <CaretDown weight="bold" className="w-6 h-6" />
            </motion.div>
        </motion.button>
    );
}
