
// Données des case studies (à remplacer par vos propres données)
const caseStudies = [
    {
        id: 1,
        title: "Huly",
        description: "Huly, an innovative open-source platform, combines the functionalities of Linear, Jira, Slack, and Notion into one comprehensive tool for process, project, time, and knowledge management.",
        summary: "Huly, an innovative open-source platform, combines the functionalities of Linear, Jira, Slack, and Notion into one comprehensive tool for process, project, time, and knowledge management.",
        about: [
            "The project commenced after Huly's CEO, impressed by our past projects shared on social media, reached out to discuss timelines and budgets that would meet their highest standards. Our challenge was to design a web presence that was eye-catching and appealing, capable of conveying a complex set of features in a comprehensive manner.",
            "Our approach involved closely collaborating with Huly's team to create a clean, modern website that emphasized the user-friendliness of the extensive feature set, integrating smooth animations to boost user engagement. This agile, iterative process allowed for continuous refinement, aligning the design closely with Huly's product functionality.",
            "The resulting website showcased Huly's promise of streamlined team collaboration, setting a new benchmark in design that supports complex functionalities in a user-friendly manner. Despite the challenges of integrating complex animations into a cohesive layout, the successful launch of the Huly website stands as a testament to our team's expertise in creating a landing page that is both impressive and intuitive for users to navigate."
        ],
        results: [
            { title: "Developed a premium brand identity", description: "Created a distinctive visual identity that reflects Huly's innovative approach to team collaboration." },
            { title: "Created animations to highlight every product feature", description: "Implemented smooth, engaging animations to demonstrate Huly's comprehensive feature set." },
            { title: "Ensured exceptional performance despite resource-intensive pages", description: "Optimized the website to maintain fast load times and smooth performance across all devices." }
        ],
        image: "/dist/assets/images/Aurores-Boréales.png",
        logo: "/dist/assets/images/logo-gtz-square.svg", // Chemin vers le logo
        services: ["Développement Web", "UX/UI Design"],
        tools: ["Figma", "Javascript", "SCSS"],
        link: "https://huly.io",
        // whatsappLink: "https://wa.me/33612345678", // Lien WhatsApp
        // quoteForm: "/contact" // Lien vers le formulaire de devis
    },
    {
        id: 2,
        title: "Refonte site e-commerce Luxelle",
        description: "Refonte complète du site e-commerce Luxelle pour améliorer l'expérience utilisateur et augmenter le taux de conversion.",
        summary: "Complete redesign of Luxelle e-commerce website to improve user experience and increase conversion rates.",
        about: [
            "Luxelle approached us with the need to modernize their outdated e-commerce platform that was suffering from high bounce rates and low conversion. The challenge was to create a seamless shopping experience that reflected their luxury brand identity while improving performance and usability.",
            "We conducted extensive user research to identify pain points in the existing shopping journey. Our design team then created a modern, clean interface with improved navigation and product discovery features. The development team implemented a performant front-end with smooth animations and transitions to enhance the premium feel.",
            "The new platform resulted in a 35% increase in conversion rates and a significant reduction in bounce rates. Customer feedback highlighted the improved user experience and faster checkout process as key benefits of the redesign."
        ],
        results: [
            { title: "35% increase in conversion rates", description: "Improved UX and streamlined checkout process led to higher conversions." },
            { title: "Reduced bounce rate by 40%", description: "More engaging design and faster load times kept users on site longer." },
            { title: "Mobile conversion improved by 50%", description: "Fully responsive design optimized for all devices." }
        ],
        image: "/dist/assets/images/Aurores-Boréales.png",
        logo: "/dist/assets/images/logo-gtz-square.svg", // Chemin vers le logo
        services: ["Développement Web", "Design graphique", "UX/UI Design"],
        tools: ["Angular", "SCSS", "Typescript"],
        link: "#luxelle"
    },
    {
        id: 3,
        title: "Application mobile FitTrack",
        description: "Développement d'une application mobile pour le suivi d'activités sportives et de nutrition avec synchronisation cloud.",
        summary: "Development of a mobile application for tracking sports activities and nutrition with cloud synchronization.",
        about: [
            "FitTrack wanted to create a comprehensive fitness tracking app that would stand out in a crowded market. The challenge was to develop an app that combined activity tracking with nutrition planning in an intuitive interface.",
            "Our team designed a clean, motivational interface with personalized dashboards and progress tracking. The development included integration with various fitness devices and a robust backend for data synchronization across devices.",
            "The app launched with positive reviews for its comprehensive feature set and ease of use. Within six months, it achieved over 100,000 downloads and became a top-rated fitness app in its category."
        ],
        results: [
            { title: "100,000+ downloads in first 6 months", description: "Successful launch and marketing campaign drove rapid adoption." },
            { title: "4.8/5 average app store rating", description: "Users praised the intuitive interface and comprehensive features." },
            { title: "85% daily active user rate", description: "High engagement showed the app's value to users." }
        ],
        image: "/dist/assets/images/Aurores-Boréales.png",
        logo: "/dist/assets/images/logo-gtz-square.svg", // Chemin vers le logo
        services: ["Développement Mobile", "UX/UI Design"],
        tools: ["Android", "Java", "Figma"],
        link: "#fittrack"
    },
    {
        id: 4,
        title: "Plateforme éducative LearnPlus",
        description: "Création d'une plateforme éducative moderne avec des cours interactifs et un système de progression personnalisé.",
        summary: "Creation of a modern educational platform with interactive courses and personalized progress tracking.",
        about: [
            "LearnPlus aimed to disrupt the online education space with a platform that offered truly interactive learning experiences. The challenge was to create a system that could support various content types while providing meaningful progress tracking.",
            "We developed a modular platform that allowed educators to create rich, interactive content with quizzes, videos, and hands-on exercises. The system included AI-powered recommendations and personalized learning paths based on user progress.",
            "The platform successfully onboarded several major educational institutions as partners and saw rapid user growth. Analytics showed significantly higher completion rates compared to traditional online courses."
        ],
        results: [
            { title: "60% higher completion rates", description: "Interactive content and progress tracking kept users engaged." },
            { title: "50+ educational partners onboarded", description: "Platform attracted major institutions as content providers." },
            { title: "Scalable architecture for future growth", description: "System designed to handle increasing user base and content." }
        ],
        logo: "/dist/assets/images/logo-gtz-square.svg", // Chemin vers le logo
        image: "/dist/assets/images/Aurores-Boréales.png",        
        services: ["Développement Web", "Développement Mobile", "UX/UI Design"],
        tools: ["Angular", "Typescript", "SCSS", "Figma"],
        link: "#learnplus"
    },
    {
        id: 5,
        title: "Stratégie de communication GreenLife",
        description: "Développement et mise en œuvre d'une stratégie de communication digitale pour la marque écologique GreenLife.",
        summary: "Development and implementation of a digital communication strategy for eco-friendly brand GreenLife.",
        about: [
            "GreenLife needed to establish itself as a leader in sustainable living products but struggled with inconsistent messaging across channels. Our challenge was to create a cohesive brand voice and communication strategy.",
            "We conducted market research to identify their target audience's values and concerns. Based on these insights, we developed a comprehensive content strategy across social media, email, and their website with consistent messaging about sustainability.",
            "The new strategy resulted in increased brand awareness and engagement. Social media followers grew by 300% within six months, and the website saw a significant increase in traffic and time spent on site."
        ],
        results: [
            { title: "300% increase in social followers", description: "Consistent, valuable content attracted and retained audience." },
            { title: "40% higher engagement rates", description: "Messaging resonated strongly with target demographic." },
            { title: "Established as industry thought leader", description: "Positioned brand as authority on sustainable living." }
        ],
        image: "/dist/assets/images/Aurores-Boréales.png",
        logo: "/dist/assets/images/logo-gtz-square.svg", // Chemin vers le logo
        services: ["Accompagnement CM", "Design graphique"],
        tools: ["Figma"],
        link: "#greenlife"
    },
    {
        id: 6,
        title: "Site vitrine TechSolutions",
        description: "Création d'un site vitrine moderne et responsive pour l'entreprise de services informatiques TechSolutions.",
        summary: "Creation of a modern responsive showcase website for IT services company TechSolutions.",
        about: [
            "TechSolutions needed a website that would showcase their technical expertise while being accessible to non-technical decision makers. The challenge was to balance technical depth with approachable design.",
            "We created a clean, professional design with interactive elements to demonstrate their services. The content was structured to guide visitors through their service offerings with clear calls to action at each stage.",
            "The new website became a powerful lead generation tool, with a 50% increase in contact form submissions. Client feedback highlighted the improved clarity of service offerings and company values."
        ],
        results: [
            { title: "50% more contact submissions", description: "Clear CTAs and improved UX drove more conversions." },
            { title: "Reduced bounce rate by 35%", description: "Engaging content kept visitors exploring the site." },
            { title: "Improved search rankings", description: "SEO optimization increased organic traffic." }
        ],
        image: "/dist/assets/images/Aurores-Boréales.png",
        logo: "/dist/assets/images/logo-gtz-square.svg", // Chemin vers le logo
        services: ["Développement Web", "Design graphique", "SEO"],
        tools: ["Astro JS", "Javascript", "SCSS", "Hostinger"],
        link: "#techsolutions"
    },
    {
        id: 7,
        title: "Blog culinaire FoodLover",
        description: "Refonte complète d'un blog culinaire avec optimisation des performances et du référencement.",
        summary: "Complete redesign of a culinary blog with performance and SEO optimization.",
        about: [
            "FoodLover had built a loyal following but their website was slow and difficult to navigate. The challenge was to modernize the platform while maintaining its unique personality and improving technical performance.",
            "We redesigned the interface to highlight beautiful food photography while improving navigation and recipe discovery. Technical optimizations included image compression, lazy loading, and caching strategies to dramatically improve load times.",
            "The redesigned blog saw immediate improvements in user engagement and traffic. Average session duration increased by 40%, and the improved SEO performance drove more organic traffic from search engines."
        ],
        results: [
            { title: "75% faster page loads", description: "Technical optimizations dramatically improved performance." },
            { title: "40% longer session duration", description: "Improved UX kept readers engaged with content." },
            { title: "Doubled ad revenue", description: "Better layout and engagement increased ad visibility." }
        ],
        image: "/dist/assets/images/Aurores-Boréales.png",
        logo: "/dist/assets/images/logo-gtz-square.svg", // Chemin vers le logo
        services: ["Développement Web", "SEO"],
        tools: ["Wordpress", "Javascript", "Hostinger"],
        link: "#foodlover"
    },
    {
        id: 8,
        title: "Application de gestion TaskMaster",
        description: "Développement d'une application web de gestion de tâches et de projets pour les équipes à distance.",
        summary: "Development of a web application for task and project management for remote teams.",
        about: [
            "TaskMaster wanted to create a project management tool specifically designed for creative teams working remotely. The challenge was to balance powerful features with an intuitive interface that would appeal to non-technical users.",
            "We conducted user research with creative professionals to understand their workflow pain points. The resulting design focused on visual task management with customizable views and seamless collaboration features.",
            "The application quickly gained traction among design agencies and creative teams. User feedback highlighted the thoughtful features for creative workflows that were missing from other project management tools."
        ],
        results: [
            { title: "Adopted by 500+ teams", description: "Product-market fit achieved with target audience." },
            { title: "4.7/5 user satisfaction", description: "Users praised the intuitive interface and specialized features." },
            { title: "80% daily active usage", description: "High engagement showed the tool became essential to workflows." }
        ],
        image: "/dist/assets/images/Aurores-Boréales.png",
        logo: "/dist/assets/images/logo-gtz-square.svg", // Chemin vers le logo
        services: ["Développement Web", "UX/UI Design"],
        tools: ["Angular", "Typescript", "SCSS", "Figma"],
        link: "#taskmaster"
    },
    {
        id: 9,
        title: "Refonte identité visuelle ArtGallery",
        description: "Refonte complète de l'identité visuelle d'une galerie d'art contemporain et application sur tous les supports.",
        summary: "Complete redesign of visual identity for a contemporary art gallery and application across all media.",
        about: [
            "ArtGallery needed a visual identity refresh to better reflect their evolving focus on contemporary digital art. The challenge was to create a flexible system that could adapt to various exhibitions while maintaining brand recognition.",
            "We developed a bold, minimalist identity system with a dynamic color palette that could shift to complement different artworks. The system included guidelines for print materials, digital platforms, and gallery signage.",
            "The new identity received praise from artists and visitors alike for its sophistication and flexibility. It successfully positioned the gallery as a forward-thinking institution while providing a cohesive experience across all touchpoints."
        ],
        results: [
            { title: "Unified brand experience", description: "Consistent identity across all platforms and materials." },
            { title: "Increased media coverage", description: "Distinctive visual identity attracted press attention." },
            { title: "Positive artist feedback", description: "Artists appreciated how the design complemented their work." }
        ],
        image: "/dist/assets/images/Aurores-Boréales.png",
        logo: "/dist/assets/images/logo-gtz-square.svg", // Chemin vers le logo
        services: ["Design graphique", "UX/UI Design"],
        tools: ["Figma"],
        link: "#artgallery"
    },
    {
        id: 10,
        title: "Boutique en ligne VintageWorld",
        description: "Création d'une boutique en ligne pour articles vintage avec système de filtrage avancé et paiement sécurisé.",
        summary: "Creation of an online store for vintage items with advanced filtering system and secure payment.",
        about: [
            "VintageWorld needed an e-commerce platform that could showcase the unique character of their vintage items while providing modern shopping conveniences. The challenge was to design a system that could handle highly variable product attributes.",
            "We created a custom filtering system that allowed shoppers to browse by era, style, condition, and other vintage-specific attributes. The product pages were designed to highlight item uniqueness with storytelling elements.",
            "The store successfully translated the charm of physical vintage shopping to the digital space. Conversion rates exceeded industry averages, and customer feedback praised the intuitive browsing experience for such a diverse inventory."
        ],
        results: [
            { title: "30% above average conversion", description: "Effective product presentation drove purchases." },
            { title: "Advanced filtering system", description: "Custom solution for unique vintage attributes." },
            { title: "Secure payment integration", description: "Built trust for high-value vintage transactions." }
        ],
        image: "/dist/assets/images/Aurores-Boréales.png",
        logo: "/dist/assets/images/logo-gtz-square.svg", // Chemin vers le logo
        services: ["Développement Web", "Design graphique", "SEO"],
        tools: ["Astro JS", "Javascript", "SCSS", "Hostinger"],
        link: "#vintageworld"
    }
];

