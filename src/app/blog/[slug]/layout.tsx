'use client';

import { motion } from 'framer-motion';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-[60%]">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden"
        >
          <div className="px-6 py-10 sm:px-8 lg:px-12 flex justify-center">
            <div className="w-full max-w-2xl">
              {children}
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
} 