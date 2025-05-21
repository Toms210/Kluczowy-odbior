// layout.tsx
"use client";
import "../styles/globals.css";
import { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Mail, Phone, ChevronUp, Hammer, ShieldCheck, Clock3, ClipboardList, Star, Sun, Moon } from "lucide-react";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem("dark") === "true";
    setDark(darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
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

          {/* Galeria */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Nasze realizacje</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1,2,3,4,5,6].map(i => (
                <img key={i} src={`/gallery/${i}.jpg`} alt="Galeria" className="rounded-xl object-cover w-full h-48" />
              ))}
            </div>
          </motion.section>

          {/* Etapy współpracy */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Etapy współpracy</h2>
            <ol className="relative border-s border-gray-300 dark:border-gray-600 ml-4 space-y-10">
              {[
                "Zgłoszenie potrzeby klienta",
                "Analiza dokumentacji i wstępna konsultacja",
                "Uzgodnienie terminu odbioru lub wizyty",
                "Przeprowadzenie odbioru / konsultacji",
                "Raport / zalecenia końcowe i podsumowanie"
              ].map((etap, i) => (
                <li key={i} className="ms-6">
                  <span className="absolute -start-3 flex items-center justify-center w-6 h-6 bg-beige-dark rounded-full ring-2 ring-white dark:ring-neutral-900">
                    {i + 1}
                  </span>
                  <h3 className="font-medium leading-tight mb-1">{etap}</h3>
                </li>
              ))}
            </ol>
          </motion.section>

          {/* Opinie klientów */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Opinie klientów</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "Anna K.", text: "Profesjonalna obsługa i szybki kontakt. Polecam każdemu!" },
                { name: "Marcin P.", text: "Rzetelność i ogromne doświadczenie. Dziękuję za pomoc!" },
                { name: "Ewelina D.", text: "Dokładność podczas odbioru mieszkania zrobiła na mnie wrażenie." }
              ].map(({ name, text }, i) => (
                <div key={i} className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={`/avatars/${i+1}.jpg`} alt={name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <h4 className="font-semibold">{name}</h4>
                      <div className="flex gap-1 text-yellow-500">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4" fill="currentColor" />)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{text}</p>
                </div>
              ))}
            </div>
          </motion.section>
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
          <div className="flex justify-center items-center gap-4 mb-2">
            <Mail className="w-4 h-4" /> <span>tomaszbiber@o2.pl</span>
            <Phone className="w-4 h-4" /> <span>+48 123 456 789</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Kluczowy Odbiór. Wszystkie prawa zastrzeżone.</p>
        </footer>
      </body>
    </html>
  );
}
