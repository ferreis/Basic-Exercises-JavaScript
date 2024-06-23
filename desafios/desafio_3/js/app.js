function capturarValores() {
    let fistName = document.getElementById("fistName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;

    document.getElementById("resultado").textContent = `Nome: ${fistName} Sobrenome: ${lastName} Idade: ${age}`;
    console.log(`Nome: ${fistName} Sobrenome: ${lastName} Idade: ${age}`);
}