function verificador() {
    let texto = document.getElementById("texto").value;
    let textoOriginal = document.getElementById("textoOriginal");
    let textoInvertido = document.getElementById("textoInvertido");
    let resultado = document.getElementById("resultadoDesafioUm");


    textoOriginal.textContent = `Texto digitado: ${texto}`;
    textoInvertido.textContent = `exto invertido: ${inverterTexto(texto)}`;

    if (inverterTexto(texto) == texto) {
        resultado.querySelector("#naoPalindromo").checked = false; 
        resultado.querySelector("#Palindromo").checked = true; 
    }else{
        resultado.querySelector("#Palindromo").checked = false; 
        resultado.querySelector("#naoPalindromo").checked = true; 
    }
}

function inverterTexto(texto) {
    return texto.split("").reverse().join("");
}
