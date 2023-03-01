// FIlter sempre retorna um array, com a mesma quantidade de 
//elementos ou menos
//retorne numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosFiltrados = numeros.filter(valor => valor > 10)
//console.log(numerosFiltrados)

//retorne pessoas com nome que contenha 5 letras ou mais 
//retorne pessoas com mais de 50 anos
//retorne pessoas cujo nome termina com a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]
const pessoasComNomeGrande = pessoas.filter(objeto => objeto.nome.length >= 5)
console.log(pessoasComNomeGrande)

const maioresDe50 = pessoas.filter(objeto => objeto.idade >= 50)
console.log(maioresDe50)

const ultimaLetraA = pessoas.filter(objeto => objeto.nome.toLocaleLowerCase().endsWith('a'))
console.log(ultimaLetraA)