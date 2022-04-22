// primeiro passo reconheçer quando aperta alguma tecla
document.body.addEventListener('keyup', ()=>{ //evento de quando aperta e solta um botão.
    playSound(event.code.toLowerCase()); // função chamada para tocar o som.
});

document.querySelector('.composer button').addEventListener('click', ()=> { // criando a lista da composição
    let song = document.querySelector('#input').value;

    if(song !== '') { // se o som não for vazio
        let songArray = song.split('');
        playComposition(songArray);
    }
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`); // seleciona o arquivo de audio baseado na tecla digitada
    let keyElement = document.querySelector(`div[data-key="${sound}"]`); // selecionar o botao apertado para adicionar a animação

    if (audioElement) { // se o elemento do audio existe
        audioElement.currentTime = 0; // remove os delay dos sons clicados
        audioElement.play();
    }

    if (keyElement) { // verificar se o botão foi apertado
        keyElement.classList.add('active'); // ativa a classe 'active' do css para adicionar a animação no botão clicado

        setTimeout(()=> {
            keyElement.classList.remove('active'); // removendo a classe css de animação do elemento clicado
        }, 300);
    }
}

function playComposition(songArray) { // função para chamar as letras da composição
    let wait = 0;

    for (let songItem of songArray) {
        setTimeout(()=> {
            playSound(`key${songItem}`);
        }, wait);

        wait += 250; // setando diferenças de tempo para cada letra clicada na composição
    }
}