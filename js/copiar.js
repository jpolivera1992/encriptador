function copiarTexto() { 
    let textoCopiado = document.querySelector(".texto-encriptado p"); 
    var btnCopy = document.querySelector("#copiar"); 
    btnCopy.addEventListener("click", function () {
        navigator.clipboard.writeText(textoCopiado.innerText);
    }); 
} 
// Llama a la función copiarTexto para agregar el evento de clic al botón 
copiarTexto(); 