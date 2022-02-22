// EXERCICIO INTERPRETACION

// 1. Leia o código abaixo:
    
//     const respostaDoUsuario = prompt("Digite o número que você quer testar")
//     const numero = Number(respostaDoUsuario)
    
//     if (numero % 2 === 0) {
//       console.log("Passou no teste.")
    // } else {
//       console.log("Não passou no teste.")
//     }
    
    
    // a) Explique o que o código faz. Qual o teste que ele realiza? 
    // O código pede um número para o usuário e com a estrutura condicional verifica se é par ou não.
    
    // b) Para que tipos de números ele imprime no console "Passou no teste"? 
    // Para os que são pares

    // c) Para que tipos de números a mensagem é "Não passou no teste"?
    // para os não são pares



    // 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas 
    // de um supermercado:
    
    // let fruta = prompt("Escolha uma fruta")
    // let preco
    // switch (fruta) {
    //   case "Laranja":
    //     preco = 3.5
    //     break;
    //   case "Maçã":
    //     preco = 2.25
    //     break;
    //   case "Uva":
    //     preco = 0.30
    //     break;
    //   case "Pêra":
    //     preco = 5.5
    //      // BREAK PARA O ITEM c.
    //   default:
    //     preco = 5
    //     break;
    // }
    // console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
    
    
    // a) Para que serve o código acima?
    // serve para mostrar o valor da fruta que o usuario escolhe

    // b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
    // O preço da fruta Maçã é R$ 2,25
    
    // c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se 
    // retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
    // O preço da fruta  Pêra  é  R$  5



    // 3. Leia o código abaixo:
    
    // const numero = Number(prompt("Digite o primeiro número."))
    
    // if(numero > 0) {
    //   console.log("Esse número passou no teste")
    // 	let mensagem = "Essa mensagem é secreta!!!"
    // }
    
    // console.log(mensagem)
    
    
    // a) O que a primeira linha está fazendo?
    // Está pedindo um número q o armazena em uma variável

    // b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
    // Quando o número for 10 a mensagem será "Esse número passou no teste".Se fosse -10 não executaría o que está
    // dentro da condição 
    
    // c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
    // a variavel mensagem só existe dentro da estrutura if(escopo filho), não foi declarada no escopo pai.



    // EXERCICIO DE ESCRITA

    // 1
    // c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console
    //  `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`


    const idade = Number(prompt("Qual é sua idade"))

    if (idade >= 18) {
        console.log("Você pode dirigir.")
    }else {
        console.log("Você não pode dirigir.")
    }


    // 2
    //  Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino)
    //  ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". 
    //  Utilize o bloco if/else

const horario = prompt("Indique qual é seu turno sendo: M (matutino)ou V (Vespertino) ou N (Noturno).").toLocaleUpperCase()

function verificarTurnoIf (turno){
    if (turno === "M"){
        console.log("Bom Dia!")
    }else
    if (turno === "T"){
        console.log("Boa Tarde!")
    }else{
        console.log("Boa Noite!")
        }
    }

verificarTurnoIf(horario)


//3
//  Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

function verificarTurnoCase (turno){
switch (turno){
    case "M":
        console.log("Bom Dia!")
        break
    case "T":
        console.log("Boa Tarde!")
        break
    case "N":
        console.log("Boa Noite!")
        break  
        }
    }
verificarTurnoCase(horario)



//4
// Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você 
// se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual
//  o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga
//   vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima 
//   "Escolha outro filme :("


// DESAFIO 1
// Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", 
// pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no 
// console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário 
// colocou no input.



const generoFilme = prompt("qual o gênero do filme").toLocaleLowerCase()
const precoFilme = Number(prompt("qual o preço do filme"))

function assistir(genero, preco){
    if (genero === "fantasia" && preco <= 15){

        const lanchinho = prompt("O que vc deseja comer")
        console.log(`Bom filme! Aproveite seu ${lanchinho}`)
    }else{
        console.log("Escolha outro filme :(")
    }
}

assistir(generoFilme, precoFilme)


// 2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta 
// compra, o usuário deve fornecer algumas informações:
//     - Nome completo;
//     - Tipo de jogo: IN indica internacional; e DO indica doméstico;
//     - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
//     - Categoria: pode ser as opções 1, 2, 3 ou 4;
//     - Quantidade de ingressos
    
//     O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir 
//     tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor 
//         unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso 
//         e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos 
//         domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)



const ticket = {
    nome: prompt("Qual é seu nome completo"),
    tipo: prompt("Informe tipo de jogo: IN para jogo internacional, DO para jogo doméstico ").toLocaleLowerCase(),
    etapa: prompt("Qual é a etapa: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final").toLocaleLowerCase(),
    categoria: Number(prompt("Qual é a categoria: 1, 2, 3 ou 4")),
    quantidade: Number(prompt("Quantos ingressos deseja comprar"))
