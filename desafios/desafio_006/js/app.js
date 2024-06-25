function separador() {
    let sentenca = document.getElementById("texto").value;
    let sentencaSeparadas = sentenca.split(";");

    let mensagem = `Primeira sentença: ${sentencaSeparadas[0]}segunda sentença: ${sentencaSeparadas[1]}`;
    console.log(mensagem);
    document.getElementById("resultado").textContent = mensagem;

}