var vp = document.getElementById("villaplatzi");
var papel = vp.getContext ("2d");
console.log(papel);

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
  }

document.addEventListener("keyup", dibujarTeclado);

var x = 150;
var y = 150;



var fondo  = {
  url: "tile.png",
  cargaOK: false,
}


var vaca = {
  url: "vaca.png",
  cargaOK: false,
}

var cerdo = {
  url: "cerdo.png",
  cargaOK: false,
}

var cantidad = aleatorio(0, 25);


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);


function cargarFondo()
{
fondo.cargaOK = true;
dibujar();
}

function cargarVaca()
{
vaca.cargaOK = true;
dibujar();
}

function cargarCerdo()
{
cerdo.cargaOK = true;
dibujar();
}



function dibujar()
{
  if(fondo.cargaOK);
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  if(vaca.cargaOK);
  {
    for(var v = 0; v < cantidad; v++)
    {
      var x = (aleatorio(0, 5))*80;
      var y = (aleatorio(0, 5))*80;

      papel.drawImage(vaca.imagen, x, y);
    }
  }

  /*if(cerdo.cargaOK);
  {
    papel.drawImage(cerdo.imagen, x, y);

  }*/

}

function dibujarCerdo()
{
  if(cerdo.cargaOK);
  papel.drawImage(cerdo.imagen, x, y,);
}

function dibujarTeclado(evento)
{

  var movimiento = 50;


   switch(evento.keyCode)
   {
    case teclas.UP:
        dibujarCerdo(x, y - movimiento, papel);
        y = y - movimiento;
        clear();
    break;
    case teclas.DOWN:
        dibujarCerdo(x, y + movimiento, papel);
        y = y + movimiento;
        clear();
    break;
    case teclas.LEFT:
        dibujarCerdo(x - movimiento, y, papel);
        x = x - movimiento;
        clear();
    break;
    case teclas.RIGHT:
        dibujarCerdo(x + movimiento, y, papel);
        x = x + movimiento;
        clear();
    break;
   }

}

function clear(){

    papel.clearRect(0, 0, vp.width, vp.height);
    dibujar();
    dibujarCerdo();

      }


function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor (Math.random () * (max - min + 1)) + min;
  return resultado;
}
