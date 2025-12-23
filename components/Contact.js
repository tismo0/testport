'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import {
    Send,
    MessageCircle,
    Instagram,
    Phone,
    Mail,
    MapPin,
    Clock,
    CheckCircle2,
    Loader2
} from 'lucide-react';

// Discord Icon (Lucide doesn't have it)
function DiscordIcon({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
        </svg>
    );
}

// WhatsApp Icon
function WhatsAppIcon({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

// Social Link Component
function SocialLink({ href, icon: Icon, label, color }) {
    const colorClasses = {
        discord: 'hover:bg-[#5865F2] hover:border-[#5865F2]',
        instagram: 'hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:border-transparent',
        whatsapp: 'hover:bg-[#25D366] hover:border-[#25D366]'
    };

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-zinc-300 transition-all duration-300 hover:text-white ${colorClasses[color]}`}
        >
            <Icon size={20} />
            <span className="font-medium">{label}</span>
        </motion.a>
    );
}

// Input Component (Shadcn-style)
function Input({ label, type = 'text', id, name, value, onChange, required, placeholder }) {
    return (
        <div className="space-y-2">
            <label htmlFor={id} className="block text-sm font-medium text-zinc-300">
                {label} {required && <span className="text-red-400">*</span>}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder-zinc-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent"
            />
        </div>
    );
}

// Select Component (Shadcn-style)
function Select({ label, id, name, value, onChange, required, options }) {
    return (
        <div className="space-y-2">
            <label htmlFor={id} className="block text-sm font-medium text-zinc-300">
                {label} {required && <span className="text-red-400">*</span>}
            </label>
            <select
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent appearance-none cursor-pointer"
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
        </div>
    );
}

// Textarea Component (Shadcn-style)
function Textarea({ label, id, name, value, onChange, required, rows = 5, placeholder }) {
    return (
        <div className="space-y-2">
            <label htmlFor={id} className="block text-sm font-medium text-zinc-300">
                {label} {required && <span className="text-red-400">*</span>}
            </label>
            <textarea
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                rows={rows}
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder-zinc-500 resize-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent"
            />
        </div>
    );
}

// Info Card Component
function InfoCard({ icon: Icon, title, description }) {
    return (
        <div className="flex gap-4 p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400">
                <Icon size={18} />
            </div>
            <div>
                <h4 className="text-sm font-semibold text-zinc-200">{title}</h4>
                <p className="text-sm text-zinc-500">{description}</p>
            </div>
        </div>
    );
}

// Main Contact Component
export default function Contact() {
    const { t } = useI18n();
    const [formState, setFormState] = useState('idle'); // idle, loading, success, error
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        project: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormState('loading');

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // TODO: Connect to form handler (Google Sheets, email API, etc.)
        console.log('Form submitted:', formData);
        setFormState('success');

        // Reset after 3 seconds
        setTimeout(() => {
            setFormState('idle');
            setFormData({ name: '', email: '', project: '', message: '' });
        }, 3000);
    };

    const projectOptions = [
        { value: '', label: t('form.project') || 'Select a project type...' },
        { value: 'bot', label: t('form.projectBot') || 'Discord Bot' },
        { value: 'site', label: t('form.projectSite') || 'Website' },
        { value: 'seo', label: t('form.projectSeo') || 'SEO Optimization' },
        { value: 'other', label: t('form.projectOther') || 'Other' }
    ];

    return (
        <section id="contact" className="py-24 md:py-32 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="max-w-2xl mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4"
                    >
                        Contact
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-4"
                    >
                        {t('contact.title') || "Let's Work Together"}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-zinc-400"
                    >
                        {t('contact.subtitle') || "Have a project in mind? Let's discuss how I can help bring your ideas to life."}
                    </motion.p>
                </div>

                {/* Main Grid: Info + Form */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

                    {/* Left: Contact Info (2 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-8"
                    >
                        {/* Quick Contact */}
                        <div>
                            <h3 className="text-lg font-semibold text-zinc-100 mb-4 flex items-center gap-2">
                                <MessageCircle size={18} className="text-zinc-500" />
                                {t('contact.direct') || 'Quick Contact'}
                            </h3>
                            <div className="space-y-3">
                                <SocialLink
                                    href="https://discord.gg/7vVVqdkVWg"
                                    icon={DiscordIcon}
                                    label={t('contact.discordLink') || 'Join Discord Server'}
                                    color="discord"
                                />
                                <SocialLink
                                    href="https://instagram.com/ayoubsyfd"
                                    icon={Instagram}
                                    label={t('contact.instagramLink') || '@ayoubsyfd'}
                                    color="instagram"
                                />
                                <SocialLink
                                    href="https://wa.me/32489427017"
                                    icon={WhatsAppIcon}
                                    label={t('contact.whatsappLink') || 'WhatsApp'}
                                    color="whatsapp"
                                />
                            </div>
                        </div>

                        {/* Benefits */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-4">
                                {t('contact.benefits.title') || 'Why Choose Me'}
                            </h4>
                            <InfoCard
                                icon={Clock}
                                title={t('contact.benefits.hostingTitle') || 'Fast Delivery'}
                                description={t('contact.benefits.hostingDesc') || 'Projects delivered within 72 hours for express orders'}
                            />
                            <InfoCard
                                icon={CheckCircle2}
                                title={t('contact.benefits.seoTitle') || 'SEO Optimized'}
                                description={t('contact.benefits.seoDesc') || 'Every site is built with search engines in mind'}
                            />
                        </div>
                    </motion.div>

                    {/* Right: Form (3 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3"
                    >
                        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800">
                            <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                                {t('form.title') || 'Send a Message'}
                            </h3>
                            <p className="text-sm text-zinc-500 mb-6">
                                {t('form.subtitle') || 'Fill out the form below and I\'ll get back to you within 24 hours.'}
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <Input
                                        label={t('form.name') || 'Name'}
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                    />
                                    <Input
                                        label={t('form.email') || 'Email'}
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <Select
                                    label={t('form.project') || 'Project Type'}
                                    id="project"
                                    name="project"
                                    value={formData.project}
                                    onChange={handleChange}
                                    required
                                    options={projectOptions}
                                />

                                <Textarea
                                    label={t('form.message') || 'Message'}
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                />

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={formState === 'loading' || formState === 'success'}
                                    whileHover={{ scale: formState === 'idle' ? 1.01 : 1 }}
                                    whileTap={{ scale: formState === 'idle' ? 0.99 : 1 }}
                                    className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${formState === 'success'
                                            ? 'bg-green-600 text-white'
                                            : formState === 'loading'
                                                ? 'bg-zinc-700 text-zinc-400 cursor-wait'
                                                : 'bg-white text-zinc-900 hover:bg-zinc-200 shadow-lg shadow-white/10'
                                        }`}
                                >
                                    {formState === 'loading' && <Loader2 size={18} className="animate-spin" />}
                                    {formState === 'success' && <CheckCircle2 size={18} />}
                                    {formState === 'idle' && <Send size={18} />}

                                    {formState === 'loading' && 'Sending...'}
                                    {formState === 'success' && 'Message Sent!'}
                                    {formState === 'idle' && (t('form.submit') || 'Send Message')}
                                </motion.button>

                                <p className="text-xs text-zinc-600 text-center">
                                    {t('form.required') || 'All fields marked with * are required'}
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* Popular Options Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-sm text-zinc-500 mb-4">
                        {t('contact.options.title') || 'Popular Requests'}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {[
                            { icon: '🤖', label: t('contact.options.bot') || 'Discord Bot' },
                            { icon: '🌐', label: t('contact.options.site') || 'Business Website' },
                            { icon: '🎨', label: t('contact.options.portfolio') || 'Portfolio' }
                        ].map((tag, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-400"
                            >
                                <span>{tag.icon}</span>
                                {tag.label}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
