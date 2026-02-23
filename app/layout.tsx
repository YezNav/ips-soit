import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ips-soit.com"),
  title: "IPS SOIT S.A.S - Salud y Seguridad Laboral en Sucre, Colombia",
  description: "IPS SOIT ofrece soluciones integrales en salud ocupacional, seguridad laboral, medicina general, rehabilitación y laboratorio clínico. Confíe en profesionales especializados.",
  keywords: ["IPS", "salud ocupacional", "seguridad laboral", "medicina laboral", "Sucre", "Colombia", "laboratorio clínico", "diagnóstico", "medicina ocupacional", "SST"],
  authors: [{ name: "IPS SOIT S.A.S" }],
  creator: "IPS SOIT S.A.S",
  publisher: "IPS SOIT S.A.S",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: "https://ips-soit.com",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://ips-soit.com",
    siteName: "IPS SOIT S.A.S",
    title: "IPS SOIT S.A.S - Soluciones en Salud y Seguridad Laboral",
    description: "Servicios integrales en salud ocupacional, medicina general, rehabilitación y laboratorio clínico con certificación de calidad.",
    images: [
      {
        url: "https://ips-soit.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IPS SOIT S.A.S - Salud y Seguridad Laboral",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPS SOIT S.A.S - Salud y Seguridad Laboral",
    description: "Soluciones integrales en salud ocupacional y seguridad laboral",
    images: ["https://ips-soit.com.co/og-image.jpg"],
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "IPS SOIT S.A.S",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="canonical" href="https://ips-soit.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Analytics / Conversion Tracking */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_ID');
          `,
        }} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "@id": "https://ips-soit.com/#organization",
              name: "IPS SOIT S.A.S",
              image: "https://ips-soit.com/logo.png",
              description: "Institución Prestadora de Servicios especializada en salud ocupacional y seguridad laboral",
              url: "https://ips-soit.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Cra. 5 #15-45",
                addressLocality: "Santiago de Tolú",
                addressRegion: "Sucre",
                postalCode: "230002",
                addressCountry: "CO",
              },
              telephone: "+573135675691",
              email: "SOITSAS2010@HOTMAIL.COM",
              areaServed: {
                "@type": "Country",
                name: "Colombia",
              },
              knowsAbout: [
                "Salud Ocupacional",
                "Seguridad Industrial",
                "Medicina Laboral",
                "Diagnóstico Clínico",
                "Rehabilitación",
              ],
              sameAs: [
                "https://www.facebook.com/ips-soit",
                "https://www.linkedin.com/company/ips-soit",
              ],
            }),
          }}
        />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "IPS SOIT S.A.S",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Cra. 5 #15-45",
                addressLocality: "Santiago de Tolú",
                addressRegion: "Sucre",
                postalCode: "230002",
                addressCountry: "CO",
              },
              telephone: "+573135675691",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "06:30",
                  closes: "16:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "07:00",
                  closes: "10:00",
                },
              ],
              image: "https://ips-soit.com/og-image.jpg",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
