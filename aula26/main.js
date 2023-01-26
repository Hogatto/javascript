const formulario = document.querySelector('#form')

formulario.addEventListener('submit', function(e){
    e.preventDefault()
    console.log('evento previnido')
})
