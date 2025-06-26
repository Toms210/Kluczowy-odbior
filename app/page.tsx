"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Steps from "./components/Steps";
import ScrollTop from "./components/ScrollTop";
import GradientCTA from "./components/GradientCTA";
import ParallaxSection from "./components/ParallaxSection";
import Features from "./components/Features";
import ContactForm from "./components/ContactForm";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({ once: true });
      });
    }
  }, []);

  return (
    <>
      <ParallaxSection backgroundUrl="/images/parallax.jpg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="p-8 text-center text-white drop-shadow-md"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Profesjonalny nadzór budowlany
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Kluczowy Odbiór to Twój partner w odbiorach technicznych mieszkań,
            nadzorze budowlanym oraz profesjonalnych konsultacjach.
          </p>
        </motion.div>
      </ParallaxSection>

      <section
        className="py-16 px-6 text-center bg-[#fdf6f0] text-gray-800"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 className="text-3xl font-bold mb-4">Dlaczego warto nas wybrać?</h2>
        <p className="max-w-xl mx-auto text-lg">
          Jesteśmy zespołem doświadczonych specjalistów z wieloletnim
          doświadczeniem w nadzorze budowlanym.
        </p>
      </section>

      <Features />

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-beige-dark p-6 mt-12 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4">Opinie klientów</h2>
        <div className="space-y-4 text-sm md:text-base">
          <p>“Świetny kontakt i profesjonalne podejście. Polecam!” – Anna K.</p>
          <p>“Odbiór mieszkania przebiegł sprawnie i bez stresu.” – Michał P.</p>
          <p>“Zdecydowanie warto! Fachowe wsparcie na każdym etapie.” – Karolina Z.</p>
        </div>
      </motion.section>

      <Gallery />
      <Steps />
      <Testimonials />
      <GradientCTA />
      <ContactForm />
      <ScrollTop />
    </>
  );
}
