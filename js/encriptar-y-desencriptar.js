var listaClaves = ["enter", "imes", "ai", "ober", "ufat"];
var listaVocales= ["e", "i", "a", "o", "u"];

const clavesParaEncriptar = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}

const clavesParaDesencriptar = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
}

function encriptarTexto(texto) {
    let textoEncriptado = texto;
        listaVocales.forEach(function (letra) {
        textoEncriptado = textoEncriptado.replaceAll(letra, clavesParaEncriptar[letra])
    })
    return textoEncriptado;
}

function desencriptarTexto(texto) {
    let textoParaConvertir = texto;
        listaClaves.forEach(function (letra) {
        textoParaConvertir = textoParaConvertir.replaceAll(letra, clavesParaDesencriptar[letra])
    })
    return textoParaConvertir;
}

