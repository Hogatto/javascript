const form = document.querySelector('#form')

form.addEventListener('submit', function (e){
    e.preventDefault()
})

function criaP(className){
    const p = document.createElement('p')
    return p
}

function setResultado(msg){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''
    const p = criaP()
}
