
/*1") Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array)   
a. undefined 

array = null
console.log('b. ', array)   
b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)    
c. 11

let i = 0
console.log('d. ', array[i])    
d. 3. Dentro del indice pone el valor de la variable i, en este caso el numero
3 ocupa la posición 0 en el indice

array[i+1] = 19
console.log('e. ', array)   
e. (11() [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13].
 remplaza el numero 4 (que se encontra na posição 1) pelo número 19

const valor = array[i+6]
console.log('f. ', valor)/*f. 9 */




/* 2. Leia o código abaixo com atenção
    
    
    const frase = prompt("Digite uma frase")
    
    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

    
 Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?
RESPUESTA
SUBI NUM ÔNIBUS EM MIRROCOS, 27 */


/*EXERCICIOS DE ESCRITA*/

/*1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
        
O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!*/



let nomeDoUsuario = prompt("Qual é seu nome")
let emailDoUsuario = prompt("Qual é seu e-mail")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

/**/

/*2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
a) Imprima no console o array completo
    
b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no 
consolea nova lista*/


let comida = ["rucula ", "milho ", "chocolate ", "batata frita ", "cogumelos "]

/*A*/
console.log(comida)
/*B*/
console.log(`Essas são as minhas comidas preferidas: `)
console.log( comida[0] )
console.log( comida[1] )
console.log( comida[2] )
console.log( comida[3] )
console.log( comida[4] )

/*C*/

let comidaUser = prompt("Qual é sua comida favorita")
let i = 1

comida[2-i] = comidaUser
console.log('nova lista', comida)



/*3. Faça um programa, seguindo os passos:
    
    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
    c) Imprima o array no console
    
    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
    e) Remova da lista o item de índice que o usuário escolheu.
    
    f) Imprima o array no console*/


let listaDeTarefas = []

const tarefa1 = prompt("Diga uma tarefa que precisa realizar")
listaDeTarefas.push(tarefa1)

const tarefa2 = prompt("Diga uma tarefa que precisa realizar")
listaDeTarefas.push(tarefa2)

const tarefa3 = prompt("Diga uma tarefa que precisa realizar")
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)


let jaRealizou = prompt(`Selecione a tarefa que já realizou: ${tarefa1} equivale a 0, ${tarefa2} equivale a 1, ${tarefa3} equivale a 2`)
console.log(jaRealizou)

listaDeTarefas.splice(jaRealizou,1)

console.log(listaDeTarefas)



/*- Desafios
    1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços*/
    


    let fraseUser = prompt("escreva uma frase")

    let arrayPalabras = fraseUser.split()

    console.log(arrayPalabras)


    /*-2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um programa que acha o índice da palavra 
    Abacaxi e imprime tanto o índice quanto o tamanho do array*/

    let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

    let resultadoPos = frutas.indexOf("Abacaxi");

    console.log(resultadoPos)



