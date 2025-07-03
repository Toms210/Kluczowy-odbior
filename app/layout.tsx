"use client";
import "../styles/globals.css";
import { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Mail,
  ChevronUp,
  Facebook,
  Instagram,
  Youtube,
  Sun,
  Moon,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Analytics from "./components/Analytics";


export default function RootLayout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [dark, setDark] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem("dark") === "true";
    setDark(darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
    AOS.init({ duration: 800, once: true });
  }, []);

  const toggleTheme = () => {
    const newMode = !dark;
    setDark(newMode);
    localStorage.setItem("dark", String(newMode));
    document.documentElement.classList.toggle("dark", newMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinks = [
    { href: "/o-mnie", label: "O mnie" },
    { href: "/oferta", label: "Oferta" },
    { href: "/kontakt", label: "Kontakt" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <html lang="pl">
      <body className="bg-beige-light text-gray-800 dark:bg-neutral-900 dark:text-white">
        <motion.header
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`sticky top-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md backdrop-saturate-150 transition-all duration-500 ${
            scrolled
              ? "bg-gradient-to-r from-[#fdf6f0] via-[#f1ece5] to-[#fdf6f0] shadow-lg"
              : "bg-beige bg-opacity-90"
          }`}
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative transition duration-300 hover:text-black dark:hover:text-white ${
                    pathname === link.href
                      ? "font-bold scale-105 shadow-md px-2 py-1 rounded-md bg-white dark:bg-neutral-700"
                      : ""
                  }`}
                >
                  <span>{link.label}</span>
                  {pathname === link.href && (
                    <motion.span
                      layoutId="underline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-black dark:bg-white"
                    />
                  )}
                </Link>
              ))}
            </nav>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </motion.header>

        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="md:hidden flex flex-col items-center bg-beige shadow-md p-4 space-y-2 text-center"
            >
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>

        <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">{children}</main>

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
            <a
              href="mailto:tomaszbiber@o2.pl"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-1"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-1"
            >
              <Facebook className="w-4 h-4" /> Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-1"
            >
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-1"
            >
              <Youtube className="w-4 h-4" /> TikTok
            </a>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Kluczowy Odbiór. Wszystkie prawa zastrzeżone.
          </p>
        </footer>
     <Analytics />
      </body>
    </html>
  );
}
