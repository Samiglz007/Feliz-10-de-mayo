// --- FUNCIÓN DE LOGIN ---
function login() {
    let user = document.getElementById("usuario").value.toLowerCase().trim();
    let pass = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("error");
    const card = document.querySelector('.login-card');

    const usuarios = {
        "Mama": { 
            password: "1234", 
            pagina: "Usuarios/mama/mama.html" 
        },

        "Nery": { 
            password: "abcd", 
            pagina: "Usuarios/nery/nery.html" 
        },

        "Dianita": { 
            password: "1111", 
            pagina: "Usuarios/dianita/dianita.html" 
        },

        "Gaby": { 
            password: "2222", 
            pagina: "Usuarios/gaby/gaby.html" 
        },

        "Martha": { 
            password: "3333", 
            pagina: "Usuarios/martha/martha.html" 
        },

        "Rosy": { 
            password: "4444", 
            pagina: "Usuarios/rosy/rosy.html" 
        },

        "Yesenia": { 
            password: "5555", 
            pagina: "Usuarios/yesenia/yesenia.html" 
        },

        "Yulissa": { 
            password: "6666", 
            pagina: "Usuarios/yulissa/yulissa.html" 
        },

        "Fatima": { 
            password: "7777", 
            pagina: "Usuarios/fatima/fatima.html" 
        },

        "Sara": { 
            password: "8888", 
            pagina: "Usuarios/sara/sara.html" 
        },

        "Abuelita": { 
            password: "9999", 
            pagina: "Usuarios/abuelita/abuelita.html" 
        },

        "Tere": { 
            password: "1010", 
            pagina: "Usuarios/tere/tere.html" 
        },

        "Esther": { 
            password: "2020", 
            pagina: "Usuarios/tt/tt.html" 
        },

        "Mayita": { 
            password: "Dinosaurio", 
            pagina: "Usuarios/zoe/zoe.html" 
        },

        "Leticia":{
            password:"5050",
            pagina:"Usuarios/leticia/leticia.html"
        },

        "Sandy":{
            password:"6161",
            pagina:"Usuarios/sandy/sandy.html"
        }
    };

    if (usuarios[user] && usuarios[user].password === pass) {
        window.location.href = usuarios[user].pagina;
    } else {
        errorMsg.innerText = "Datos incorrectos ❌";
        card.classList.add('shake');
        setTimeout(() => card.classList.remove('shake'), 400);
    }
}

// --- EFECTO DE PÉTALOS CAYENDO ---
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    const types = ['🌸', '💕', '🌷', '✨'];
    petal.innerText = types[Math.floor(Math.random() * types.length)];
    
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.fontSize = Math.random() * 15 + 15 + 'px';
    petal.style.opacity = Math.random() * 0.5 + 0.3;
    
    const duration = Math.random() * 3 + 5;
    petal.style.animationDuration = duration + 's';
    
    document.getElementById('petals-container').appendChild(petal);
    
    setTimeout(() => { petal.remove(); }, duration * 1000);
}

// Iniciar animación
setInterval(createPetal, 400);