// Fonction pour gérer les dropdowns (version optimisée)
function initializeDropdowns() {
    const filterTitles = document.querySelectorAll('.filter-title');
    
    // Gestion du clic sur les titres de filtre
    filterTitles.forEach(title => {
        title.addEventListener('click', function(e) {
            e.stopPropagation();
            const targetId = this.getAttribute('data-target');
            const targetOptions = document.getElementById(targetId);
            
            // Fermer tous les autres dropdowns
            document.querySelectorAll('.filter-options').forEach(options => {
                if (options !== targetOptions) {
                    options.classList.remove('show');
                    options.previousElementSibling.classList.remove('active');
                }
            });
            
            // Toggle la classe active sur le titre
            this.classList.toggle('active');
            
            // Toggle la classe show sur les options
            targetOptions.classList.toggle('show');
        });
    });

    // Empêcher la fermeture quand on clique dans un dropdown
    document.querySelectorAll('.filter-options').forEach(options => {
        options.addEventListener('click', function(e) {
            e.stopPropagation(); // Empêche la propagation du clic
        });
    });

    // Fermer les dropdowns quand on clique ailleurs
    // document.addEventListener('click', function() {
    //     document.querySelectorAll('.filter-options').forEach(options => {
    //         options.classList.remove('show');
    //         options.previousElementSibling.classList.remove('active');
    //     });
    // });
}

