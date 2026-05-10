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

// Subimos dos niveles para encontrar la música global
const audioLibro = new Audio('../../musica/musica.mp3');
audioLibro.loop = true;

window.addEventListener('load', () => {
    // Si el interruptor de música está encendido, la activamos
    if (localStorage.getItem('musicaIniciada') === 'true') {
        audioLibro.play().catch(() => {
            // Si el navegador la frena, sonará al abrir la portada (c1)
            document.getElementById('c1').addEventListener('change', () => {
                audioLibro.play();
            }, { once: true });
        });
    }
});