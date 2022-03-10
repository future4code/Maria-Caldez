
~~~javascript
function calculaNota(ex, p1, p2) {
  let resultado = ""
  let exe = 1
  let pri = 2
  let seg = 3
  let pesos = (ex*exe)+(p1*pri)+(p2*seg)
  let media = pesos / 6

  if (media >= 9){
    resultado = "A"
  }else
  if(media < 9 && media >= 7.5){
    resultado = "B"
  }else
  if (media < 7.5 && media >= 6 ){
    resultado = "C"
  } else {
    resultado = "D"
    }
  return resultado
}

~~~