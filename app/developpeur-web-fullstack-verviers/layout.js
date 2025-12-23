

export const viewport = {
    themeColor: '#09090b',
    width: 'device-width',
    initialScale: 1,
};

export const metadata = {
    metadataBase: new URL('https://tismodev.com'),


    title: "Développeur Web Fullstack Verviers | Tismodev",


    description: "Développeur web freelance à Verviers. Création de sites internet, applications React/Next.js et SEO pour PME et indépendants. Devis gratuit sous 24h.",

    keywords: [
        "développeur web Verviers",
        "développeur fullstack Verviers",
        "web designer Verviers",
        "création site internet Verviers",
        "développeur React Liège",
        "développeur Next.js Belgique",
        "site vitrine Verviers",
        "agence web Verviers",
        "dev Verviers",
        "freelance web Belgique"
    ],

    authors: [{ name: "Tismodev", url: "https://tismodev.com" }],
    creator: "Tismodev",

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
        canonical: 'https://tismodev.com/developpeur-web-fullstack-verviers',
    },

    openGraph: {
        type: "website",
        locale: "fr_BE",
        url: "https://tismodev.com/developpeur-web-fullstack-verviers",
        siteName: "Tismodev • Développeur Web Verviers",
        title: "Développeur Web Fullstack à Verviers | Tismodev",
        description: "Création de sites internet professionnels à Verviers. Développeur React/Next.js pour PME et indépendants de la Province de Liège.",
        images: [
            {
                url: "/assets/logo.webp",
                width: 512,
                height: 512,
                alt: "Tismodev - Développeur Web Verviers",
            }
        ],
    },

    twitter: {
        card: "summary_large_image",
        site: "@tismo_tech",
        title: "Développeur Web Fullstack Verviers | Tismodev",
        description: "Création de sites internet et applications web à Verviers. Devis gratuit sous 24h.",
    },
};


export const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://tismodev.com/#localbusiness",
    "name": "Tismodev - Développeur Web Fullstack Verviers",
    "alternateName": ["Tismodev", "Tismo dev", "tismo_tech"],
    "description": "Développeur web fullstack freelance à Verviers spécialisé dans la création de sites internet professionnels, applications React/Next.js et SEO pour PME et indépendants de la Province de Liège.",
    "url": "https://tismodev.com/developpeur-web-fullstack-verviers",
    "logo": "https://tismodev.com/assets/logo.webp",
    "image": "https://tismodev.com/assets/logo.webp",
    "telephone": "+32489949784",
    "email": "contact@tismodev.com",
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "PayPal"],
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Verviers",
        "addressLocality": "Verviers",
        "addressRegion": "Province de Liège",
        "postalCode": "4800",
        "addressCountry": "BE"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 50.5892,
        "longitude": 5.8662
    },
    "areaServed": [
        {
            "@type": "City",
            "name": "Verviers",
            "sameAs": "https://fr.wikipedia.org/wiki/Verviers"
        },
        {
            "@type": "AdministrativeArea",
            "name": "Province de Liège"
        },
        {
            "@type": "Country",
            "name": "Belgique"
        }
    ],
    "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 50.5892,
            "longitude": 5.8662
        },
        "geoRadius": "50000"
    },
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
        }
    ],
    "sameAs": [
        "https://discord.gg/7vVVqdkVWg",
        "https://instagram.com/ayoubsyfd",
        "https://github.com/tismo-dev",
        "https://wa.me/32489949784"
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de développement web",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Création de site vitrine",
                    "description": "Site vitrine professionnel pour entreprises, restaurants, salons de Verviers"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Application web sur mesure",
                    "description": "Développement React/Next.js avec base de données et APIs"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "SEO et référencement local",
                    "description": "Optimisation pour Google et référencement local à Verviers"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Bot Discord professionnel",
                    "description": "Développement de bots Discord sur mesure avec automatisations"
                }
            }
        ]
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "12",
        "bestRating": "5",
        "worstRating": "1"
    },
    "founder": {
        "@type": "Person",
        "name": "Tismodev",
        "jobTitle": "Développeur Web Fullstack",
        "url": "https://tismodev.com"
    },
    "slogan": "Sites modernes & Bots Discord pour Verviers et la Province de Liège",
    "knowsAbout": [
        "Développement web",
        "React",
        "Next.js",
        "Node.js",
        "Supabase",
        "SEO",
        "Création de site internet",
        "Bot Discord"
    ],
    "knowsLanguage": ["fr", "en", "nl"]
};

export default function VerviersCityLayout({ children }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
            />
            {children}
        </>
    );
}
