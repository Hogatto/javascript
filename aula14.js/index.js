
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosEmDobro = numeros.map(valor => valor * 2)






const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

const listaPessoas = pessoas.map(nome => nome.nome)

const idade = pessoas.map(obj => ({ idade: obj.idade}))

const comIds = pessoas.map(function(obj, indice) {
    obj.Id = indice
    return obj
} )
console.log(comIds)