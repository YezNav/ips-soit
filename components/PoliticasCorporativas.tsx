"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ── helpers ── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as any } },
});

const POLITICAS_TEXT = `Prestamos servicios con altos estándares técnicos y científicos garantizando la seguridad del paciente en cada etapa de la atención en salud. Promovemos ambientes laborales seguros, adoptamos prácticas ambientales responsables y actuamos con integridad ética y transparencia. Incorporamos herramientas tecnológicas para optimizar procesos, brindamos atención humanizada y de respeto, manejamos datos personales de forma segura, recompensamos a nuestros clientes por su lealtad, y preservamos la seguridad vial. Todos estos principios guían nuestro compromiso con la calidad y el mejoramiento continuo.`;

export default function PoliticasCorporativas() {
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const contentInView = useInView(contentRef, { once: true, margin: "-60px" });

  return (
    <section id="politicas" className="bg-[#0a0a0a] overflow-hidden">
      {/* ══ HEADER ══ */}
      <div ref={headerRef} className="relative py-4 md:py-5 px-6 text-center overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }} animate={headerInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-2 h-1 w-16 bg-gradient-to-r from-transparent via-[#F5C518] to-transparent origin-left rounded-full"
        />
        <motion.p
          variants={fadeUp(0.1)} initial="hidden" animate={headerInView ? "visible" : "hidden"}
          className="text-[#F5C518] text-xs md:text-sm font-bold tracking-[4px] uppercase mb-4"
        >
          Nuestros Principios
        </motion.p>
        <motion.h2
          variants={fadeUp(0.2)} initial="hidden" animate={headerInView ? "visible" : "hidden"}
          className="font-black text-white leading-tight mb-6"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(40px,7vw,72px)", letterSpacing: "-0.02em" }}
        >
          Políticas <span className="text-[#F5C518]">Corporativas</span>
        </motion.h2>
      </div>

      {/* ══ CONTENT ══ */}
      <div ref={contentRef} className="max-w-3xl mx-auto px-6 md:px-10 pb-12">
        <motion.p
          variants={fadeUp(0)}
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
          className="text-gray-300 text-center text-base md:text-lg leading-relaxed font-light"
        >
          {POLITICAS_TEXT}
        </motion.p>
      </div>
    </section>
  );
}
