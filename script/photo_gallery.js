// Galerie - Filtrage
document.addEventListener('DOMContentLoaded', function() {
    // Filtrage des images
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Active le bouton
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Changement de type de grille
    const gridButtons = document.querySelectorAll('.grid-btn');
    const grids = {
        masonry: document.getElementById('masonryGrid'),
        square: document.getElementById('squareGrid'),
        pinterest: document.getElementById('pinterestGrid')
    };
    
    gridButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Active le bouton
            gridButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const gridType = this.getAttribute('data-grid');
            
            // Cache toutes les grilles
            Object.values(grids).forEach(grid => {
                grid.classList.add('d-none');
            });
            
            // Affiche la grille sélectionnée
            grids[gridType].classList.remove('d-none');
        });
    });
    
    // Modal image
    const imageModal = document.getElementById('imageModal');
    if (imageModal) {
        imageModal.addEventListener('show.bs.modal', function(event) {
            const trigger = event.relatedTarget;
            const imageUrl = trigger.getAttribute('data-img');
            const imageCaption = trigger.querySelector('p') ? trigger.querySelector('p').textContent : '';
            
            document.getElementById('modalImage').setAttribute('src', imageUrl);
            document.getElementById('imageCaption').textContent = imageCaption;
        });
    }
});