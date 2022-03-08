
~~~javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
     let porcenVendas = valorTotalVendas * 0.05
   let salarioFixo = 2000
   let comicion = qtdeCarrosVendidos * 100 + porcenVendas
   return salarioFixo + comicion
}
~~~


