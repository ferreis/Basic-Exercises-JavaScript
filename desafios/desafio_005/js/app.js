function soma() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let soma = numero1+numero2;
    let mensagem = `A soma de ${numero1} e ${numero2} é ${soma}`;
    document.getElementById("resultado").textContent = mensagem;
    console.log(mensagem);
}