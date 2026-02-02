"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    delay?: number;
}

export function Card({ children, className = "", hover = true, delay = 0 }: CardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            className={`
        bg-background border border-border rounded-xl p-6
        ${hover ? "card-hover" : ""}
        ${className}
      `}
        >
            {children}
        </motion.div>
    );
}

interface CardHeaderProps {
    children: ReactNode;
    className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
    return (
        <div className={`mb-4 ${className}`}>
            {children}
        </div>
    );
}

interface CardTitleProps {
    children: ReactNode;
    className?: string;
}

export function CardTitle({ children, className = "" }: CardTitleProps) {
    return (
        <h3 className={`text-xl font-semibold text-text-primary ${className}`}>
            {children}
        </h3>
    );
}

interface CardDescriptionProps {
    children: ReactNode;
    className?: string;
}

export function CardDescription({ children, className = "" }: CardDescriptionProps) {
    return (
        <p className={`text-text-secondary leading-relaxed ${className}`}>
            {children}
        </p>
    );
}

interface CardIconProps {
    children: ReactNode;
    className?: string;
}

export function CardIcon({ children, className = "" }: CardIconProps) {
    return (
        <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 ${className}`}>
            {children}
        </div>
    );
}
