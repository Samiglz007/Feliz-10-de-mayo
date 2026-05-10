const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const bookContainer = document.getElementById('book-container');

function getOpenPagesCount() {
    return document.querySelectorAll('input[type="checkbox"]:checked').length;
}

function checkBookPosition() {
    const openPages = getOpenPagesCount();
    // Si hay al menos una hoja abierta, movemos el libro a la derecha
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

// También detectamos clics manuales en las hojas
document.querySelectorAll('input[type="checkbox"]').forEach(check => {
    check.addEventListener('change', checkBookPosition);
});

const audioLibro = new Audio('../../musica/musica.mp3');
audioLibro.loop = true;

// Función única para arrancar el audio
function forzarMusica() {
    if (audioLibro.paused) {
        const savedTime = localStorage.getItem('currentTime');
        if (savedTime) {
            audioLibro.currentTime = parseFloat(savedTime);
        }
        audioLibro.play();
    }
}

// 1. Intento automático al cargar
window.addEventListener('load', () => {
    if (localStorage.getItem('musicaIniciada') === 'true') {
        intentarReproducir();
    }
});

function intentarReproducir() {
    audioLibro.play().catch(() => {
        // 2. Si falla, se activa con CUALQUIER interacción en la página
        // Esto incluye el clic que el usuario hará para pasar la primera hoja
        document.addEventListener('click', forzarMusica, { once: true });
        document.addEventListener('keydown', forzarMusica, { once: true });
    });
}

// Sincronización de tiempo para que no se pierda el segundo al navegar
setInterval(() => {
    if (!audioLibro.paused) {
        localStorage.setItem('currentTime', audioLibro.currentTime);
    }
}, 1000);