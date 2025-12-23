'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

// Project Data
const projects = [
    {
        id: 'asbl',
        images: ['/assets/asbl1.webp', '/assets/asbl2.webp', '/assets/asbl3.webp'],
        title: 'Non-Profit Website',
        desc: 'Complete website for a peace association featuring donation system, newsletter signup, and event management. Built with modern web technologies for optimal performance.',
        techStack: ['Next.js', 'React', 'Vercel', 'CSS'],
        links: [
            { href: 'https://amisdelapaixverviers.vercel.app/', label: 'Visit Site', icon: 'external' }
        ]
    },
    {
        id: 'tismotranslate',
        images: ['/assets/dino1.webp', '/assets/dino2.webp', '/assets/dino3.webp'],
        title: 'Tismo Copywriting',
        desc: 'Advanced translation and copywriting tool with intelligent tone adaptation. Supports multiple languages with context-aware rewriting capabilities.',
        techStack: ['Next.js', 'AI/ML', 'TypeScript', 'API'],
        links: [
            { href: 'https://tismotranslate.vercel.app', label: 'Try It', icon: 'external' }
        ]
    },
    {
        id: 'discord',
        images: ['/assets/dc1.webp', '/assets/dc2.webp', '/assets/dc3.webp', '/assets/dc4.webp'],
        title: 'ZetaCVC Discord Bot',
        desc: 'Enterprise-grade Discord bot featuring advanced ticket system, automated role management, custom commands, and comprehensive moderation tools.',
        techStack: ['Discord.js', 'Node.js', 'MongoDB', 'REST API'],
        links: [
            { href: 'https://discord.gg/7vVVqdkVWg', label: 'Join Server', icon: 'external' },
            { href: 'https://github.com/tismo-dev', label: 'Source', icon: 'github' }
        ]
    },
    {
        id: 'salon',
        images: ['/assets/C1.webp', '/assets/C2.webp', '/assets/C3.webp'],
        title: 'Salon Booking Platform',
        desc: 'Elegant booking platform for a hair salon with appointment scheduling, service catalog, and responsive design optimized for mobile users.',
        techStack: ['Next.js', 'Tailwind', 'Vercel'],
        links: [
            { href: 'https://coiffeur-beb.vercel.app/', label: 'Visit Site', icon: 'external' }
        ]
    }
];

// Custom Image Carousel Component
function ImageCarousel({ images, projectTitle }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir) => ({ x: dir < 0 ? 300 : -300, opacity: 0 })
    };

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => {
            let next = prev + newDirection;
            if (next < 0) next = images.length - 1;
            if (next >= images.length) next = 0;
            return next;
        });
    };

    return (
        <div className="relative aspect-video overflow-hidden rounded-xl bg-zinc-900">
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[currentIndex]}
                        alt={`${projectTitle} - Image ${currentIndex + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={currentIndex === 0}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={() => paginate(-1)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-zinc-950/70 backdrop-blur-sm border border-zinc-700 flex items-center justify-center text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all cursor-pointer"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-zinc-950/70 backdrop-blur-sm border border-zinc-700 flex items-center justify-center text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all cursor-pointer"
                        aria-label="Next image"
                    >
                        <ChevronRight size={16} />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
                                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${i === currentIndex
                                        ? 'bg-white w-4'
                                        : 'bg-white/40 hover:bg-white/60'
                                    }`}
                                aria-label={`Go to image ${i + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

// Tech Badge Component
function TechBadge({ tech }) {
    return (
        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-800/80 text-zinc-300 border border-zinc-700/50">
            {tech}
        </span>
    );
}

// Project Card Component
function ProjectCard({ project }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-zinc-700 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]"
        >
            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
            </div>

            {/* Image Carousel */}
            <div className="p-3">
                <ImageCarousel images={project.images} projectTitle={project.title} />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 pt-2">
                <h3 className="text-lg font-semibold text-zinc-100 tracking-tight mb-2">
                    {project.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4 flex-1">
                    {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                        <TechBadge key={tech} tech={tech} />
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 pt-2 border-t border-zinc-800">
                    {project.links.map((link, i) => (
                        <a
                            key={i}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-zinc-300 bg-zinc-800/60 rounded-lg border border-zinc-700/50 hover:bg-zinc-700 hover:text-white transition-all"
                        >
                            {link.icon === 'github' ? <Github size={14} /> : <ExternalLink size={14} />}
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </motion.article>
    );
}

// Main Projects Component
export default function Projects() {
    const { t } = useI18n();

    return (
        <section id="projects" className="py-24 md:py-32 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="max-w-2xl mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4"
                    >
                        Portfolio
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-4"
                    >
                        {t('projects.title') || 'Featured Projects'}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-zinc-400"
                    >
                        {t('projects.subtitle') || 'A selection of my recent work in web development and Discord bots.'}
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
