document.addEventListener('DOMContentLoaded', function() {
    // 1. Efecto de scroll suave para la barra de navegación
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    // 2. Lógica para el modal de proyectos
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const modalText = document.getElementById('modal-text');
    const closeButton = document.querySelector('.close-button');

    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const description = this.getAttribute('data-project-description');
            modalText.textContent = description;
            modal.style.display = 'flex'; 
        });
    });

    // Cerrar modal al hacer click en el botón de cerrar
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Cerrar modal al hacer click fuera del contenido del modal
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

});