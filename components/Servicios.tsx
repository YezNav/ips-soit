"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

/* ── helpers ── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as any } },
});

/* ── CUSTOM ICONS ── */
function SecurityIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1L3 5.5V12C3 19.7 12 23 12 23S21 19.7 21 12V5.5L12 1ZM10.5 16L7 12.5L8.4 11.1L10.5 13.2L15.6 8.1L17 9.5L10.5 16Z" />
    </svg>
  );
}

function MedicineIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22S22 17.52 22 12S17.52 2 12 2ZM17 12.5H12.5V17H11.5V12.5H7V11.5H11.5V7H12.5V11.5H17V12.5Z" />
    </svg>
  );
}

function RehabIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C11.5 2 11 2.19 10.59 2.59C10.2 2.98 10 3.5 10 4C10 4.5 10.19 5 10.59 5.41C11 5.8 11.5 6 12 6C12.5 6 13 5.81 13.41 5.41C13.8 5 14 4.5 14 4C14 3.5 13.81 3 13.41 2.59C13 2.2 12.5 2 12 2ZM18 12V20H16V13H8V20H6V12C6 11.5 6.19 11 6.59 10.59C7 10.2 7.5 10 8 10H16C16.5 10 17 10.19 17.41 10.59C17.8 11 18 11.5 18 12Z" />
    </svg>
  );
}

function DiagnosticIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 17C10.34 17 9 15.66 9 14C9 12.34 10.34 11 12 11C13.66 11 15 12.34 15 14C15 15.66 13.66 17 12 17Z" />
    </svg>
  );
}

function DentistIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C11 2 10.5 2.5 10.5 3.5L10 8C10 10 9 12 8 13V20C8 21.1 8.9 22 10 22H14C15.1 22 16 21.1 16 20V13C15 12 14 10 14 8L13.5 3.5C13.5 2.5 13 2 12 2ZM11 9H13V11H11V9ZM11 13H13V15H11V13Z" />
    </svg>
  );
}

