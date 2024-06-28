function Concatenar() {
    let minhaLista = document.getElementById("input_1").value.toUpperCase().split(" ");
    console.log(minhaLista);
    let outraLista = document.getElementById("input_2").value.toUpperCase().split(" ");
    console.log(outraLista);
    let novaLista = minhaLista.concat(outraLista);
    console.log(novaLista);
    novaLista.pop();
    console.log(novaLista);
    novaLista = removerDuplicatas(novaLista);
    console.log(novaLista);
    novaLista = embaralha(novaLista);
    console.log(novaLista);
    document.getElementById("resultado").textContent = `Array um fica: ${minhaLista} array dois fica: ${outraLista} a Concatenação dos arrays fica ${novaLista}`;
}

function embaralha(lista) {
    let tamanhoLista = lista.length;

    while (tamanhoLista != 0) {
        let randomIndex = Math.floor(Math.random() * tamanhoLista);
        tamanhoLista--;
        [lista[tamanhoLista], lista[randomIndex]] = [
            lista[randomIndex], lista[tamanhoLista]
        ];
    }
    return lista
}

function removerDuplicatas(lista) {
    return [...new Set(lista)];

    //Dentro da função, é criado um novo Set a partir do array original: new Set(array).
    //O objeto Set é uma estrutura de dados que armazena valores únicos.Isso significa que ele automaticamente remove quaisquer elementos duplicados.
    //O operador spread([...]) é usado para converter o Set de volta em um array, preservando apenas os valores únicos.
}