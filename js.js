let allcards = [
    '/img/charizard.png', 
    '/img/css.png',
    '/img/css.png', 
    '/img/ember.png', 
    '/img/esfera.png', 
    '/img/feb.png', 
    '/img/ferrari.png', 
    '/img/html.png', 
    '/img/pac.png', 
    '/img/ember.png', 
    '/img/esfera.png', 
    '/img/feb.png', 
    '/img/ferrari.png', 
    '/img/html.png', 
    '/img/pac.png', 
    '/img/pikachu.png', 
    '/img/react-icon.png',
    '/img/charizard.png', 
    '/img/pikachu.png', 
    '/img/react-icon.png'
    ];

var carta11 = ''
var carta22 = ''
var carta1 = '';
var carta2 = '';
var pontos = 0;
var bloqueado = false


var sorteio = allcards.sort(() => Math.random() - 0.5)

function alterarImagem(event, index) {
    if (bloqueado === false) {
        event.target.src = sorteio[index]
        carta1 = event.target.src
        carta11 = event.target
        bloqueado = true
    } else if (bloqueado === true) {
        event.target.src = sorteio[index]
        carta2 = event.target.src
        carta22 = event.target
        bloqueado = false
    
     if (carta1 !== carta2) {
        setTimeout(function(){
            carta11.src = '/img/js.png'
            carta22.src = '/img/js.png'
        }, 1000)
    } else if (carta1 === carta2) {
        pontos = pontos + 10
        document.getElementsByName('display')[0].value = pontos
            if (pontos === 100) {
                alert('Parabéns, você ganhou')
            }
    }
    
    }
}