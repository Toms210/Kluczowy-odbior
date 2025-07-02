'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function GradientCTA() {
  return (
    <section className="py-12 text-center bg-gradient-to-r from-[#e8d7c9] via-[#f1ece5] to-[#e8d7c9]">
      <motion.div
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white text-xl font-semibold rounded-full shadow-lg hover:scale-105 transition"
      >
        <Mail className="w-6 h-6" />
        <Link href="/kontakt">Skontaktuj się z nami</Link>
      </motion.div>
    </section>
  );
}
