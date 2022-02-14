/*let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)*/

/*10 
  10 5 */

/*let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)*/

/*  10
    10
    10*/

/*let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)*/

/*  let horasDiaria = prompt("Quantas horas você trabalha por dia?")
    let valorDiaria = prompt("Quanto você recebe por dia?")
    alert(`Voce recebe ${valorDiaria/horasDiaria} por hora`)*/

    let nome
    let idade
    
    console.log (typeof(nome, idade))
    
    /* As variaveis são de tipo undefined porque não asignamos nenhum valor ainda*/
    
    nome = prompt("Qual é seu nome")
    idade = prompt("Qual é sua idade")
    
    console.log (typeof(nome, idade))
    console.log (nome, idade)
    
    /* Agora as variaveis são de tipo string porque a traves do prompt obtive os dados do usuario
    que foram asignados como valor das variaveis*/
    
    console.log ("Olá ", nome, "você tem ", idade, "anos")
    
    let primeiraPergunta = "É de dia? "
    let segundaPergunta = "Hoje é segunda? "
    let terceiraPergunda = "É verão? "
    
    let primeiraResposta = true
    let segundaResposta = true
    let terceiraResposta = true
    
    console.log(primeiraPergunta, primeiraResposta, segundaPergunta, segundaResposta, terceiraPergunda, terceiraResposta)
    
    
    let a = 10
    let b = 25
    let c = 10
    a = b
    b = c
    
    
    // Aqui faremos uma lógica para trocar os valores
    
    
    // Depois de trocados, teremos o seguinte resultado:
    console.log("O novo valor de a é", a) // O novo valor de a é 25
    console.log("O novo valor de b é", b) // O novo valor de b é 10
    
    /*Desafio opcional*/
    
    let firstNumber = prompt ("ingresse un número")
    let primerValor = Number (firstNumber)
    let secondNumber = prompt ("ingresse un número novamente")
    let segundoValor = Number (firstNumber)
    
    console.log (typeof(primerValor, segundoValor))
    
    let x = primerValor + segundoValor
    let y = primerValor * segundoValor
    
    console.log ("A soma entre os dois números é: ", x, "A multiplicação entre os dois números é: ", y)
    
    