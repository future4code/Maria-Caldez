//  EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
   //  console.log(carta.texto) 
   //  console.log(carta.valor) 
 

 console.log ("Boas vindas ao jogo de Blackjack!")

let pergunta = confirm("Quer iniciar uma nova rodada?")

if (pergunta == true){
   let cartaUser1 = comprarCarta()
   let cartaUser2 = comprarCarta()
   let resultadoUser =cartaUser1.valor + cartaUser2.valor


   let cartaCompu1 = comprarCarta(carta.texto, carta.valor)
   let cartaCompu2 = comprarCarta(carta.texto, carta.valor)
   let resultadoCompu =cartaCompu1.valor + cartaCompu2.valor
   
   console.log(`Usuario - cartas:${cartaUser1.texto} - ${cartaUser2.texto} - pontuação: ${resultadoUser}`)
   console.log(`Computador - cartas:${cartaCompu1.texto} - ${cartaCompu2.texto} - pontuação: ${resultadoCompu}`)
   
   if (resultadoUser === resultadoCompu) {
      console.log("Empate!!")
   }else
   if(resultadoUser > resultadoCompu){
      console.log("O usuário ganhou!"
      )
   }else{
      console.log("O computador ganhou!")
   }

}else{
   console.log("O jogo acabou")
}