/* ── DATA ── */
const LINEAS = [
  { icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M12 10v4M10 12h4"/></svg>, label: "Atención Integral en Salud" },
  { icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a10 10 0 0 0-9.95 9M12 2a10 10 0 0 1 9.95 9M12 22a10 10 0 0 0 9.95-9M12 22a10 10 0 0 1-9.95-9M12 8v8M8 12h8"/></svg>, label: "Promoción y Mantenimiento de Salud" },
  { icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/></svg>, label: "Gestión del Riesgo Laboral y Ambiental" },
];

const TABS = [
  {
    id: "seguridad",
    label: "Seguridad Industrial",
    IconComponent: SecurityIcon,
    color: "#F5C518",
    image: "/services/seguridad.jpg",
    servicios: [
      "Panorama de Factores de Riesgo",
      "Programas de Vigilancia Epidemiológica",
      "Estudios de Puestos de Trabajo",
      "Profesiograma",
      "Planes de Emergencia y Evacuación",
      "Informes automáticos con análisis comparativo normativo",
      "Alertas tempranas para sobreexposición",
    ],
    higiene: [
      "Evaluación de niveles de ruido, iluminación, vibraciones y temperatura",
      "Medición de contaminantes químicos",
    ],
    innovacion: [
      "Historia clínica digital ocupacional",
      "Seguimiento automatizado de restricciones médicas",
    ],
    formacion: [
      "Entrenamiento para COPASST",
      "Formación de brigadas de emergencia",
    ],
  },
  {
    id: "medicina",
    label: "Medicina General",
    IconComponent: MedicineIcon,
    color: "#3B82F6",
    image: "/services/medicina.jpg",
    consulta: [
      "Riesgo cardiovascular",
      "Control prenatal",
      "Crecimiento y desarrollo",
      "Patologías agudas y crónicas",
      "Fisioterapia",
      "Fonoaudiología",
      "Psicología",
      "Medicina General",
      "Optometría",
    ],
    innovacion: [
      "Teleconsulta",
      "Sistema de alertas por riesgo",
    ],
  },
  {
    id: "rehabilitacion",
    label: "Rehabilitación",
    IconComponent: RehabIcon,
    color: "#10B981",
    image: "/services/rehabilitacion.jpg",
    terapias: [
      "Fisioterapia",
      "Terapia ocupacional",
      "Neurodesarrollo",
      "Terapia cardiorrespiratoria",
      "Terapia de suelo pélvico",
      "Terapias de Ondas de Choque",
    ],
    innovacion: [
      "Equipos de rehabilitación avanzada",
      "Monitoreo del progreso terapéutico",
    ],
  },
  {
    id: "diagnosticos",
    label: "Diagnósticos",
    IconComponent: DiagnosticIcon,
    color: "#8B5CF6",
    image: "/services/diagnosticos.jpg",
    examenes: [
      "Audiometrías",
      "Espirometría",
      "Electrocardiogramas",
      "Sonometría",
    ],
    innovacion: [
      "Equipos certificados y calibrados digitalmente",
      "Informes automáticos y trazables",
    ],
  },
  {
    id: "odontologia",
    label: "Odontología",
    IconComponent: DentistIcon,
    color: "#F97316",
    image: "/services/odontologia.jpg",
    servicios: [
      "Urgencias odontológicas",
      "Odontología general",
    ],
    innovacion: [
      "Historia clínica ocupacional digital",
      "Plataforma para trazabilidad del trabajador",
    ],
  },
];

/* ── sub-components ── */
function InnoTag({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2.5 py-2.5 border-b border-white/5 last:border-0">
      <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518] flex-shrink-0" />
      <span className="text-gray-100 text-base font-medium leading-relaxed">{text}</span>
    </div>
  );
}

function ServiceList({ items, color }: { items: string[]; color: string }) {
  return (
    <ul className="space-y-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-base text-gray-100 leading-relaxed">
          <svg className="w-5 h-5 mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke={color} strokeWidth="1.2" />
            <path d="M5 8l2 2 4-4" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-medium">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function InnoCard({ items }: { items: string[] }) {
  return (
    <div className="rounded-2xl border border-[#F5C518]/30 bg-gradient-to-br from-[#F5C518]/10 to-[#F5C518]/5 p-6 mt-4">
      <p className="text-[#F5C518] text-xs font-bold tracking-[3px] uppercase mb-4 flex items-center gap-2">
        <span>⚡</span> Innovación Aplicada
      </p>
      <div className="space-y-2.5">
        {items.map((t) => <InnoTag key={t} text={t} />)}
      </div>
    </div>
  );
}

/* ── Tab content panels ── */
function TabPanel({ tab }: { tab: typeof TABS[number] }) {
  if (tab.id === "seguridad") {
    const t = tab as typeof TABS[0];
    return (
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div>
            <p className="text-xs font-bold tracking-[2px] uppercase mb-4 pb-3 border-b border-white/10" style={{ color: tab.color }}>Servicios</p>
            <ServiceList items={t.servicios!} color={tab.color} />
          </div>
          <div>
            <p className="text-xs font-bold tracking-[2px] uppercase mb-4 pb-3 border-b border-white/10" style={{ color: tab.color }}>Higiene Ocupacional</p>
            <ServiceList items={t.higiene!} color={tab.color} />
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <p className="text-xs font-bold tracking-[2px] uppercase mb-4 pb-3 border-b border-white/10" style={{ color: tab.color }}>Formación Empresarial</p>
            <ServiceList items={t.formacion!} color={tab.color} />
          </div>
          <InnoCard items={t.innovacion!} />
        </div>
      </div>
    );
  }
  if (tab.id === "medicina") {
    const t = tab as typeof TABS[1];
    return (
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-xs font-bold tracking-[2px] uppercase mb-4 pb-3 border-b border-white/10" style={{ color: tab.color }}>Consulta Externa</p>
          <ServiceList items={t.consulta!} color={tab.color} />
        </div>
        <InnoCard items={t.innovacion!} />
      </div>
    );
  }
  if (tab.id === "rehabilitacion") {
    const t = tab as typeof TABS[2];
    return (
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-xs font-bold tracking-[2px] uppercase mb-4 pb-3 border-b border-white/10" style={{ color: tab.color }}>Rehabilitación y Terapias</p>
          <ServiceList items={t.terapias!} color={tab.color} />
        </div>
        <InnoCard items={t.innovacion!} />
      </div>
    );
  }
  if (tab.id === "diagnosticos") {
    const t = tab as typeof TABS[3];
    return (
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-xs font-bold tracking-[2px] uppercase mb-4 pb-3 border-b border-white/10" style={{ color: tab.color }}>Exámenes Especializados</p>
          <ServiceList items={t.examenes!} color={tab.color} />
        </div>
        <InnoCard items={t.innovacion!} />
      </div>
    );
  }
  if (tab.id === "odontologia") {
    const t = tab as typeof TABS[4];
    return (
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-xs font-bold tracking-[2px] uppercase mb-4 pb-3 border-b border-white/10" style={{ color: tab.color }}>Servicios Odontológicos</p>
          <ServiceList items={t.servicios!} color={tab.color} />
        </div>
        <InnoCard items={t.innovacion!} />
      </div>
    );
  }
  return null;
}

/* ══ MAIN EXPORT ══ */
export default function Servicios() {
  const [activeTab, setActiveTab] = useState(0);
  const headerRef = useRef(null);
  const lineasRef = useRef(null);
  const tabsRef   = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const lineasInView = useInView(lineasRef, { once: true, margin: "-60px" });
  const tabsInView   = useInView(tabsRef,   { once: true, margin: "-60px" });

  const currentTab = TABS[activeTab];

  return (
    <section id="servicios" className="bg-[#0a0a0a] overflow-hidden">

      {/* ══ HEADER ══ */}
      <div ref={headerRef} className="relative py-20 md:py-28 px-6 text-center overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }} animate={headerInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-6 h-1 w-20 bg-gradient-to-r from-transparent via-[#F5C518] to-transparent origin-left rounded-full"
        />
        <motion.p
          variants={fadeUp(0.1)} initial="hidden" animate={headerInView ? "visible" : "hidden"}
          className="text-[#F5C518] text-xs md:text-sm font-bold tracking-[4px] uppercase mb-4"
        >
          Lo que hacemos
        </motion.p>
        <motion.h2
          variants={fadeUp(0.2)} initial="hidden" animate={headerInView ? "visible" : "hidden"}
          className="font-black text-white leading-tight mb-6"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(40px,7vw,72px)", letterSpacing: "-0.02em" }}
        >
          Nuestros <span className="text-[#F5C518]">Servicios</span>
        </motion.h2>
        <motion.p
          variants={fadeUp(0.3)} initial="hidden" animate={headerInView ? "visible" : "hidden"}
          className="text-gray-100 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-light"
        >
          Trabajamos sobre tres ejes fundamentales para garantizar la salud, seguridad
          y bienestar de cada trabajador y organización.
        </motion.p>
      </div>

      {/* ══ LÍNEAS DE SERVICIO ══ */}
      <div ref={lineasRef} className="max-w-6xl mx-auto px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {LINEAS.map((l, i) => (
            <motion.div
              key={l.label}
              variants={fadeUp(i * 0.12)}
              initial="hidden"
              animate={lineasInView ? "visible" : "hidden"}
              className="relative rounded-2xl border border-[#F5C518]/30 bg-gradient-to-br from-[#F5C518]/10 to-[#F5C518]/5 px-6 py-6 flex flex-col items-center gap-3 group overflow-hidden hover:border-[#F5C518]/60 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-[#F5C518]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-[#F5C518] flex-shrink-0 group-hover:scale-110 transition-transform duration-300 relative z-10">{l.icon}</div>
              <p
                className="font-bold text-white text-center text-base md:text-lg leading-snug relative z-10"
                style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", fontWeight: 700 }}
              >
                {l.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══ TABS ══ */}
      <div ref={tabsRef} className="max-w-6xl mx-auto px-6 md:px-10 pb-24">

        {/* Tab buttons — scrollable on mobile */}
        <motion.div
          variants={fadeUp(0)} initial="hidden" animate={tabsInView ? "visible" : "hidden"}
          className="flex flex-wrap gap-3 justify-center pb-4 mb-6"
        >
          {TABS.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-bold tracking-wide border transition-all duration-200 cursor-pointer ${
                activeTab === i
                  ? "text-black border-transparent shadow-lg"
                  : "bg-transparent text-gray-300 border-white/10 hover:text-white hover:border-white/30 hover:bg-white/5"
              }`}
              style={activeTab === i ? { background: tab.color, borderColor: tab.color, boxShadow: `0 8px 24px ${tab.color}40` } : {}}
            >
              <span className="flex-shrink-0" style={activeTab !== i ? { color: tab.color } : {}}>
                <tab.IconComponent />
              </span>
              <span>{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Auto-rotation indicator */}
        <div className="flex justify-center gap-2 mb-8">
          {TABS.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeTab === i ? "bg-[#F5C518] w-8" : "bg-white/20 w-2"
              }`}
            />
          ))}
        </div>

        {/* Active tab panel */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-12 overflow-hidden relative"
        >
          {/* color top bar */}
          <div className="absolute top-0 left-0 right-0 h-1" style={{ background: currentTab.color }} />

          {/* panel header with title */}
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: `${currentTab.color}18`, border: `1px solid ${currentTab.color}33`, color: currentTab.color }}
            >
              <currentTab.IconComponent />
            </div>
            <div>
              <p className="text-xs font-bold tracking-[3px] uppercase mb-0.5" style={{ color: currentTab.color }}>
                Área de servicio
              </p>
              <h3
                className="font-black text-white text-2xl md:text-3xl"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "-0.01em" }}
              >
                {currentTab.label}
              </h3>
            </div>
          </div>

          {/* Service Image */}
          <div className="w-full mb-10 rounded-3xl border border-white/10 overflow-hidden bg-white/[0.02] max-w-2xl mx-auto">
            <img
              src={currentTab.image}
              alt={currentTab.label}
              className="w-full h-96 object-cover block"
              loading="lazy"
            />
          </div>

          <TabPanel tab={currentTab} />
        </motion.div>
      </div>

    </section>
  );
}
