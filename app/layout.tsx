// layout.tsx
"use client";
import "../styles/globals.css";
import { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Mail, Phone, ChevronUp, Facebook, Instagram, Youtube, Sun, Moon } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem("dark") === "true";
    setDark(darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
     AOS.init({
    duration: 800,
    once: true, });
  }, []);

  const toggleTheme = () => {
    const newMode = !dark;
    setDark(newMode);
    localStorage.setItem("dark", String(newMode));
    document.documentElement.classList.toggle("dark", newMode);
  };

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <html lang="pl">
      <body className="bg-beige-light text-gray-800 dark:bg-neutral-900 dark:text-white">
        <motion.header
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="sticky top-0 z-50 bg-beige shadow-md px-6 py-4 flex justify-between items-center"
        >
          <Link href="/" className="text-xl font-bold flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" className="h-8" />
            Kluczowy Odbiór
          </Link>

          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="text-xl">
              {dark ? <Sun /> : <Moon />}
            </button>
            <nav className="hidden md:flex space-x-4 text-sm md:text-base">
              <Link href="/o-mnie">O mnie</Link>
              <Link href="/oferta">Oferta</Link>
              <Link href="/kontakt">Kontakt</Link>
              <Link href="/faq">FAQ</Link>
            </nav>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </motion.header>

        {mobileOpen && (
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="md:hidden flex flex-col items-center bg-beige shadow-md p-4 space-y-2 text-center"
          >
            <Link href="/o-mnie" onClick={() => setMobileOpen(false)}>O mnie</Link>
            <Link href="/oferta" onClick={() => setMobileOpen(false)}>Oferta</Link>
            <Link href="/kontakt" onClick={() => setMobileOpen(false)}>Kontakt</Link>
            <Link href="/faq" onClick={() => setMobileOpen(false)}>FAQ</Link>
          </motion.nav>
        )}

        <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
          {children}

          {/* Formularz kontaktowy */}
          <section data-aos="fade-up" className="max-w-xl mx-auto bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Skontaktuj się z nami</h2>
            <form action="https://formspree.io/f/xzbnzkeq" method="POST" className="space-y-4">
              <input name="name" type="text" required placeholder="Imię i nazwisko" className="w-full px-4 py-2 rounded-lg border" />
              <input name="email" type="email" required placeholder="Email" className="w-full px-4 py-2 rounded-lg border" />
              <textarea name="message" rows={4} required placeholder="Wiadomość" className="w-full px-4 py-2 rounded-lg border" />
              <button type="submit" className="w-full bg-beige-dark hover:bg-beige py-2 rounded-lg font-semibold">Wyślij</button>
            </form>
          </section>
        </main>

        {showScroll && (
          <button
            onClick={scrollTop}
            className="fixed bottom-6 right-6 bg-beige-dark hover:bg-beige text-gray-800 p-2 rounded-full shadow-md transition"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}

        <footer className="bg-beige-dark text-sm text-center py-6 mt-12 border-t">
          <div className="flex justify-center items-center gap-6 mb-2">
            <a href="mailto:tomaszbiber@o2.pl" target="_blank" rel="noopener" className="flex items-center gap-1"><Mail className="w-4 h-4" /> Email</a>
            <a href="https://facebook.com" target="_blank" rel="noopener" className="flex items-center gap-1"><Facebook className="w-4 h-4" /> Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener" className="flex items-center gap-1"><Instagram className="w-4 h-4" /> Instagram</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener" className="flex items-center gap-1"><Youtube className="w-4 h-4" /> TikTok</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Kluczowy Odbiór. Wszystkie prawa zastrzeżone.</p>
        </footer>
      </body>
    </html>
  );
}
