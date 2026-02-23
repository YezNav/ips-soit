"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const BADGES = ["Calidad", "Cumplimiento", "Confianza"];

export default function HeroBanner() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Parallax: image moves up slightly as user scrolls
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative w-full overflow-hidden" style={{ minHeight: "clamp(380px, 60vw, 600px)" }}>

      {/* === BACKGROUND IMAGE with parallax === */}
      <motion.div
        className="absolute inset-0 scale-110"
        style={{ y: imageY }}
      >
        <Image
          src="/Foto.png"
          alt="Equipo profesional de IPS SOIT S.A.S dedicado a salud ocupacional y seguridad laboral en Santiago de Tolú, Sucre"
          fill
          priority
          quality={90}
          className="object-cover object-center"
        />
      </motion.div>

      {/* === MULTI-LAYER OVERLAY (strong left, fade right, NO top fade) === */}
      {/* Layer 1: solid left panel */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.85) 28%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.15) 70%, transparent 85%)",
        }}
      />
      {/* Layer 2: subtle vignette bottom */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 40%)",
        }}
      />

      {/* === ANIMATED YELLOW ACCENT LINE === */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 md:w-1.5 bg-[#F5C518]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        style={{ originY: 0 }}
      />

      {/* === DIAGONAL YELLOW STRIPE BOTTOM === */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "clamp(48px, 8vw, 80px)" }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 0.95 }}
        transition={{ duration: 0.9, delay: 0.8, ease: "easeOut" }}
      >
        <div
          className="w-full h-full bg-[#F5C518]"
          style={{ clipPath: "polygon(0 70%, 48% 0%, 100% 70%, 100% 100%, 0 100%)" }}
        />
      </motion.div>

      {/* === FLOATING PARTICLES (decorative) === */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#F5C518]/30"
          style={{
            width: `${8 + i * 4}px`,
            height: `${8 + i * 4}px`,
            left: `${8 + i * 6}%`,
            bottom: `${15 + i * 8}%`,
          }}
          animate={{ y: [-8, 8, -8], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3 + i * 0.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
      ))}

      {/* === CONTENT === */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-12 md:py-16"
        style={{ minHeight: "clamp(380px, 60vw, 600px)" }}
      >
        {/* Eyebrow tag */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 mb-4 md:mb-5"
        >
          <span className="block w-8 md:w-12 h-[2px] bg-[#F5C518]" />
          <span className="text-[#F5C518] text-xs md:text-sm font-bold tracking-[3px] uppercase">
            IPS · Salud Ocupacional
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, x: -50, skewX: -3 }}
          animate={{ opacity: 1, x: 0, skewX: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-black text-white leading-none mb-2 md:mb-3"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(42px, 8vw, 88px)",
          }}
        >
          IPS <span className="text-[#F5C518]">SOIT</span> S.A.S
        </motion.h1>

        {/* Subtitle line 1 */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
          className="font-bold text-white mb-1"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(20px, 4vw, 40px)",
          }}
        >
          Soluciones Integrales en
        </motion.p>

        {/* Subtitle line 2 */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
          className="font-black text-[#F5C518] mb-6 md:mb-10"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(20px, 4vw, 40px)",
          }}
        >
          Salud y Seguridad{" "}
          <span className="text-white">Laboral</span>
        </motion.p>

        {/* Badges row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.78 }}
          className="flex flex-wrap items-center gap-3 md:gap-6"
        >
          {BADGES.map((val, i) => (
            <motion.div
              key={val}
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {i === 0 ? (
                <motion.span
                  className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#F5C518] flex items-center justify-center text-black font-black text-xs md:text-sm flex-shrink-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, delay: 0.9 }}
                >
                  ✓
                </motion.span>
              ) : (
                <span className="text-[#F5C518] text-xl md:text-2xl font-bold leading-none">•</span>
              )}
              <span
                className="text-white font-bold"
                style={{ fontSize: "clamp(14px, 2.5vw, 18px)" }}
              >
                {val}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-6 md:mt-8"
        >
          <motion.button
            onClick={() => document.getElementById('servicios')?.scrollIntoView({behavior:'smooth'})}
            whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(245,197,24,0.45)" }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#F5C518] text-black font-black px-6 md:px-8 py-2.5 md:py-3 rounded text-sm md:text-base tracking-wider uppercase border-none cursor-pointer transition-all"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Conoce nuestros servicios →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
