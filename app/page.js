'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Menu, X, Send, ChevronLeft, ChevronRight, ExternalLink, Github,
  MessageSquare, Palette, Code2, Rocket, CheckCircle2, Loader2,
  Clock, Zap, Shield, ChevronUp, Globe, ChevronDown, Search
} from 'lucide-react';
import { languages, translations, detectLanguage } from './i18n';
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiSupabase, SiGit, SiGithub,
  SiHtml5, SiCss3, SiJavascript, SiVite, SiTypescript, SiNodedotjs,
  SiVercel, SiPostgresql
} from 'react-icons/si';


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

function InstagramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}


function ImageCarousel({ images, title }) {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(0);

  const variants = {
    enter: (d) => ({ x: d > 0 ? 100 : -100, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d) => ({ x: d < 0 ? 100 : -100, opacity: 0, scale: 0.95 })
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
    <div className="relative">

      <div className="rounded-xl overflow-hidden border border-zinc-700/50 bg-zinc-800 shadow-2xl">

        <div className="flex items-center gap-2 px-3 py-2 bg-zinc-800 border-b border-zinc-700/50">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 mx-2">
            <div className="h-5 rounded-md bg-zinc-700/50 flex items-center justify-center">
              <span className="text-[10px] text-zinc-500 truncate px-2">{title}</span>
            </div>
          </div>
        </div>


        <div className="relative aspect-[16/10] bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 overflow-hidden">
          <AnimatePresence initial={false} custom={dir} mode="wait">
            <motion.div
              key={idx}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-2 flex items-center justify-center"
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg ring-1 ring-white/5">
                <Image
                  src={images[idx]}
                  alt={`${title} - ${idx + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  quality={95}
                  priority={idx === 0}
                />
              </div>
            </motion.div>
          </AnimatePresence>


          {images.length > 1 && (
            <>
              <button
                onClick={() => paginate(-1)}
                className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-zinc-900/80 backdrop-blur border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:bg-zinc-800 hover:text-white hover:border-zinc-600 transition-all cursor-pointer"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={() => paginate(1)}
                className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-zinc-900/80 backdrop-blur border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:bg-zinc-800 hover:text-white hover:border-zinc-600 transition-all cursor-pointer"
              >
                <ChevronRight size={14} />
              </button>
            </>
          )}
        </div>


        {images.length > 1 && (
          <div className="flex justify-center gap-1.5 py-2 bg-zinc-800">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${i === idx ? 'bg-violet-500 w-4' : 'bg-zinc-600 w-1.5 hover:bg-zinc-500'}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


const projects = [
  {
    id: 'asbl',
    images: ['/assets/asbl1.webp', '/assets/asbl2.webp', '/assets/asbl3.webp'],
    title: 'Non-Profit Website',
    desc: 'Complete website for a peace association with donations, newsletter, and event management.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    link: 'https://ccbl.vercel.app/'
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
    tech: ['Discord.js', 'Node.js', 'Scheduler', 'CSS'],
    link: 'https://discord.com/users/792811364908924969',
    github: 'https://github.com/tismo0'
  },
  {
    id: 'salon',
    images: ['/assets/C1.webp', '/assets/C2.webp', '/assets/C3.webp'],
    title: 'Salon Booking',
    desc: 'Elegant booking platform with appointment scheduling and responsive mobile design.',
    tech: ['Next.js', 'React', 'CSS', 'Vercel'],
    link: 'https://barberb.vercel.app'
  }
];

const workflow = [
  { icon: MessageSquare, title: 'Discovery', desc: 'We discuss your vision and requirements' },
  { icon: Palette, title: 'Design', desc: 'I create mockups and prototypes' },
  { icon: Code2, title: 'Development', desc: 'Building with modern technologies' },
  { icon: Rocket, title: 'Launch', desc: 'Deploy and optimize for performance' }
];


const techStack = [
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiNextdotjs, name: 'Next.js', color: '#ffffff' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
  { icon: SiVite, name: 'Vite', color: '#646CFF' },
  { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
  { icon: SiCss3, name: 'CSS3', color: '#1572B6' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiSupabase, name: 'Supabase', color: '#3FCF8E' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
  { icon: SiGit, name: 'Git', color: '#F05032' },
  { icon: SiGithub, name: 'GitHub', color: '#ffffff' },
  { icon: SiVercel, name: 'Vercel', color: '#ffffff' },
];


function LogoLoop({ items, speed = 70 }) {
  return (
    <div className="relative overflow-hidden py-8">

      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-12 items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >

        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 group cursor-pointer"
            title={item.name}
          >
            <div className="w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-all duration-300 group-hover:border-zinc-600 group-hover:scale-110 group-hover:shadow-lg"
              style={{ '--hover-color': item.color }}>
              <item.icon size={28} className="text-zinc-400 transition-colors duration-300 group-hover:text-[var(--hover-color)]" />
            </div>
            <span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors whitespace-nowrap">{item.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}


function FloatingLines() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const lines = Array.from({ length: 12 }, (_, i) => {
    const baseY = 20 + (i * 6);
    const offset = Math.sin(i * 0.5) * 10;
    const bendX = 50 + (mousePos.x - 0.5) * 30;
    const bendY = baseY + (mousePos.y - 0.5) * 15 + offset;

    return {
      id: i,
      d: `M 0 ${baseY} Q ${bendX} ${bendY} 100 ${baseY + offset * 0.5}`,
      opacity: 0.1 + (i % 3) * 0.05,
      delay: i * 0.1,
      duration: 3 + (i % 3),
    };
  });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-60">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="20%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="80%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {lines.map((line) => (
          <motion.path
            key={line.id}
            d={line.d}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="0.15"
            opacity={line.opacity}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: line.opacity,
              d: line.d
            }}
            transition={{
              pathLength: { duration: 2, delay: line.delay },
              opacity: { duration: 1, delay: line.delay },
              d: { duration: 0.3, ease: "easeOut" }
            }}
          />
        ))}
      </svg>


      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-violet-500/30 rounded-full"
            style={{
              left: `${10 + (i * 4.5)}%`,
              top: `${20 + Math.sin(i) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
}


function MagicCard({ children, className = '' }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [stars, setStars] = useState([]);

  useEffect(() => {

    setStars(Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 3,
      delay: Math.random() * 2,
    })));
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };


  const tiltX = isHovered ? ((mousePos.y / (cardRef.current?.offsetHeight || 1)) - 0.5) * -10 : 0;
  const tiltY = isHovered ? ((mousePos.x / (cardRef.current?.offsetWidth || 1)) - 0.5) * 10 : 0;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        transformStyle: 'preserve-3d',
      }}
      className={`relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >

      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
        }}
      />


      <div
        className="pointer-events-none absolute inset-0 z-20 rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          boxShadow: `inset 0 0 0 1px rgba(139, 92, 246, 0.5), 0 0 40px -10px rgba(139, 92, 246, 0.3)`,
        }}
      />


      {isHovered && stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute pointer-events-none z-30"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -20],
          }}
          transition={{
            duration: 1.5,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeOut'
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-violet-400 w-full h-full">
            <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" />
          </svg>
        </motion.div>
      ))}


      <div className="relative z-0">
        {children}
      </div>
    </motion.div>
  );
}


export default function Home() {
  const { lang, setLang, t, isRTL } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formState, setFormState] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('loading');

    try {
      const response = await fetch('https://formsubmit.co/ajax/9614c88d9c38e36384389a0dc6810357', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          project: form.project,
          message: form.message,
          _subject: `Nouveau message de ${form.name} - ${form.project}`,
        })
      });

      if (response.ok) {
        setFormState('success');
        setTimeout(() => { setFormState('idle'); setForm({ name: '', email: '', project: '', message: '' }); }, 3000);
      } else {
        setFormState('idle');
      }
    } catch (error) {
      console.error('Form error:', error);
      setFormState('idle');
    }
  };

  const navItems = [
    { key: 'skills', label: t.nav.skills || 'Skills' },
    { key: 'projects', label: t.nav.projects },
    { key: 'workflow', label: t.nav.workflow },
    { key: 'contact', label: t.nav.contact },
    { key: 'locality', label: t.nav.locality || 'Localité', href: '/developpeur-web-fullstack-verviers' }
  ];

  return (
    <div className={`min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased ${isRTL ? 'rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>

      <FloatingLines />

      {/* ============ GOOEY NAV - Top Bar ============ */}
      {/* SVG Filter for Gooey Effect */}
      <svg className="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Horizontal Navbar with Gooey Effect */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
      >
        <div className="relative bg-zinc-900/80 backdrop-blur-2xl border border-zinc-800/80 rounded-2xl shadow-2xl shadow-black/30">
          {/* Gradient glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/10 via-transparent to-fuchsia-500/10 pointer-events-none" />

          <div className="relative flex items-center justify-between h-14 px-4 sm:px-6">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group z-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg shadow-violet-500/30"
              >
                T
              </motion.div>
              <span className="font-semibold text-lg text-zinc-100 group-hover:text-white transition-colors hidden sm:block">Tismodev</span>
            </a>

            {/* Desktop Navigation with Gooey Effect */}
            <nav className="hidden md:flex items-center" style={{ filter: 'url(#goo)' }}>
              <div className="flex items-center gap-1 bg-zinc-800/60 rounded-xl p-1.5">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.key}
                    href={item.href || `#${item.key}`}
                    className="relative group px-4 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Gooey background on hover */}
                    <motion.div
                      className="absolute inset-0 bg-violet-600 rounded-lg opacity-0 group-hover:opacity-100 -z-10"
                      layoutId="gooeyBg"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                    <span className="relative z-10">{item.label}</span>

                    {/* Particles */}
                    {Array.from({ length: 4 }).map((_, j) => (
                      <motion.div
                        key={j}
                        className="absolute w-1.5 h-1.5 rounded-full bg-violet-400 opacity-0 group-hover:opacity-100 pointer-events-none"
                        style={{ left: '50%', top: '50%' }}
                        animate={{
                          x: [0, (Math.random() - 0.5) * 40],
                          y: [0, (Math.random() - 0.5) * 40],
                          opacity: [0, 0.8, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 0.6,
                          delay: j * 0.08,
                          repeat: Infinity,
                          repeatDelay: 0.8,
                        }}
                      />
                    ))}
                  </motion.a>
                ))}
              </div>

              {/* Language Switcher */}
              <div className="ml-4">
                <LanguageSwitcher lang={lang} setLang={setLang} />
              </div>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="ml-3 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-violet-500/25 transition-all"
              >
                {t.nav.cta}
              </motion.a>
            </nav>

            {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
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
                    href={item.href || `#${item.key}`}
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
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-lg font-semibold rounded-xl shadow-lg"
                >
                  {t.nav.cta}
                </motion.a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
        {/* Spotlight Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
              {t.hero.badge}
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
                {t.hero.title1}
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                {t.hero.title2}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              {t.hero.desc}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#projects" className="w-full sm:w-auto px-8 py-3.5 bg-white text-zinc-900 font-semibold rounded-xl hover:bg-zinc-200 transition-all shadow-lg shadow-white/10">
                {t.hero.cta1}
              </a>
              <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 text-zinc-100 font-semibold rounded-xl border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all">
                {t.hero.cta2}
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
              { num: '10+', label: t.hero.stats.projects },
              { num: '3+', label: t.hero.stats.bots },
              { num: '72h', label: t.hero.stats.delivery }
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
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">{t.nav.workflow}</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-4 text-white">{t.workflow.title}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.workflow.steps.map((step, i) => (
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
                  {i === 0 && <MessageSquare size={24} />}
                  {i === 1 && <Palette size={24} />}
                  {i === 2 && <Code2 size={24} />}
                  {i === 3 && <Rocket size={24} />}
                </div>
                <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SKILLS & TOOLS ============ */}
      <section id="skills" className="py-24 sm:py-32 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">{t.nav.skills || 'Skills'}</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-4 text-white">{t.skills?.title || 'Tech Stack & Tools'}</h2>
            <p className="text-zinc-400 mt-4 max-w-xl mx-auto">{t.skills?.desc || 'Technologies I use to bring your projects to life.'}</p>
          </div>

          {/* Logo Loop */}
          <LogoLoop items={techStack} speed={35} />

          {/* Skills Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
              <div className="w-12 h-12 mb-4 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400">
                <Code2 size={24} />
              </div>
              <h3 className="font-semibold text-white mb-2">{t.skills?.frontend || 'Frontend Development'}</h3>
              <p className="text-sm text-zinc-500">{t.skills?.frontendDesc || 'React, Next.js, TypeScript, Tailwind CSS, Vite, responsive design.'}</p>
            </div>
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
              <div className="w-12 h-12 mb-4 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Zap size={24} />
              </div>
              <h3 className="font-semibold text-white mb-2">{t.skills?.backend || 'Backend & Database'}</h3>
              <p className="text-sm text-zinc-500">{t.skills?.backendDesc || 'Node.js, Supabase, PostgreSQL, REST APIs, serverless functions.'}</p>
            </div>
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
              <div className="w-12 h-12 mb-4 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                <Search size={24} />
              </div>
              <h3 className="font-semibold text-white mb-2">{t.skills?.seo || 'SEO & Optimization'}</h3>
              <p className="text-sm text-zinc-500">{t.skills?.seoDesc || 'Technical SEO, Core Web Vitals, performance optimization, accessibility.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROJECTS ============ */}
      <section id="projects" className="py-24 sm:py-32 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">{t.projects.label}</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-4 text-white">{t.projects.title}</h2>
            <p className="text-zinc-400 mt-4 max-w-xl">{t.projects.desc}</p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <MagicCard
                key={project.id}
                className="flex flex-col bg-zinc-900/50 border border-zinc-800 rounded-2xl"
              >
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col flex-1"
                >
                  <div className="p-3">
                    <ImageCarousel images={project.images} title={project.title} />
                  </div>
                  <div className="flex flex-col flex-1 p-5 pt-2">
                    <h3 className="font-semibold text-white mb-2">{t.projectItems?.[i]?.title || project.title}</h3>
                    <p className="text-sm text-zinc-500 mb-4 flex-1">{t.projectItems?.[i]?.desc || project.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((techItem) => (
                        <span key={techItem} className="px-2 py-0.5 text-xs font-medium bg-zinc-800 text-zinc-400 rounded-md border border-zinc-700/50">{techItem}</span>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-3 border-t border-zinc-800">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-zinc-300 bg-zinc-800/60 rounded-lg hover:bg-zinc-700 hover:text-white transition-all">
                        <ExternalLink size={14} /> {t.projects.visit}
                      </a>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-zinc-300 bg-zinc-800/60 rounded-lg hover:bg-zinc-700 hover:text-white transition-all">
                          <Github size={14} /> {t.projects.code}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              </MagicCard>
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
              <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">{t.contact.label}</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-4 text-white">{t.contact.title}</h2>
              <p className="text-zinc-400 mt-4 mb-8">{t.contact.desc}</p>

              <div className="space-y-4 mb-10">
                {t.contact.benefits.map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400">
                      {i === 0 && <Clock size={18} />}
                      {i === 1 && <Zap size={18} />}
                      {i === 2 && <Shield size={18} />}
                    </div>
                    <div>
                      <div className="font-medium text-white">{item.title}</div>
                      <div className="text-sm text-zinc-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <p className="text-sm text-zinc-500">{t.contact.direct}</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://discord.com/users/792811364908924969"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2.5 px-5 py-3 bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 rounded-2xl text-zinc-300 overflow-hidden transition-all duration-300 hover:border-[#5865F2]/50 hover:shadow-lg hover:shadow-[#5865F2]/20 hover:scale-[1.02]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#5865F2] to-[#7289DA] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <DiscordIcon size={20} className="relative z-10 group-hover:text-white transition-colors" />
                    <span className="relative z-10 font-medium group-hover:text-white transition-colors">Discord</span>
                  </a>
                  <a
                    href="https://wa.me/32489949784"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2.5 px-5 py-3 bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 rounded-2xl text-zinc-300 overflow-hidden transition-all duration-300 hover:border-[#25D366]/50 hover:shadow-lg hover:shadow-[#25D366]/20 hover:scale-[1.02]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#25D366] to-[#128C7E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <WhatsAppIcon size={20} className="relative z-10 group-hover:text-white transition-colors" />
                    <span className="relative z-10 font-medium group-hover:text-white transition-colors">WhatsApp</span>
                  </a>
                  <a
                    href="https://instagram.com/ayoubsyfd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2.5 px-5 py-3 bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 rounded-2xl text-zinc-300 overflow-hidden transition-all duration-300 hover:border-[#E4405F]/50 hover:shadow-lg hover:shadow-[#E4405F]/20 hover:scale-[1.02]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#833AB4] via-[#E4405F] to-[#FCAF45] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <InstagramIcon size={20} className="relative z-10 group-hover:text-white transition-colors" />
                    <span className="relative z-10 font-medium group-hover:text-white transition-colors">Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="p-6 sm:p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-6">{t.contact.form.title}</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">{t.contact.form.name} *</label>
                    <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">{t.contact.form.email} *</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-transparent transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">{t.contact.form.project} *</label>
                  <select value={form.project} onChange={(e) => setForm({ ...form, project: e.target.value })} required className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-transparent transition-all cursor-pointer">
                    <option value="">{t.contact.form.select}</option>
                    <option value="website">{t.contact.form.website}</option>
                    <option value="bot">{t.contact.form.bot}</option>
                    <option value="other">{t.contact.form.other}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">{t.contact.form.message} *</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={4} className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-transparent resize-none transition-all" />
                </div>
                <button type="submit" disabled={formState !== 'idle'} className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all cursor-pointer ${formState === 'success' ? 'bg-green-600 text-white' : formState === 'loading' ? 'bg-zinc-700 text-zinc-400' : 'bg-white text-zinc-900 hover:bg-zinc-200 shadow-lg shadow-white/10'}`}>
                  {formState === 'loading' && <Loader2 size={18} className="animate-spin" />}
                  {formState === 'success' && <CheckCircle2 size={18} />}
                  {formState === 'idle' && <Send size={18} />}
                  {formState === 'loading' ? t.contact.form.sending : formState === 'success' ? t.contact.form.sent : t.contact.form.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="py-8 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <a href="https://github.com/tismo0" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-zinc-800/50 text-zinc-500 hover:bg-zinc-800 hover:text-white transition-all duration-300 hover:scale-110">
                <Github size={18} />
              </a>
              <a href="https://discord.com/users/792811364908924969" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-zinc-800/50 text-zinc-500 hover:bg-[#5865F2] hover:text-white transition-all duration-300 hover:scale-110">
                <DiscordIcon size={18} />
              </a>
              <a href="https://wa.me/32489949784" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-zinc-800/50 text-zinc-500 hover:bg-[#25D366] hover:text-white transition-all duration-300 hover:scale-110">
                <WhatsAppIcon size={18} />
              </a>
              <a href="https://instagram.com/ayoubsyfd" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-zinc-800/50 text-zinc-500 hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#E4405F] hover:to-[#FCAF45] hover:text-white transition-all duration-300 hover:scale-110">
                <InstagramIcon size={18} />
              </a>
            </div>
            <div className="text-sm text-zinc-500">{t.footer}</div>
          </div>
        </div>
      </footer>

      {/* ============ SCROLL TO TOP ============ */}
      <ScrollToTop />
    </div >
  );
}


function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setProgress(scrollPercent);
      setVisible(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const size = 52;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center cursor-pointer group"
          aria-label="Scroll to top"
        >

          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox={`0 0 ${size} ${size}`}>

            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="rgba(63, 63, 70, 0.5)"
              strokeWidth={strokeWidth}
            />

            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-150 ease-out"
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>


          <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-zinc-800 transition-all shadow-lg">
            <ChevronUp size={20} />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

