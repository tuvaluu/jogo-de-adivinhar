
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let palpites = document.querySelector ('.palpites')
let ultimoresultado = document.querySelector('.ultimoresultado');
let altooubaixo = document.querySelector('.altooubaixo');
let enviarpalpite = document.querySelector('.enviarpalpite');
let campopalpite = document.querySelector('.campopalpite');
let contagempalpite = 1;
let botaoreinicio;
campopalpite.focus();

function conferirPalpite() {
    let palpiteUsuario = Number (campopalpite.value);
    if (contagempalpite ===1) {
        palpites.textContent = 'Palpites anteriores: '; 
    }
    palpites.textContent += palpiteUsuario + ' ';

    if (palpiteUsuario === numeroAleatorio) {
        ultimoresultado.textContent = 'Parabéns! Você acertou!';
        ultimoresultado.style.backgroundColor = 'green';
        altooubaixo.textContent = '';
        configFimDeJogo();
    } else if (contagempalpite === 10){
        ultimoresultado.textContent = '!!! FIM DE JOGO!!!';
        altooubaixo.textContent = '';
        configFimDeJogo();
    } else {
        ultimoresultado.textContent = 'Errado!';
        ultimoresultado.style.backgroundColor = 'red';
        if (palpiteUsuario < numeroAleatorio) {
            altooubaixo.textContent = 'Seu palpite está muito baixo!';
        } else if (palpiteUsuario > numeroAleatorio){
            altooubaixo.textContent = 'Seu palpite está muito alto!';
        }
    }


    contagempalpite++;
    campopalpite.value = '';
    campopalpite.focus();
};

function configFimDeJogo() {
    campopalpite.disable = true;
    enviarpalpite.disable = true;
    botaoreinicio = document.createElement('button');
    botaoreinicio.textContent = 'Iniciar novo jogo';
    document.body.appendChild(botaoreinicio);
    botaoreinicio.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo(){
    contagempalpite = 1;

    let reiniciarParas = document.querySelectorAll('.resultadoParas p');
    for (let i = 0; i < reiniciarParas.length; i++) {
        reiniciarParas [i].textContent = '';
    }

    botaoreinicio.parentNode.removeChild(botaoreinicio);

    campopalpite.disable = false;
    enviarpalpite.disable = false;
    campopalpite.value = '';
    campopalpite.focus();

    ultimoresultado.style.backgroundColor = 'white';    

    numeroAleatorio = Math.floor(Math.random() * 100) + 1;

}