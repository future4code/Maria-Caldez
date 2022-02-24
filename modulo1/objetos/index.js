
// 1)
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])


// a) O que vai ser impresso no console?

// // // 1A)
// // - Matheus Nachtergaele
// // - Virginia Cavendish
// // - {canal: "Globo", horario: "14h"}


// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)


// a) O que vai ser impresso no console?
// A)
// - "nome: "Juca", idade: 3, raca: "SRD"
// - "nome: "Juba", idade: 3, raca: "SRD"
// - "nome: "Jubo", idade: 3, raca: "SRD"

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// B) 
// Espalhamento/spread: indica qual é o modelo de objeto que vai seguir, e a continuação as
//  modificações que serão feitas sobre esse modelo 




// 2)
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))


// a) O que vai ser impresso no console?
// A)
// - false
// - undefine

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// No primeiro console.log estou acessando a uma propriedade do objeto pessoa cujo valor é false
// no segundo console.log estou acessando a uma propriedade que não foi declara dentro do objeto





// ESCRITA


// 1. Resolva os passos a seguir: 
    
// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá 
//     exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime 
//     uma mensagem no modelo abaixo**:** Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"


const pessoa1 = {
    nome: "Belén",
    apellidos:["Bel ", "Belu ", "Belenchu "],
}

function apresentar (humano){

    console.log(`Eu sou ${humano.nome}, mas pode me chamar de: ${humano.apellidos}`)
}

apresentar(pessoa1)

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova
//  lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

const pessoa2 ={
    ...pessoa1,
    apellidos: ["No sé ", "Não tenho ideia ", "sin imaginación"]
}

apresentar(pessoa2)



// 2
//  Resolva os passos a seguir: 
    
//     a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    
//     b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:
    
//     1. O valor de `nome`
//     2. O numero de caracteres do valor `nome`
//     3. O valor de `idade`
//     4. O valor de `profissão`
//     5. O numero de caracteres do valor `profissão`

// A)
const umaPessoa = {
    nome: "Maxi",
    idade: 30,
    profissao:"Ator",
}


const outraPessoa = {
    nome: "Jose",
    idade: 20,
    profissao:"Estudante",
}


// B)
function minhaFuncao (pessoa){
    const resultado = []

    resultado.push (pessoa.nome)
    resultado.push (pessoa.nome.length)
    resultado.push (pessoa.idade)
    resultado.push (pessoa.profissao)
    resultado.push (pessoa.profissao.length)

    return resultado
}

console.log(minhaFuncao(umaPessoa))
console.log(minhaFuncao(outraPessoa))


// 3.
//  Resolva os passos a seguir: 
    
//     a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    
//     b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes 
//     propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
    
//     c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. 
//     Invoque essa função passando os três objetos criados.

const carrinho = []

let banana = {
    nome: "bananinha",
    disponibilidade: true
}

let laranja = {
    nome: "laranjinha",
    disponibilidade: true
}

let morango = {
    nome: "moranguinho",
    disponibilidade: true
}

function comprar (fruta) {
    
    return carrinho.push(fruta)
    
}

comprar(banana)
comprar(laranja)
comprar(morango)

console.log(carrinho)


// DESAFIO

// 1)
// Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console
//  um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para
//   garantir que é um objeto.


function preguntar (){

const nombre = prompt("Qual é seu nome")
const edad = Number(prompt("Qual é sua idade"))
const profesion = prompt("Qual é sua profissão")

const objetoUsuario = {
    propiedade1: nombre,
    propiedade2: edad,
    propiedade3: profesion
    }

return console.log(objetoUsuario, typeof objetoUsuario)

}


preguntar()


// 2)
// Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento 
// e nome. 
// A função deve retornar uma mensagem no seguinte modelo:
// O primeiro filme foi lançado antes do segundo? false
// O primeiro filme foi lançado no mesmo ano do segundo? true


let filmeUm = {
    lancamento: 2020,
    nome: "La mano de Dios"
    
}

let filmeDois = {
    lancamento: 2020,
    nome: "Ciudad de Dios"
}

function contestarFilme() {
    let primeraRespuesta = filmeUm.lancamento < filmeDois.lancamento
    let segundaRespues = filmeUm.lancamento === filmeDois.lancamento

    return console.log(`O primeiro filme ${filmeUm.nome} foi lançado antes do segundo ${filmeDois.nome} ? ${primeraRespuesta}.
     O primeiro filme ${filmeUm.nome} foi lançado no mesmo ano do segundo ${filmeDois.nome}? ${segundaRespues}.`)
}

contestarFilme()