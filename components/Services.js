'use client';

import { useI18n } from '@/lib/i18n';

export default function Services() {
    const { t } = useI18n();

    const services = [
        {
            icon: 'ri-discord-line',
            title: 'services.bot.title',
            desc: 'services.bot.desc',
            cta: 'services.bot.cta',
            href: '#projects'
        },
        {
            icon: 'ri-global-line',
            title: 'services.web.title',
            desc: 'services.web.desc',
            cta: 'services.web.cta',
            href: '#projects'
        },
        {
            icon: 'ri-search-eye-line',
            title: 'services.automation.title',
            desc: 'services.automation.desc',
            cta: 'services.automation.cta',
            href: '#faq'
        }
    ];

    return (
        <section className="services" id="services">
            <div className="container">
                <h2 className="section-title">{t('services.title')}</h2>
                <p className="section-subtitle">{t('services.subtitle')}</p>

                <div className="services-grid">
                    {services.map((svc, i) => (
                        <article className="service-card" key={i}>
                            <div className="service-icon">
                                <i className={svc.icon}></i>
                            </div>
                            <h3>{t(svc.title)}</h3>
                            <p>{t(svc.desc)}</p>
                            <a href={svc.href} className="service-link">
                                {t(svc.cta)} <i className="ri-arrow-right-line"></i>
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
