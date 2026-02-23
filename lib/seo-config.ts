// Configuración de descripciones y metadatos para SEO por sección
export const SEO_CONFIG = {
  sections: {
    nosotros: {
      title: "Quiénes Somos - IPS SOIT S.A.S",
      description: "Conoce la historia, misión y visión de IPS SOIT S.A.S. Somos una institución prestadora de servicios especializada en salud ocupacional y seguridad laboral.",
      keywords: ["quiénes somos", "mision", "visión", "IPS SOIT"],
    },
    servicios: {
      title: "Nuestros Servicios - IPS SOIT S.A.S",
      description: "Servicios de seguridad industrial, medicina general, rehabilitación, diagnósticos especializados y odontología ocupacional.",
      keywords: ["servicios", "seguridad industrial", "medicina", "rehabilitación"],
    },
    laboratorio: {
      title: "Laboratorio Clínico - IPS SOIT S.A.S",
      description: "Laboratorio clínico con equipos automatizados y certificados. Análisis de sangre, química sanguínea, microbiología e inmunología.",
      keywords: ["laboratorio", "análisis clínicos", "diagnóstico", "química sanguínea"],
    },
    documentos: {
      title: "Estados Financieros - IPS SOIT S.A.S",
      description: "Balances comparativos y estados financieros de IPS SOIT S.A.S de los años 2021, 2022 y 2023.",
      keywords: ["estados financieros", "balance", "reportes financieros"],
    },
    calidad: {
      title: "Área de Calidad - IPS SOIT S.A.S",
      description: "Comités de calidad, SST y SGA. Documentos y políticas de gestión de calidad y seguridad ocupacional.",
      keywords: ["calidad", "SST", "seguridad salud trabajo", "SGA"],
    },
    ppss: {
      title: "Participación Social en Salud - IPS SOIT S.A.S",
      description: "Políticas corporativas, derechos de los usuarios y estrategias pedagógicas de IPS SOIT S.A.S.",
      keywords: ["PPSS", "políticas", "derechos", "participación"],
    },
    contacto: {
      title: "Contacto - IPS SOIT S.A.S",
      description: "Información de contacto: dirección en Santiago de Tolú, horarios, teléfono y correo electrónico.",
      keywords: ["contacto", "ubicación", "teléfono", "email"],
    },
  },

  // Información para Schema.org
  organization: {
    name: "IPS SOIT S.A.S",
    url: "https://ips-soit.com",
    logo: "https://ips-soit.com/logo.png",
    description: "Institución Prestadora de Servicios especializada en Salud Ocupacional y Seguridad Laboral",
    address: {
      streetAddress: "Cra. 5 #15-45",
      addressLocality: "Santiago de Tolú",
      addressRegion: "Sucre",
      postalCode: "230002",
      addressCountry: "CO",
    },
    telephone: "+573135675691",
    email: "SOITSAS2010@HOTMAIL.COM",
    sameAs: [
      "https://www.facebook.com/ips-soit",
      "https://www.linkedin.com/company/ips-soit",
      "https://www.instagram.com/ips-soit",
    ],
  },

  // Horarios de funcionamiento
  openingHours: [
    {
      dayOfWeek: "Monday",
      opens: "06:30",
      closes: "12:00",
    },
    {
      dayOfWeek: "Monday",
      opens: "14:00",
      closes: "16:30",
    },
    {
      dayOfWeek: "Tuesday",
      opens: "06:30",
      closes: "12:00",
    },
    {
      dayOfWeek: "Tuesday",
      opens: "14:00",
      closes: "16:30",
    },
    {
      dayOfWeek: "Wednesday",
      opens: "06:30",
      closes: "12:00",
    },
    {
      dayOfWeek: "Wednesday",
      opens: "14:00",
      closes: "16:30",
    },
    {
      dayOfWeek: "Thursday",
      opens: "06:30",
      closes: "12:00",
    },
    {
      dayOfWeek: "Thursday",
      opens: "14:00",
      closes: "16:30",
    },
    {
      dayOfWeek: "Friday",
      opens: "06:30",
      closes: "12:00",
    },
    {
      dayOfWeek: "Friday",
      opens: "14:00",
      closes: "16:30",
    },
    {
      dayOfWeek: "Saturday",
      opens: "07:00",
      closes: "10:00",
    },
  ],

  // URLs canónicas por sección
  canonicalUrls: {
    base: "https://ips-soit.com",
    nosotros: "https://ips-soit.com/#nosotros",
    servicios: "https://ips-soit.com/#servicios",
    laboratorio: "https://ips-soit.com/#laboratorio",
    documentos: "https://ips-soit.com/#documentos",
    calidad: "https://ips-soit.com/#calidad",
    ppss: "https://ips-soit.com/#ppss",
    contacto: "https://ips-soit.com/#contacto",
  },
};

// Función para generar breadcrumbs de navegación
export const generateBreadcrumbs = (section: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://ips-soit.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: section,
        item: `https://ips-soit.com/#${section.toLowerCase()}`,
      },
    ],
  };
};
