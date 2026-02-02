"use client";

import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    fullWidth?: boolean;
}

const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "bg-transparent text-text-primary hover:bg-surface",
};

const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
};

export function Button({
    children,
    variant = "primary",
    size = "md",
    icon,
    iconPosition = "left",
    fullWidth = false,
    className = "",
    ...props
}: ButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
        inline-flex items-center justify-center gap-2 font-semibold rounded-full
        transition-all duration-300 cursor-pointer
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
            {...props}
        >
            {icon && iconPosition === "left" && icon}
            {children}
            {icon && iconPosition === "right" && icon}
        </motion.button>
    );
}

