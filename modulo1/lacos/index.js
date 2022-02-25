//EXERCÍCIO DE INTERPRETAÇÃO

//1
//   O que o código abaixo está fazendo? Qual o resultado impresso no console?

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// Esta agregando na variavel valor o valor + 1 por cada volta, e sumando esse resultado ao resultado obtido na anterior 
// iteração, até que chega a 4 e imprime no console.log (4)



// 2

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//     console.log(numero,"con posición: ", lista.indexOf(numero))
//   if (numero > 18) {
//         console.log(numero)
		
// 	}
// }

// 2A ) 
// Vai ser impressos os números maiores a 18. Sendo: 19, 21, 23, 25, 27, 30

// 2b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o 
// que poderia ser usado para fazer isso?
// 2B) Não é suficiente, para isso teria que utilizar o comando indexOf(numero)



//3
//  Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// *,**,***,****



// EXECICIO DE ESCRITA


// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    
// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde
// esses nomes em um array

// let mascotas = Number (prompt("Quantos bichinhos de estimação vc tem"))
// console.log(mascotas)
// let bichinhos = []

// if (mascotas == 0){
//     console.log("Que pena! Você pode adotar um pet!") 
// }else
// if (mascotas > 0){
//     for (let i = 1; i <= mascotas; i++){

//     let nome = prompt("Qual é o nome de seu bichinho")
    

//     bichinhos.push(nome)
//     }
// }

// console.log(bichinhos)

// 2
// 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números.
//  Baseando-se nisso, crie uma ção para cada um dos itens abaixo, realizando as operações pedidas:
    
    
    
    




//     a) Escreva um programa que **imprime** cada um dos valores do array original.

let arrayOriginal = [1, 2, 3, 4, 5, 6, 7]

ction imprimirArray (array){
for (let numeros of array){
    console.log(numeros)
    }
}
imprimirArray(arrayOriginal)

//     b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

ction dividirArray (array){
    for (let numeros of array){
        let resultado = numeros / 10
        console.log(resultado)
        }
    }
dividirArray(arrayOriginal)


//     c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e
//      **imprima** esse novo array
ction restoArray (array){
    let novoArray =[]
    for (let numeros of array){
        if (numeros % 2 === 0) {
            novoArray.push(numeros)
            }
        }
        console.log(novoArray)
    }

restoArray(arrayOriginal)




//     d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: 
//     "O elemento do índobrigada!!ex `i` é: `numero`". Depois, **imprima** este novo array.

ction posicaoArray (array){
    for (let numeros of array){
        console.log("O elemento do índex", array.indexOf(numeros), "é ", numeros )
        }
    }
    posicaoArray(arrayOriginal)

    
//     e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

ction descobraMaiorOuMenor (array){
    let maior = array [0]
    let menor = array [0]
    for (let numeros of array){
        if (numeros > maior){
            maior = numeros
        }
        if (numeros < menor){
            menor = numeros
        }
    }
    console.log ("O maior número é: ", maior)
    console.log ("O menor número é", menor)
}

descobraMaiorOuMenor(arrayOriginal)
