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

const audio = new Audio('../../musica/musica.mp3');
audio.loop = true;

document.addEventListener('DOMContentLoaded', () => {
    const botonAbrir = document.getElementById('c1');
    
    if (botonAbrir) {
        botonAbrir.addEventListener('change', () => {
            // En cuanto el usuario abre la portada, la música arranca
            if (botonAbrir.checked) {
                audio.play().catch(e => console.log("El navegador requiere interacción"));
            }
        });
    }
});