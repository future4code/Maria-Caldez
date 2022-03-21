// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

let array = [1,2,3]
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
let array2 = [1,2,3,4,5]
function retornaArrayInvertido(array) {
  return array.reverse(array)
}

// EXERCÍCIO 03
let array3 = [8,1,2,3,6,7,4,5]

function retornaArrayOrdenado(array) {
  return array.sort((a,b) => a -b)}




// EXERCÍCIO 04
let array4 = [1,2,3,4,5,6,7,8]

function retornaNumerosPares (array){
   let numeroPar = []
   for (let i = 0; i < array.length; i++){
      if (array[i] % 2 === 0){
         numeroPar.push (array[i])
      }
   }
   return numeroPar

}



// EXERCÍCIO 05
let array5 = [1,2,3,4,5,6,7,8]

function retornaNumerosParesElevadosADois(array) {
   let numeroPar = []
   for (let i = 0; i < array.length; i++){
      if (array[i] % 2 === 0){
         numeroPar.push (array[i]*array[i])
      }
   }
   return numeroPar
}


// EXERCÍCIO 06
let array6 = [1,2,3,4,5,6,7,8]

function retornaMaiorNumero(array) {
   let maximo = 0
   for (let i = 0; i < array.length; i++){
      if (maximo < array[i]){
         maximo = array[i]
      }   

   }
return maximo
}

console.log(retornaMaiorNumero(array6))

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   let maiorNumero = 0
   let maiorDivisivelPorMenor= 0
   let diferenca= 0

   if (num1 > num2){
      maiorNumero = num1
   }else{ 
      maiorNumero = num2
   }

   

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}