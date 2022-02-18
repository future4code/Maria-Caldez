/**/

/*
1. Leia o código abaixo
    
    
     function minhaFuncao(variavel) {
    	return variavel * 5
    }
    
    console.log(minhaFuncao(2))
    console.log(minhaFuncao(10))
    
    
    a) O que vai ser impresso no console?
    
    b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e 
    `minhaFuncao(10)`? O que apareceria no console?*/
    
    
/*
RESPOSTA 1
 10
 50
*/
    
/**/

/*2. Leia o código abaixo
    
   
    let textoDoUsuario = prompt("Insira um texto");
    
    const outraFuncao = function(texto) {
    	return texto.toLowerCase().includes("cenoura")
    }
    
    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)
  
    
    a. Explique o que essa função faz e qual é sua utilidade
    
    b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
         i.   `Eu gosto de cenoura`
         ii.  `CENOURA é bom pra vista`
         iii. `Cenouras crescem na terra`*/

/*
RESPOSTA 2
A) Ao inserir um texto dentro do parentecis (parametro) a função retorna esse texto em minúsculo e devolve true
se o texto tem a palavra "cenoura" ou false se não tem.

B)    i. true
       ii. true
         iii. true
*/


 /*
- **Exercícios de escrita de código**
    1. Escreva as funções explicadas abaixo:
        
a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações
sobre você, como:

        "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não 
possui entradas, apenas imprime essa mensagem.
*/

let nome = "Belén"
let idade = Number("32")
let cidade = "Florianopolis"
let profissao = "estudandte"

function apresentar(){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`) 
}
apresentar()

/*b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome 
(string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique
 todas as informações da pessoa em uma só mensagem com o template:
 Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
 */

 function apresentar2 (n, i, c, p) {

    return `Eu sou ${n}, tenho ${Number(i)} anos, moro em ${c} e sou ${p}.`

}

console.log (apresentar2(nome, idade, cidade, profissao))

/*2. Escreva as funções explicadas abaixo:
    
    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas 
    e retorne o resultado. Invoque a função e imprima no console o resultado.
    
    b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou
     igual** ao segundo.
    
    c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
    
    d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
    juntamente com uma versão dela em letras maiúsculas. */
/*A*/
const numero1 = Number(prompt("ingrese un número"))
const numero2 = Number(prompt("ingrese un número"))
const mensagem = prompt("Escriba una frase")
    
function soma(n1, n2){
    return n1 + n2
}
let mostrartelaSoma = soma (numero1, numero2)

console.log (mostrartelaSoma)

/*B*/
function booleano(n1, n2){
    return n1 >= n2
}
let mostrartelaBooleano = booleano(numero1, numero2)

console.log(mostrartelaBooleano)

/*C*/
function par(n1){
    let resto = n1 % 2
    return resto === 0
}
let mostrartelaPar = par(numero1)

console.log(mostrartelaPar)

/*D*/
function string(frase){
    console.log (frase.toUpperCase(), frase.length)
    
}
string(mensagem)

/*
Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça 
para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o
 argumento. Por fim, mostre no console o resultado das operações:

 Números inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10
*/

function somar(n1, n2){
    console.log (n1 + n2)
}

function subtrair(n1, n2){
    console.log (n1 - n2)
}

function multiplicar(n1, n2){
    console.log (n1 * n2)
}

function dividir(n1, n2){
    console.log (n1 / n2)
}

somar(numero1,numero2)
subtrair(numero1,numero2)
multiplicar(numero1,numero2)
dividir(numero1,numero2)

/*- Desafios
    1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do 
    código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é 
    escrever duas funções
        
        a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro
        
        b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** Faça a 
        soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para 
        imprimi-lo
        */

/*A*/
let arrowUmParametro = (nombre) => {
    return console.log(nombre)
}

arrowUmParametro(nome)

/*B*/
let arrowSoma = (n1, n2) => n1 + n2 

arrowUmParametro(arrowSoma(numero1, numero2))


/*Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. 
Retorne este valor, invoque a função e imprima o resultado no console.

A fórmula do teorema é: hip² = a² + b² , onde hip é a hipotenusa e a e b são os catetos. 
É necessário isolar a hipotenusa, então ao final temos: hip = √(a² + b²)
*/


function calcular (a,b) {

    let catetos = a * a + b * b
    return calcular = Math.sqrt (catetos)
}

calcular(numero1,numero2)

console.log("el valor de la hipotenusa es: ", calcular)
