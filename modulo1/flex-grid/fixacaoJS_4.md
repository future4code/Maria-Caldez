
~~~javascript 
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
 resposta = ""
  let resultado = 0
  let tamanho = arrayDeNumeros.length
    for (let i = 0; i < tamanho; i++){
      let posicao = arrayDeNumeros[i]
      if ( posicao === numeroEscolhido){
        resultado += 1
      }
    }

  if (resultado > 0){
    return resposta = "O número " + numeroEscolhido +  " aparece " + resultado +"x"
  }else{
    return resposta = "Número não encontrado"
  }
}

~~~