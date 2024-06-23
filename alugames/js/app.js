function alterarStatus(id) {
    let bordgame = document.getElementById(`game-${id}`);
    let imagem = bordgame.querySelector(".dashboard__item__img");
    let botao = bordgame.querySelector(".dashboard__item__button");

    if (imagem.classList.contains("dashboard__item__img--rented"
        || botao.classList.contains("dashboard__item__button--return"))) {
        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent = "Alugar";
    } else {
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";
    }
}