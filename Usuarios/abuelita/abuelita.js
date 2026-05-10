const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const bookContainer = document.getElementById('book-container');

function getOpenPagesCount() {
    return document.querySelectorAll('input[type="checkbox"]:checked').length;
}

function checkBookPosition() {
    const openPages = getOpenPagesCount();
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

// 1. Creamos el audio
const musicaLibro = new Audio('../../musica/musica.mp3');
musicaLibro.loop = true;

// 2. Función para disparar la música
function arrancarMusica() {
    musicaLibro.play().then(() => {
        // Una vez que suena, quitamos los eventos para que no se reinicie
        document.removeEventListener('click', arrancarMusica);
        document.removeEventListener('scroll', arrancarMusica);
    }).catch(error => console.log("Esperando clic..."));
}

// 3. AGRESIVO: Escucha cualquier clic en TODA la página
document.addEventListener('click', arrancarMusica);

// 4. Específicamente cuando usen los botones de "Siguiente" o "Anterior"
document.addEventListener('DOMContentLoaded', () => {
    const btnNext = document.getElementById('next-btn');
    const btnPrev = document.getElementById('prev-btn');
    const c1 = document.getElementById('c1');

    if(btnNext) btnNext.addEventListener('click', arrancarMusica);
    if(btnPrev) btnPrev.addEventListener('click', arrancarMusica);
    if(c1) c1.addEventListener('change', arrancarMusica);
});