// Fonction pour afficher les case studies
function renderCaseStudies(studies) {
    const container = document.getElementById('case-studies-container');
    container.innerHTML = '';
    
    if (studies.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `
            <h3>Aucun résultat trouvé</h3>
            <p>Veuillez modifier vos filtres pour voir plus de case studies.</p>
        `;
        container.appendChild(noResults);
        return;
    }
    
    studies.forEach(study => {
        const caseStudyElement = document.createElement('div');
        caseStudyElement.className = 'case-study';
        caseStudyElement.dataset.id = study.id;
        
        caseStudyElement.innerHTML = `
            <img src="${study.image}" alt="${study.title}" class="case-study-image">
            <div class="case-study-content">
                <h2 class="case-study-title">${study.title}</h2>
                <p class="case-study-description">${study.description}</p>
                <div class="case-study-meta">
                    ${study.services.map(service => `<span class="tag service-tag">${service}</span>`).join('')}
                    ${study.tools.map(tool => `<span class="tag tool-tag">${tool}</span>`).join('')}
                </div>
                <div class="case-study-link">Voir le case study →</div>
            </div>
        `;
        
        // Ajout de l'event listener pour ouvrir la modale
        caseStudyElement.addEventListener('click', () => openModal(study.id));
        
        container.appendChild(caseStudyElement);
    });
}

