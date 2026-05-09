// --- CONFIGURACIÓN DE USUARIOS ---
const usuarios = {
    "Mama": { password: "1234", pagina: "Usuarios/mama/mama.html" },
    "Nery": { password: "abcd", pagina: "Usuarios/nery/nery.html" },
    "Dianita": { password: "1111", pagina: "Usuarios/dianita/dianita.html" },
    "Gaby": { password: "2222", pagina: "Usuarios/gaby/gaby.html" },
    "Martha": { password: "3333", pagina: "Usuarios/martha/martha.html" },
    "Rosy": { password: "4444", pagina: "Usuarios/rosy/rosy.html" },
    "Yesenia": { password: "5555", pagina: "Usuarios/yesenia/yesenia.html" },
    "Yulissa": { password: "6666", pagina: "Usuarios/yulissa/yulissa.html" },
    "Fatima": { password: "7777", pagina: "Usuarios/fatima/fatima.html" },
    "Sara": { password: "8888", pagina: "Usuarios/sara/sara.html" },
    "Abuelita": { password: "9999", pagina: "Usuarios/abuelita/abuelita.html" },
    "Tere": { password: "1010", pagina: "Usuarios/tere/tere.html" },
    "Esther": { password: "2020", pagina: "Usuarios/tt/tt.html" },
    "Mayita": { password: "Dinosaurio", pagina: "Usuarios/zoe/zoe.html" },
    "Leticia": { password: "5050", pagina: "Usuarios/leticia/leticia.html" },
    "Sandy": { password: "6161", pagina: "Usuarios/sandy/sandy.html" }
};

// --- FUNCIÓN DE LOGIN ---
function login() {

    // Obtener datos del formulario
    let user = document.getElementById("usuario").value.trim().toLowerCase();
    let pass = document.getElementById("password").value.trim();

    const errorMsg = document.getElementById("error");
    const card = document.querySelector('.login-card');

    // Buscar usuario ignorando mayúsculas/minúsculas
    let usuarioEncontrado = null;

    for (let nombre in usuarios) {
        if (nombre.toLowerCase() === user) {
            usuarioEncontrado = usuarios[nombre];
            break;
        }
    }

    // Validar acceso
    if (usuarioEncontrado && usuarioEncontrado.password === pass) {

        errorMsg.innerText = "Acceso correcto 💖";

        setTimeout(() => {
            window.location.href = usuarioEncontrado.pagina;
        }, 800);

    } else {

        errorMsg.innerText = "Datos incorrectos ❌";

        card.classList.add('shake');

        setTimeout(() => {
            card.classList.remove('shake');
        }, 400);
    }
}

// --- ESCUCHAR TECLA ENTER ---
document.addEventListener("keypress", function(e) {

    if (e.key === "Enter") {
        login();
    }

});

// --- EFECTO DE PÉTALOS CAYENDO ---
function createPetal() {

    const container = document.getElementById('petals-container');

    if (!container) return;

    const petal = document.createElement('div');

    petal.classList.add('petal');

    const types = ['🌸', '💕', '🌷', '✨'];

    petal.innerText = types[Math.floor(Math.random() * types.length)];

    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.fontSize = Math.random() * 15 + 15 + 'px';
    petal.style.opacity = Math.random() * 0.5 + 0.3;

    const duration = Math.random() * 3 + 5;

    petal.style.animationDuration = duration + 's';

    container.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

setInterval(createPetal, 400);