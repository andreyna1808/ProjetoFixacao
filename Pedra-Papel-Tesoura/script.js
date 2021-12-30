//Usuario
let escolhaUser = document.querySelectorAll('.escolhaJogador div > img')
let escolhaPc = document.querySelectorAll('.escolhaPc div > img');
let jogadorOpc = '';
let pcOpc = '';

function vencedor(){

    let ganhador = document.querySelector('.vencedor')

    if(pcOpc == jogadorOpc){
        ganhador.style.backgroundColor = 'black';
        ganhador.style.color = 'white';
        ganhador.innerHTML = 'Deu Empate 😞'
    }
    else if (pcOpc == 'pedra' && jogadorOpc == 'tesoura' || pcOpc == 'papel' && jogadorOpc == 'pedra' || pcOpc == 'tesoura' && jogadorOpc == 'papel'){
        ganhador.style.backgroundColor = 'red';
        ganhador.style.color = 'white';
        ganhador.innerHTML = 'Infelizmente você perdeu 😞'
    }
    else {
        ganhador.style.backgroundColor = 'green';
        ganhador.style.color = 'black';
        ganhador.innerHTML = 'Daleee você venceu!! 😀'
    }
} 

function resetarOpacidade(){
    if(escolhaUser){
        for(let i = 0; i < escolhaUser.length; i++){
            escolhaUser[i].style.opacity = 0.3;
        }   
    }
    if(escolhaPc) {
        for(let i = 0; i < escolhaPc.length; i++){
            escolhaPc[i].style.opacity = 0.3;
        }  
    }
}

function jogadorPC(){
    let geradorNumero = Math.floor(Math.random()*3);
    for(let i = 0; i < escolhaPc.length; i++){
        if(i == geradorNumero){
            escolhaPc[i].style.opacity = 1;
            pcOpc = escolhaPc[i].getAttribute('opcao');
        }
    }
}

for(let i = 0; i < escolhaUser.length; i++){
    escolhaUser[i].addEventListener('click', function(cor){
        resetarOpacidade();
        cor.target.style.opacity = 1;
        jogadorOpc = cor.target.getAttribute('opcao');
    
        jogadorPC();
        vencedor();
    })
}
//AUTOMATIZAÇÃO DO PC

//escolhaPc e o escolhaUser

//Condição do Vencedor 
