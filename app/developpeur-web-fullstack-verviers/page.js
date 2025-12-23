'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    MapPin, Phone, Code2, Rocket, CheckCircle2,
    ArrowRight, Globe, Server, Palette, Zap, Menu, X, ChevronDown
} from 'lucide-react';
import { SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiSupabase } from 'react-icons/si';
import { languages, translations, detectLanguage } from '../i18n';

function useLanguage() {
    const [lang, setLangState] = useState('en');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setLangState(detectLanguage());
    }, []);

    const setLang = (code) => {
        setLangState(code);
        localStorage.setItem('lang', code);
    };

    const t = translations[lang] || translations.en;
    const isRTL = languages.find(l => l.code === lang)?.rtl || false;

    return { lang, setLang, t, isRTL, mounted };
}

function LanguageSwitcher({ lang, setLang }) {
    const [open, setOpen] = useState(false);
    const current = languages.find(l => l.code === lang) || languages[0];

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-400 hover:text-white bg-zinc-900/50 border border-zinc-800 rounded-lg transition-colors cursor-pointer"
            >
                <Globe size={16} />
                <span>{current.flag}</span>
                <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {open && (
                    <>
                        <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute right-0 top-full mt-2 z-50 w-48 py-2 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl max-h-80 overflow-y-auto"
                        >
                            {languages.map((l) => (
                                <button
                                    key={l.code}
                                    onClick={() => { setLang(l.code); setOpen(false); }}
                                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors cursor-pointer ${lang === l.code ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white'
                                        }`}
                                >
                                    <span className="text-lg">{l.flag}</span>
                                    <span>{l.name}</span>
                                </button>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function VerviersCityPage() {
    const { lang, setLang, t, isRTL } = useLanguage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { key: 'skills', label: t.nav?.skills || 'Compétences', href: '/#skills' },
        { key: 'projects', label: t.nav?.projects || 'Projets', href: '/#projects' },
        { key: 'workflow', label: t.nav?.workflow || 'Processus', href: '/#workflow' },
        { key: 'contact', label: t.nav?.contact || 'Contact', href: '/#contact' }
    ];

    return (
        <div className={`min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased ${isRTL ? 'rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>

            <svg className="hidden">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>

            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
            >
                <div className="relative bg-zinc-900/80 backdrop-blur-2xl border border-zinc-800/80 rounded-2xl shadow-2xl shadow-black/30">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/10 via-transparent to-fuchsia-500/10 pointer-events-none" />

                    <div className="relative flex items-center justify-between h-14 px-4 sm:px-6">
                        <Link href="/" className="flex items-center gap-3 group z-10">
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg shadow-violet-500/30"
                            >
                                T
                            </motion.div>
                            <span className="font-semibold text-lg text-zinc-100 group-hover:text-white transition-colors hidden sm:block">Tismodev</span>
                        </Link>

                        <nav className="hidden md:flex items-center" style={{ filter: 'url(#goo)' }}>
                            <div className="flex items-center gap-1 bg-zinc-800/60 rounded-xl p-1.5">
                                {navItems.map((item, i) => (
                                    <motion.a
                                        key={item.key}
                                        href={item.href}
                                        className="relative group px-4 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-violet-600 rounded-lg opacity-0 group-hover:opacity-100 -z-10"
                                            layoutId="gooeyBg"
                                            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                        />
                                        <span className="relative z-10">{item.label}</span>
                                    </motion.a>
                                ))}
                            </div>

                            <div className="ml-4">
                                <LanguageSwitcher lang={lang} setLang={setLang} />
                            </div>

                            <motion.a
                                href="/#contact"
                                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
                                whileTap={{ scale: 0.95 }}
                                className="ml-3 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-violet-500/25 transition-all"
                            >
                                {t.nav?.cta || 'Commencer'}
                            </motion.a>
                        </nav>

                        <div className="flex items-center gap-3 md:hidden">
                            <LanguageSwitcher lang={lang} setLang={setLang} />
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setMobileMenuOpen(true)}
                                className="p-2.5 text-zinc-400 hover:text-white bg-zinc-800/50 rounded-xl border border-zinc-700/50"
                            >
                                <Menu size={20} />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.header>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-zinc-950/98 backdrop-blur-xl md:hidden"
                    >
                        <div className="flex flex-col h-full p-6">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 flex items-center justify-center text-white font-bold">T</div>
                                    <span className="font-semibold text-lg text-zinc-100">Tismodev</span>
                                </div>
                                <button onClick={() => setMobileMenuOpen(false)} className="p-2.5 text-zinc-400 hover:text-white bg-zinc-800/50 rounded-xl">
                                    <X size={20} />
                                </button>
                            </div>

                            <nav className="flex flex-col items-center justify-center flex-1 gap-6">
                                {navItems.map((item, i) => (
                                    <motion.a
                                        key={item.key}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="text-2xl font-medium text-zinc-300 hover:text-white transition-colors"
                                    >
                                        {item.label}
                                    </motion.a>
                                ))}
                                <div className="mt-4">
                                    <LanguageSwitcher lang={lang} setLang={setLang} />
                                </div>
                                <motion.a
                                    href="/#contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="mt-4 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-lg font-semibold rounded-xl shadow-lg"
                                >
                                    {t.nav?.cta || 'Commencer'}
                                </motion.a>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="pt-20">
                <section className="py-20 sm:py-28 relative overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-violet-500/15 via-fuchsia-500/10 to-transparent rounded-full blur-3xl" />
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-medium uppercase tracking-widest text-violet-400 border border-violet-500/30 rounded-full">
                            <MapPin size={14} />
                            <span>Verviers • Province de Liège • Belgique</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                            <span className="text-white">Développeur Web Fullstack</span>
                            <br />
                            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">à Verviers</span>
                        </h1>

                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                            Création de sites internet professionnels et applications web sur mesure pour les entreprises
                            de Verviers, Heusy, Ensival et toute la Province de Liège.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="/#contact" className="w-full sm:w-auto px-8 py-3.5 bg-white text-zinc-900 font-semibold rounded-xl hover:bg-zinc-200 transition-all shadow-lg flex items-center justify-center gap-2">
                                Demander un devis gratuit
                                <ArrowRight size={18} />
                            </a>
                            <a href="tel:+32489949784" className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 text-zinc-100 font-semibold rounded-xl border border-zinc-800 hover:bg-zinc-800 transition-all flex items-center justify-center gap-2">
                                <Phone size={18} />
                                Appeler maintenant
                            </a>
                        </div>
                    </div>
                </section>

                <section className="py-16 border-t border-zinc-800/50">
                    <div className="max-w-4xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="prose prose-lg prose-invert max-w-none"
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                                Votre partenaire digital dans l'arrondissement de Verviers
                            </h2>
                            <p className="text-zinc-400 leading-relaxed mb-6">
                                Basé à <strong className="text-white">Verviers</strong>, au cœur de la Province de Liège, je suis
                                <strong className="text-white"> Tismodev</strong>, développeur web fullstack spécialisé dans la
                                <strong className="text-white"> création de sites internet</strong> et d'applications web modernes.
                                Que vous soyez une PME installée près du <strong className="text-white">Grand-Théâtre de Verviers</strong>,
                                un commerce du centre-ville, une entreprise du <strong className="text-white">zoning des Plénesses</strong>
                                ou un indépendant à <strong className="text-white">Heusy</strong>, <strong className="text-white">Ensival</strong>
                                ou <strong className="text-white">Stembert</strong>, je vous accompagne dans votre transformation digitale.
                            </p>
                            <p className="text-zinc-400 leading-relaxed mb-6">
                                Sur les rives de la <strong className="text-white">Vesdre</strong>, je mets mon expertise technique
                                au service des entrepreneurs locaux. Du simple site vitrine pour votre restaurant verviétois
                                jusqu'à l'application web complexe avec base de données, je développe des solutions
                                <strong className="text-white"> SEO-friendly</strong> qui vous permettent d'être trouvé sur Google
                                par vos clients potentiels.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-16 bg-zinc-900/30">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                Services de développement web à Verviers
                            </h2>
                            <p className="text-zinc-400 max-w-2xl mx-auto">
                                Des solutions adaptées aux besoins des entreprises de l'arrondissement de Verviers et de toute la Belgique.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: Globe,
                                    title: "Sites vitrines professionnels",
                                    desc: "Sites modernes pour restaurants, salons de coiffure, artisans et commerces de Verviers. Design responsive et optimisé pour mobile."
                                },
                                {
                                    icon: Code2,
                                    title: "Applications web sur mesure",
                                    desc: "Développement React et Next.js pour des applications performantes : réservations en ligne, espaces clients, dashboards."
                                },
                                {
                                    icon: Server,
                                    title: "Back-end & bases de données",
                                    desc: "APIs robustes avec Node.js et Supabase. Connexion à vos outils existants, automatisations et intégrations tierces."
                                },
                                {
                                    icon: Rocket,
                                    title: "SEO & référencement local",
                                    desc: "Optimisation pour Google afin d'apparaître dans les recherches locales à Verviers, Liège et dans toute la Belgique."
                                },
                                {
                                    icon: Palette,
                                    title: "Refonte de site existant",
                                    desc: "Modernisation de votre site actuel avec les dernières technologies. Migration vers un site plus rapide et mieux référencé."
                                },
                                {
                                    icon: Zap,
                                    title: "Maintenance & support 72h",
                                    desc: "Accompagnement continu après livraison. Corrections, mises à jour et nouvelles fonctionnalités sous 72h."
                                }
                            ].map((service, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-all"
                                >
                                    <div className="w-12 h-12 mb-4 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400">
                                        <service.icon size={24} />
                                    </div>
                                    <h3 className="font-semibold text-white mb-2">{service.title}</h3>
                                    <p className="text-sm text-zinc-500">{service.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 border-t border-zinc-800/50">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
                            Technologies Fullstack maîtrisées
                        </h2>
                        <p className="text-zinc-400 text-center mb-10 max-w-2xl mx-auto">
                            J'utilise les technologies les plus modernes pour créer des sites rapides, sécurisés et évolutifs
                            pour les entreprises de Verviers et de la Province de Liège.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            {[
                                { icon: SiReact, name: 'React', color: '#61DAFB' },
                                { icon: SiNextdotjs, name: 'Next.js', color: '#ffffff' },
                                { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
                                { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
                                { icon: SiSupabase, name: 'Supabase', color: '#3FCF8E' },
                            ].map((tech, i) => (
                                <div key={i} className="flex flex-col items-center gap-2 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                                    <tech.icon size={32} style={{ color: tech.color }} />
                                    <span className="text-sm text-zinc-400">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-zinc-900/30">
                    <div className="max-w-4xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                                Pourquoi choisir un développeur web local à Verviers ?
                            </h2>
                            <div className="space-y-4">
                                {[
                                    "Proximité géographique : rencontres possibles à Verviers, Spa, Malmedy ou partout dans l'arrondissement",
                                    "Connaissance du tissu économique local et des besoins spécifiques des PME belges",
                                    "Réactivité garantie avec un support sous 72h maximum",
                                    "Tarifs adaptés aux budgets des indépendants et petites entreprises",
                                    "Communication directe en français, sans intermédiaire ni agence"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                                        <CheckCircle2 size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-zinc-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="py-16 border-t border-zinc-800/50">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                            Zone d'intervention
                        </h2>
                        <p className="text-zinc-400 mb-8">
                            Je travaille principalement avec des clients de l'arrondissement de Verviers et de la Province de Liège,
                            mais je réalise également des projets pour toute la Belgique et à l'international.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {['Verviers', 'Heusy', 'Ensival', 'Stembert', 'Pepinster', 'Theux', 'Spa', 'Malmedy', 'Liège', 'Belgique'].map((city) => (
                                <span key={city} className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-300">
                                    {city}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="py-20 bg-gradient-to-b from-zinc-900/50 to-zinc-950">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            Prêt à lancer votre projet web à Verviers ?
                        </h2>
                        <p className="text-zinc-400 mb-8">
                            Contactez-moi pour discuter de votre projet. Devis gratuit sous 24h.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                            <a href="tel:+32489949784" className="w-full sm:w-auto px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2">
                                <Phone size={20} />
                                +32 489 94 97 84
                            </a>
                            <a href="/#contact" className="w-full sm:w-auto px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-xl border border-zinc-700 transition-all flex items-center justify-center gap-2">
                                Formulaire de contact
                            </a>
                        </div>

                        <div className="flex items-center justify-center gap-2 text-sm text-zinc-500">
                            <MapPin size={16} />
                            <span>Verviers, Province de Liège, Belgique</span>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-8 border-t border-zinc-800/50">
                <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-zinc-500">© 2024 Tismodev • Développeur Web Fullstack à Verviers</p>
                    <Link href="/" className="text-sm text-zinc-400 hover:text-white transition-colors">
                        ← Retour au portfolio
                    </Link>
                </div>
            </footer>
        </div>
    );
}
