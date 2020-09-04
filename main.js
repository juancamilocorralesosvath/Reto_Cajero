/* Crea una aplicación web con JavaScript donde simulemos la interacción con un cajero automático.

Al ingresar al cajero, puedes seleccionar la cuenta con la que deseas interactuar. Deben existir al menos tres cuentas:

‘Mali’ - ‘Gera’ - ’Maui

Para esto, puedes trabajar con un arreglo de objetos como el siguiente:

var cuentas = [
  { nombre: "Mali", saldo: 200, password: 'helloworld' }
  { nombre: "Gera", saldo: 290, password: 'l33t' }
  { nombre: "Maui", saldo: 67, password: '123' }
];

Al seleccionar una cuenta, debes ingresar el password asociado a la cuenta. Si el password es incorrecto, debes notificar al usuario y permitirle intentarlo nuevamente. Si el password es correcto, debes mostrar las siguientes opciones:

Consultar saldo
Ingresar monto
Retirar monto


Al seleccionar consultar saldo, debe mostrar en pantalla el saldo actual de la cuenta
Al seleccionar ingresar monto, el usuario debe escribir el monto a ingresar. Al ingresar el monto, debe mostrarle al usuario el monto ingresado y el nuevo saldo total.
Al seleccionar retirar monto, el usuario debe escribir el monto a retirar. Al retirar el monto, debe mostrarle al usuario el monto retirado y el nuevo saldo total.

Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10.

Es necesario hacer las validaciones pertinentes en tu código para que no se rompa esta regla de negocio.

RETO EXTRA PLUS:

Si ya posees conocimientos de desarrollo web con html, css y javascript. Haciendo uso del DOM crea una interfaz con html y css que maneje toda la interacción descrita arriba */


// ok, ok... por que no me funcionaba cuando hacia las declaraciones de las variables por fuera? aun asi las ponga como "var", me dice que son "null"...

// ...tenia el script en el head... idiota.
let paginaSeleccion = document.getElementById("paginaSeleccion");
let paginaMaui = document.getElementById("inicioMaui");
let paginaIngreso = document.getElementById("validacion");
let btnconsultar = document.getElementById("btnconsultar");
let cuadroDeAccion = document.getElementById("cuadrodeaccion");
let mostrarSaldo = document.getElementById("mostrarSaldo");

// primero, el usuario selecciona una cuenta, asi que mostramos la pagina de la validacion de la cuenta.
function ingresar(){ 
  paginaSeleccion.style.display = "none";
  paginaIngreso.style.display = "block";
}

// luego, tenemos que verificar que sea la contraseña correcta y, una vez que la ingrese, mostrar la cuenta correspondiente (Mali, Maui o Gera)
let btnIngresar = document.getElementById("ingresar");
let claveIngresada = document.getElementById("claveIngresada");

function validarContraseña(){ 
  if(claveIngresada.value === Mauricio.password){ 
    ingresoMaui();
  }
}

function ingresoMaui(){ 
  paginaIngreso.style.display = "none";
  paginaMaui.style.display = "block";
}

// bien, una vez que ingresamos, ahora si viene lo bueno: hay que hacer la funcionalidad de cada accion deseada: consultar saldo, ingresar o retirar monto.

// consultar el saldo
function consultarSaldo(usuario){ 
  let divMostrarSaldo = document.getElementById("mostrarSaldo");
  let mostarCuantoEs = document.getElementById("cuantoEs");
  mostarCuantoEs.innerHTML = "tu saldo es de $"+ usuario.saldo;
  divMostrarSaldo.style.display = "block";
}

// ingresar Monto
function MostrarIngresarMonto(){ 
  let divIngresarMonto = document.getElementById("ingresarMonto");
  divIngresarMonto.style.display = "block";
}

function ingresarMonto(){ 
  let montoIngresado = document.getElementById("montoIngresado");
  Mauricio.ingresarMonto(montoIngresado.value);
}

