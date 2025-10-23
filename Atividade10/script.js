function calcularIMC() {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const resultado = document.getElementById("resultado");

    if (!altura || !peso || altura <= 0 || peso <= 0) {
        resultado.innerHTML = "Por favor, insira valores válidos.";
        resultado.style.color = "red";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";
    let cor = "";

    if (imc < 18.5) {
        classificacao = "Magreza (Grau 0)";
        cor = "#ffcc00";
    } else if (imc < 25) {
        classificacao = "Normal (Grau 0)";
        cor = "#00b050";
    } else if (imc < 30) {
        classificacao = "Sobrepeso (Grau I)";
        cor = "#ff9900";
    } else if (imc < 40) {
        classificacao = "Obesidade (Grau II)";
        cor = "#ff3300";
    } else {
        classificacao = "Obesidade Grave (Grau III)";
        cor = "#cc0000";
    }

    resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong><br>${classificacao}`;
    resultado.style.color = cor;
}