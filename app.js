let listaDeNumerosSorteados = [];
let teto = 3;
let tentativas = 0;
var audio = new Audio('faustao-errou.mp3');

numeroSecreto = gerarNumeroAleatorio();

//ajustando os parametros de texto da página
function exibirNomeNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female');
}

exibirNomeNaTela('h1', 'JOGO SECRETO HAHA :)');
exibirNomeNaTela('p', `Escolha um número entre 1 e ${teto}`);


function verificarChute() {
    let chute = document.querySelector('input').value
    tentativas++;
    if (chute == numeroSecreto) {
        exibirNomeNaTela('h1',`Parabéns, você acertou!`);
        exibirNomeNaTela('p',`O número secreto era ${chute} e você acertou em ${tentativas} tentativas!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //audio.play() comando pra dar o play no audio do faustao
        if (numeroSecreto > chute) {
            exibirNomeNaTela('h1',`Você errou!`);
            exibirNomeNaTela('p',`O número secreto é maior que ${chute}!`);
        } else { 
            exibirNomeNaTela('h1',`Você errou!`);
            exibirNomeNaTela('p',`O número secreto é menor que ${chute}!`);
        }
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
   
    let x = Math.floor(Math.random() * teto) + 1;
   
   if (listaDeNumerosSorteados.length == teto) {
    listaDeNumerosSorteados = [];
   }

   if (listaDeNumerosSorteados.includes(x)) {
    return gerarNumeroAleatorio(); //isso aqui é uma recursão, a função chama ela mesma e pode dar muito problema dependendo de quantas vezes o cara joga
   } else {
    listaDeNumerosSorteados.push(x);
    return x;
   }
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = null;
}

function novoJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 0;
    limparCampo();
    exibirNomeNaTela('h1', 'NOVO JOGO SECRETO HAHA :)');
    exibirNomeNaTela('p', `Escolha um número entre 1 e ${teto}`);
    document.getElementById('reiniciar').setAttribute('disabled', '');
}
