let jogosAlugados = 0;


function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let bordgame = document.getElementById(`game-${id}`);
    let imagem = bordgame.querySelector(".dashboard__item__img");
    let botao = bordgame.querySelector(".dashboard__item__button");
    let nomeJogo = bordgame.querySelector('.dashboard__item__name');


    if (imagem.classList.contains("dashboard__item__img--rented" ||
            botao.classList.contains("dashboard__item__button--return"))) {
        if (window.confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove("dashboard__item__img--rented");
            botao.classList.remove("dashboard__item__button--return");
            botao.textContent = "Alugar";
            jogosAlugados--;
        }
    } else {
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";
        jogosAlugados++;
    }
    contarEExibirJogosAlugados();
}
// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});