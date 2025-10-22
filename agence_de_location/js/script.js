document.addEventListener('DOMContentLoaded', () => {

    const body = document.body;

    // --- 1. Logique de transition de page ---
    



    // --- 2. Logique de changement de thème (Ville) ---

    const cityLinks = document.querySelectorAll('.city-nav a');
    const defaultTheme = 'dubai'; // Thème par défaut

    // Fonction pour appliquer le thème
    function applyTheme(theme) {
        // 1. Met à jour le body
        body.classList.remove('theme-dubai', 'theme-marrakech', 'theme-pattaya', 'theme-marseille');
        body.classList.add(`theme-${theme}`);

        // 2. Met à jour la classe 'active' sur les liens
        cityLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.theme === theme) {
                link.classList.add('active');
            }
        });

        // 3. Sauvegarde le choix dans le localStorage
        localStorage.setItem('layloc-theme', theme);
    }

    // Ajoute les écouteurs d'événements aux liens des villes
    cityLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Empêche le lien de naviguer
            const selectedTheme = e.target.dataset.theme;
            applyTheme(selectedTheme);
        });
    });

    // --- 3. Initialisation au chargement de la page ---

    // Récupère le thème sauvegardé, ou utilise le thème par défaut
    const savedTheme = localStorage.getItem('layloc-theme') || defaultTheme;
    applyTheme(savedTheme);

});