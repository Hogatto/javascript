function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')
    form.addEventListener('submit', recebeEventoForm)
    const pessoas = []

    function recebeEventoForm(evento){
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura= form.querySelector('.altura')

        evento.preventDefault();
}
    pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    })
    
    console.log(pessoas)
    
    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}`+ `${peso.value} ${altura.value}</P>`
    
}
meuEscopo();
