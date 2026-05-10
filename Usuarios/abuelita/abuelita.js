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

const audioLibro = new Audio('../../musica/musica.mp3');
audioLibro.loop = true;

window.addEventListener('load', () => {
    if (localStorage.getItem('musicaIniciada') === 'true') {
        
        // RECUPERAMOS EL TIEMPO GUARDADO
        const savedTime = localStorage.getItem('currentTime');
        if (savedTime) {
            audioLibro.currentTime = parseFloat(savedTime);
        }

        audioLibro.play().catch(() => {
            document.getElementById('c1').addEventListener('change', () => {
                audioLibro.play();
            }, { once: true });
        });
    }
});

// OPCIONAL: Guardar el tiempo cada segundo por si navegan entre libros
setInterval(() => {
    if (!audioLibro.paused) {
        localStorage.setItem('currentTime', audioLibro.currentTime);
    }
}, 1000);