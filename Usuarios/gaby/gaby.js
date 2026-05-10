const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const bookContainer = document.getElementById('book-container');

function getOpenPagesCount() {
    return document.querySelectorAll('input[type="checkbox"]:checked').length;
}

function checkBookPosition() {
    const openPages = getOpenPagesCount();
    // Si hay al menos una hoja abierta, movemos el libro para centrarlo
    if (openPages > 0) {
        bookContainer.style.transform = "translateX(25%)";
    } else {
        bookContainer.style.transform = "translateX(0)";
    }
}

nextBtn.addEventListener('click', () => {
    const openPages = getOpenPagesCount();
    if (openPages < 7) {
        document.getElementById('c' + (openPages + 1)).checked = true;
        checkBookPosition();
    }
});

prevBtn.addEventListener('click', () => {
    const openPages = getOpenPagesCount();
    if (openPages > 0) {
        document.getElementById('c' + openPages).checked = false;
        checkBookPosition();
    }
});

// Sincronizar también clics directos en las hojas
document.querySelectorAll('input[type="checkbox"]').forEach(check => {
    check.addEventListener('change', checkBookPosition);
});

const audioLibro = new Audio('../../musica/musica.mp3');
audioLibro.loop = true;

window.addEventListener('load', () => {
    if (localStorage.getItem('musicaIniciada') === 'true') {
        
        // Recuperamos el tiempo guardado
        const savedTime = localStorage.getItem('currentTime');
        if (savedTime) {
            audioLibro.currentTime = parseFloat(savedTime);
        }

        // Intentamos reproducir de inmediato
        audioLibro.play().catch(() => {
            // Si el navegador bloquea el auto-play por seguridad, 
            // sonará en cuanto toquen el libro (c1)
            const abrirLibro = document.getElementById('c1');
            if (abrirLibro) {
                abrirLibro.addEventListener('change', () => {
                    audioLibro.play();
                }, { once: true });
            }
        });
    }
});

// Sincronización continua: guarda el tiempo cada segundo
setInterval(() => {
    if (!audioLibro.paused) {
        localStorage.setItem('currentTime', audioLibro.currentTime);
    }
}, 1000);