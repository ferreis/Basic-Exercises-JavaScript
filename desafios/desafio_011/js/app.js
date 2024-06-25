function convertaTemperatura(escala) {
    const temperatura = parseFloat(document.getElementById("temperatura").value);

    if (escala === "Celsius") {
        document.getElementById("resultado").textContent = `${(temperatura * 9/5)+32}ºF`;
    } else if (escala === "Fahrenheit") {
        document.getElementById("resultado").textContent = `${(temperatura -32)*5/9}ºC`;

    } else {
        document.getElementById("resultado").textContent = "Escala invalida";
    }
}