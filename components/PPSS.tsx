"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

/* ── helpers ── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as any } },
});

/* ── DATA ── */
const PPSS_SECTIONS = [
  {
    title: "POLÍTICAS DE IPS SOIT S.A.S.",
    color: "#F5C518",
    documents: [
      { name: "POLÍTICAS", file: "1-POLITICAS.pdf" },
      { name: "POLÍTICA DE PARTICIPACIÓN CIUDADANA 2022", file: "SOIT-M-GC-03-POLITICA-DE-PARTICIPACION-CIUDADANA.pdf" },
      { name: "ESTATUTOS ASOCIACION IPS SOIT S.A.S. 2023", file: "ESTATUTOS_ASOCIACION IPS SOIT S.A.S..pdf" },
      { name: "INFORME GERENCIAL SOIT SAS 2023", file: "INFORME GERENCIAL SOIT SAS 2023.pdf" },
    ],
  },
  {
    title: "DEBERES Y DERECHOS DE LOS USUARIOS",
    color: "#3B82F6",
    documents: [
      { name: "DERECHOS Y DEBERES COMO USUARIO DE LOS SERVICIOS DE SALUD FOLLETO 2021", file: "Derechos-y-Deberes-como-usuario-de-los-Servicios-de-Salud-folleto-.pdf" },
      { name: "FOLLETO DE ACCIONES INFORMATIVAS EN POLÍTICA PÚBLICA DE PARTICIPACIÓN SOCIAL EN SALUD 2022", file: "Folleto-de-Acciones-Informativas-en-Politica-Publica-de-Participacion-Social-en-Salud.pdf" },
      { name: "FOLLETO AUTOCUIDADO 2022", file: "FOLLETO-AUTOCUIDADO.pdf" },
    ],
  },
  {
    title: "ESTRATEGIAS PEDAGÓGICAS",
    color: "#10B981",
    documents: [
      { name: "FOLLETO ESTRATEGIAS PEDAGÓGICAS SOIT 2021", file: "FOLLETO-ESTRATEGIAS-PEDAGOGICAS-SOIT.pdf" },
    ],
  },
];

export default function PPSS() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const contentInView = useInView(contentRef, { once: true, margin: "-60px" });

  return (
    <section id="ppss" className="bg-[#0a0a0a] overflow-hidden">
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
          Participación Social en Salud
        </motion.p>
        <motion.h2
          variants={fadeUp(0.2)} initial="hidden" animate={headerInView ? "visible" : "hidden"}
          className="font-black text-white leading-tight mb-6"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(40px,7vw,72px)", letterSpacing: "-0.02em" }}
        >
          PPSS - <span className="text-[#F5C518]">IPS SOIT S.A.S</span>
        </motion.h2>
        <motion.p
          variants={fadeUp(0.3)} initial="hidden" animate={headerInView ? "visible" : "hidden"}
          className="text-gray-100 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-light"
        >
          Políticas, deberes, derechos y estrategias pedagógicas
        </motion.p>
      </div>

      {/* ══ CONTENT ══ */}
      <div ref={contentRef} className="max-w-4xl mx-auto px-6 md:px-10 pb-12">
        <motion.div
          variants={fadeUp(0)} initial="hidden" animate={contentInView ? "visible" : "hidden"}
          className="space-y-3"
        >
          {PPSS_SECTIONS.map((section, secIdx) => (
            <motion.div
              key={secIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: secIdx * 0.1 }}
              className="rounded-lg border overflow-hidden transition-all duration-300"
              style={{ borderColor: section.color + "33" }}
            >
              {/* Accordion Header */}
              <button
                onClick={() => setOpenAccordion(openAccordion === secIdx ? null : secIdx)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r transition-all duration-300 group relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${section.color}15, ${section.color}08)`,
                }}
              >
                {/* Hover background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: section.color + "10" }} />
                
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-3 h-3 rounded-full" style={{ background: section.color, boxShadow: `0 0 12px ${section.color}66` }} />
                  <h3 className="text-xl font-black tracking-wider" style={{ color: section.color, fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {section.title}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300 font-medium">
                    {section.documents.length} documentos
                  </span>
                </div>

                <motion.svg
                  animate={{ rotate: openAccordion === secIdx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 relative z-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ color: section.color }}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </motion.svg>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {openAccordion === secIdx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                    style={{ borderTop: `1px solid ${section.color}33` }}
                  >
                    <div className="px-6 py-4 space-y-2" style={{ background: section.color + "08" }}>
                      {section.documents.map((doc, docIdx) => (
                        <motion.a
                          key={doc.file}
                          href={`/documents/${doc.file}`}
                          download
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: docIdx * 0.05 }}
                          className="flex items-center justify-between p-3 rounded-lg border transition-all duration-200 group/item hover:shadow-md"
                          style={{
                            borderColor: section.color + "25",
                            background: section.color + "10",
                          }}
                        >
                          <div className="flex items-center gap-3 flex-1">
                            <svg className="w-5 h-5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor" style={{ color: section.color }}>
                              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                            </svg>
                            <span className="text-sm text-gray-100 font-medium group-hover/item:text-white transition-colors">
                              {doc.name}
                            </span>
                          </div>
                          <div className="text-xl flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" style={{ color: section.color }}>
                            ↓
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
