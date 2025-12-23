import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});


export const viewport = {
  themeColor: '#09090b',
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL('https://tismodev.com'),

  title: {
    default: "Tismodev | Développeur web freelance & bots Discord à Verviers (Belgique)",
    template: "%s | Tismodev"
  },

  description: "Tismodev (Tismo dev), développeur full stack freelance web & Discord basé à Verviers (Belgique) : sites vitrines pour restaurants, salons, portfolios. Apps React & Next.js, APIs Supabase, bots Discord automatisés avec SEO et support 72h.",

  keywords: [
    "développeur web freelance",
    "site vitrine restaurant",
    "site salon coiffure",
    "bot Discord",
    "Verviers",
    "Belgique",
    "React",
    "Next.js",
    "Supabase",
    "SEO",
    "Tismodev",
    "Tismo dev"
  ],

  authors: [{ name: "Tismodev", url: "https://tismodev.com" }],
  creator: "Tismodev",
  publisher: "Tismodev",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },


  alternates: {
    canonical: 'https://tismodev.com/',
    languages: {
      'fr-FR': 'https://tismodev.com/',
      'en-US': 'https://tismodev.com/',
      'x-default': 'https://tismodev.com/',
    },
  },


  verification: {
    google: 'google7312e4ca6d476d0f',
  },


  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    url: "https://tismodev.com/",
    siteName: "Tismodev • Développeur full stack freelance web & Discord",
    title: "Tismodev | Sites modernes & Bots Discord",
    description: "Je crée des sites vitrines pour restaurants, salons de coiffure, portfolios et commerces locaux. Apps React/Next.js avec APIs, bases de données Supabase, et bots Discord pour le support et automatisations.",
    images: [
      {
        url: "/assets/logo.webp",
        width: 512,
        height: 512,
        alt: "Logo Tismodev - Développeur web freelance",
      }
    ],
  },


  twitter: {
    card: "summary_large_image",
    site: "@tismo_tech",
    creator: "@tismo_tech",
    title: "Tismodev | Développeur full stack freelance web & Discord",
    description: "Sites vitrines modernes pour restaurants, salons, portfolios. Bots Discord sur mesure. Support 72h.",
    images: ["/assets/logo.webp"],
  },


  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/assets/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/assets/logo.webp",
    shortcut: "/assets/favicon.svg",
  },


  manifest: "/manifest.json",


  category: "technology",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://tismodev.com/#website",
      "url": "https://tismodev.com/",
      "name": "Tismodev | Développeur full stack freelance web & Discord",
      "inLanguage": ["fr-FR", "en-US"],
      "description": "Développeur full stack freelance web & Discord : sites vitrines pour restaurants, salons, commerces locaux, bots Discord sur mesure et automatisations.",
      "publisher": { "@id": "https://tismodev.com/#person" }
    },
    {
      "@type": "Organization",
      "@id": "https://tismodev.com/#person",
      "name": "Tismodev",
      "alternateName": ["tismo_tech", "Tismo dev"],
      "url": "https://tismodev.com/",
      "logo": "https://tismodev.com/assets/logo.webp",
      "sameAs": [
        "https://discord.gg/7vVVqdkVWg",
        "https://instagram.com/ayoubsyfd",
        "https://github.com/tismo-dev"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+32489949784",
        "contactType": "customer service",
        "availableLanguage": ["French", "English"]
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://tismodev.com/#service",
      "name": "Tismodev Web Development",
      "description": "Création de sites vitrines pour restaurants, salons de coiffure, portfolios. Développement de bots Discord. SEO et maintenance.",
      "provider": { "@id": "https://tismodev.com/#person" },
      "areaServed": ["Belgium", "France", "Worldwide"],
      "serviceType": ["Web Development", "Discord Bot Development", "SEO Optimization"]
    },
    {
      "@type": "FAQPage",
      "@id": "https://tismodev.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quels types de sites web créez-vous ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Je crée des sites vitrines pour restaurants, salons de coiffure, portfolios créatifs, commerces locaux et associations. Tous sont développés en React/Next.js avec formulaires dynamiques, réservations et SEO optimisé."
          }
        },
        {
          "@type": "Question",
          "name": "Comment fonctionne le support 72h ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Après la mise en ligne, je reste disponible pour corrections, nouvelles sections, traductions et maintenance. Toute demande est traitée sous 72h maximum."
          }
        },
        {
          "@type": "Question",
          "name": "Proposez-vous des bots Discord ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, je développe des bots Discord sur mesure : système de tickets, gestion des rôles, modération automatique, intégrations API (Stripe, Google Sheets) et commandes personnalisées."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

