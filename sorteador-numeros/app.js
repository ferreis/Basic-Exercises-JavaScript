function sortear() {

    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let resultado = document.getElementById('resultado');

    let sorteados = [];
    let numero;
    if (de > ate) {
        alert(`Valor invalido: \n O valor ${de} e maior que ${ate}`);
    } else if (ate >= de) {
        alert(`Valor inválido: a quantidade de números gerados é maior que a quantidade de números gerados não repetidos`);
    } else {
        for (let index = 0; index < quantidade; index++) {
            numero = obterNumeroAleatorio(de, ate);
            while (sorteados.includes(numero)) {
                numero = obterNumeroAleatorio(de, ate);
            }
            sorteados.push(numero);
        }
    
        resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados: ' + sorteados + '</label>';
        alterarStatusBotao();
    }
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botaoReiniciar = document.getElementById("btn-reiniciar");

    if (botaoReiniciar.classList.contains("container__botao-desabilitado")) {
        botaoReiniciar.classList.remove("container__botao-desabilitado");
        botaoReiniciar.classList.add("container__botao");
    } else {
        botaoReiniciar.classList.remove("container__botao");
        botaoReiniciar.classList.add("container__botao-desabilitado");
    }

}

function reiniciar() {
    let botaoReiniciar = document.getElementById("btn-reiniciar");

    if (botaoReiniciar.classList.contains("container__botao")) {
        document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
        document.getElementById("quantidade").value = "";
        document.getElementById("de").value = "";
        document.getElementById("ate").value = "";

        alterarStatusBotao();
    }
}