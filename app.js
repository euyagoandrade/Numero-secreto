let numeroMinimo = 1;
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random()* numeroMaximo +1);
tentativas = 1;

document.getElementById("titulo").innerHTML = 'Bem vindo(a) ao jogo do número secreto';
document.getElementById("texto").innerHTML = `Escolha um número entre ${numeroMinimo} e ${numeroMaximo}`;

window.onload = function() {
    document.getElementById("verificarButton").addEventListener("click", verificarChute);
};
console.log(numeroSecreto);
function verificarChute(){
    console.log(numeroSecreto);
    document.getElementById("chute").focus();
    let chute = document.getElementById("chute").value;
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    if(chute == numeroSecreto){
        document.getElementById("titulo").innerHTML = 'Acertou!';
        document.getElementById("texto").innerHTML = `Parabéns! Você acertou o número secreto após ${tentativas} ${palavraTentativas}!`;
        document.getElementById("reiniciar").removeAttribute ('disabled');
    } else {
        if(chute > numeroSecreto){
            document.getElementById("titulo").innerHTML = 'Errou!';
            document.getElementById("texto").innerHTML = 'O número secreto é MENOR do que o número que você digitou!';
            document.getElementById("chute").value = '';
            document.getElementById("chute").focus();
        } else {
            document.getElementById("titulo").innerHTML = 'Errou!';
            document.getElementById("texto").innerHTML = 'O número secreto é MAIOR do que o número que você digitou!';
            document.getElementById("chute").value = '';
            document.getElementById("chute").focus();
        }
        tentativas++;
    }
}

function reiniciarJogo() {
    document.getElementById("reiniciar").setAttribute ('disabled','true');
    numeroSecreto = parseInt(Math.random()* numeroMaximo +1);
    document.getElementById("chute").value = '';
    tentativas = 1;
    document.getElementById("chute").focus();
    document.getElementById("titulo").innerHTML = 'Bem vindo(a) ao jogo do número secreto';
    document.getElementById("texto").innerHTML = `Escolha um número entre ${numeroMinimo} e ${numeroMaximo}`;
   
}