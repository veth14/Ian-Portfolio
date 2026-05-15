"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, type Variants } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
}

export default function AnimatedSection({
  children,
  variants,
  className,
  delay = 0,
  once = true,
  amount = 0.2,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants || defaultVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}
