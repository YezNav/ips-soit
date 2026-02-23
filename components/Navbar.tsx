"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = ["INICIO", "NOSOTROS", "SERVICIOS", "LABORATORIO", "DOCUMENTOS", "CONTACTO"];

const DOCUMENTOS_ITEMS = [
  { label: "ESTADOS FINANCIEROS Y COMPARATIVO", id: "documentos" },
  { label: "ÁREA DE CALIDAD, SST Y SGA", id: "calidad" },
  { label: "POLÍTICAS DE IPS SOIT S.A.S", id: "ppss" },
];

export default function Navbar() {
  const [active, setActive]     = useState("INICIO");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);
  const docsRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (docsRef.current && !docsRef.current.contains(e.target as Node)) {
        setDocsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-[60] focus:bg-[#F5C518] focus:text-black focus:p-4 focus:rounded-br-lg"
      >
        Ir al contenido principal
      </a>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.6)]"
            : "bg-[#0a0a0a]"
        }`}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-3">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 no-underline flex-shrink-0">
            <div className="relative">
              <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 52 52" fill="none">
                <circle cx="26" cy="26" r="25" fill="#F5C518" />
                <path d="M12 32c0-7.732 6.268-14 14-14s14 6.268 14 14" fill="#111" />
                <rect x="10" y="31" width="32" height="5" rx="2.5" fill="#111" />
                <circle cx="26" cy="15" r="3" fill="#F5C518" />
                <line x1="26" y1="12" x2="26" y2="8" stroke="#111" strokeWidth="2" />
              </svg>
              <span className="absolute inset-0 rounded-full animate-ping bg-[#F5C518]/20 pointer-events-none" />
            </div>
            <div>
              <p
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                className="font-black text-white text-lg md:text-[22px] leading-tight tracking-tight"
              >
                IPS <span className="text-[#F5C518]">SOIT</span> S.A.S
              </p>
              <p className="text-[#888] text-[8px] md:text-[9px] tracking-[2px] md:tracking-[3px] uppercase">
                Salud y Seguridad Laboral
              </p>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1 list-none">
            {NAV_LINKS.map((link, i) => {
              const isDocs = link === "DOCUMENTOS";

              return isDocs ? (
                <li key={link} ref={docsRef} className="relative">
                  <motion.button
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                    onClick={() => { setDocsOpen(!docsOpen); setActive(link); }}
                    className={`relative flex items-center gap-1.5 px-4 py-2 text-[12px] xl:text-[13px] font-bold tracking-wider rounded transition-all duration-200 border-none cursor-pointer group ${
                      active === link
                        ? "bg-[#F5C518] text-black"
                        : "bg-transparent text-white hover:text-[#F5C518]"
                    }`}
                  >
                    {link}
                    <motion.svg
                      animate={{ rotate: docsOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      width="10" height="10" viewBox="0 0 10 10" fill="none"
                    >
                      <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </motion.svg>
                    {active !== link && (
                      <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#F5C518] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    )}
                  </motion.button>

                  {/* Dropdown panel */}
                  <AnimatePresence>
                    {docsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.97 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="absolute top-full right-0 mt-2 w-72 rounded-lg overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.55)] border border-white/10"
                        style={{ background: "#111" }}
                      >
                        <div className="h-[3px] bg-[#F5C518] w-full" />
                        <ul className="list-none py-2">
                          {DOCUMENTOS_ITEMS.map((item, idx) => (
                            <motion.li
                              key={item.label}
                              initial={{ opacity: 0, x: -12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.07 }}
                            >
                              <button
                                onClick={() => { document.getElementById(item.id)?.scrollIntoView({behavior:'smooth'}); setDocsOpen(false); }}
                                className="w-full flex items-center justify-between px-4 py-3 text-left text-sm text-gray-200 font-bold tracking-wide hover:bg-white/5 hover:text-[#F5C518] transition-all duration-150 border-none cursor-pointer bg-transparent group/item"
                              >
                                <span className="leading-tight">{item.label}</span>
                                <span className="ml-auto text-[#F5C518] opacity-0 group-hover/item:opacity-100 transition-opacity duration-150 text-xs">→</span>
                              </button>
                              {idx < DOCUMENTOS_ITEMS.length - 1 && (
                                <div className="mx-4 h-px bg-white/5" />
                              )}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  <button
                    onClick={() => { setActive(link); setDocsOpen(false); if(link === 'INICIO') window.scrollTo({top: 0, behavior: 'smooth'}); if(link === 'NOSOTROS') document.getElementById('nosotros')?.scrollIntoView({behavior:'smooth'}); if(link === 'SERVICIOS') document.getElementById('servicios')?.scrollIntoView({behavior:'smooth'}); if(link === 'LABORATORIO') document.getElementById('laboratorio')?.scrollIntoView({behavior:'smooth'}); if(link === 'CONTACTO') document.getElementById('contacto')?.scrollIntoView({behavior:'smooth'}); }}
                    className={`relative px-4 py-2 text-[12px] xl:text-[13px] font-bold tracking-wider rounded transition-all duration-200 border-none cursor-pointer overflow-hidden group ${
                      active === link
                        ? "bg-[#F5C518] text-black"
                        : "bg-transparent text-white hover:text-[#F5C518]"
                    }`}
                  >
                    {active !== link && (
                      <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#F5C518] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    )}
                    {link}
                  </button>
                </motion.li>
              );
            })}
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8 bg-transparent border-none cursor-pointer p-0"
            aria-label="Toggle menu"
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block h-[2px] w-7 bg-white origin-center" />
            <motion.span animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} className="block h-[2px] w-7 bg-white" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block h-[2px] w-7 bg-white origin-center" />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-[#111] border-t border-white/10"
            >
              <ul className="list-none flex flex-col px-6 py-4 gap-1">
                {NAV_LINKS.map((link, i) => {
                  const isDocs = link === "DOCUMENTOS";
                  return (
                    <motion.li
                      key={link}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {isDocs ? (
                        <>
                          <button
                            onClick={() => { setDocsOpen(!docsOpen); setActive(link); }}
                            className={`w-full flex items-center justify-between px-4 py-3 text-sm font-bold tracking-wider rounded transition-all border-none cursor-pointer ${
                              active === link ? "bg-[#F5C518] text-black" : "bg-transparent text-white hover:bg-white/5 hover:text-[#F5C518]"
                            }`}
                          >
                            {link}
                            <motion.svg
                              animate={{ rotate: docsOpen ? 180 : 0 }}
                              transition={{ duration: 0.25 }}
                              width="10" height="10" viewBox="0 0 10 10" fill="none"
                            >
                              <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </motion.svg>
                          </button>

                          <AnimatePresence>
                            {docsOpen && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden list-none pl-4 mt-1 border-l-2 border-[#F5C518]/40"
                              >
                                {DOCUMENTOS_ITEMS.map((item) => (
                                  <li key={item.label}>
                                    <button
                                      onClick={() => { document.getElementById(item.id)?.scrollIntoView({behavior:'smooth'}); setMenuOpen(false); setDocsOpen(false); }}
                                      className="w-full flex items-center gap-2 px-3 py-2.5 text-[13px] text-gray-300 hover:text-[#F5C518] transition-colors bg-transparent border-none cursor-pointer text-left"
                                    >
                                      <span>{item.label}</span>
                                    </button>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <button
                          onClick={() => { setActive(link); setMenuOpen(false); setDocsOpen(false); }}
                          className={`w-full text-left px-4 py-3 text-sm font-bold tracking-wider rounded transition-all border-none cursor-pointer ${
                            active === link ? "bg-[#F5C518] text-black" : "bg-transparent text-white hover:bg-white/5 hover:text-[#F5C518]"
                          }`}
                        >
                          {link}
                        </button>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <div className="h-[64px] md:h-[72px]" />
    </>
  );
}
