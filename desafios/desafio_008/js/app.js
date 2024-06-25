function converteStringParaInteiro() {
    let stringInput = document.getElementById("texto");
    let inputConvertidoParaInteiro = parseInt(stringInput.value);

    document.getElementById("resultado").textContent = `o tipo da varivel inputado foi ${typeof stringInput.value} que tem o conteudo ${stringInput.value}
    o tipo da variavel ficou: ${(typeof inputConvertidoParaInteiro)} que tem o conteudo ${inputConvertidoParaInteiro}`;
}