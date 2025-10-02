let pontosJogador = 0;
let pontosComputador = 0;

function jogar(jogador) {
  const resultadoDiv = document.getElementById("resultado");
  const computadorDiv = document.getElementById("computadorEscolha");

  resultadoDiv.innerHTML = "Computador está escolhendo... 🤖⏳";

  const icones = ["🪨", "📄", "✂️"];
  let i = 0;
  
  
  const animacao = setInterval(() => {
    computadorDiv.innerHTML = icones[i % 3];
    i++;
  }, 200);


  setTimeout(() => {
    clearInterval(animacao);

    const numAleatorio = Math.random();
    let computador = "";

    if (numAleatorio < 0.33) {
      computador = "pedra";
      computadorDiv.innerHTML = "🪨";
    } else if (numAleatorio < 0.66) {
      computador = "papel";
      computadorDiv.innerHTML = "📄";
    } else {
      computador = "tesoura";
      computadorDiv.innerHTML = "✂️";
    }

    let resultado = "";
    if (jogador === computador) {
      resultado = "Empate!";
    } else if (
      (jogador === "pedra" && computador === "tesoura") ||
      (jogador === "tesoura" && computador === "papel") ||
      (jogador === "papel" && computador === "pedra")
    ) {
      resultado = "Você ganhou! 🎉";
      pontosJogador++;
    } else {
      resultado = "Computador ganhou! 🤖";
      pontosComputador++;
    }

    resultadoDiv.innerHTML = 
      `Você escolheu: ${jogador} <br>
       Computador escolheu: ${computador} <br><br>
       ${resultado}`;


    document.getElementById("pontosJogador").innerText = pontosJogador;
    document.getElementById("pontosComputador").innerText = pontosComputador;

  }, 2000);
}

function resetar() {
  pontosJogador = 0;
  pontosComputador = 0;
  document.getElementById("pontosJogador").innerText = pontosJogador;
  document.getElementById("pontosComputador").innerText = pontosComputador;
  document.getElementById("resultado").innerHTML = "Placar resetado!";
  document.getElementById("computadorEscolha").innerHTML = "";
}
