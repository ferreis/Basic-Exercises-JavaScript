let listaAmigos = ["FERREIS", "RICARDO", "FERNANDO", "LUIZ", "CARLOS", "RAFAEL"];

function adicionar() {
    let amigo = document.getElementById("nome-amigo");
    amigo.value = amigo.value.toUpperCase();
    console.log(amigo.value);

    if (!listaAmigos.includes(amigo.value)) {
        listaAmigos.push(amigo.value);
    }

    amigo.value = "";
    atualizarLista();
    atualizarSortear();
}

function sortear() {
    listaAmigos = embaralharLista(listaAmigos);
    console.log(listaAmigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let index = 0; index < listaAmigos.length; index++) {
        if (index == listaAmigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + `${listaAmigos[index]} --> ${listaAmigos[0]}` + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + `${listaAmigos[index]} --> ${listaAmigos[index+1]}` + '<br/>';
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
    return lista;
}

function atualizarLista() {
    let lista = document.getElementById("lista-amigos");
    lista.innerHTML = "";

    for (let index = 0; index < listaAmigos.length; index++) {
        let label = document.createElement("label");
        label.innerText = listaAmigos[index] + ', ';
        label.addEventListener('click', function(){
            excluirAmigoDaLista();
        })
        lista.appendChild(label)
    }
}
function excluirAmigoDaLista() {
    console.log("teste do addEventListener"); 
}
function atualizarSortear() {
    let lista = document.getElementById("lista-sorteio");
    lista.innerHTML = "";
}


function reiniciar() {
    listaAmigos = [];
    document.getElementById("lista-sorteio").innerHTML = "";
    document.getElementById("lista-amigos").innerHTML = "";

}