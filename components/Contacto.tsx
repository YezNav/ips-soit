"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ── helpers ── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as any } },
});

const CONTACT_INFO = [
  {
    icon: "📍",
    title: "Dirección",
    content: "Cra. 5 #15-45\nSantiago de Tolú, Sucre",
    color: "#F5C518",
  },
  {
    icon: "🕐",
    title: "Horario",
    content: "Lunes-Viernes: 6:30 AM - 12:00 PM | 2:00 PM - 4:30 PM\nSábados: 7:00 AM - 10:00 AM",
    color: "#3B82F6",
  },
  {
    icon: "📞",
    title: "Teléfono",
    content: "3135675691\n3008467329",
    color: "#10B981",
  },
  {
    icon: "✉️",
    title: "Email",
    content: "SOITSAS2010@HOTMAIL.COM\nSOITSAS2014@GMAIL.COM",
    color: "#EF4444",
  },
];

export default function Contacto() {
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const contentInView = useInView(contentRef, { once: true, margin: "-60px" });

  return (
    <section id="contacto" className="bg-[#0a0a0a] overflow-hidden">
      {/* Semantic meta tag for screen readers */}
      <div className="sr-only">
        <h1>Información de contacto de IPS SOIT S.A.S</h1>
        <p>Encuentra nuestra ubicación, horarios, teléfono y correo electrónico</p>
      </div>

      {/* ══ HEADER ══ */}
      <div ref={headerRef} className="relative py-12 md:py-16 px-6 text-center overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }} animate={headerInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-2 h-1 w-16 bg-gradient-to-r from-transparent via-[#F5C518] to-transparent origin-left rounded-full"
        />
        <motion.p
          variants={fadeUp(0.1)} initial="hidden" animate={headerInView ? "visible" : "hidden"}
          className="text-[#F5C518] text-xs md:text-sm font-bold tracking-[4px] uppercase mb-4"
        >
          Ponte en Contacto
        </motion.p>
        <motion.h2
          variants={fadeUp(0.2)} initial="hidden" animate={headerInView ? "visible" : "hidden"}
          className="font-black text-white leading-tight mb-6"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(40px,7vw,72px)", letterSpacing: "-0.02em" }}
        >
          Contacto
        </motion.h2>
      </div>

      {/* ══ CONTENT ══ */}
      <div ref={contentRef} className="max-w-7xl mx-auto px-6 md:px-8 pb-16">
        
        {/* Contact Info Grid - 4 Columns */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          role="list"
        >
          {CONTACT_INFO.map((info, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp(0.2 + idx * 0.05)}
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
              whileHover={{ y: -4, borderColor: info.color + "40" }}
              className="rounded-lg border bg-white/[0.02] p-8 min-h-[280px] flex flex-col justify-center transition-all duration-300 cursor-pointer group"
              style={{ borderColor: info.color + "20" }}
              role="listitem"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <span className="text-6xl transition-transform duration-300 group-hover:scale-110" aria-hidden="true">{info.icon}</span>
                <h3 className="font-bold text-white text-lg md:text-xl transition-colors duration-300" style={{ color: info.color }}>
                  {info.title}
                </h3>
                <address className="text-gray-200 text-sm md:text-base leading-relaxed font-medium not-italic">
                  {info.content}
                </address>
              </div>
              
              {/* Subtle glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ 
                  background: `radial-gradient(circle at center, ${info.color}10, transparent)`,
                  zIndex: -1
                }}
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Map and Reviews - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Map */}
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            className="rounded-lg overflow-hidden border border-white/10 shadow-lg h-[400px]"
          >
            <iframe
              title="Ubicación de IPS SOIT S.A.S en Google Maps - Santiago de Tolú, Sucre"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.4449633878637!2d-75.26484232345422!3d9.347556576595598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e426ba0a8b8b8b9%3A0x1b8b8b8b8b8b8b8b!2sCra%205%2315-45%2CSantiago%20de%20Tol%C3%BA%2CSucre!5e0!3m2!1ses!2sco!4v1234567890"
            />
          </motion.div>

          {/* Reviews */}
          <motion.div
            variants={fadeUp(0.4)}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            className="rounded-lg border border-white/10 overflow-hidden h-[400px]"
          >
            <iframe
              title="Opiniones y calificaciones de IPS SOIT S.A.S en Google Reviews"
              src="https://148ebb0721834486a397bc6675c704ad.elf.site"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
