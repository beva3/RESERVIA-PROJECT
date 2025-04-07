document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Fermer le menu mobile si ouvert
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
            }
        });
    });
    
    // Validation basique des formulaires
    const loginForm = document.querySelector('#connexionModal form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Ici vous ajouteriez la logique de connexion
            alert('Connexion en cours...');
        });
    }
    
    const signupForm = document.querySelector('#inscriptionModal form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Ici vous ajouteriez la logique d'inscription
            alert('Inscription en cours...');
        });
    }
});