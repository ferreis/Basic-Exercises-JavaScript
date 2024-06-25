function comprar() {
    const ids = [`tipo-ingresso`, `qtd`, `qtd-pista`, `qtd-superior`, `qtd-inferior`];
    const valores = [`pista`,`superior`,`inferior`];
    const textos = [`Pista`,`Cadeira superior`,`Cadeira inferior`];

    const tipoIngresso = document.getElementById(ids[0]).value;
    const qtd = parseInt(document.getElementById(ids[1]).value);

    let qtdPista = parseInt(document.getElementById(ids[2]).textContent);
    let qtdSuperior = parseInt(document.getElementById(ids[3]).textContent);
    let qtdInferior = parseInt(document.getElementById(ids[4]).textContent);

    if (tipoIngresso === valores[0]) {
        if (ingressoDisponivel(textos[0], qtdPista, qtd)) {
            qtdPista -= qtd;
            alterarQtdHTML(ids[2], qtdPista);
        }
    } else if (tipoIngresso === valores[1]) {
        if (ingressoDisponivel(textos[1], qtdSuperior, qtd)) {
            qtdSuperior -= qtd;
            alterarQtdHTML(ids[3], qtdSuperior);
        }
    } else if (tipoIngresso === valores[2]) {
        if (ingressoDisponivel(textos[2], qtdInferior, qtd)) {
            qtdInferior -= qtd;
            alterarQtdHTML(ids[4], qtdInferior);
        }
    }
}

function ingressoDisponivel(tipo ,qtdTipoIngresso, qtd) {
    if (qtd >= 1) {
        if (qtdTipoIngresso < qtd) {
            alert(`Não há mais ingressos disponíveis para ${tipo}.`);
            return false;
        } else {
            return true;
        }
    } else {
        alert(`A quantidade deve ser maior ou igual a 1.`);
        return false;
    }
}

function alterarQtdHTML(tipoIngresso, novaQuantidade) {
    document.getElementById(tipoIngresso).textContent = novaQuantidade;
}

function main() {
    let quantidadeDeJogos = 5;
    let desconto = 0;
    let i = 0;
  
    while (i < quantidadeDeJogos) {
      if (quantidadeDeJogos >= 5) {
        desconto += 0.1 * 50;
        console.log(desconto);
      } else if (quantidadeDeJogos >= 10) {
        desconto += 0.2 * 50;
      }
      i++;
    }
  
    console.log(desconto);
  }
  