class item {
    constructor(quantidade, nomeProduto, valor) {
        this.quantidade = quantidade;
        this.nomeProduto = nomeProduto;
        this.valor = valor;
    }
}
let carrinhoDeCompras = [];
let valorTotal = 0;
limpar();

function adicionar() {
    let produto = document.getElementById("produto").value;
    let quantidade = document.getElementById("quantidade").value;
    let listaProdutos = document.getElementById("lista-produtos");
    let campoTotal = document.getElementById("valor-total");
    let partes = produto.split(" - R$");
    let preco = 0;

    if (quantidade >= 1) {
        preco = parseFloat(partes[1]) * parseFloat(quantidade);
        let produtoExistente = carrinhoDeCompras.find(item => item.nomeProduto === partes[0]);
        carrinhoDeCompras.forEach(item => {
            if (produtoExistente) {
                item.valor += preco;
                item.quantidade += parseFloat(quantidade);
            }
        });

        if (!produtoExistente) {
            // Se o produto não existe no carrinho, adicione um novo item
            const novoItem = new item(parseFloat(quantidade), partes[0], preco);
            carrinhoDeCompras.push(novoItem);
        }

        listaProdutos.querySelector(".carrinho__produtos__produto").innerHTML =
            carrinhoDeCompras.map(item => `<span class="texto-azul">${item.quantidade}x</span> 
        ${item.nomeProduto}  <span class="texto-azul">R$ ${item.valor}</span>`).join("<br>");
    }else{
        alert("Quantidade de itens inseridos inválida");
    }
    valorTotal += preco;
    campoTotal.textContent = `R$ ${valorTotal.toFixed(2)}`;
    document.get.ElementById('quantidade').value = 1;
}

function limpar() {
    carrinhoDeCompras = [];

    let listaProdutos = document.getElementById("lista-produtos");
    let campoTotal = document.getElementById("valor-total");
    valorTotal = 0;
    listaProdutos.querySelector(".carrinho__produtos__produto").innerHTML = ""; // Remove todos os itens da lista no HTML
    campoTotal.textContent = `R$ 0,00`;
}