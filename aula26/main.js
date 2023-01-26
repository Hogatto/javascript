const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e){
    e.preventDefault()
    const inputPeso = form.querySelector('#peso')
    const inputAltura = form.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if(!peso){
        setResultado('Peso invalido', false)
        return
    }

    if(!altura){
        setResultado('Altura invalida', false)
        return
    }

    console.log('cheguei aqui')
    
})

function criaP(className){
    const p = document.createElement('p');
    return p
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML ='';

    const p = criaP()
    p.innerHTML = msg
    resultado.appendChild(p)
}