// Fonction pour filtrer les case studies en fonction des filtres sélectionnés
function filterCaseStudies() {
    const selectedServices = [...document.querySelectorAll('#service-filters input:checked')].map(input => input.value);
    const selectedTools = [...document.querySelectorAll('#tool-filters input:checked')].map(input => input.value);
    
    let filteredStudies = caseStudies;
    
    // Filtre par services
    if (selectedServices.length > 0) {
        filteredStudies = filteredStudies.filter(study => 
            selectedServices.some(service => study.services.includes(service))
        );
    }
    
    // Filtre par outils
    if (selectedTools.length > 0) {
        filteredStudies = filteredStudies.filter(study => 
            selectedTools.some(tool => study.tools.includes(tool))
        );
    }
    
    renderCaseStudies(filteredStudies);
}


// Fonction pour ouvrir la modale avec les détails du case study
function openModal(studyId) {
    const study = caseStudies.find(s => s.id === studyId);
    if (!study) return;

    // Mettre à jour le contenu de la modale
    document.getElementById('modal-title').textContent = study.title;
    document.getElementById('modal-image').src = study.image;
    document.getElementById('modal-image').alt = study.title;
    document.getElementById('modal-summary').textContent = study.summary;
    document.getElementById('modal-link').href = study.link;

    // Mettre à jour la section "About the project"
    const aboutContainer = document.getElementById('modal-about');
    aboutContainer.innerHTML = study.about.map(paragraph => `<p>${paragraph}</p>`).join('');

    // Mettre à jour le logo
    const logoContainer = document.querySelector('.company-logo-container');
    logoContainer.innerHTML = study.logo 
        ? `<img src="${study.logo}" alt="${study.title} Logo" class="company-logo">`
        : `<div class="text-logo">${study.title}</div>`;

    // Mettre à jour les résultats clés
    const resultsContainer = document.getElementById('modal-results');
    resultsContainer.innerHTML = study.results.map(result => `
        <div class="modal-result-item">
            <h4>${result.title}</h4>
            <p>${result.description}</p>
        </div>
    `).join('');

    // Mettre à jour les tags de services
    const servicesContainer = document.getElementById('modal-services');
    servicesContainer.innerHTML = study.services.map(service => `
        <span class="tag service-tag">${service}</span>
    `).join('');

    // Mettre à jour les tags d'outils
    const toolsContainer = document.getElementById('modal-tools');
    toolsContainer.innerHTML = study.tools.map(tool => `
        <span class="tag tool-tag">${tool}</span>
    `).join('');

    // Mettre à jour le lien WhatsApp
    // if (study.whatsappLink) {
    //     document.querySelector('.whatsapp-btn').href = study.whatsappLink;
    // }

    // Mettre à jour le lien de devis
    // if (study.quoteForm) {
    //     document.getElementById('request-quote').onclick = function() {
    //         window.location.href = study.quoteForm;
    //     };
    // }

    // Mettre à jour les recommandations (projets similaires)
    const recommendationsContainer = document.getElementById('recommendations-grid');

    // Trouver des projets similaires (mêmes services ou outils)
    const similarStudies = caseStudies
        .filter(s => 
            s.id !== studyId && 
            (
                s.services.some(service => study.services.includes(service)) || 
                s.tools.some(tool => study.tools.includes(tool))
            )
        )
        .slice(0, 3); // Limiter à 3 recommandations

    if (similarStudies.length > 0) {
        recommendationsContainer.innerHTML = similarStudies.map(similar => `
            <div class="recommendation-card" data-id="${similar.id}">
                <img src="${similar.image}" alt="${similar.title}" class="recommendation-image">
                <div class="recommendation-content">
                    <h3 class="recommendation-title">${similar.title}</h3>
                </div>
            </div>
        `).join('');

        // Ajouter les event listeners pour les cartes de recommandation
        document.querySelectorAll('.recommendation-card').forEach(card => {
            card.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(card.dataset.id);
                openModal(id);
            });
        });
    } else {
        recommendationsContainer.innerHTML = '<p>Aucun projet similaire trouvé</p>';
    }

    // Afficher la modale
    document.body.classList.add('modal-open');
    document.getElementById('case-study-modal').classList.add('active');

    // Ajouter l'event listener pour fermer la modale
    const closeModal = () => {
        document.body.classList.remove('modal-open');
        document.getElementById('case-study-modal').classList.remove('active');
    };

    document.querySelector('.modal-close').onclick = closeModal;
    document.querySelector('.modal-overlay').onclick = (e) => {
        if (e.target === document.querySelector('.modal-overlay')) {
            closeModal();
        }
    };

    // Empêcher la propagation du clic dans la modale
    document.querySelector('.modal-container').onclick = (e) => {
        e.stopPropagation();
    };
}



