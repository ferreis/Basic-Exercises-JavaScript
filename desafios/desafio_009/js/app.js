function adicao(x, y) {
    return x + y;
}

function subtracao(x, y) {
    return x - y;
}

function multiplicacao(x, y) {
    return x * y;
}

function divisao(x, y) {
    if (y !== 0) {
        return x / y;
    } else {
        return "Erro: Divisão por zero";
    }
}

function calcularResultado() {
    let tela = document.getElementById("resultado").textContent;
    let partes = tela.split(/(\+|\-|\*|\/)/); 
    let resultado = parseFloat(partes[0]);

    resultado = verificado(partes, "/", resultado);
    resultado = verificado(partes, "*", resultado);
    resultado = verificado(partes, "-", resultado);
    resultado = verificado(partes, "+", resultado);
    limparTela()
    guardaNumeroTela(resultado);
}

function verificado(partes, operadorDesejado, resultado) {
    for (let index = 1; index < partes.length; index += 2) {
        const numero = parseFloat(partes[index + 1]);
        const operador = partes[index];
        if (operador === `${operadorDesejado}`) {
            switch (operador) {
                case "+":
                    resultado = adicao(resultado, numero);
                    break;
                case "-":
                    resultado = subtracao(resultado, numero);
                    break;
                case "*":
                    resultado = multiplicacao(resultado, numero);
                    break;
                case "/":
                    resultado = divisao(resultado, numero);
                    break;
                default:
                    // Operador inválido
                    return "Operação inválida!";
            }
        }
    }
    return resultado;
}

function limparTela() {
    document.getElementById("resultado").textContent = "";
}

function guardaNumeroTela(numero) {
    document.getElementById("resultado").textContent += numero;
}