'use client';

import { useI18n } from '@/lib/i18n';
import { useState, useEffect } from 'react';

export default function Header() {
    const { t, lang, switchLang } = useI18n();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Header scroll effect
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close menu on resize
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth > 768 && menuOpen) setMenuOpen(false);
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle('no-scroll', !menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
        document.body.classList.remove('no-scroll');
    };

    const navItems = [
        { href: '#services', key: 'nav.services' },
        { href: '#projects', key: 'nav.projects' },
        { href: '#faq', key: 'nav.faq' },
        { href: '#process', key: 'nav.process' },
        { href: '#contact', key: 'nav.contact' },
    ];

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <a href="#" className="header-logo" aria-label={t('brand.logoLabel')}>
                    <img src="/assets/logo.webp" alt="Tismodev Logo" className="logo-img" />
                    <span className="brand-text">{t('brand.name')}</span>
                </a>

                <button
                    className={`nav-toggle ${menuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label={menuOpen ? t('menu.close') : t('menu.open')}
                    aria-expanded={menuOpen}
                >
                    <span className="toggle-icon"></span>
                    <span className="toggle-hint">{t('menu.toggleHint')}</span>
                </button>

                <nav className={`nav-panel ${menuOpen ? 'open' : ''}`}>
                    <button className="nav-close" onClick={closeMenu} aria-label={t('menu.close')}>
                        <i className="ri-close-line"></i>
                    </button>

                    <ul className="nav-links">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a href={item.href} onClick={closeMenu}>{t(item.key)}</a>
                            </li>
                        ))}
                    </ul>

                    <div className="lang-switch" role="group" aria-label={t('lang.switchLabel')}>
                        <span className="lang-hint">{t('lang.hint')}</span>
                        <button
                            className={`lang-btn ${lang === 'fr' ? 'active' : ''}`}
                            onClick={() => switchLang('fr')}
                            aria-pressed={lang === 'fr'}
                        >
                            FR
                        </button>
                        <button
                            className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                            onClick={() => switchLang('en')}
                            aria-pressed={lang === 'en'}
                        >
                            EN
                        </button>
                    </div>

                    <a href="#contact" className="nav-cta" onClick={closeMenu}>
                        {t('nav.cta')}
                    </a>
                </nav>
            </div>
        </header>
    );
}
