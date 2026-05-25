

// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');

mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

let lastScroll = 0;
let scrollTimer = null;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    const nav = document.querySelector('nav');

    if (currentScroll <= 80) {
        nav.classList.remove('nav-hidden');
        lastScroll = currentScroll;
        return;
    }

    if (currentScroll > lastScroll) {
        nav.classList.add('nav-hidden');
    } else {
        nav.classList.remove('nav-hidden');
    }

    lastScroll = currentScroll;

    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
        nav.classList.remove('nav-hidden');
    }, 1000);
});

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Aspect ratio buttons
document.querySelectorAll('.aspect-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.aspect-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Generate button demo
const generateBtn = document.getElementById('generateBtn');
const outputPlaceholder = document.getElementById('outputPlaceholder');
const generatedImage = document.getElementById('generatedImage');
const imageActions = document.getElementById('imageActions');

// Sample images for demo
const demoImages = [
    'images/tm-pixel-forge-06.jpg',
    'images/tm-pixel-forge-01.jpg',
    'images/tm-pixel-forge-02.jpg',
    'images/tm-pixel-forge-03.jpg',
    'images/tm-pixel-forge-07.jpg'
];

generateBtn.addEventListener('click', () => {
    generateBtn.classList.add('loading');
    
    setTimeout(() => {
        generateBtn.classList.remove('loading');
        const randomImg = demoImages[Math.floor(Math.random() * demoImages.length)];
        generatedImage.src = randomImg;
        generatedImage.classList.add('visible');
        outputPlaceholder.classList.add('has-image');
        outputPlaceholder.style.display = 'none';
        imageActions.classList.add('visible');
    }, 2000);
});

const buttons = document.querySelectorAll('.theme-btn');

function setTheme(theme) {
    document.body.classList.remove('theme-red', 'theme-green', 'theme-blue');
    document.body.classList.add(`theme-${theme}`);

    buttons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-theme="${theme}"]`).classList.add('active');

    localStorage.setItem('theme', theme);
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        setTheme(btn.dataset.theme);
    });
});

// load saved theme or default
const saved = localStorage.getItem('theme') || 'red';
setTheme(saved);

// Gallery filter
document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const filter = tab.dataset.filter;
        document.querySelectorAll('.gallery-item').forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Pricing toggle
const pricingToggle = document.getElementById('pricingToggle');
pricingToggle.addEventListener('click', () => {
    pricingToggle.classList.toggle('yearly');
    const isYearly = pricingToggle.classList.contains('yearly');
    
    document.querySelectorAll('.price-value[data-monthly]').forEach(price => {
        price.textContent = isYearly ? price.dataset.yearly : price.dataset.monthly;
    });

    document.querySelectorAll('.pricing-toggle span').forEach((span, i) => {
        if (i === 0) span.classList.toggle('active', !isYearly);
        if (i === 1) span.classList.toggle('active', isYearly);
    });

    // Show/hide yearly total
    document.querySelectorAll('.price-yearly-total').forEach(total => {
        total.classList.toggle('visible', isYearly);
    });
});

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
    });
});

const popup = document.querySelector('.sign-in-form');

document.querySelectorAll('.plan-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        popup.classList.toggle('active');
    });
});


const form = document.getElementById('signupForm');
const successMessage = document.querySelector('.success-message');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll('input');

    let allFilled = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            allFilled = false;
        }
    });

    // If NOT all filled → show error
    if (!allFilled) {
        successMessage.classList.remove('active');
        errorMessage.classList.add('active');

        setTimeout(() => {
            errorMessage.classList.remove('active');
        }, 2500);

        return;
    }

    // If valid → show success
    errorMessage.classList.remove('active');
    successMessage.classList.add('active');

    form.reset();

    // hide popup after success
    setTimeout(() => {
        successMessage.classList.remove('active');

        popup.classList.remove('active'); // 👈 THIS hides the form
    }, 2000);
});
// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

document.getElementById('Get-Started').addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.getElementById('demo-container');

    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});

document.getElementById('pricing-button').addEventListener('click', function (e){ 
    e.preventDefault();

    const target = document.getElementById('pricing'); 

    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
}) 

// Gallery Popup
const galleryPopup = document.getElementById('galleryPopup');
const popupImage = document.getElementById('popupImage');
const popupPrompt = document.getElementById('popupPrompt');
const popupStyle = document.getElementById('popupStyle');
const popupClose = document.getElementById('popupClose');
const popupOverlay = document.querySelector('.popup-overlay');

const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const prompt = item.querySelector('.item-prompt');
        const style = item.querySelector('.item-style');
        
        if (img) popupImage.src = img.src;
        if (prompt) popupPrompt.textContent = prompt.textContent;
        if (style) popupStyle.textContent = style.textContent;
        
        galleryPopup.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

function closePopup() {
    galleryPopup.classList.remove('active');
    document.body.style.overflow = '';
}

const translations = {
    en: {
        nav_gallery: "Gallery", nav_features: "Features", nav_pricing: "Pricing",
        nav_faq: "FAQ", nav_cta: "Get Started",
        hero_badge: "Now with FLUX & SDXL Models",
        hero_line1: "TURN WORDS", hero_line2: "INTO ART", hero_line3: "in seconds",
        hero_desc: "Generate stunning, high-resolution images from simple text prompts. No design skills needed — just describe what you imagine.",
        stat_images: "Images Created", stat_speed: "Avg. Generation", stat_res: "Max Resolution",
        demo_label: "Your Prompt", demo_btn: "Generate Image", demo_placeholder: "Your creation will appear here",
        gallery_title: "COMMUNITY <span>SHOWCASE</span>",
        gallery_sub: "Explore what creators are building with PixelForge. Hover to see the prompts.",
        filter_all: "All", filter_portrait: "Portraits", filter_landscape: "Landscapes",
        filter_abstract: "Abstract", filter_anime: "Anime",
        features_title: "BUILT <span>DIFFERENT</span>",
        features_sub: "Not just another AI tool. Here's what sets us apart.",
        feat1_title: "LIGHTNING FAST", feat1_desc: "Generate stunning images in under 3 seconds. Our optimized infrastructure ensures you never wait around for inspiration.",
        feat2_title: "ANY ASPECT RATIO", feat2_desc: "Square, portrait, landscape, or custom dimensions. Perfect for social media, print, or web projects.",
        feat3_title: "MULTIPLE MODELS", feat3_desc: "Access SDXL, Flux, and proprietary models. Each optimized for different styles and use cases.",
        feat4_title: "ADVANCED CONTROLS", feat4_desc: "Fine-tune with negative prompts, seed control, guidance scale, and more. Full creative control.",
        feat5_title: "API ACCESS", feat5_desc: "Integrate PixelForge into your apps with our developer-friendly REST API. Full documentation included.",
        how_title: "HOW IT <span>WORKS</span>",
        step1_title: "DESCRIBE YOUR VISION", step1_desc: "Type a detailed description of the image you want to create. The more specific, the better.",
        step2_title: "CHOOSE YOUR STYLE", step2_desc: "Select from photorealistic, anime, digital art, oil painting, and many more artistic styles.",
        step3_title: "GENERATE & REFINE", step3_desc: "Get your image in seconds. Iterate, upscale, or edit until it's exactly right.",
        pricing_title: "SIMPLE <span>PRICING</span>", pricing_sub: "Start free. Scale as you grow.",
        toggle_monthly: "Monthly", toggle_yearly: "Yearly",
        faq_title: "QUESTIONS & <span>ANSWERS</span>",
        cta_eyebrow: "Start Creating Today",
        cta_title: "YOUR NEXT IMAGE <span>is just a prompt away</span>",
        cta_desc: "Join thousands of creators, marketers, and developers who use PixelForge to bring their ideas to life.",
        cta_primary: "Get Started Free",
        footer_desc: "Transform your imagination into stunning visuals with the power of AI.",
        footer_sub_title: "Stay Updated", footer_sub_desc: "Get the latest features and tips delivered to your inbox.",
    },
    es: {
        nav_gallery: "Galería", nav_features: "Funciones", nav_pricing: "Precios",
        nav_faq: "FAQ", nav_cta: "Empezar",
        hero_badge: "Ahora con modelos FLUX y SDXL",
        hero_line1: "CONVIERTE PALABRAS", hero_line2: "EN ARTE", hero_line3: "en segundos",
        hero_desc: "Genera imágenes impresionantes de alta resolución a partir de texto. Sin habilidades de diseño — solo describe lo que imaginas.",
        stat_images: "Imágenes Creadas", stat_speed: "Generación Prom.", stat_res: "Resolución Máx.",
        demo_label: "Tu Indicación", demo_btn: "Generar Imagen", demo_placeholder: "Tu creación aparecerá aquí",
        gallery_title: "ESCAPARATE <span>COMUNITARIO</span>",
        gallery_sub: "Explora lo que los creadores están construyendo con PixelForge.",
        filter_all: "Todo", filter_portrait: "Retratos", filter_landscape: "Paisajes",
        filter_abstract: "Abstracto", filter_anime: "Anime",
        features_title: "HECHO <span>DIFERENTE</span>",
        features_sub: "No es solo otra herramienta de IA. Esto es lo que nos diferencia.",
        feat1_title: "ULTRA RÁPIDO", feat1_desc: "Genera imágenes en menos de 3 segundos. Nuestra infraestructura optimizada garantiza que nunca esperes.",
        feat2_title: "CUALQUIER RELACIÓN", feat2_desc: "Cuadrado, retrato, paisaje o dimensiones personalizadas. Perfecto para redes sociales, impresión o web.",
        feat3_title: "MÚLTIPLES MODELOS", feat3_desc: "Accede a SDXL, Flux y modelos propietarios. Cada uno optimizado para diferentes estilos.",
        feat4_title: "CONTROLES AVANZADOS", feat4_desc: "Ajusta con indicaciones negativas, control de semilla, escala de guía y más.",
        feat5_title: "ACCESO API", feat5_desc: "Integra PixelForge en tus apps con nuestra API REST. Documentación completa incluida.",
        how_title: "CÓMO <span>FUNCIONA</span>",
        step1_title: "DESCRIBE TU VISIÓN", step1_desc: "Escribe una descripción detallada de la imagen que deseas crear. Cuanto más específico, mejor.",
        step2_title: "ELIGE TU ESTILO", step2_desc: "Selecciona entre fotorrealismo, anime, arte digital, pintura al óleo y muchos más.",
        step3_title: "GENERA Y REFINA", step3_desc: "Obtén tu imagen en segundos. Itera, amplía o edita hasta que sea perfecta.",
        pricing_title: "PRECIOS <span>SIMPLES</span>", pricing_sub: "Empieza gratis. Crece cuando quieras.",
        toggle_monthly: "Mensual", toggle_yearly: "Anual",
        faq_title: "PREGUNTAS Y <span>RESPUESTAS</span>",
        cta_eyebrow: "Empieza a Crear Hoy",
        cta_title: "TU PRÓXIMA IMAGEN <span>está a un prompt de distancia</span>",
        cta_desc: "Únete a miles de creadores, marketers y desarrolladores que usan PixelForge para dar vida a sus ideas.",
        cta_primary: "Empieza Gratis",
        footer_desc: "Transforma tu imaginación en visuales impresionantes con el poder de la IA.",
        footer_sub_title: "Mantente Actualizado", footer_sub_desc: "Recibe las últimas funciones y consejos en tu bandeja de entrada.",
    },
    fr: {
        nav_gallery: "Galerie", nav_features: "Fonctions", nav_pricing: "Tarifs",
        nav_faq: "FAQ", nav_cta: "Commencer",
        hero_badge: "Maintenant avec les modèles FLUX & SDXL",
        hero_line1: "TRANSFORMEZ LES MOTS", hero_line2: "EN ART", hero_line3: "en secondes",
        hero_desc: "Générez des images époustouflantes en haute résolution à partir de simples descriptions textuelles. Aucune compétence en design requise.",
        stat_images: "Images Créées", stat_speed: "Génération Moy.", stat_res: "Résolution Max.",
        demo_label: "Votre Invite", demo_btn: "Générer l'Image", demo_placeholder: "Votre création apparaîtra ici",
        gallery_title: "VITRINE <span>COMMUNAUTAIRE</span>",
        gallery_sub: "Explorez ce que les créateurs construisent avec PixelForge.",
        filter_all: "Tout", filter_portrait: "Portraits", filter_landscape: "Paysages",
        filter_abstract: "Abstrait", filter_anime: "Anime",
        features_title: "FAIT <span>DIFFÉREMMENT</span>",
        features_sub: "Pas juste un autre outil IA. Voici ce qui nous distingue.",
        feat1_title: "ULTRA RAPIDE", feat1_desc: "Générez des images époustouflantes en moins de 3 secondes grâce à notre infrastructure optimisée.",
        feat2_title: "TOUT FORMAT", feat2_desc: "Carré, portrait, paysage ou dimensions personnalisées. Parfait pour les réseaux sociaux, l'impression ou le web.",
        feat3_title: "PLUSIEURS MODÈLES", feat3_desc: "Accédez à SDXL, Flux et des modèles propriétaires. Chacun optimisé pour différents styles.",
        feat4_title: "CONTRÔLES AVANCÉS", feat4_desc: "Affinez avec des invites négatives, le contrôle de graine, l'échelle de guidage et plus encore.",
        feat5_title: "ACCÈS API", feat5_desc: "Intégrez PixelForge dans vos apps avec notre API REST conviviale. Documentation complète incluse.",
        how_title: "COMMENT ÇA <span>MARCHE</span>",
        step1_title: "DÉCRIVEZ VOTRE VISION", step1_desc: "Tapez une description détaillée de l'image que vous souhaitez créer. Plus c'est précis, mieux c'est.",
        step2_title: "CHOISISSEZ VOTRE STYLE", step2_desc: "Choisissez parmi photoréaliste, anime, art numérique, peinture à l'huile et bien d'autres.",
        step3_title: "GÉNÉREZ & AFFINEZ", step3_desc: "Obtenez votre image en secondes. Itérez, agrandissez ou modifiez jusqu'à ce qu'elle soit parfaite.",
        pricing_title: "TARIFS <span>SIMPLES</span>", pricing_sub: "Commencez gratuitement. Évoluez selon vos besoins.",
        toggle_monthly: "Mensuel", toggle_yearly: "Annuel",
        faq_title: "QUESTIONS & <span>RÉPONSES</span>",
        cta_eyebrow: "Commencez à Créer Aujourd'hui",
        cta_title: "VOTRE PROCHAINE IMAGE <span>n'est qu'à une invite de distance</span>",
        cta_desc: "Rejoignez des milliers de créateurs, marketeurs et développeurs qui utilisent PixelForge.",
        cta_primary: "Commencer Gratuitement",
        footer_desc: "Transformez votre imagination en visuels époustouflants grâce à la puissance de l'IA.",
        footer_sub_title: "Restez Informé", footer_sub_desc: "Recevez les dernières fonctionnalités et conseils dans votre boîte mail.",
    },
    ua: {
        nav_gallery: "Галерея", nav_features: "Функції", nav_pricing: "Ціни",
        nav_faq: "FAQ", nav_cta: "Почати",
        hero_badge: "Тепер з моделями FLUX і SDXL",
        hero_line1: "ПЕРЕТВОРЮЙ СЛОВА", hero_line2: "НА МИСТЕЦТВО", hero_line3: "за секунди",
        hero_desc: "Генеруй вражаючі зображення високої роздільної здатності із простих текстових підказок. Без навичок дизайну — просто опиши, що уявляєш.",
        stat_images: "Створено Зображень", stat_speed: "Сер. Генерація", stat_res: "Макс. Роздільність",
        demo_label: "Ваш Запит", demo_btn: "Згенерувати", demo_placeholder: "Ваш витвір з'явиться тут",
        gallery_title: "ВІТРИНА <span>СПІЛЬНОТИ</span>",
        gallery_sub: "Досліджуй, що творці створюють у PixelForge. Наведи, щоб побачити підказки.",
        filter_all: "Усе", filter_portrait: "Портрети", filter_landscape: "Пейзажі",
        filter_abstract: "Абстракція", filter_anime: "Аніме",
        features_title: "ЗРОБЛЕНО <span>ІНАКШЕ</span>",
        features_sub: "Не просто ще один ШІ-інструмент. Ось що нас вирізняє.",
        feat1_title: "БЛИСКАВИЧНО", feat1_desc: "Генеруй вражаючі зображення менш ніж за 3 секунди. Наша оптимізована інфраструктура гарантує швидкість.",
        feat2_title: "БУДЬ-ЯКЕ СПІВВІДНОШЕННЯ", feat2_desc: "Квадрат, портрет, пейзаж або власні розміри. Ідеально для соцмереж, друку або вебу.",
        feat3_title: "КІЛЬКА МОДЕЛЕЙ", feat3_desc: "Доступ до SDXL, Flux та власних моделей. Кожна оптимізована для різних стилів.",
        feat4_title: "РОЗШИРЕНІ НАЛАШТУВАННЯ", feat4_desc: "Налаштовуй з негативними підказками, керуванням зерном, масштабом напрямку та багатьом іншим.",
        feat5_title: "ДОСТУП ДО API", feat5_desc: "Інтегруй PixelForge у свої додатки з нашим зручним REST API. Повна документація включена.",
        how_title: "ЯК ЦЕ <span>ПРАЦЮЄ</span>",
        step1_title: "ОПИШИ СВОЄ БАЧЕННЯ", step1_desc: "Введи детальний опис зображення, яке хочеш створити. Чим конкретніше — тим краще.",
        step2_title: "ОБЕРИ СТИЛЬ", step2_desc: "Вибирай з фотореалізму, аніме, цифрового мистецтва, олійного живопису та багатьох інших.",
        step3_title: "ГЕНЕРУЙ І ВДОСКОНАЛЮЙ", step3_desc: "Отримай зображення за секунди. Повторюй, збільшуй або редагуй, доки не стане ідеальним.",
        pricing_title: "ПРОСТІ <span>ЦІНИ</span>", pricing_sub: "Починай безкоштовно. Зростай коли захочеш.",
        toggle_monthly: "Щомісяця", toggle_yearly: "Щороку",
        faq_title: "ПИТАННЯ І <span>ВІДПОВІДІ</span>",
        cta_eyebrow: "Почни Творити Сьогодні",
        cta_title: "ТВОЄ НАСТУПНЕ ЗОБРАЖЕННЯ <span>лише один запит від тебе</span>",
        cta_desc: "Приєднуйся до тисяч творців, маркетологів і розробників, які використовують PixelForge.",
        cta_primary: "Почати Безкоштовно",
        footer_desc: "Перетвори свою уяву на вражаючу візуалізацію за допомогою штучного інтелекту.",
        footer_sub_title: "Будь в Курсі", footer_sub_desc: "Отримуй останні функції та поради на свою електронну пошту.",
    }
};

function applyLanguage(lang) {
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });
    localStorage.setItem('lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyLanguage(btn.dataset.lang);
    });
});

// Load saved language
const savedLang = localStorage.getItem('lang') || 'en';
applyLanguage(savedLang);
document.querySelector(`[data-lang="${savedLang}"]`)?.classList.add('active');

popupClose.addEventListener('click', closePopup);
popupOverlay.addEventListener('click', closePopup);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && galleryPopup.classList.contains('active')) {
        closePopup();
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .gallery-item, .price-card, .how-step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
