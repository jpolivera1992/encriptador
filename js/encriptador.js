function encriptador() {
    var campoTexto = document.getElementById("texto-principal");
    var btnEncriptado = document.querySelector("#encriptar");

    btnEncriptado.addEventListener("click", function (event) {
        event.preventDefault();

        if (campoTexto.value.trim() === "") {
            alert("Por favor, ingresa una palabra antes de encriptar.");
            return; // Evitar que la función de encriptación se ejecute
        }
        
        const textoEncriptado = encriptarTexto(campoTexto.value);

        var campoVacio = document.querySelector(".sin-retorno");
        campoVacio.classList.add("d-none");

        var campoCompletado = document.querySelector(".texto-encriptado");
        campoCompletado.classList.remove("d-none");

        var parrafo = document.querySelector(".texto-encriptado p");

        var minusculas = textoEncriptado.toLowerCase();

        //verifica si tiene caracteres especiales
        function conCaracterEspecial(str) {
            const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            return specialChars.test(str);
        }

        //Verificador de acentos
        var conAcento = textoEncriptado;
        var sinAcento = conAcento.normalize("NFD");

        if (textoEncriptado === minusculas && textoEncriptado === sinAcento && conCaracterEspecial(textoEncriptado) == false) {
            parrafo.textContent = textoEncriptado;
        } else {
            parrafo.textContent = "Solo letras minúsculas y sin acento."
        }
        campoTexto.value = "";
    })
}

encriptador();

function desencriptar() {
    var campoTexto = document.getElementById("texto-principal");
    var btnDescripto = document.querySelector("#desencriptar");

    btnDescripto.addEventListener("click", function (event) {
        event.preventDefault();

        if (campoTexto.value.trim() === "") {
            alert("Por favor, ingresa una palabra antes de encriptar.");
            return; // Evitar que la función de encriptación se ejecute
        }

        const textoDesencriptado = desencriptarTexto(campoTexto.value);

        var campoVacio = document.querySelector(".sin-retorno");
        campoVacio.classList.add("d-none");

        var campoCompletado = document.querySelector(".texto-encriptado");
        campoCompletado.classList.remove("d-none");

        var parrafo = document.querySelector(".texto-encriptado p");

        //Verifica si posee letras mayusculas
        var minusculas = textoDesencriptado.toLowerCase();

        //verifica si posee caracteres especiales
        function conCaracterEspecial(str) {
            const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            return specialChars.test(str);
        }

        //Verifica si posee acentos
        var conAcento = textoDesencriptado;
        var sinAcento = conAcento.normalize("NFD");

        if (textoDesencriptado === minusculas && textoDesencriptado === sinAcento && conCaracterEspecial(textoDesencriptado) == false) {
            parrafo.textContent = textoDesencriptado;
        } else {
            parrafo.textContent = "Solo letras minúsculas y sin acento."
        }
        campoTexto.value = "";
    })
}

desencriptar();