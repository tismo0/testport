'use client';

import { useI18n } from '@/lib/i18n';
import { useState } from 'react';

export default function FAQ() {
    const { t } = useI18n();
    const [openIdx, setOpenIdx] = useState(null);

    const questions = [
        { q: 'faq.q1', a: 'faq.a1' },
        { q: 'faq.q2', a: 'faq.a2' },
        { q: 'faq.q3', a: 'faq.a3' },
    ];

    const toggle = (i) => {
        setOpenIdx(openIdx === i ? null : i);
    };

    return (
        <section className="faq" id="faq">
            <div className="container">
                <h2 className="section-title">{t('faq.title')}</h2>
                <p className="section-subtitle">{t('faq.subtitle')}</p>

                <div className="faq-list">
                    {questions.map((item, i) => (
                        <div
                            className={`faq-item ${openIdx === i ? 'open' : ''}`}
                            key={i}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggle(i)}
                                aria-expanded={openIdx === i}
                            >
                                <span>{t(item.q)}</span>
                                <i className={`ri-${openIdx === i ? 'subtract' : 'add'}-line`}></i>
                            </button>
                            <div className="faq-answer">
                                <p>{t(item.a)}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <a href="#contact" className="btn btn-primary faq-cta">
                    {t('faq.cta')}
                </a>
            </div>
        </section>
    );
}
