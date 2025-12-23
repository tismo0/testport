'use client';

import { useI18n } from '@/lib/i18n';

export default function Hero() {
    const { t } = useI18n();

    return (
        <section className="hero" id="hero">
            <span className="hero-tag">{t('hero.tag')}</span>

            <h1 className="hero-heading">
                {t('hero.heading')}
            </h1>

            <p className="hero-desc">
                {t('hero.description')}
            </p>

            <p className="hero-note">
                {t('hero.note')}
            </p>

            <div className="hero-cta">
                <a href="#contact" className="btn btn-primary">
                    <i className="ri-mail-send-line"></i>
                    {t('hero.primaryCta')}
                </a>
                <a href="#projects" className="btn btn-secondary">
                    <i className="ri-folder-open-line"></i>
                    {t('hero.secondaryCta')}
                </a>
            </div>

            <div className="hero-stats">
                <div className="stat">
                    <span className="stat-num">3+</span>
                    <span className="stat-label">{t('stats.discord')}</span>
                </div>
                <div className="stat">
                    <span className="stat-num">10+</span>
                    <span className="stat-label">{t('stats.responsive')}</span>
                </div>
                <div className="stat">
                    <span className="stat-num">72h</span>
                    <span className="stat-label">{t('stats.express')}</span>
                </div>
            </div>
        </section>
    );
}
