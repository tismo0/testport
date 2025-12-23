'use client';

import { useI18n } from '@/lib/i18n';
import { useState, useEffect } from 'react';

export default function ScrollTop() {
    const { t } = useI18n();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 400);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!visible) return null;

    return (
        <button
            className="scroll-top"
            onClick={scrollToTop}
            aria-label={t('scrollTop.label')}
        >
            <i className="ri-arrow-up-line"></i>
        </button>
    );
}
