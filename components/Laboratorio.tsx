"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ── helpers ── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as any } },
});

/* ── DATA ── */
const LAB_SECTIONS = [
  {
    title: "LABORATORIO CLÍNICO",
    color: "#EF4444",
    tests: [
      "Hemograma",
      "Glucosa",
      "Hematocrito",
      "Hemoglobina",
      "Hemograma tipo IV",
      "Ácido Úrico",
      "Perfil Lipídico",
      "Nitrógeno ureico",
    ],
  },
  {
    title: "QUÍMICA SANGUÍNEA",
    color: "#3B82F6",
    tests: [
      "Creatinina",
      "GOT",
      "GPT",
      "Bilirrubina",
      "Plaquetas",
      "VSG",
      "TP",
      "TPT",
    ],
  },
  {
    title: "MICROBIOLOGÍA",
    color: "#10B981",
    tests: [
      "BK seriado de esputo",
      "Frotis Vaginal",
      "Coprológico",
      "Coprológico dirigido",
      "KOH de Uñas",
      "Urianálisis",
      "Antígenos Febriles",
      "RA TEST",
    ],
  },
  {
    title: "INMUNOLOGÍA E INFECCIOSAS",
    color: "#F59E0B",
    tests: [
      "ASTO",
      "PCR",
      "VDRL",
      "Prueba para VIH",
      "Test de O' Sullivan",
      "Pruebas hormonales",
      "Química sanguínea",
      "Sistema de control de calidad",
    ],
  },
];

const WHY_CHOOSE_US = [
  "Resultados rápidos y confiables",
  "Equipos automatizados y certificados",
  "Procesos con control de calidad permanente",
  "Atención profesional y segura",
];

const INNOVATION = [
  "Sistema de control de calidad automatizado",
  "Equipos de última generación",
  "Resultados digitales y trazables",
];

/* ── sub-components ── */
function InnoTag({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2.5 py-2.5 border-b border-white/5 last:border-0">
      <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] flex-shrink-0" />
      <span className="text-gray-100 text-base font-medium leading-relaxed">{text}</span>
    </div>
  );
}

function InnoCard({ items }: { items: string[] }) {
  return (
    <div className="rounded-2xl border border-[#EF4444]/30 bg-gradient-to-br from-[#EF4444]/10 to-[#EF4444]/5 p-6 mt-4">
      <p className="text-[#EF4444] text-xs font-bold tracking-[3px] uppercase mb-4 flex items-center gap-2">
        <span>⚡</span> Innovación Aplicada
      </p>
      <div className="space-y-2.5">
        {items.map((t) => <InnoTag key={t} text={t} />)}
      </div>
    </div>
  );
}

/* ══ MAIN EXPORT ══ */
export default function Laboratorio() {
  const headerRef = useRef(null);
  const sectionRef = useRef(null);
  const whyChooseRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const sectionInView = useInView(sectionRef, { once: true, margin: "-60px" });
  const whyChooseInView = useInView(whyChooseRef, { once: true, margin: "-60px" });

  return (
    <section id="laboratorio" className="bg-[#0a0a0a] overflow-hidden">
      {/* ══ HEADER ══ */}
      <div ref={headerRef} className="relative py-12 md:py-16 px-6 text-center overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }} animate={headerInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-2 h-1 w-16 bg-gradient-to-r from-transparent via-[#EF4444] to-transparent origin-left rounded-full"
        />
        <motion.p
          variants={fadeUp(0.1)} initial="hidden" animate={headerInView ? "visible" : "hidden"}
          className="text-[#EF4444] text-xs md:text-sm font-bold tracking-[4px] uppercase mb-4"
        >
          Análisis y diagnóstico
        </motion.p>
        <motion.h2
          variants={fadeUp(0.2)} initial="hidden" animate={headerInView ? "visible" : "hidden"}
          className="font-black text-white leading-tight mb-6"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(40px,7vw,72px)", letterSpacing: "-0.02em" }}
        >
          Laboratorio <span className="text-[#EF4444]">Clínico</span>
        </motion.h2>
        <motion.p
          variants={fadeUp(0.3)} initial="hidden" animate={headerInView ? "visible" : "hidden"}
          className="text-gray-100 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-light"
        >
          Equipos automatizados y certificados para análisis de calidad.
        </motion.p>
      </div>

      {/* ══ LAB TESTS ══ */}
      <div ref={sectionRef} className="max-w-6xl mx-auto px-6 md:px-10 pb-6">
        <motion.div
          variants={fadeUp(0)} initial="hidden" animate={sectionInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {LAB_SECTIONS.map((section) => (
            <div key={section.title}>
              {/* Category header */}
              <div className="flex items-center gap-2 mb-3 pb-2 border-b" style={{ borderColor: section.color + "33" }}>
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: section.color }} />
                <h4 className="text-xs font-bold tracking-[2px] uppercase" style={{ color: section.color }}>
                  {section.title}
                </h4>
              </div>

              {/* tests list */}
              <ul className="space-y-2">
                {section.tests.map((test) => (
                  <li key={test} className="flex items-start gap-2 text-sm text-gray-100 leading-snug">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke={section.color} strokeWidth="1.2" />
                      <path d="M5 8l2 2 4-4" stroke={section.color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-medium">{test}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ══ WHY CHOOSE US ══ */}
      <div ref={whyChooseRef} className="max-w-6xl mx-auto px-6 md:px-10 pb-4 flex justify-center">
        <motion.div
          variants={fadeUp(0)}
          initial="visible"
          animate="visible"
          className="rounded-lg border border-[#F5C518]/30 bg-gradient-to-br from-[#F5C518]/10 to-[#F5C518]/5 p-6 md:p-8 max-w-3xl w-full shadow-lg hover:shadow-xl hover:border-[#F5C518]/50 transition-all duration-300 relative overflow-hidden group"
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-[#F5C518]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <div>
            <h3 className="text-lg font-bold tracking-[3px] uppercase mb-4" style={{ color: "#F5C518" }}>
              ¿POR QUÉ ELEGIRNOS?
            </h3>
            <ul className="space-y-2">
              {WHY_CHOOSE_US.map((reason) => (
                <li key={reason} className="flex items-start gap-2 text-sm text-gray-100 leading-snug">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#F5C518" strokeWidth="1.2" />
                    <path d="M5 8l2 2 4-4" stroke="#F5C518" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-medium">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold tracking-[3px] uppercase mb-4" style={{ color: "#F5C518" }}>
              ⚡ INNOVACIÓN APLICADA
            </h3>
            <ul className="space-y-2">
              {INNOVATION.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-100 leading-snug">
                  <span className="w-1 h-1 rounded-full bg-[#F5C518] flex-shrink-0 mt-1.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
