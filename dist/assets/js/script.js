// ===================
// CODE DE LA SIDEBAR - OUVRIR ET FERMER LA SIDEBAR
// ===================
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
// ===================
// CODE DU DROPDOWN MENU - OUVRIR ET FERMER LE DROPDOWN
// ===================
function showDropdown() {
    const dropdown = document.querySelector('.dropdown-menu')
    dropdown.style.opacity = '1'
}
function hideDropdown() {
    const dropdown = document.querySelector('.dropdown-menu')
    dropdown.style.opacity = '0'
}
// ===================
// CODE DU LIQUIDE GRADIENT
// ===================

// Setup du Canvas 
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

// Fonction pour générer des chiffres aléatoire dans un interval
function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

// L'Array qui va contenir tous les cercles et leurs propriétés
let circles = [];
// Les couleurs à utiliser dans le gradient
const colors = ["#00653d8e", "#000000", "#000000", "#000000"];
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