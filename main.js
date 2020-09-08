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
let divIngresarMonto = document.getElementById("ingresarMonto");
let ingresoMontoExitoso = document.getElementById("ingresoExitoso");
let btnIngresar = document.getElementById("ingresar");
let claveIngresada = document.getElementById("claveIngresada");
let divMostrarSaldo = document.getElementById("mostrarSaldo");
let mostarCuantoEs = document.getElementById("cuantoEs");
let divRetirarMonto = document.getElementById("retirarMonto");
let divRetiroMontoExitoso = document.getElementById("RetiroExitoso");
let saldoResultante = document.getElementById("saldoResultante");
let saldoResultante2 = document.getElementById("saldoResultante2");


// primero, el usuario selecciona una cuenta, asi que mostramos la pagina de la validacion de la cuenta.
function ingresar() {
  paginaSeleccion.style.display = "none";
  paginaIngreso.style.display = "flex";
  paginaIngreso.style.justifyContent = "center";
  paginaIngreso.style.alignItems = "center";
  paginaIngreso.style.flexDirection = "column";
  
}

// luego, tenemos que verificar que sea la contraseña correcta y, una vez que la ingrese, mostrar la cuenta correspondiente (Mali, Maui o Gera)


function validarContraseña() {
  if (claveIngresada.value == Mauricio.password) {
    ingresoMaui();
  }else if(claveIngresada.value == Gerardo.password){ 
     ingresoGera();
  }else if(claveIngresada.value == Malinali.password){ 
    ingresoMali();
  }
}

// proceso de Maui

function ingresoMaui() {
  paginaIngreso.style.display = "none";
  paginaMaui.style.display = "block";
}

// bien, una vez que ingresamos, ahora si viene lo bueno: hay que hacer la funcionalidad de cada accion deseada: consultar saldo, ingresar o retirar monto.

// consultar el saldo
function consultarSaldo(usuario) {
  mostarCuantoEs.innerHTML = "tu saldo es de $" + usuario.saldo;
  divMostrarSaldo.style.display = "block";
}

// ingresar Monto
function MostrarIngresarMonto() {
  divIngresarMonto.style.display = "block";
  cuadroDeAccion.style.display = "none";
}

function ingresarMonto() {
  let montoIngresado = document.getElementById("montoIngresado");
  // no me funcionaba porque no estaba conviertiendo el input a un numero...no mames!
  Mauricio.ingresarMonto(Number(montoIngresado.value));
}

function refresh() {
  cuadroDeAccion.style.display = "block";
  ingresoMontoExitoso.style.display = "none";
  divIngresarMonto.style.display = "none";
  divMostrarSaldo.style.display = "none";

}
// ahora, retirar monto
function MostrarRetirarMonto() {
  divRetirarMonto.style.display = "block";
  cuadroDeAccion.style.display = "none";
}

function retirarMonto(){ 
  let montoRetirar = document.getElementById("montoRetirar");
  Mauricio.retirarMonto(Number(montoRetirar.value));
}
function refresh2() {
  cuadroDeAccion.style.display = "block";
  divRetirarMonto.style.display = "none";
  divMostrarSaldo.style.display = "none";
  divRetiroMontoExitoso.style.display = "none";
}

// para salir
function salir(){
  paginaMaui.style.display = "none";
  paginaIngreso.style.display = "none";
  paginaSeleccion.style.display = "block";

}

// proceso de Gera
// variables Gera -------------------------------------------------------
let paginaGera = document.getElementById("inicioGera");
let divMostrarSaldo2 = document.getElementById("mostrarSaldo2");
let mostarCuantoEs2 = document.getElementById("cuantoEs2");
let divIngresarMonto2 = document.getElementById("ingresarMonto2");
let cuadroDeAccion2 = document.getElementById("cuadrodeaccion2");
let ingresoExitoso2 = document.getElementById("ingresoExitoso2");
let saldoResultanteGera = document.getElementById("saldoResultanteGera");
let divRetirarMonto2 = document.getElementById("retirarMonto2");
let divRetiroMontoExitoso2 = document.getElementById("RetiroExitoso2");
let saldoResultanteGera2 = document.getElementById("saldoResultanteGera2");


function ingresoGera() {
  paginaIngreso.style.display = "none";
  paginaGera.style.display = "block";
}

// bien, una vez que ingresamos, ahora si viene lo bueno: hay que hacer la funcionalidad de cada accion deseada: consultar saldo, ingresar o retirar monto.

