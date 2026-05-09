// --- CONFIGURACIÓN DE USUARIOS ---
// Nota: Las claves y passwords están en minúsculas para que el login no falle con mayúsculas.
const usuarios = {
    "mama": { 
        password: "1234", 
        pagina: "Usuarios/mama/mama.html" 
    },

    "nery": { 
        password: "abcd", 
        pagina: "Usuarios/nery/nery.html" 
    },

    "dianita": { 
        password: "1111", 
        pagina: "Usuarios/dianita/dianita.html" 
    },

    "gaby": { 
        password: "2222", 
        pagina: "Usuarios/gaby/gaby.html" 
    },

    "martha": { 
        password: "3333", 
        pagina: "Usuarios/martha/martha.html" 
    },

    "rosy": { 
        password: "4444", 
        pagina: "Usuarios/rosy/rosy.html" 
    },

    "yesenia": { 
        password: "5555", 
        pagina: "Usuarios/yesenia/yesenia.html" 
    },

    "yulissa": { 
        password: "6666", 
        pagina: "Usuarios/yulissa/yulissa.html" 
    },

    "fatima": { 
        password: "7777", 
        pagina: "Usuarios/fatima/fatima.html" 
    },

    "sara": { 
        password: "8888", 
        pagina: "Usuarios/sara/sara.html" 
    },

    "abuelita": { 
        password: "9999", 
        pagina: "Usuarios/abuelita/abuelita.html" 
    },

    "tere": { 
        password: "1010", 
        pagina: "Usuarios/tere/tere.html" 
    },

    "esther": { 
        password: "2020", 
        pagina: "Usuarios/tt/tt.html" 
    },

    "mayita": { 
        password: "Dinosaurio", 
        pagina: "Usuarios/zoe/zoe.html" 
    },

    "leticia": { 
        password: "5050", 
        pagina: "Usuarios/leticia/leticia.html" 
    },

    "sandy": { 
        password: "6161", 
        pagina: "Usuarios/sandy/sandy.html" 
    }
};

// --- FUNCIÓN DE LOGIN ---
function login() {
    const userField = document.getElementById("usuario");
    const passField = document.getElementById("password");
    const errorMsg = document.getElementById("error");
    const card = document.querySelector('.login-card');

    let user = userField.value.toLowerCase().trim();
    let pass = passField.value.toLowerCase().trim();

    if (usuarios[user] && usuarios[user].password === pass) {
        // Éxito: Redirigir
        window.location.href = usuarios[user].pagina;
    } else {
        // Error: Efecto visual y mensaje
        errorMsg.innerText = "Datos incorrectos ❌";
        card.classList.add('shake');
        
        // Limpiar password para reintentar
        passField.value = "";
        
        setTimeout(() => {
            card.classList.remove('shake');
        }, 400);
    }
}

// --- ESCUCHAR TECLA ENTER ---
// Esto permite que el usuario entre sin tener que hacer clic, solo dando Enter
document.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        login();
    }
});

// --- EFECTO DE PÉTALOS CAYENDO ---
function createPetal() {
    const container = document.getElementById('petals-container');
    if (!container) return; // Evita errores si el contenedor no existe

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

// Iniciar animación de pétalos
setInterval(createPetal, 400);
