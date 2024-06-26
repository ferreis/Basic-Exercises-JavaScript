let listaAmigos = ["Ferreis", "Ricardo", "Fernando", "Luiz", "Carlos", "Rafael"];

function adicionar() {
    let amigo = document.getElementById("nome-amigo");
    listaAmigos.push(amigo.value);
    document.getElementById("lista-amigos").textContent = listaAmigos.join(", ");
    amigo.value = "";
}

function sortear() {
    document.getElementById("lista-sorteio").innerHTML = "";
    let listaSorteado = [];
    for (let index = 0; index < listaAmigos.length;) {
        let sorteado = listaAmigos[parseInt(Math.random() * listaAmigos.length)];
        if (listaSorteado[index] != listaAmigos[index] && listaAmigos[index] != sorteado 
            && !listaSorteado.includes(sorteado) && sorteado != undefined) {
            listaSorteado.push(sorteado);
            index++;
        }
    }

    for (let index = 0; index < listaAmigos.length; index++) {
        let novoItem = document.createElement("p");
        novoItem.innerHTML = ` ${listaAmigos[index]} -> ${listaSorteado[index]}<br>`;
        document.getElementById("lista-sorteio").appendChild(novoItem);

    }
}

function reiniciar() {
    listaAmigos = [];
    document.getElementById("lista-sorteio").innerHTML = "";
    document.getElementById("lista-amigos").innerHTML = "";

}