"use client"

import { motion } from 'framer-motion';

export default function AnimatedSection({ 
  children,
  delay = 0 
}: { 
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
      animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        delay: delay * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