// consultar el saldo
function consultarSaldoGera(usuario) {
  mostarCuantoEs2.innerHTML = "tu saldo es de $" + usuario.saldo;
  divMostrarSaldo2.style.display = "block";
}

// ingresar Monto
function MostrarIngresarMontoGera() {
  divIngresarMonto2.style.display = "block";
  cuadroDeAccion2.style.display = "none";
}

function ingresarMontoGera() {
  let montoIngresado2 = document.getElementById("montoIngresado2");
  // no me funcionaba porque no estaba conviertiendo el input a un numero...no mames!
  Gerardo.ingresarMonto(Number(montoIngresado2.value));
}

function refresh1Gera() {
  cuadroDeAccion2.style.display = "block";
  ingresoExitoso2.style.display = "none";
  divIngresarMonto2.style.display = "none";
  divMostrarSaldo2.style.display = "none";
}
// ahora, retirar monto
function MostrarRetirarMontoGera() {
  divRetirarMonto2.style.display = "block";
  cuadroDeAccion2.style.display = "none";
}

function retirarMontoGera(){ 
  let montoRetirar2 = document.getElementById("montoRetirar2");
  Gerardo.retirarMonto(Number(montoRetirar2.value));
}
function refresh2Gera() {
  cuadroDeAccion2.style.display = "block";
  divRetirarMonto2.style.display = "none";
  divMostrarSaldo2.style.display = "none";
  divRetiroMontoExitoso2.style.display = "none";
}

// para salir
function salirGera(){
  paginaGera.style.display = "none";
  paginaIngreso.style.display = "none";
  paginaSeleccion.style.display = "block";

}

// proceso de Mali
// variables Mali -------------------------------------------------------
let paginaMali = document.getElementById("inicioMali");
let divMostrarSaldo3 = document.getElementById("mostrarSaldo3");
let mostarCuantoEs3 = document.getElementById("cuantoEs3");
let divIngresarMonto3 = document.getElementById("ingresarMonto3");
let cuadroDeAccion3 = document.getElementById("cuadrodeaccion3");
let ingresoExitoso3 = document.getElementById("ingresoExitoso3");
let saldoResultanteMali = document.getElementById("saldoResultanteMali");
let divRetirarMonto3 = document.getElementById("retirarMonto3");
let divRetiroMontoExitoso3 = document.getElementById("RetiroExitoso3");
let saldoResultanteMali2 = document.getElementById("saldoResultanteMali2");


function ingresoMali() {
  paginaIngreso.style.display = "none";
  paginaMali.style.display = "block";
}

// bien, una vez que ingresamos, ahora si viene lo bueno: hay que hacer la funcionalidad de cada accion deseada: consultar saldo, ingresar o retirar monto.

// consultar el saldo
function consultarSaldoMali(usuario) {
  mostarCuantoEs3.innerHTML = "tu saldo es de $" + usuario.saldo;
  divMostrarSaldo3.style.display = "block";
}

// ingresar Monto
function MostrarIngresarMontoMali() {
  divIngresarMonto3.style.display = "block";
  cuadroDeAccion3.style.display = "none";
}

function ingresarMontoMali() {
  let montoIngresado3 = document.getElementById("montoIngresado3");
  // no me funcionaba porque no estaba conviertiendo el input a un numero...no mames!
  Malinali.ingresarMonto(Number(montoIngresado3.value));
}

function refresh1Mali() {
  cuadroDeAccion3.style.display = "block";
  ingresoExitoso3.style.display = "none";
  divIngresarMonto3.style.display = "none";
  divMostrarSaldo3.style.display = "none";
}
// ahora, retirar monto
function MostrarRetirarMontoMali() {
  divRetirarMonto3.style.display = "block";
  cuadroDeAccion3.style.display = "none";
}

function retirarMontoMali(){ 
  let montoRetirar3 = document.getElementById("montoRetirar3");
  Malinali.retirarMonto(Number(montoRetirar3.value));
}
function refresh2Mali() {
  cuadroDeAccion3.style.display = "block";
  divRetirarMonto3.style.display = "none";
  divMostrarSaldo3.style.display = "none";
  divRetiroMontoExitoso3.style.display = "none";
}

// para salir
function salirMali(){
  paginaMali.style.display = "none";
  paginaIngreso.style.display = "none";
  paginaSeleccion.style.display = "block";

}
