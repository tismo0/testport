
export const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦', rtl: true },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
];

export const translations = {
    en: {
        nav: { projects: 'Projects', workflow: 'Workflow', contact: 'Contact', cta: 'Get Started', skills: 'Skills', locality: 'Location' },
        hero: {
            badge: 'Freelance Developer',
            title1: 'Modern Websites',
            title2: '& Discord Bots',
            desc: 'I build showcase websites for restaurants, hairdressers, portfolios and local businesses. React/Next.js apps with APIs, Supabase databases, dynamic forms connected to Google Sheets, and Discord bots for support, ticketing and automation.',
            cta1: 'View Projects',
            cta2: 'Get a Quote',
            stats: { projects: 'Websites Delivered', bots: 'Active Discord Bots', delivery: 'Express Support' }
        },
        workflow: {
            title: 'How I Work',
            steps: [
                { title: 'Discovery', desc: 'We discuss your vision and requirements' },
                { title: 'Design', desc: 'I create mockups and prototypes' },
                { title: 'Development', desc: 'Building with modern technologies' },
                { title: 'Launch', desc: 'Deploy and optimize for performance' }
            ]
        },
        projects: {
            label: 'Portfolio',
            title: 'Featured Projects',
            desc: 'A selection of my recent work in web development and Discord automation.',
            visit: 'Visit',
            code: 'Code'
        },
        skills: {
            title: 'Tech Stack & Tools',
            desc: 'Technologies I use to bring your projects to life.',
            frontend: 'Frontend Development',
            frontendDesc: 'React, Next.js, TypeScript, Tailwind CSS, Vite, responsive design.',
            backend: 'Backend & Database',
            backendDesc: 'Node.js, Supabase, PostgreSQL, REST APIs, serverless functions.',
            seo: 'SEO & Optimization',
            seoDesc: 'Technical SEO, Core Web Vitals, performance optimization, accessibility.'
        },
        contact: {
            label: 'Contact',
            title: "Let's Work Together",
            desc: "Have a project in mind? I'd love to hear about it.",
            benefits: [
                { title: 'Fast Turnaround', desc: '72h express delivery available' },
                { title: 'Modern Stack', desc: 'Next.js, React, Tailwind, Node.js' },
                { title: 'Quality First', desc: 'Clean code, SEO optimized, accessible' }
            ],
            direct: 'Or reach me directly:',
            form: {
                title: 'Send a Message',
                name: 'Name',
                email: 'Email',
                project: 'Project Type',
                message: 'Message',
                select: 'Select an option...',
                website: 'Website',
                bot: 'Discord Bot',
                other: 'Other',
                send: 'Send Message',
                sending: 'Sending...',
                sent: 'Sent!'
            }
        },
        projectItems: [
            { title: 'Non-Profit Website', desc: 'Complete website for a peace association with donations, newsletter, and event management.' },
            { title: 'Tismo Copywriting', desc: 'Advanced translation tool with intelligent tone adaptation and context-aware rewriting.' },
            { title: 'ZetaCVC Discord Bot', desc: 'Enterprise Discord bot with ticket system, role management, and moderation tools.' },
            { title: 'Salon Booking', desc: 'Elegant booking platform with appointment scheduling and responsive mobile design.' }
        ],
        verviers: {
            badge: 'Verviers • Province of Liège • Belgium',
            title1: 'Fullstack Web Developer',
            title2: 'in Verviers',
            heroDesc: 'Professional website and custom web application development for businesses in Verviers, Heusy, Ensival and throughout the Province of Liège.',
            cta1: 'Get a free quote',
            cta2: 'Call now',
            partnerTitle: 'Your digital partner in the Verviers district',
            partnerP1: 'Based in Verviers, in the heart of the Province of Liège, I am Tismodev, a fullstack web developer specializing in website and modern web application creation.',
            partnerP2: 'On the banks of the Vesdre, I put my technical expertise at the service of local entrepreneurs. From simple showcase sites for your Verviers restaurant to complex web applications with databases, I develop SEO-friendly solutions.',
            servicesTitle: 'Web development services in Verviers',
            servicesDesc: 'Solutions tailored to the needs of businesses in the Verviers district and throughout Belgium.',
            services: [
                { title: 'Professional showcase sites', desc: 'Modern sites for restaurants, hair salons, craftsmen and shops in Verviers. Responsive and mobile-optimized design.' },
                { title: 'Custom web applications', desc: 'React and Next.js development for high-performance applications: online booking, customer areas, dashboards.' },
                { title: 'Back-end & databases', desc: 'Robust APIs with Node.js and Supabase. Connection to your existing tools, automations and third-party integrations.' },
                { title: 'SEO & local referencing', desc: 'Google optimization to appear in local searches in Verviers, Liège and throughout Belgium.' },
                { title: 'Website redesign', desc: 'Modernizing your current site with the latest technologies. Migration to a faster and better-referenced site.' },
                { title: 'Maintenance & 72h support', desc: 'Continuous support after delivery. Corrections, updates and new features within 72h.' }
            ],
            techTitle: 'Mastered Fullstack Technologies',
            techDesc: 'I use the most modern technologies to create fast, secure and scalable sites for businesses in Verviers and the Province of Liège.',
            whyTitle: 'Why choose a local web developer in Verviers?',
            whyItems: [
                'Geographic proximity: possible meetings in Verviers, Spa, Malmedy or anywhere in the district',
                'Knowledge of the local economic fabric and specific needs of Belgian SMEs',
                'Guaranteed responsiveness with support within 72 hours maximum',
                'Rates adapted to the budgets of self-employed and small businesses',
                'Direct communication in French, without intermediary or agency'
            ],
            zoneTitle: 'Area of intervention',
            zoneDesc: 'I mainly work with clients from the Verviers district and the Province of Liège, but I also carry out projects for all of Belgium and internationally.',
            ctaTitle: 'Ready to launch your web project in Verviers?',
            ctaDesc: 'Contact me to discuss your project. Free quote within 24h.',
            ctaForm: 'Contact form',
            location: 'Verviers, Province of Liège, Belgium',
            footerText: '© 2024 Tismodev • Fullstack Web Developer in Verviers',
            backToPortfolio: '← Back to portfolio'
        },
        footer: '© 2024 Tismodev. All rights reserved.'
    },
    fr: {
        nav: { projects: 'Projets', workflow: 'Processus', contact: 'Contact', cta: 'Commencer', skills: 'Compétences', locality: 'Localité' },
        hero: {
            badge: 'Développeur Freelance',
            title1: 'Sites Modernes',
            title2: '& Bots Discord',
            desc: 'Je crée des sites vitrines pour restaurants, salons de coiffure, portfolios et commerces locaux. Apps React/Next.js avec APIs, bases de données Supabase, formulaires dynamiques connectés à Google Sheets, et bots Discord pour le support, ticketing et automatisations.',
            cta1: 'Voir les réalisations',
            cta2: 'Demander un devis',
            stats: { projects: 'Sites livrés', bots: 'Bots Discord actifs', delivery: 'Support Express' }
        },
        workflow: {
            title: 'Ma méthode',
            steps: [
                { title: 'Découverte', desc: 'Nous discutons de votre vision' },
                { title: 'Design', desc: 'Je crée les maquettes' },
                { title: 'Développement', desc: 'Construction avec des technologies modernes' },
                { title: 'Lancement', desc: 'Déploiement et optimisation' }
            ]
        },
        projects: {
            label: 'Portfolio',
            title: 'Projets Récents',
            desc: 'Une sélection de mes travaux récents en développement web et automatisation Discord.',
            visit: 'Visiter',
            code: 'Code'
        },
        skills: {
            title: 'Stack Technique & Outils',
            desc: 'Les technologies que j\'utilise pour réaliser vos projets.',
            frontend: 'Développement Frontend',
            frontendDesc: 'React, Next.js, TypeScript, Tailwind CSS, Vite, design responsive.',
            backend: 'Backend & Base de données',
            backendDesc: 'Node.js, Supabase, PostgreSQL, APIs REST, fonctions serverless.',
            seo: 'SEO & Optimisation',
            seoDesc: 'SEO technique, Core Web Vitals, optimisation performance, accessibilité.'
        },
        contact: {
            label: 'Contact',
            title: 'Travaillons Ensemble',
            desc: 'Vous avez un projet en tête ? Parlons-en.',
            benefits: [
                { title: 'Rapidité', desc: 'Livraison express en 72h disponible' },
                { title: 'Stack Moderne', desc: 'Next.js, React, Tailwind, Node.js' },
                { title: 'Qualité', desc: 'Code propre, SEO optimisé, accessible' }
            ],
            direct: 'Ou contactez-moi directement :',
            form: {
                title: 'Envoyer un message',
                name: 'Nom',
                email: 'Email',
                project: 'Type de projet',
                message: 'Message',
                select: 'Sélectionnez...',
                website: 'Site web',
                bot: 'Bot Discord',
                other: 'Autre',
                send: 'Envoyer',
                sending: 'Envoi...',
                sent: 'Envoyé !'
            }
        },
        projectItems: [
            { title: 'Site Associatif', desc: 'Site complet pour une association de paix avec dons, newsletter et gestion d\'événements.' },
            { title: 'Tismo Copywriting', desc: 'Outil de traduction avancé avec adaptation intelligente du ton et réécriture contextuelle.' },
            { title: 'ZetaCVC Bot Discord', desc: 'Bot Discord professionnel avec système de tickets, gestion des rôles et outils de modération.' },
            { title: 'Réservation Salon', desc: 'Plateforme élégante de réservation avec prise de rendez-vous et design mobile responsive.' }
        ],
        verviers: {
            badge: 'Verviers • Province de Liège • Belgique',
            title1: 'Développeur Web Fullstack',
            title2: 'à Verviers',
            heroDesc: 'Création de sites internet professionnels et applications web sur mesure pour les entreprises de Verviers, Heusy, Ensival et toute la Province de Liège.',
            cta1: 'Demander un devis gratuit',
            cta2: 'Appeler maintenant',
            partnerTitle: 'Votre partenaire digital dans l\'arrondissement de Verviers',
            partnerP1: 'Basé à Verviers, au cœur de la Province de Liège, je suis Tismodev, développeur web fullstack spécialisé dans la création de sites internet et d\'applications web modernes.',
            partnerP2: 'Sur les rives de la Vesdre, je mets mon expertise technique au service des entrepreneurs locaux. Du simple site vitrine pour votre restaurant verviétois jusqu\'à l\'application web complexe avec base de données, je développe des solutions SEO-friendly.',
            servicesTitle: 'Services de développement web à Verviers',
            servicesDesc: 'Des solutions adaptées aux besoins des entreprises de l\'arrondissement de Verviers et de toute la Belgique.',
            services: [
                { title: 'Sites vitrines professionnels', desc: 'Sites modernes pour restaurants, salons de coiffure, artisans et commerces de Verviers. Design responsive et optimisé pour mobile.' },
                { title: 'Applications web sur mesure', desc: 'Développement React et Next.js pour des applications performantes : réservations en ligne, espaces clients, dashboards.' },
                { title: 'Back-end & bases de données', desc: 'APIs robustes avec Node.js et Supabase. Connexion à vos outils existants, automatisations et intégrations tierces.' },
                { title: 'SEO & référencement local', desc: 'Optimisation pour Google afin d\'apparaître dans les recherches locales à Verviers, Liège et dans toute la Belgique.' },
                { title: 'Refonte de site existant', desc: 'Modernisation de votre site actuel avec les dernières technologies. Migration vers un site plus rapide et mieux référencé.' },
                { title: 'Maintenance & support 72h', desc: 'Accompagnement continu après livraison. Corrections, mises à jour et nouvelles fonctionnalités sous 72h.' }
            ],
            techTitle: 'Technologies Fullstack maîtrisées',
            techDesc: 'J\'utilise les technologies les plus modernes pour créer des sites rapides, sécurisés et évolutifs pour les entreprises de Verviers et de la Province de Liège.',
            whyTitle: 'Pourquoi choisir un développeur web local à Verviers ?',
            whyItems: [
                'Proximité géographique : rencontres possibles à Verviers, Spa, Malmedy ou partout dans l\'arrondissement',
                'Connaissance du tissu économique local et des besoins spécifiques des PME belges',
                'Réactivité garantie avec un support sous 72h maximum',
                'Tarifs adaptés aux budgets des indépendants et petites entreprises',
                'Communication directe en français, sans intermédiaire ni agence'
            ],
            zoneTitle: 'Zone d\'intervention',
            zoneDesc: 'Je travaille principalement avec des clients de l\'arrondissement de Verviers et de la Province de Liège, mais je réalise également des projets pour toute la Belgique et à l\'international.',
            ctaTitle: 'Prêt à lancer votre projet web à Verviers ?',
            ctaDesc: 'Contactez-moi pour discuter de votre projet. Devis gratuit sous 24h.',
            ctaForm: 'Formulaire de contact',
            location: 'Verviers, Province de Liège, Belgique',
            footerText: '© 2024 Tismodev • Développeur Web Fullstack à Verviers',
            backToPortfolio: '← Retour au portfolio'
        },
        footer: '© 2024 Tismodev. Tous droits réservés.'
    },
    es: {
        nav: { projects: 'Proyectos', workflow: 'Proceso', contact: 'Contacto', cta: 'Empezar', skills: 'Habilidades', locality: 'Ubicación' },
        hero: {
            badge: 'Disponible para proyectos',
            title1: 'Creando experiencias',
            title2: 'Digitales',
            desc: 'Desarrollador full-stack especializado en aplicaciones web modernas, bots de Discord y soluciones digitales creativas.',
            cta1: 'Ver proyectos',
            cta2: 'Contactar',
            stats: { projects: 'Proyectos', bots: 'Bots Discord', delivery: 'Entrega Express' }
        },
        workflow: { title: 'Mi método', steps: [{ title: 'Descubrimiento', desc: 'Discutimos tu visión' }, { title: 'Diseño', desc: 'Creo prototipos' }, { title: 'Desarrollo', desc: 'Construyo con tecnología moderna' }, { title: 'Lanzamiento', desc: 'Despliegue y optimización' }] },
        projects: { label: 'Portfolio', title: 'Proyectos Destacados', desc: 'Una selección de mis trabajos recientes.', visit: 'Visitar', code: 'Código' },
        contact: { label: 'Contacto', title: 'Trabajemos Juntos', desc: '¿Tienes un proyecto? Hablemos.', benefits: [{ title: 'Rapidez', desc: 'Entrega en 72h disponible' }, { title: 'Stack Moderno', desc: 'Next.js, React, Tailwind' }, { title: 'Calidad', desc: 'Código limpio, SEO optimizado' }], direct: 'O contáctame:', form: { title: 'Enviar mensaje', name: 'Nombre', email: 'Email', project: 'Tipo de proyecto', message: 'Mensaje', select: 'Selecciona...', website: 'Sitio web', bot: 'Bot Discord', other: 'Otro', send: 'Enviar', sending: 'Enviando...', sent: '¡Enviado!' } },
        footer: '© 2024 Tismodev. Todos los derechos reservados.'
    },
    ar: {
        nav: { projects: 'المشاريع', workflow: 'العملية', contact: 'اتصل', cta: 'ابدأ', skills: 'المهارات', locality: 'الموقع' },
        hero: { badge: 'متاح للمشاريع', title1: 'بناء تجارب', title2: 'رقمية', desc: 'مطور متكامل متخصص في تطبيقات الويب الحديثة', cta1: 'عرض المشاريع', cta2: 'تواصل معي', stats: { projects: 'مشاريع', bots: 'بوتات', delivery: 'توصيل سريع' } },
        workflow: { title: 'طريقة العمل', steps: [{ title: 'اكتشاف', desc: 'نناقش رؤيتك' }, { title: 'تصميم', desc: 'أنشئ النماذج' }, { title: 'تطوير', desc: 'البناء بالتقنيات الحديثة' }, { title: 'إطلاق', desc: 'النشر والتحسين' }] },
        projects: { label: 'أعمالي', title: 'مشاريع مميزة', desc: 'مجموعة من أعمالي الأخيرة', visit: 'زيارة', code: 'الكود' },
        contact: { label: 'اتصل', title: 'لنعمل معاً', desc: 'هل لديك مشروع؟', benefits: [{ title: 'سرعة', desc: 'تسليم في 72 ساعة' }, { title: 'تقنيات حديثة', desc: 'Next.js, React, Tailwind' }, { title: 'جودة', desc: 'كود نظيف' }], direct: 'أو تواصل مباشرة:', form: { title: 'إرسال رسالة', name: 'الاسم', email: 'البريد', project: 'نوع المشروع', message: 'الرسالة', select: 'اختر...', website: 'موقع', bot: 'بوت', other: 'آخر', send: 'إرسال', sending: 'جاري...', sent: 'تم!' } },
        footer: '© 2024 Tismodev. جميع الحقوق محفوظة.'
    },
    zh: {
        nav: { projects: '项目', workflow: '流程', contact: '联系', cta: '开始', skills: '技能', locality: '位置' },
        hero: { badge: '可接项目', title1: '创造数字', title2: '体验', desc: '专注于现代网络应用、Discord机器人和创意数字解决方案的全栈开发者', cta1: '查看项目', cta2: '联系我', stats: { projects: '项目', bots: '机器人', delivery: '快速交付' } },
        workflow: { title: '工作方式', steps: [{ title: '发现', desc: '讨论您的愿景' }, { title: '设计', desc: '创建原型' }, { title: '开发', desc: '使用现代技术构建' }, { title: '发布', desc: '部署和优化' }] },
        projects: { label: '作品集', title: '精选项目', desc: '我最近的作品选集', visit: '访问', code: '代码' },
        contact: { label: '联系', title: '一起合作', desc: '有项目想法吗？', benefits: [{ title: '快速', desc: '72小时交付' }, { title: '现代技术', desc: 'Next.js, React, Tailwind' }, { title: '质量', desc: '代码整洁' }], direct: '或直接联系:', form: { title: '发送消息', name: '姓名', email: '邮箱', project: '项目类型', message: '消息', select: '选择...', website: '网站', bot: '机器人', other: '其他', send: '发送', sending: '发送中...', sent: '已发送!' } },
        footer: '© 2024 Tismodev. 版权所有.'
    },
    hi: {
        nav: { projects: 'परियोजनाएं', workflow: 'प्रक्रिया', contact: 'संपर्क', cta: 'शुरू करें', skills: 'कौशल', locality: 'स्थान' },
        hero: { badge: 'प्रोजेक्ट के लिए उपलब्ध', title1: 'डिजिटल अनुभव', title2: 'बनाना', desc: 'आधुनिक वेब एप्लिकेशन और Discord बॉट में विशेषज्ञ फुल-स्टैक डेवलपर', cta1: 'प्रोजेक्ट देखें', cta2: 'संपर्क करें', stats: { projects: 'प्रोजेक्ट', bots: 'बॉट्स', delivery: 'त्वरित डिलीवरी' } },
        workflow: { title: 'मेरी विधि', steps: [{ title: 'खोज', desc: 'आपकी दृष्टि पर चर्चा' }, { title: 'डिज़ाइन', desc: 'प्रोटोटाइप बनाना' }, { title: 'विकास', desc: 'आधुनिक तकनीक से निर्माण' }, { title: 'लॉन्च', desc: 'डिप्लॉय और ऑप्टिमाइज़' }] },
        projects: { label: 'पोर्टफोलियो', title: 'चुनिंदा परियोजनाएं', desc: 'मेरे हाल के कार्यों का चयन', visit: 'देखें', code: 'कोड' },
        contact: { label: 'संपर्क', title: 'साथ काम करें', desc: 'कोई प्रोजेक्ट है?', benefits: [{ title: 'तेज़', desc: '72 घंटे में डिलीवरी' }, { title: 'आधुनिक', desc: 'Next.js, React, Tailwind' }, { title: 'गुणवत्ता', desc: 'साफ कोड' }], direct: 'या सीधे संपर्क करें:', form: { title: 'संदेश भेजें', name: 'नाम', email: 'ईमेल', project: 'प्रोजेक्ट प्रकार', message: 'संदेश', select: 'चुनें...', website: 'वेबसाइट', bot: 'बॉट', other: 'अन्य', send: 'भेजें', sending: 'भेज रहे...', sent: 'भेजा!' } },
        footer: '© 2024 Tismodev. सर्वाधिकार सुरक्षित.'
    },
    pt: {
        nav: { projects: 'Projetos', workflow: 'Processo', contact: 'Contato', cta: 'Começar', skills: 'Habilidades', locality: 'Localização' },
        hero: { badge: 'Disponível para projetos', title1: 'Criando experiências', title2: 'Digitais', desc: 'Desenvolvedor full-stack especializado em aplicações web modernas e bots Discord.', cta1: 'Ver projetos', cta2: 'Contato', stats: { projects: 'Projetos', bots: 'Bots Discord', delivery: 'Entrega Expressa' } },
        workflow: { title: 'Meu método', steps: [{ title: 'Descoberta', desc: 'Discutimos sua visão' }, { title: 'Design', desc: 'Crio protótipos' }, { title: 'Desenvolvimento', desc: 'Construção com tecnologia moderna' }, { title: 'Lançamento', desc: 'Deploy e otimização' }] },
        projects: { label: 'Portfólio', title: 'Projetos Destacados', desc: 'Uma seleção dos meus trabalhos recentes.', visit: 'Visitar', code: 'Código' },
        contact: { label: 'Contato', title: 'Vamos Trabalhar Juntos', desc: 'Tem um projeto em mente?', benefits: [{ title: 'Rapidez', desc: 'Entrega em 72h disponível' }, { title: 'Stack Moderno', desc: 'Next.js, React, Tailwind' }, { title: 'Qualidade', desc: 'Código limpo, SEO otimizado' }], direct: 'Ou me contate diretamente:', form: { title: 'Enviar mensagem', name: 'Nome', email: 'Email', project: 'Tipo de projeto', message: 'Mensagem', select: 'Selecione...', website: 'Site', bot: 'Bot Discord', other: 'Outro', send: 'Enviar', sending: 'Enviando...', sent: 'Enviado!' } },
        footer: '© 2024 Tismodev. Todos os direitos reservados.'
    },
    de: {
        nav: { projects: 'Projekte', workflow: 'Prozess', contact: 'Kontakt', cta: 'Starten', skills: 'Fähigkeiten', locality: 'Standort' },
        hero: { badge: 'Verfügbar für Projekte', title1: 'Digitale Erlebnisse', title2: 'erschaffen', desc: 'Full-Stack-Entwickler spezialisiert auf moderne Webanwendungen und Discord-Bots.', cta1: 'Projekte ansehen', cta2: 'Kontakt', stats: { projects: 'Projekte', bots: 'Discord Bots', delivery: 'Express-Lieferung' } },
        workflow: { title: 'Meine Methode', steps: [{ title: 'Entdeckung', desc: 'Wir besprechen Ihre Vision' }, { title: 'Design', desc: 'Ich erstelle Prototypen' }, { title: 'Entwicklung', desc: 'Aufbau mit modernen Technologien' }, { title: 'Start', desc: 'Bereitstellung und Optimierung' }] },
        projects: { label: 'Portfolio', title: 'Ausgewählte Projekte', desc: 'Eine Auswahl meiner aktuellen Arbeiten.', visit: 'Besuchen', code: 'Code' },
        contact: { label: 'Kontakt', title: 'Zusammenarbeiten', desc: 'Haben Sie ein Projekt im Sinn?', benefits: [{ title: 'Schnell', desc: '72h Express-Lieferung verfügbar' }, { title: 'Moderner Stack', desc: 'Next.js, React, Tailwind' }, { title: 'Qualität', desc: 'Sauberer Code, SEO-optimiert' }], direct: 'Oder kontaktieren Sie mich direkt:', form: { title: 'Nachricht senden', name: 'Name', email: 'Email', project: 'Projekttyp', message: 'Nachricht', select: 'Auswählen...', website: 'Website', bot: 'Discord Bot', other: 'Andere', send: 'Senden', sending: 'Sende...', sent: 'Gesendet!' } },
        footer: '© 2024 Tismodev. Alle Rechte vorbehalten.'
    },
    nl: {
        nav: { projects: 'Projecten', workflow: 'Proces', contact: 'Contact', cta: 'Beginnen', skills: 'Vaardigheden', locality: 'Locatie' },
        hero: { badge: 'Beschikbaar voor projecten', title1: 'Digitale ervaringen', title2: 'bouwen', desc: 'Full-stack ontwikkelaar gespecialiseerd in moderne webapplicaties en Discord bots.', cta1: 'Projecten bekijken', cta2: 'Contact', stats: { projects: 'Projecten', bots: 'Discord Bots', delivery: 'Snelle Levering' } },
        workflow: { title: 'Mijn methode', steps: [{ title: 'Ontdekking', desc: 'We bespreken uw visie' }, { title: 'Ontwerp', desc: 'Ik maak prototypes' }, { title: 'Ontwikkeling', desc: 'Bouwen met moderne technologie' }, { title: 'Lancering', desc: 'Deployment en optimalisatie' }] },
        projects: { label: 'Portfolio', title: 'Uitgelichte Projecten', desc: 'Een selectie van mijn recente werk.', visit: 'Bezoeken', code: 'Code' },
        contact: { label: 'Contact', title: 'Samenwerken', desc: 'Heeft u een project in gedachten?', benefits: [{ title: 'Snel', desc: '72u express levering beschikbaar' }, { title: 'Moderne Stack', desc: 'Next.js, React, Tailwind' }, { title: 'Kwaliteit', desc: 'Schone code, SEO geoptimaliseerd' }], direct: 'Of neem direct contact op:', form: { title: 'Bericht sturen', name: 'Naam', email: 'Email', project: 'Projecttype', message: 'Bericht', select: 'Selecteer...', website: 'Website', bot: 'Discord Bot', other: 'Anders', send: 'Versturen', sending: 'Verzenden...', sent: 'Verzonden!' } },
        footer: '© 2024 Tismodev. Alle rechten voorbehouden.'
    },
    it: {
        nav: { projects: 'Progetti', workflow: 'Processo', contact: 'Contatto', cta: 'Inizia', skills: 'Competenze', locality: 'Posizione' },
        hero: { badge: 'Disponibile per progetti', title1: 'Creare esperienze', title2: 'Digitali', desc: 'Sviluppatore full-stack specializzato in applicazioni web moderne e bot Discord.', cta1: 'Vedi progetti', cta2: 'Contattami', stats: { projects: 'Progetti', bots: 'Bot Discord', delivery: 'Consegna Express' } },
        workflow: { title: 'Il mio metodo', steps: [{ title: 'Scoperta', desc: 'Discutiamo la tua visione' }, { title: 'Design', desc: 'Creo prototipi' }, { title: 'Sviluppo', desc: 'Costruzione con tecnologie moderne' }, { title: 'Lancio', desc: 'Deploy e ottimizzazione' }] },
        projects: { label: 'Portfolio', title: 'Progetti in Evidenza', desc: 'Una selezione dei miei lavori recenti.', visit: 'Visita', code: 'Codice' },
        contact: { label: 'Contatto', title: 'Lavoriamo Insieme', desc: 'Hai un progetto in mente?', benefits: [{ title: 'Veloce', desc: 'Consegna in 72h disponibile' }, { title: 'Stack Moderno', desc: 'Next.js, React, Tailwind' }, { title: 'Qualità', desc: 'Codice pulito, SEO ottimizzato' }], direct: 'O contattami direttamente:', form: { title: 'Invia messaggio', name: 'Nome', email: 'Email', project: 'Tipo progetto', message: 'Messaggio', select: 'Seleziona...', website: 'Sito web', bot: 'Bot Discord', other: 'Altro', send: 'Invia', sending: 'Invio...', sent: 'Inviato!' } },
        footer: '© 2024 Tismodev. Tutti i diritti riservati.'
    }
};

export function detectLanguage() {
    if (typeof window === 'undefined') return 'en';
    const stored = localStorage.getItem('lang');
    if (stored && translations[stored]) return stored;
    const browser = navigator.language?.split('-')[0] || 'en';
    return translations[browser] ? browser : 'en';
}
