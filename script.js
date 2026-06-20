// Typing Animation
const typedTextElement = document.getElementById('typed-text');
let textArray = [
    '2nd Year CS Student | Problem Solver | 50+ LeetCode Problems',
    'Building scalable web applications',
    'Passionate about clean code and algorithms'
];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextElement.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 50);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 30);
    } else {
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        setTimeout(type, 500);
    }
}

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scroll and Active Nav Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Fade In Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Navbar background on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
    }
});

// Language Switcher
const translations = {
    en: {
        // Navigation
        navHome: 'Home',
        navAbout: 'About',
        navSkills: 'Skills',
        navProjects: 'Projects',
        navContact: 'Contact',

        // Hero
        heroTitle: "Hi, I'm <span class=\"gradient-text\">Ulan</span>",
        heroSubtitle: 'Fullstack Developer',
        heroTagline: [
            '2nd Year CS Student | Problem Solver | 50+ LeetCode Problems',
            'Building scalable web applications',
            'Passionate about clean code and algorithms'
        ],
        btnProjects: 'View Projects',
        btnContact: 'Contact Me',

        // About
        aboutTitle: 'About Me',
        aboutP1: "I'm a <strong>2nd Year Computer Systems and Software Student</strong> at KBTU (Kazakhstan-British Technical University) with a passion for building scalable web applications and solving complex algorithmic challenges.",
        aboutP2: "As a <strong>strong junior developer</strong>, I specialize in both frontend and backend development, with expertise in <strong>C++</strong> and <strong>Python</strong>. I have a solid understanding of programming language concepts and love learning new technologies.",
        aboutP3: "I'm passionate about <strong>game development</strong> and <strong>operating systems</strong>. I'm open to opportunities across all areas of software development and eager to expand my expertise.",
        detailEducation: 'Education:',
        detailEducationValue: 'KBTU, Computer Systems and Software',
        detailLevel: 'Level:',
        detailLevelValue: 'Strong Junior Developer',
        detailLanguages: 'Languages:',
        detailLanguagesValue: 'Kazakh (Native), Russian (Native), English (B2)',
        detailFocus: 'Focus:',
        detailFocusValue: 'Fullstack Development',

        // LeetCode
        leetcodeTitle: 'LeetCode Achievements',
        leetcodeDesc: 'Strong algorithmic thinking and problem-solving skills demonstrated through solving <strong>50+ LeetCode problems</strong>. Proficient in data structures, algorithms, and competitive programming.',
        leetcodeBtn: 'View LeetCode Profile',

        // Contact
        contactTitle: 'Get In Touch',
        contactSubtitle: "I'm currently looking for remote opportunities. Let's connect!",
        contactEmail: 'Email',
        contactTelegram: 'Telegram',
        contactGithub: 'GitHub',
        contactLeetcode: 'LeetCode'
    },
    ru: {
        navHome: 'Главная',
        navAbout: 'Обо мне',
        navSkills: 'Навыки',
        navProjects: 'Проекты',
        navContact: 'Контакты',

        heroTitle: "Привет, я <span class=\"gradient-text\">Улан</span>",
        heroSubtitle: 'Fullstack разработчик',
        heroTagline: [
            'Студент 2 курса CS | Решаю задачи | 50+ задач на LeetCode',
            'Создаю масштабируемые веб-приложения',
            'Увлечён чистым кодом и алгоритмами'
        ],
        btnProjects: 'Мои проекты',
        btnContact: 'Связаться',

        aboutTitle: 'Обо мне',
        aboutP1: "Я студент <strong>2 курса по специальности Компьютерные системы и ПО</strong> в KBTU (Казахстанско-Британский Технический Университет). Увлекаюсь созданием масштабируемых веб-приложений и решением сложных алгоритмических задач.",
        aboutP2: "Как <strong>strong junior разработчик</strong>, специализируюсь на frontend и backend разработке, с экспертизой в <strong>C++</strong> и <strong>Python</strong>. Имею твёрдое понимание концепций языков программирования и люблю изучать новые технологии.",
        aboutP3: "Увлекаюсь <strong>разработкой игр</strong> и <strong>операционными системами</strong>. Открыт для возможностей во всех направлениях разработки ПО и стремлюсь расширять свою экспертизу.",
        detailEducation: 'Образование:',
        detailEducationValue: 'KBTU, Компьютерные системы и ПО',
        detailLevel: 'Уровень:',
        detailLevelValue: 'Strong Junior разработчик',
        detailLanguages: 'Языки:',
        detailLanguagesValue: 'Казахский (родной), Русский (родной), Английский (B2)',
        detailFocus: 'Фокус:',
        detailFocusValue: 'Fullstack разработка',

        leetcodeTitle: 'Достижения на LeetCode',
        leetcodeDesc: 'Сильное алгоритмическое мышление и навыки решения задач, продемонстрированные через решение <strong>50+ задач на LeetCode</strong>. Владею структурами данных, алгоритмами и спортивным программированием.',
        leetcodeBtn: 'Профиль на LeetCode',

        contactTitle: 'Свяжитесь со мной',
        contactSubtitle: 'Сейчас ищу удалённые возможности. Давайте пообщаемся!',
        contactEmail: 'Email',
        contactTelegram: 'Telegram',
        contactGithub: 'GitHub',
        contactLeetcode: 'LeetCode'
    },
    kk: {
        navHome: 'Басты бет',
        navAbout: 'Мен туралы',
        navSkills: 'Дағдылар',
        navProjects: 'Жобалар',
        navContact: 'Байланыс',

        heroTitle: "Сәлем, мен <span class=\"gradient-text\">Ұлан</span>",
        heroSubtitle: 'Fullstack әзірлеуші',
        heroTagline: [
            '2 курс CS студенті | Есептерді шешемін | LeetCode-та 50+ есеп',
            'Масштабталатын веб-қосымшаларды жасаймын',
            'Таза код пен алгоритмдерге қызығушымын'
        ],
        btnProjects: 'Жобаларды көру',
        btnContact: 'Хабарласу',

        aboutTitle: 'Мен туралы',
        aboutP1: "Мен KBTU (Қазақстан-Британ Техникалық Университеті) <strong>Компьютерлік жүйелер және БҚ мамандығының 2 курс студентімін</strong>. Масштабталатын веб-қосымшаларды жасауға және күрделі алгоритмдік есептерді шешуге қызығамын.",
        aboutP2: "<strong>Strong junior әзірлеуші</strong> ретінде, frontend және backend әзірлеуде маманданамын, <strong>C++</strong> және <strong>Python</strong> тілдерінде тәжірибем бар. Программалау тілдерінің концепцияларын жақсы түсінемін және жаңа технологияларды үйренуді ұнатамын.",
        aboutP3: "<strong>Ойын әзірлеуге</strong> және <strong>операциялық жүйелерге</strong> қызығамын. БҚ әзірлеудің барлық бағыттарында жұмыс істеуге дайынмын және өз тәжірибемді кеңейтуге ұмтыламын.",
        detailEducation: 'Білім:',
        detailEducationValue: 'KBTU, Компьютерлік жүйелер және БҚ',
        detailLevel: 'Деңгей:',
        detailLevelValue: 'Strong Junior әзірлеуші',
        detailLanguages: 'Тілдер:',
        detailLanguagesValue: 'Қазақша (ана тілі), Орысша (ана тілі), Ағылшынша (B2)',
        detailFocus: 'Бағыт:',
        detailFocusValue: 'Fullstack әзірлеу',

        leetcodeTitle: 'LeetCode жетістіктері',
        leetcodeDesc: 'Күшті алгоритмдік ойлау және есептерді шешу дағдылары <strong>LeetCode-та 50+ есеп</strong> шешу арқылы дәлелденген. Деректер құрылымдары, алгоритмдер және спорттық программалауда білікті.',
        leetcodeBtn: 'LeetCode профилі',

        contactTitle: 'Хабарласыңыз',
        contactSubtitle: 'Қазір қашықтан жұмыс мүмкіндіктерін іздеп жүрмін. Хабарласайық!',
        contactEmail: 'Email',
        contactTelegram: 'Telegram',
        contactGithub: 'GitHub',
        contactLeetcode: 'LeetCode'
    }
};

