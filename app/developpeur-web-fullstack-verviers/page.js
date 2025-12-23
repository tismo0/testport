'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    MapPin, Phone, Mail, Code2, Rocket, CheckCircle2,
    ArrowRight, Globe, Server, Palette, Zap
} from 'lucide-react';
import { SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiSupabase } from 'react-icons/si';

// ============================================================================
// CITY PAGE - Développeur Web Fullstack Verviers
// ============================================================================
export default function VerviersCityPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased">
            {/* Header simple */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm">T</div>
                        <span className="font-semibold text-zinc-100">Tismodev</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <a href="tel:+32489949784" className="hidden sm:flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                            <Phone size={16} />
                            <span>+32 489 94 97 84</span>
                        </a>
                        <a href="#contact" className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-lg transition-colors">
                            Devis gratuit
                        </a>
                    </div>
                </div>
            </header>

            <main className="pt-20">
                {/* Hero Section */}
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
                            <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 bg-white text-zinc-900 font-semibold rounded-xl hover:bg-zinc-200 transition-all shadow-lg flex items-center justify-center gap-2">
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

                {/* Intro SEO - Paragraphe d'ancrage local */}
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

                {/* Services Grid */}
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

                {/* Technologies */}
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

                {/* Pourquoi Verviers */}
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

                {/* Zone de couverture */}
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

                {/* CTA Final */}
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
                            <a href="mailto:contact@tismodev.com" className="w-full sm:w-auto px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-xl border border-zinc-700 transition-all flex items-center justify-center gap-2">
                                <Mail size={20} />
                                contact@tismodev.com
                            </a>
                        </div>

                        <div className="flex items-center justify-center gap-2 text-sm text-zinc-500">
                            <MapPin size={16} />
                            <span>Verviers, Province de Liège, Belgique</span>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer simple */}
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
