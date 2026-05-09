// --- CONFIGURACIÓN DE USUARIOS ---
const usuarios = {
    "Mama": { password: "Masha", pagina: "Usuarios/mama/mama.html" },
    "Nery": { password: "Ixpo Mexico", pagina: "Usuarios/nery/nery.html" },
    "Dianita": { password: "", pagina: "Usuarios/dianita/dianita.html" },
    "Gaby": { password: "", pagina: "Usuarios/gaby/gaby.html" },
    "Martha": { password: "Martita", pagina: "Usuarios/martha/martha.html" },
    "Rosy": { password: "Abuelita Rosy", pagina: "Usuarios/rosy/rosy.html" },
    "Yesenia": { password: "Yess", pagina: "Usuarios/yesenia/yesenia.html" },
    "Yulissa": { password: "Yuli", pagina: "Usuarios/yulissa/yulissa.html" },
    "Fatima": { password: "Ama fati", pagina: "Usuarios/fatima/fatima.html" },
    "Sara": { password: "Lala", pagina: "Usuarios/sara/sara.html" },
    "Abuelita": { password: "Abuelita", pagina: "Usuarios/abuelita/abuelita.html" },
    "Tere": { password: "", pagina: "Usuarios/tere/tere.html" },
    "Esther": { password: "Infoexpo", pagina: "Usuarios/tt/tt.html" },
    "Mayita": { password: "Dinosaurio", pagina: "Usuarios/zoe/zoe.html" },
    "Leticia": { password: "Para la mejor mamá", pagina: "Usuarios/leticia/leticia.html" },
    "Sandy": { password: "", pagina: "Usuarios/sandy/sandy.html" }
};

// --- FUNCIÓN DE LOGIN ---
function login() {

    // Obtener datos
    let user = document.getElementById("usuario").value.trim().toLowerCase();
    let pass = document.getElementById("password").value.trim().toLowerCase();

    const errorMsg = document.getElementById("error");
    const card = document.querySelector('.login-card');

    let usuarioEncontrado = null;

    // Buscar usuario ignorando mayúsculas/minúsculas
    for (let nombre in usuarios) {

        if (nombre.toLowerCase() === user) {

            usuarioEncontrado = usuarios[nombre];
            break;
        }
    }

    // Validar contraseña
    if (
        usuarioEncontrado &&
        usuarioEncontrado.password.toLowerCase() === pass
    ) {

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