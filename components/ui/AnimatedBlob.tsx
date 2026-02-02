"use client";

import { motion } from "framer-motion";

interface AnimatedBlobProps {
    className?: string;
    color?: "primary" | "secondary" | "accent";
    size?: "sm" | "md" | "lg" | "xl";
    animation?: "float" | "float-reverse" | "float-slow";
    delay?: number;
}

const sizeClasses = {
    sm: "w-48 h-48 md:w-64 md:h-64",
    md: "w-64 h-64 md:w-96 md:h-96",
    lg: "w-96 h-96 md:w-[32rem] md:h-[32rem]",
    xl: "w-[32rem] h-[32rem] md:w-[40rem] md:h-[40rem]",
};

const colorClasses = {
    primary: "bg-blob-primary",
    secondary: "bg-blob-secondary",
    accent: "bg-blob-accent",
};

const animationClasses = {
    float: "animate-blob-float",
    "float-reverse": "animate-blob-float-reverse",
    "float-slow": "animate-blob-float-slow",
};

export function AnimatedBlob({
    className = "",
    color = "primary",
    size = "md",
    animation = "float",
    delay = 0,
}: AnimatedBlobProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay }}
            className={`
        absolute rounded-full blur-3xl
        ${sizeClasses[size]}
        ${colorClasses[color]}
        ${animationClasses[animation]}
        ${className}
      `}
            style={{ animationDelay: `${delay}s` }}
            aria-hidden="true"
        />
    );
}
