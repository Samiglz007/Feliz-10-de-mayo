function login() {

    // Obtener datos
    let user = document.getElementById("usuario").value.toLowerCase().trim();
    let pass = document.getElementById("password").value.trim();

    // Usuarios y rutas correctas
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
        "yulisa": {
            password: "6666",
            pagina:"Usuarios/yulissa/yulissa.html"
        },
        "fatima":{
            password:"7777",
            pagina:"Usuarios/fatima/fatima.html"
        },
        "sara":{
            password:"8888",
            pagina:"Usuarios/sara/sara.html"
        },
        "abuelita":{
            password:"9999",
            pagina:"Usuarios/abuelita/abuelita.html"
        },
        "tere":{
            password:"1010",
            pagina:"Usuarios/tere/tere.html"
        },
        "tete":{
            password:"2020",
            pagina:"Usuarios/tt/tt.html"
        },
        "mayita":{
            password:"3030",
            pagina:"Usuarios/zoe/zoe.html"
        }
    };

    // Validación
    if (usuarios[user] && usuarios[user].password === pass) {

        console.log("Redirigiendo a:", usuarios[user].pagina);

        // Redirigir
        window.location.href = usuarios[user].pagina;

    } else {
        document.getElementById("error").innerText = "Datos incorrectos ❌";
    }
}