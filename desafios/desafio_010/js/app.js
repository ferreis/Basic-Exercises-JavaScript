function parOuImpar() {
    const verificar = document.getElementById("texto").value;

    if (verificar%2 == 0) {
        document.getElementById("resultado").textContent = "O valor digitado é Par";
        verificar.textContent = "";
    }else if(verificar%2 == 1){
        document.getElementById("resultado").textContent = "O valor digitado é Ímpar";
        verificar = "";
    }else{
        document.getElementById("resultado").textContent = "O valor digitado é Invalido";
        verificar = "";
    }
}