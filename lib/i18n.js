'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Context for translations
const I18nContext = createContext(null);

// Detect user's preferred language
function detectLang() {
    if (typeof window === 'undefined') return 'fr';

    // Check localStorage first
    const saved = localStorage.getItem('lang');
    if (saved === 'fr' || saved === 'en') return saved;

    // Then browser preference
    const nav = navigator.language || navigator.userLanguage || '';
    return nav.startsWith('fr') ? 'fr' : 'en';
}

// Load translations from JSON files
async function loadTranslations(lang) {
    try {
        const res = await fetch(`/locales/${lang}.json`);
        if (!res.ok) throw new Error('Failed to load');
        return await res.json();
    } catch (err) {
        console.warn(`i18n: couldn't load ${lang}.json, falling back to fr`);
        const fallback = await fetch('/locales/fr.json');
        return await fallback.json();
    }
}

// Get nested value from object using dot notation
function get(obj, path) {
    if (!obj || !path) return '';
    return path.split('.').reduce((acc, key) => acc?.[key], obj) || path;
}

// Provider component
export function I18nProvider({ children }) {
    const [lang, setLang] = useState('fr');
    const [t, setT] = useState({});
    const [ready, setReady] = useState(false);

    // Initialize on mount
    useEffect(() => {
        const init = async () => {
            const detected = detectLang();
            const translations = await loadTranslations(detected);
            setLang(detected);
            setT(translations);
            setReady(true);
        };
        init();
    }, []);

    // Switch language function
    const switchLang = async (newLang) => {
        if (newLang !== 'fr' && newLang !== 'en') return;

        const translations = await loadTranslations(newLang);
        setLang(newLang);
        setT(translations);
        localStorage.setItem('lang', newLang);
        document.documentElement.lang = newLang;
    };

    // Translation function
    const translate = (key) => get(t, key);

    return (
        <I18nContext.Provider value={{ lang, t: translate, switchLang, ready }}>
            {children}
        </I18nContext.Provider>
    );
}

// Hook to use translations
export function useI18n() {
    const ctx = useContext(I18nContext);
    if (!ctx) {
        throw new Error('useI18n must be used inside I18nProvider');
    }
    return ctx;
}
