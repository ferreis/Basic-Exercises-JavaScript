function separarNumeros() {
    let numeros = document.getElementById("numeros").value;
    let arrayNumeros = numeros.split(",");

    console.log(arrayNumeros);

    document.getElementById("resultado").textContent = arrayNumeros.join(" - ");

}