let currentLang = localStorage.getItem('portfolioLang') || 'en';

function applyTranslations(lang) {
    const t = translations[lang];

    // Navigation
    document.querySelectorAll('.nav-link').forEach((link, i) => {
        const keys = ['navHome', 'navAbout', 'navSkills', 'navProjects', 'navContact'];
        link.textContent = t[keys[i]];
    });

    // Hero
    document.querySelector('.hero-title').innerHTML = t.heroTitle;
    document.querySelector('.hero-subtitle').textContent = t.heroSubtitle;
    document.querySelectorAll('.hero-buttons .btn')[0].textContent = t.btnProjects;
    document.querySelectorAll('.hero-buttons .btn')[1].textContent = t.btnContact;

    // Update typing animation array
    textArray = t.heroTagline;
    textArrayIndex = 0;
    charIndex = 0;
    typedTextElement.textContent = '';

    // About
    document.querySelector('#about .section-title').textContent = t.aboutTitle;
    const aboutPs = document.querySelectorAll('.about-description');
    aboutPs[0].innerHTML = t.aboutP1;
    aboutPs[1].innerHTML = t.aboutP2;
    if (aboutPs[2]) aboutPs[2].innerHTML = t.aboutP3;

    document.querySelectorAll('.detail-label')[0].textContent = t.detailEducation;
    document.querySelectorAll('.detail-value')[0].textContent = t.detailEducationValue;
    document.querySelectorAll('.detail-label')[1].textContent = t.detailLevel;
    document.querySelectorAll('.detail-value')[1].textContent = t.detailLevelValue;
    document.querySelectorAll('.detail-label')[2].textContent = t.detailLanguages;
    document.querySelectorAll('.detail-value')[2].textContent = t.detailLanguagesValue;
    document.querySelectorAll('.detail-label')[3].textContent = t.detailFocus;
    document.querySelectorAll('.detail-value')[3].textContent = t.detailFocusValue;

    // LeetCode
    document.querySelector('#leetcode .section-title').textContent = t.leetcodeTitle;
    document.querySelector('.leetcode-description').innerHTML = t.leetcodeDesc;
    document.querySelector('.leetcode-text .btn').textContent = t.leetcodeBtn;

    // Contact
    document.querySelector('#contact .section-title').textContent = t.contactTitle;
    document.querySelector('.contact-subtitle').textContent = t.contactSubtitle;
    const contactTitles = document.querySelectorAll('.contact-title');
    contactTitles[0].textContent = t.contactEmail;
    contactTitles[1].textContent = t.contactTelegram;
    contactTitles[2].textContent = t.contactGithub;
    contactTitles[3].textContent = t.contactLeetcode;
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000);

    const fadeElements = document.querySelectorAll(
        '.skill-category, .project-card, .contact-card, .stat-card, .about-text'
    );

    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    const langBtns = document.querySelectorAll('.lang-btn');

    applyTranslations(currentLang);
    document.querySelector(`[data-lang="${currentLang}"]`)?.classList.add('active');

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;

            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            currentLang = lang;
            localStorage.setItem('portfolioLang', lang);
            applyTranslations(lang);
        });
    });
});
