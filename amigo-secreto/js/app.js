let listaAmigos = ["Ferreis", "Ricardo", "Fernando", "Luiz", "Carlos", "Rafael"];

function adicionar() {
    let amigo = document.getElementById("nome-amigo");
    amigo.value = sentenceCase(amigo.value);
    console.log(amigo.value);

    if (amigo.value == "") {
        alert("Opção inválida!\nDigite um nome valido para adicionar à lista do sorteio!");
    }else if(listaAmigos.includes(amigo.value)){
        alert("Opção inválida!\nEsse nome ja está na lista");
    }else{
        listaAmigos.push(amigo.value);
    }

    amigo.value = "";
    atualizarLista();
}

function sortear() {
    //Sortear com o minimo de 3 pessoas
    if (listaAmigos.length <= 2){
        alert("Opção inválida!\\nDeve ter no mínimo 3 participantes no sorteio.");
        return;
    }
    atualizarSortear();
    embaralharLista(listaAmigos);
    console.log(listaAmigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let index = 0; index < listaAmigos.length; index++) {
        if (index == listaAmigos.length - 1) {
            sorteio.innerHTML += `${listaAmigos[index]} --> ${listaAmigos[0]}` + '<br/>';
        } else {
            sorteio.innerHTML += `${listaAmigos[index]} --> ${listaAmigos[index+1]}` + '<br/>';
        }
    }
}

function embaralharLista(lista) {
    let tamanhoLista = lista.length;

    while (tamanhoLista != 0) {
        let randomIndex = Math.floor(Math.random() * tamanhoLista);
        tamanhoLista--;
        [lista[tamanhoLista], lista[randomIndex]] = [
            lista[randomIndex], lista[tamanhoLista]
        ];
    }
}

function atualizarLista() {
    atualizarSortear();
    let lista = document.getElementById("lista-amigos");
    lista.innerHTML = "";

    for (let index = 0; index < listaAmigos.length; index++) {
        let label = document.createElement("label");
        label.innerText = listaAmigos[index] + ', ';
        label.addEventListener('click', function(){
            excluirAmigoDaLista(index);
        })
        lista.appendChild(label)
    }
}
function excluirAmigoDaLista(index) {
    console.log("teste do addEventListener"); 
    listaAmigos.splice(index, 1);
    atualizarLista();
}
function atualizarSortear() {
    let lista = document.getElementById("lista-sorteio");
    lista.innerHTML = "";
}

function reiniciar() {
    listaAmigos = [];
    atualizarLista();
}

function sentenceCase(palavra) {
    // Converte a primeira letra para maiúscula
    //O método charAt() retorna o caractere especificado a partir de uma string.
    const primeiraLetra = palavra.charAt(0).toUpperCase();

    // Converte as demais letras para minúsculas
    const restoDaPalavra = palavra.slice(1).toLowerCase();

    return (primeiraLetra + restoDaPalavra);
}