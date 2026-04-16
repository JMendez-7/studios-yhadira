"use client";

import { motion } from "framer-motion";
import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  onClick,
  target,
  rel,
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const baseClasses = `
    inline-flex items-center gap-2 rounded-full font-semibold
    transition-all duration-200 cursor-pointer select-none
    ${sizeClasses[size]}
  `;

  const variantClasses = {
    primary: `
      text-white
      [background:linear-gradient(135deg,#b80049,#e2165f)]
      hover:opacity-90
      shadow-[0_4px_20px_rgba(184,0,73,0.30)]
    `,
    secondary: `
      bg-transparent text-[#b80049] font-semibold
      relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
      after:h-[2px] after:w-0 after:bg-[#b80049] after:transition-all after:duration-300
      hover:after:w-full
    `,
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: variant === "primary" ? 1.03 : 1.01 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 25 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={combinedClasses} {...motionProps}>
      {children}
    </motion.button>
  );
}
