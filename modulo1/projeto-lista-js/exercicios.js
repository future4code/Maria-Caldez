// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01


function calculaAreaRetangulo() {
  let altura = Number(prompt("Qual é a altura do retangulo"))
  let largura = Number(prompt("Qual é a largura do retangulo")) 
  let resultado = altura * largura
  console.log(resultado)
}



// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt("Qual é o ano atual"))
  let anoNascimento = Number(prompt("Qual é seu ano de nascimento ")) 
  let resultado = anoAtual - anoNascimento
  console.log(resultado)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc = peso / (altura * altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Qual é seu nome")
  let idade = Number(prompt("Qual é sua idade"))
  let email = prompt("Qual é seu e-mail")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let array = []
  let cor1 = prompt("Qual é sua cor favorita")
  let cor2 = prompt("Qual é sua cor favorita")
  let cor3 = prompt("Qual é sua cor favorita")

  array.push(cor1)
  array.push(cor2)
  array.push(cor3)
  console.log(array)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return  custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
   return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {

  return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let primerLugar = array[0]
  let ultimoLugar = array[array.length-1]
  let posExtra = array[0]
   
   array[0] = ultimoLugar
   array[array.length-1] = posExtra

   return array

}

let prueba = [1, 2, 3, 4]
let resultado =trocaPrimeiroEUltimo(prueba)
console.log(resultado)

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase()

}

let prueba2 = checaIgualdadeDesconsiderandoCase("aAa", "aaa")
console.log(prueba2)

// EXERCÍCIO 13
function checaRenovacaoRG()

{
  let anoAtual = Number(prompt("Qual é o ano atual"))
  let anoNascimento = Number(prompt("Qual é ano de nascimento ")) 
  let anoCarteira = Number(prompt("Qual ano foi emitida sua carteira de identidade "))

  let condicao20Menos
  let condicao20E50
  let condicao50Mais
  console.log(resultado)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}