// Initialisation de la page
document.addEventListener('DOMContentLoaded', () => {
    // Initialise les dropdowns
    initializeDropdowns();
    
    // Affiche tous les case studies au chargement
    renderCaseStudies(caseStudies);
    
    // Ajoute les event listeners pour les filtres
    const filterInputs = document.querySelectorAll('.filter-option input');
    filterInputs.forEach(input => {
        input.addEventListener('change', filterCaseStudies);
    });
    
    // Réinitialisation des filtres
    document.getElementById('reset-filters').addEventListener('click', () => {
        filterInputs.forEach(input => {
            input.checked = false;
        });
        
        // Ferme tous les dropdowns
        document.querySelectorAll('.filter-title').forEach(title => {
            title.classList.remove('active');
        });
        document.querySelectorAll('.filter-options').forEach(options => {
            options.classList.remove('show');
        });
        
        renderCaseStudies(caseStudies);
    });
});



// ===================
// CODE DU LIQUIDE GRADIENT
// ===================

// Setup du Canvas 
const canvas = document.querySelector("#canvas-2");
const ctx = canvas.getContext("2d");

// Fonction pour générer des chiffres aléatoire dans un interval
function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

// L'Array qui va contenir tous les cercles et leurs propriétés
let circles = [];
// Les couleurs à utiliser dans le gradient
const colors = ["#007e4bbb", "#000000", "#000000", "#000000"];
// Setup le background color sur l'une des couleurs qu'on souhaite.
document.body.style.backgroundColor = "#000000";
// Créer les données des cercles
function initCircles() {
    // Nettoyer les anciennes données de cercles
    circles = [];
    // Quantité de cercles basés sur la taille de l'écran
    let circleCount = window.innerWidth / 100;
    // Boucle du code autant qu'il y ai des cercles
    for (let i = 0; i < circleCount; i++) {
        // Setup le rayon des cercles
        let radius = window.innerWidth / 7;
        // Setup aléatoirement des cercles dans le canvas sur l'axe des X
        let x = randomBetween(radius, canvas.width - radius);
        // Setup aléatoirement des cercles dans le canvas sur l'axe des Y
        let y = randomBetween(radius, canvas.height - radius);
        // Setup aléatoirement la vélocité sur l'axe des X (La vitesse à laquelle chaque cercles bougent)
        // Egalement basé sur la taille de l'écran
        let dx = randomBetween(window.innerWidth / -800, window.innerWidth / 800);
        // Setup aléatoirement la vélocité sur l'axe des Y (La vitesse à laquelle chaque cercles bougent)
        let dy = randomBetween(window.innerWidth / -800, window.innerWidth / 800);
        // Setup des couleurs aléatoires sur les cercles à partir du tableau de couleur plus haut
        let color = colors[Math.floor(Math.random() * colors.length)];
        // Ajouter de nouvelles données dans le tableau de cercles 
        circles.push({ x, y, dx, dy, radius, color });
    }
}


