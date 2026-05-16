"use client";

import { motion, Variants } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  variant?: Variants;
}

export default function SplitText({ text, className, delay = 0, variant }: SplitTextProps) {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.08, /* Faster stagger */
        delayChildren: delay * i,
        ease: "easeOut"
      },
    }),
  };

  const child: Variants = variant || {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15, /* Higher damping for snappier end */
        stiffness: 150, /* Higher stiffness for faster motion */
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 150,
      },
    },
  };

  return (
    <motion.span
      style={{ display: "inline-flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ 
            marginRight: index === words.length - 1 ? 0 : "0.15em", 
            display: "inline-block" 
          }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
