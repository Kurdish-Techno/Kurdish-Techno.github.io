const backToTopButton = document.getElementById("backToTopBtn");

// Show the "Back to Top" button when user scrolls down 20% of the viewport height
window.addEventListener("scroll", () => {
    if (window.scrollY > 0.2 * window.innerHeight) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Scroll to the top when the button is clicked
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const translations = {
    en: {
        about: "About Me",
        projects: "Projects",
        social: "Social",
        contact: "Contact",
        // ... Add more translations for English
    },
    ku: {
        about: "دەربارەی من",
        projects: "پڕۆژەکان",
        social: "چاڵاکان",
        contact: "پەیوەندی",
        // ... Add more translations for Kurdish
    }
};

function updateLanguage(language) {
    const content = translations[language];
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = content[key];
    });
}

document.getElementById('english').addEventListener('click', () => updateLanguage('en'));
document.getElementById('kurdish').addEventListener('click', () => updateLanguage('ku'));

// Set initial language (English)
updateLanguage('en');

// Dark mode toggle
const toggleDarkModeButton = document.getElementById('toggleDarkMode');
const body = document.body;

toggleDarkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

