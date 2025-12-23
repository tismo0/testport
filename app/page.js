'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Menu, X, Send, ChevronLeft, ChevronRight, ExternalLink, Github,
  MessageSquare, Palette, Code2, Rocket, CheckCircle2, Loader2,
  Clock, Zap, Shield
} from 'lucide-react';

// ============================================================================
// ICONS (Discord & WhatsApp)
// ============================================================================
function DiscordIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.79 19.79 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.74 19.74 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.1 13.1 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.3 12.3 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.84 19.84 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 00-.031-.03zM8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ============================================================================
// IMAGE CAROUSEL COMPONENT
// ============================================================================
function ImageCarousel({ images, title }) {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(0);

  const variants = {
    enter: (d) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d < 0 ? 200 : -200, opacity: 0 })
  };

  const paginate = (d) => {
    setDir(d);
    setIdx((p) => {
      let n = p + d;
      if (n < 0) n = images.length - 1;
      if (n >= images.length) n = 0;
      return n;
    });
  };

  return (
    <div className="relative aspect-video overflow-hidden rounded-xl bg-zinc-900">
      <AnimatePresence initial={false} custom={dir} mode="wait">
        <motion.div
          key={idx}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={images[idx]}
            alt={`${title} - ${idx + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button onClick={() => paginate(-1)} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur flex items-center justify-center text-white/80 hover:bg-black/80 hover:text-white transition-all cursor-pointer">
            <ChevronLeft size={16} />
          </button>
          <button onClick={() => paginate(1)} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur flex items-center justify-center text-white/80 hover:bg-black/80 hover:text-white transition-all cursor-pointer">
            <ChevronRight size={16} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
            {images.map((_, i) => (
              <button key={i} onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }} className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${i === idx ? 'bg-white w-3' : 'bg-white/40'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ============================================================================
// DATA
// ============================================================================
const projects = [
  {
    id: 'asbl',
    images: ['/assets/asbl1.webp', '/assets/asbl2.webp', '/assets/asbl3.webp'],
    title: 'Non-Profit Website',
    desc: 'Complete website for a peace association with donations, newsletter, and event management.',
    tech: ['Next.js', 'React', 'Vercel'],
    link: 'https://amisdelapaixverviers.vercel.app/'
  },
  {
    id: 'translate',
    images: ['/assets/dino1.webp', '/assets/dino2.webp', '/assets/dino3.webp'],
    title: 'Tismo Copywriting',
    desc: 'Advanced translation tool with intelligent tone adaptation and context-aware rewriting.',
    tech: ['Next.js', 'AI/ML', 'TypeScript'],
    link: 'https://tismotranslate.vercel.app'
  },
  {
    id: 'discord',
    images: ['/assets/dc1.webp', '/assets/dc2.webp', '/assets/dc3.webp', '/assets/dc4.webp'],
    title: 'ZetaCVC Discord Bot',
    desc: 'Enterprise Discord bot with ticket system, role management, and moderation tools.',
    tech: ['Discord.js', 'Node.js', 'MongoDB'],
    link: 'https://discord.gg/7vVVqdkVWg',
    github: 'https://github.com/tismo-dev'
  },
  {
    id: 'salon',
    images: ['/assets/C1.webp', '/assets/C2.webp', '/assets/C3.webp'],
    title: 'Salon Booking',
    desc: 'Elegant booking platform with appointment scheduling and responsive mobile design.',
    tech: ['Next.js', 'Tailwind', 'Vercel'],
    link: 'https://coiffeur-beb.vercel.app/'
  }
];

const workflow = [
  { icon: MessageSquare, title: 'Discovery', desc: 'We discuss your vision and requirements' },
  { icon: Palette, title: 'Design', desc: 'I create mockups and prototypes' },
  { icon: Code2, title: 'Development', desc: 'Building with modern technologies' },
  { icon: Rocket, title: 'Launch', desc: 'Deploy and optimize for performance' }
];

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formState, setFormState] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('loading');
    await new Promise(r => setTimeout(r, 1500));
    console.log('Form:', form);
    setFormState('success');
    setTimeout(() => { setFormState('idle'); setForm({ name: '', email: '', project: '', message: '' }); }, 3000);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased">

      {/* ============ HEADER ============ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm">T</div>
              <span className="font-semibold tracking-tight text-zinc-100 group-hover:text-white transition-colors">Tismodev</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {['Projects', 'Workflow', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-zinc-400 hover:text-white transition-colors">{item}</a>
              ))}
              <a href="#contact" className="px-4 py-2 bg-white text-zinc-900 text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors">
                Get Started
              </a>
            </nav>

            <button onClick={() => setMobileMenuOpen(true)} className="md:hidden p-2 text-zinc-400 hover:text-white">
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-zinc-950/95 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-end">
                  <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-zinc-400 hover:text-white">
                    <X size={24} />
                  </button>
                </div>
                <nav className="flex flex-col items-center justify-center flex-1 gap-8">
                  {['Projects', 'Workflow', 'Contact'].map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-zinc-300 hover:text-white transition-colors">{item}</a>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Spotlight Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-violet-500/20 via-fuchsia-500/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-medium uppercase tracking-widest text-zinc-400 border border-zinc-800 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for Projects
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
                Building Digital
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Full-stack developer specializing in modern web applications, Discord bots, and creative digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#projects" className="w-full sm:w-auto px-8 py-3.5 bg-white text-zinc-900 font-semibold rounded-xl hover:bg-zinc-200 transition-all shadow-lg shadow-white/10">
                View Projects
              </a>
              <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 text-zinc-100 font-semibold rounded-xl border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all">
                Get in Touch
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-3 gap-8 mt-20 max-w-md mx-auto"
          >
            {[
              { num: '10+', label: 'Projects' },
              { num: '3+', label: 'Discord Bots' },
              { num: '72h', label: 'Express Delivery' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.num}</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ WORKFLOW ============ */}
      <section id="workflow" className="py-24 sm:py-32 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-4 text-white">How I Work</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-all group"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-zinc-950 border border-zinc-700 rounded-full flex items-center justify-center text-sm font-bold text-zinc-400">
                  {i + 1}
                </div>
                <div className="w-12 h-12 mb-4 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-violet-400 group-hover:bg-violet-500/10 transition-all">
                  <step.icon size={24} />
                </div>
                <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROJECTS ============ */}
      <section id="projects" className="py-24 sm:py-32 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-4 text-white">Featured Projects</h2>
            <p className="text-zinc-400 mt-4 max-w-xl">A selection of my recent work in web development and Discord automation.</p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 hover:shadow-[0_0_60px_-15px_rgba(139,92,246,0.15)] transition-all duration-300"
              >
                <div className="p-3">
                  <ImageCarousel images={project.images} title={project.title} />
                </div>
                <div className="flex flex-col flex-1 p-5 pt-2">
                  <h3 className="font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-zinc-500 mb-4 flex-1">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-xs font-medium bg-zinc-800 text-zinc-400 rounded-md border border-zinc-700/50">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-3 border-t border-zinc-800">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-zinc-300 bg-zinc-800/60 rounded-lg hover:bg-zinc-700 hover:text-white transition-all">
                      <ExternalLink size={14} /> Visit
                    </a>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-zinc-300 bg-zinc-800/60 rounded-lg hover:bg-zinc-700 hover:text-white transition-all">
                        <Github size={14} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="py-24 sm:py-32 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left: Info */}
            <div>
              <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">Contact</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-4 text-white">Let's Work Together</h2>
              <p className="text-zinc-400 mt-4 mb-8">Have a project in mind? I'd love to hear about it.</p>

              <div className="space-y-4 mb-10">
                {[
                  { icon: Clock, title: 'Fast Turnaround', desc: '72h express delivery available' },
                  { icon: Zap, title: 'Modern Stack', desc: 'Next.js, React, Tailwind, Node.js' },
                  { icon: Shield, title: 'Quality First', desc: 'Clean code, SEO optimized, accessible' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <div className="font-medium text-white">{item.title}</div>
                      <div className="text-sm text-zinc-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <p className="text-sm text-zinc-500 mb-2">Or reach me directly:</p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://discord.gg/7vVVqdkVWg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-300 hover:bg-[#5865F2] hover:border-[#5865F2] hover:text-white transition-all">
                    <DiscordIcon size={18} /> Discord
                  </a>
                  <a href="https://wa.me/32489427017" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-300 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all">
                    <WhatsAppIcon size={18} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="p-6 sm:p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Name *</label>
                    <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-transparent transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Email *</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-transparent transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Project Type *</label>
                  <select value={form.project} onChange={(e) => setForm({ ...form, project: e.target.value })} required className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-transparent transition-all cursor-pointer">
                    <option value="">Select an option...</option>
                    <option value="website">Website</option>
                    <option value="bot">Discord Bot</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Message *</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={4} className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-transparent resize-none transition-all" placeholder="Tell me about your project..." />
                </div>
                <button type="submit" disabled={formState !== 'idle'} className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all cursor-pointer ${formState === 'success' ? 'bg-green-600 text-white' : formState === 'loading' ? 'bg-zinc-700 text-zinc-400' : 'bg-white text-zinc-900 hover:bg-zinc-200 shadow-lg shadow-white/10'}`}>
                  {formState === 'loading' && <Loader2 size={18} className="animate-spin" />}
                  {formState === 'success' && <CheckCircle2 size={18} />}
                  {formState === 'idle' && <Send size={18} />}
                  {formState === 'loading' ? 'Sending...' : formState === 'success' ? 'Sent!' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="py-8 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-zinc-500">© 2024 Tismodev. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/tismo-dev" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://discord.gg/7vVVqdkVWg" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                <DiscordIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
