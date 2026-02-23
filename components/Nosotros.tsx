"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ── animation helpers ── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as any } },
});
const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as any } },
});
const fadeRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as any } },
});



export default function Nosotros() {
  /* refs for scroll-triggered animations */
  const misionRef  = useRef(null);

  const misionInView  = useInView(misionRef,  { once: true, margin: "-60px" });

  return (
    <section id="nosotros" className="bg-[#0a0a0a] overflow-hidden">

      {/* ══ HEADER ══ */}
      <div className="relative py-16 md:py-24 px-6 text-center overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-6 h-[3px] w-16 bg-[#F5C518] origin-left"
        />
        <motion.p
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#F5C518] text-xs md:text-sm font-bold tracking-[4px] uppercase mb-4"
        >
          Quiénes Somos
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-black text-white leading-tight mb-4"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(36px,6vw,64px)" }}
        >
          IPS <span className="text-[#F5C518]">SOIT</span> S.A.S
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="text-gray-100 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
        >
          Una institución prestadora de servicios de salud comprometida con la excelencia,
          la innovación y el bienestar integral de las personas y sus organizaciones.
        </motion.p>
      </div>

      {/* ══ MISIÓN / VISIÓN ══ */}
      <div ref={misionRef} className="max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28 grid md:grid-cols-2 gap-8 lg:gap-12">

        {/* MISIÓN */}
        <motion.div
          variants={fadeLeft(0.1)}
          initial="hidden"
          animate={misionInView ? "visible" : "hidden"}
          className="relative group"
        >
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#F5C518]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10 h-full overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F5C518] to-[#F5C518]/0" />
            <div className="w-14 h-14 rounded-xl bg-[#F5C518]/10 border border-[#F5C518]/20 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-[#F5C518]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <p className="text-[#F5C518] text-xs font-bold tracking-[3px] uppercase mb-3">01 — Misión</p>
            <h3
              className="font-black text-white mb-5"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(26px,3.5vw,36px)" }}
            >
              Nuestra Misión
            </h3>
            <p className="text-gray-300 leading-relaxed text-[15px] md:text-base">
              Brindar soluciones integrales en salud, seguridad y bienestar laboral,
              fundamentadas en altos estándares de calidad, talento humano especializado
              y tecnologías innovadoras que{" "}
              <span className="text-white font-semibold">protejan la vida</span> y{" "}
              <span className="text-white font-semibold">fortalezcan el bienestar</span> de
              las organizaciones y sus comunidades.
            </p>
            <span aria-hidden className="absolute bottom-4 right-6 text-[100px] font-black text-white/[0.03] leading-none select-none pointer-events-none" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>01</span>
          </div>
        </motion.div>

        {/* VISIÓN */}
        <motion.div
          variants={fadeRight(0.22)}
          initial="hidden"
          animate={misionInView ? "visible" : "hidden"}
          className="relative group"
        >
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-bl from-[#F5C518]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10 h-full overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F5C518]/0 to-[#F5C518]" />
            <div className="w-14 h-14 rounded-xl bg-[#F5C518]/10 border border-[#F5C518]/20 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-[#F5C518]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-[#F5C518] text-xs font-bold tracking-[3px] uppercase mb-3">02 — Visión</p>
            <h3
              className="font-black text-white mb-5"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(26px,3.5vw,36px)" }}
            >
              Nuestra Visión
            </h3>
            <p className="text-gray-300 leading-relaxed text-[15px] md:text-base">
              Ser reconocida como una{" "}
              <span className="text-white font-semibold">IPS líder a nivel regional y nacional</span>{" "}
              en servicios de seguridad y salud en el trabajo, diagnóstico y atención integral,
              destacándose por su{" "}
              <span className="text-white font-semibold">innovación disruptiva</span>,
              excelencia operativa, infraestructura y enfoque humano.
            </p>
            <span aria-hidden className="absolute bottom-4 right-6 text-[100px] font-black text-white/[0.03] leading-none select-none pointer-events-none" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>02</span>
          </div>
        </motion.div>
      </div>

      {/* ══ POLÍTICAS CORPORATIVAS ══ */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={misionInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div
            initial={{ scaleX: 0 }} animate={misionInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-6 h-[3px] w-16 bg-gradient-to-r from-transparent via-[#F5C518] to-transparent origin-center"
          />
          <motion.p
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={misionInView ? "visible" : "hidden"}
            className="text-[#F5C518] text-xs md:text-sm font-bold tracking-[4px] uppercase mb-4"
          >
            Nuestros Principios
          </motion.p>
          <motion.h3
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={misionInView ? "visible" : "hidden"}
            className="font-black text-white leading-tight mb-8"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(32px,5vw,48px)" }}
          >
            Políticas Corporativas
          </motion.h3>
          <motion.p
            variants={fadeUp(0.3)}
            initial="hidden"
            animate={misionInView ? "visible" : "hidden"}
            className="text-white text-base md:text-lg leading-relaxed font-medium"
          >
            Prestamos servicios con altos estándares técnicos y científicos garantizando la seguridad del paciente en cada etapa de la atención en salud. Promovemos ambientes laborales seguros, adoptamos prácticas ambientales responsables y actuamos con integridad ética y transparencia. Incorporamos herramientas tecnológicas para optimizar procesos, brindamos atención humanizada y de respeto, manejamos datos personales de forma segura, recompensamos a nuestros clientes por su lealtad, y preservamos la seguridad vial. Todos estos principios guían nuestro compromiso con la calidad y el mejoramiento continuo.
          </motion.p>
        </motion.div>
      </div>

    </section>
  );
}
