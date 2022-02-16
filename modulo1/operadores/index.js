/*1)Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.


const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
 a. false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)
b. false

resultado = !resultado && (bool1 || bool2)
console.log("c. ", resultado)
c. true

console.log("d. ", typeof resultado)
d. boolean


2) Seu colega se aproxima de você falando que o código dele não funciona como devia. 
 Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

 let primeiroNumero = prompt("Digite um numero!")
 let segundoNumero = prompt("Digite outro numero!")
 
 const soma = primeiroNumero + segundoNumero
 
 console.log(soma)
2)todos os valores coletados por meio de prompt são strings.
o que aparecerá no console é um string "1010"
    
 *3)Ele deve convertir esses valores em números por meio de Number().
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))*/


/*Faça um programa que:
a) Pergunte a idade do usuári

b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)*/

let idadeUsuario = Number(prompt("Qual é sua idade"))
let idadeAmigue = Number(prompt("Qual é a idade de seu amiga ou amigo"))

console.log("Sua idade é maior do que a do seu melhor amiga ou amigo", idadeUsuario > idadeAmigue) 


/*2. Faça um programa que:
    
a) Peça ao usuário que insira um número **par**
    
b) Imprima na console **o resto da divisão** desse número por 2.
    
c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    
d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código*/

let numeroPar = Number(prompt("Insira um número par"))
console.log (numeroPar % 2)

/*c)Quando o número é par o resultado é zero por que ao ser divisivel por 2 não tem resto*/
/*d)Quando o número é impar sempre tem resto 1 porque números impares não são divisivel por 2*/


/*3) Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
    a) A idade do usuário em meses
    
    b) A idade do usuário em dias
    
    c) A idade do usuário em horas*/

    let idadeAnos = Number(prompt("Quantos anos você tem"))

    let idadeMeses = idadeAnos * 12
    let idadeDias = idadeAnos * 360
    let idadeHoras = idadeDias * 24

    console.log ("Sua idade em meses: ", idadeMeses, ", Dias: ", idadeDias, ", horas: ", idadeHoras)

/*Faça um programa que pergunte ao usuário dois números. Em seguida,faça as operações e imprima no 
console as seguintes mensagens seguidas pelo true ou false:

O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

obs: O true ou false vai depender dos números inseridos e do resultado das operações.*/

let firstNumero = Number(prompt("Ingrese um número"))
let secondNumero = Number(prompt("Novamente ingrese um número"))


console.log(firstNumero > secondNumero)
console.log(firstNumero === secondNumero)
console.log((firstNumero % secondNumero) === 0)
console.log((secondNumero % firstNumero) === 0)

/*
1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura 
entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:
    - Graus Fahrenheit(°F) para Kelvin(K)
        
        ```
        (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
        ```
        
    - Graus Celsius(°C) para Graus Fahrenheit (°C)
        
        ```
        (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
        ```
    - De Celsius a Kelvin: 
    KELVIN = CELSIUS + 273.15.
    
    a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
    
    b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
    
    c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
    
    d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
*/

/*A*/
let gradosCelsius
let gradosFahrenheit
let gradosKelvin

gradosFahrenheit = 77
let resultadoKelvinFah = (gradosFahrenheit - 32)*(5/9) + 273.15
console.log(resultadoKelvinFah, "K")
/*B*/
gradosCelsius = 80
let resultadoFahrenheitCels = (gradosCelsius)*(9/5) + 32
console.log(resultadoFahrenheitCels, "°F")
/*C*/
gradosCelsius = 30
resultadoFahrenheitCels = (gradosCelsius)*(9/5) + 32
let resultadoKelvinCels = gradosCelsius + 273.15


console.log(resultadoFahrenheitCels, "°F", resultadoKelvinCels, "K")

/*D*/

let gradosUser = Number(prompt("Ingrese una temperatura en centigrados"))
let resultadoFahrenheitUser = (gradosUser)*(9/5) + 32
let resultadoKelvinUser = gradosUser + 273.15


console.log(resultadoFahrenheitUser, "°F", resultadoKelvinUser, "K")










 