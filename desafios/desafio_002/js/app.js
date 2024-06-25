function ordemCrescente() {
    let numero1 = parseFloat(document.getElementById("numero_1").value);
    let numero2 = parseFloat(document.getElementById("numero_2").value);
    let numero3 = parseFloat(document.getElementById("numero_3").value);
    
    let numerosOrdenados = [numero1, numero2, numero3].sort((a, b) => a - b);

    let resultado = document.getElementById("resultadoDesafioDois");
    resultado.textContent = `Resultado: ${numerosOrdenados.join("  ")}`;
}
