'use client';

import { useI18n } from '@/lib/i18n';

export default function Stack() {
    const { t } = useI18n();

    const skills = [
        { icon: 'ri-robot-line', key: 'stack.skill.bot' },
        { icon: 'ri-server-line', key: 'stack.skill.server' },
        { icon: 'ri-smartphone-line', key: 'stack.skill.ui' },
        { icon: 'ri-reactjs-line', key: 'stack.skill.react' },
        { icon: 'ri-code-s-slash-line', key: 'stack.skill.php' },
        { icon: 'ri-terminal-box-line', key: 'stack.skill.automation' },
        { icon: 'ri-layout-masonry-line', key: 'stack.skill.portfolio' },
        { icon: 'ri-html5-line', key: 'stack.skill.transcripts' },
    ];

    return (
        <section className="stack" id="stack">
            <div className="container">
                <h2 className="section-title">{t('stack.title')}</h2>
                <p className="section-subtitle">{t('stack.description')}</p>

                <div className="skills-grid">
                    {skills.map((skill, i) => (
                        <div className="skill-card" key={i}>
                            <i className={skill.icon}></i>
                            <span>{t(skill.key)}</span>
                        </div>
                    ))}
                </div>

                <p className="stack-note">{t('stack.note')}</p>
            </div>
        </section>
    );
}
