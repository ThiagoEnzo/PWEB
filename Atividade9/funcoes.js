function maiorNumero() {
    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número:"));
    let n3 = Number(prompt("Digite o terceiro número:"));

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Ops! Você precisa digitar 3 números válidos.");
        return null;
    }

    let maior = Math.max(n1, n2, n3);
    alert("O maior número é: " + maior);
    return maior;
}

function ordenarCrescente() {
    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número:"));
    let n3 = Number(prompt("Digite o terceiro número:"));

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Ops! Você precisa digitar 3 números válidos.");
        return null;
    }

    let ordenados = [n1, n2, n3].sort((a, b) => a - b);
    alert("Ordem crescente: " + ordenados.join(", "));
    return ordenados;
}

function ehPalindromo() {
    let texto = prompt("Digite uma palavra (ou frase) para testar se é palíndromo:");
    if (texto === null) return null;
    let limpo = texto.replace(/[^A-Za-z0-9À-ú]/g, "").toUpperCase();
    let invertido = limpo.split("").reverse().join("");
    if (limpo.length === 0) {
        alert("Digite alguma letra ou número para testar.");
        return null;
    }
    if (limpo === invertido) {
        alert("É palíndromo sim");
        return true;
    } else {
        alert("Não é palíndromo");
        return false;
    }
}

function tipoTriangulo() {
    let a = Number(prompt("Digite o lado A do triângulo:"));
    let b = Number(prompt("Digite o lado B do triângulo:"));
    let c = Number(prompt("Digite o lado C do triângulo:"));

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Ops! Você deve digitar 3 números (lados) válidos.");
        return null;
    }


    if (!(a + b > c && a + c > b && b + c > a)) {
        alert("Esses valores NÃO formam um triângulo.");
        return "não-triangulo";
    }

    
    let tipo;
    if (a === b && b === c) tipo = "Equilátero";
    else if (a === b || a === c || b === c) tipo = "Isósceles";
    else tipo = "Escaleno";

    let lados = [a, b, c].sort((x, y) => x - y);
    let cat1 = lados[0], cat2 = lados[1], hip = lados[2];
    let epsilon = 1e-9;
    let pitagoras = Math.abs(hip * hip - (cat1 * cat1 + cat2 * cat2)) < epsilon;

    let mensagem = `${tipo}`;
    if (pitagoras) mensagem += " — e também é um Triângulo Retângulo";

    alert(mensagem);
    return { tipo: tipo, retangulo: pitagoras };
}
