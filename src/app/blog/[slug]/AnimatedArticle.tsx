'use client';

import { motion } from 'framer-motion';

export default function AnimatedArticle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden"
    >
      {children}
    </motion.article>
  );
} 