'use client';

import { useI18n } from '@/lib/i18n';
import { useEffect, useState } from 'react';

export default function Footer() {
    const { t } = useI18n();
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">
                    © {year} Tismodev · {t('footer.copy').replace(/<span[^>]*>.*<\/span>/, '')}
                </p>
            </div>
        </footer>
    );
}