// Dessiner les cercles avec de nouvelles valeures
function drawCircle(circle) {
    // Commencer le chemin de cercle
    ctx.beginPath();
    // Créer les cercles avec les paramètres pré-établis
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
    // Créer et remplir les couleures préétablies
    ctx.fillStyle = circle.color;
    // Rempli les cercles
    ctx.fill();
    // Fermer les chemin des cercles
    ctx.closePath();
}

// Fonction animation
function animate() {
    // Créer une animation en rerunnant la fonction animée encore et encore
    requestAnimationFrame(animate);
    // Néttoyer toutes les précédentes éléments désinnés dans le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Boucle de tous les cercles
    circles.forEach(circle => {
        // Si the cercle atteint le bord du canvas sur l'axe des X sur les deux côtés
        if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
            // Renverse la vitesse des cercles (Pour qu'il rebondisse dans la direction opposée)
            circle.dx = -circle.dx; 
        }
        // Si the cercle atteint le bord du canvas sur l'axe des X sur les deux côtés
        if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
            // Renverse la vitesse des cercles (Pour qu'il rebondisse dans la direction opposée)
            circle.dy = -circle.dy;
        }
        // Dans tous les autres cas laisser le cercle bouger dans les directions initlales.
        circle.x += circle.dx;
        circle.y += circle.dy;
        // Bouger les cercles en les redessinant encore et encore dans les animations
        drawCircle(circle);
    });
}

// Fonction qui mets le canvas toujours en fullscreen
// Et on le mettra un peut large que le screen entier
function resizeCanvas() {
    canvas.width = window.innerWidth * 1.5;
    canvas.height = window.innerHeight * 1.5;
    // Créer de nouvelles données de cercle sur les écrans de nouvelles tailles
    initCircles();
}
// Mettre le canaves full width au chargement de la page
resizeCanvas();
// Mettre tous les acces à chaque fois que l'écran change de taille
window.addEventListener("resize", resizeCanvas);

// Créer les données des cercles au chargement de la page
initCircles();
// Lancer l'animation au chargement de la page
animate();
