'use client';

import { useI18n } from '@/lib/i18n';

export default function Process() {
    const { t } = useI18n();

    const steps = [
        { num: '01', title: 'process.step1.title', desc: 'process.step1.desc', icon: 'ri-search-line' },
        { num: '02', title: 'process.step2.title', desc: 'process.step2.desc', icon: 'ri-pencil-ruler-line' },
        { num: '03', title: 'process.step3.title', desc: 'process.step3.desc', icon: 'ri-rocket-line' },
    ];

    return (
        <section className="process" id="process">
            <div className="container">
                <h2 className="section-title">{t('process.title')}</h2>
                <p className="section-subtitle">{t('process.subtitle')}</p>

                <div className="process-steps">
                    {steps.map((step, i) => (
                        <div className="process-step" key={i}>
                            <div className="step-num">{step.num}</div>
                            <div className="step-icon">
                                <i className={step.icon}></i>
                            </div>
                            <h3>{t(step.title)}</h3>
                            <p>{t(step.desc)}</p>
                        </div>
                    ))}
                </div>

                <a href="#contact" className="btn btn-primary process-cta">
                    {t('process.cta')}
                </a>
            </div>
        </section>
    );
}
