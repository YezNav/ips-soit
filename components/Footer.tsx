"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const FOOTER_SECTIONS = [
  {
    title: "Empresa",
    links: [
      { label: "Quiénes Somos", href: "#nosotros" },
      { label: "Servicios", href: "#servicios" },
      { label: "Laboratorio", href: "#laboratorio" },
      { label: "Calidad", href: "#calidad" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "Cra. 5 #15-45, Santiago de Tolú, Sucre", href: "https://maps.google.com/?q=Cra+5+15-45+Santiago+de+Tolu+Sucre", external: true },
      { label: "+57 313 567 5691", href: "tel:+573135675691" },
      { label: "SOITSAS2010@HOTMAIL.COM", href: "mailto:SOITSAS2010@HOTMAIL.COM" },
    ],
  },
];

export default function Footer() {
  const footerRef = useRef(null);
  const inView = useInView(footerRef, { once: true, margin: "-60px" });

  return (
    <footer id="footer" className="bg-[#050505] border-t border-white/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F5C518]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" aria-hidden="true" />

      <div ref={footerRef} className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Brand Section */}
            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-col gap-4"
            >
              <div>
                <h2 className="font-black text-white text-xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  IPS <span className="text-[#F5C518]">SOIT</span>
                </h2>
                <p className="text-[#888] text-xs tracking-[2px] mt-1">SALUD Y SEGURIDAD</p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Soluciones integrales en salud y seguridad laboral con estándares de excelencia y compromiso con el bienestar.
              </p>
            </motion.div>

            {/* Footer Links */}
            {FOOTER_SECTIONS.map((section, idx) => (
              <motion.nav
                key={section.title}
                variants={fadeUp(0.1 + idx * 0.1)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                aria-label={`Navegación: ${section.title}`}
              >
                <h3 className="text-white font-bold text-sm mb-4 tracking-wide">
                  {section.title}
                </h3>
                <ul className="space-y-3" role="list">
                  {section.links.map((link) => (
                    <li key={link.label} role="listitem">
                      <a
                        href={link.href}
                        target={(link as any).external ? "_blank" : undefined}
                        rel={(link as any).external ? "noopener noreferrer" : undefined}
                        className="text-gray-400 text-sm hover:text-[#F5C518] transition-colors duration-300 inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" aria-hidden="true" />

          {/* Bottom Footer */}
          <motion.div
            variants={fadeUp(0.4)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400"
          >
            <p>
              © 2024 <span className="text-white font-semibold">IPS SOIT S.A.S</span> - Todos los derechos reservados.
            </p>
            <p className="text-xs">
              Diseñado con <span className="text-[#F5C518]">♥</span> para tu bienestar laboral
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
