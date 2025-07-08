document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.animated-button');

    buttons.forEach(button => {
       
        button.addEventListener('mouseenter', () => {
            button.classList.add('is-hovered');
        });

        button.addEventListener('mouseleave', () => {
            button.classList.remove('is-hovered');
            button.classList.remove('is-active');
        });

        
        button.addEventListener('mousedown', () => {
            button.classList.add('is-active');
        });

        button.addEventListener('mouseup', () => {
            if (button.matches(':hover')) {
                button.classList.remove('is-active');
            }
        });
        button.addEventListener('touchstart', (e) => {
            e.stopPropagation(); 
            button.classList.add('is-hovered');
            button.classList.add('is-active');
        }, { passive: true });

        button.addEventListener('touchend', () => {
            button.classList.remove('is-hovered');
            button.classList.remove('is-active');
        });

        button.addEventListener('touchcancel', () => {
            button.classList.remove('is-hovered');
            button.classList.remove('is-active');
        });
    });
});
