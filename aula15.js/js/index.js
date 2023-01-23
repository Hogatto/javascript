const num = Number(prompt('Digite seu numero: '))
const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = num
texto.innerHTML += `<p>Raiz Quadrada: ${num ** 0.5}</p>`
texto.innerHTML += `<p>Seu número é inteiro: ${Number.isInteger(num)}</p>`
texto.innerHTML += `<p>é NaN: ${Number.isNaN(num)}</p>`
texto.innerHTML += `<p>Arredondado pra baixo: ${Math.floor(num)}</p>`
texto.innerHTML += `<p>Arredondado pra cima: ${Math.ceil(num)}</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}</p>`
