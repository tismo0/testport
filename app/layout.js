import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: "Tismodev | Développeur web freelance & bots Discord à Verviers (Belgique)",
  description: "Tismodev (Tismo dev), développeur full stack freelance web & Discord basé à Verviers (Belgique) : sites vitrines HTML/CSS/JavaScript, apps React & Next.js et back-end léger PHP avec SEO et support continu",
  keywords: "développeur web, freelance, Discord bot, Verviers, Belgique, React, Next.js, PHP",
  authors: [{ name: "Tismodev" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://tismodev.com/",
    siteName: "Tismodev",
    title: "Tismodev | Développeur web freelance & bots Discord",
    description: "Tismodev imagine des sites vitrines performants, des bots Discord robustes et des intégrations SEO prêtes à ranker.",
    images: [{ url: "/assets/logo.webp", width: 512, height: 512 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tismo_tech",
    title: "Tismodev | Développeur full stack freelance web & Discord",
    description: "Tismodev livre des sites HTML, CSS, JavaScript rapides et des bots Discord automatisés avec suivi SEO.",
  },
  robots: "index, follow",
  themeColor: "#0b0d14",
  icons: {
    icon: "/assets/favicon.svg",
    apple: "/assets/logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
