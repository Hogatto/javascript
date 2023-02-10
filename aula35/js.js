const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {hour12: false})
}

iniciar.addEventListener('click', function(event){
    
})

pausar.addEventListener('click', function(event){
    alert('cliquei no pausar')
})

zerar.addEventListener('click', function(event){
    alert('cliquei no zerar')
})