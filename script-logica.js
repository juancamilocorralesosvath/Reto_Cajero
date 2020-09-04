// codigo con la logica

let Malinali = {
    nombre: "Mali",
    saldo: 200,
    password: 'helloworld',
    ingresarClave: function () {
      let correcto = false;
      while (correcto === false) {
        let clave = prompt("Por favor ingresa tu clave");
        if (clave === this.password) {
          alert("Has ingresado con exito!!!");
          correcto = true;
        } else {
          alert("lo sentimos, pero no es la clave correcta. Por favor intenta de nuevo.");
        }
      }
    },
    mostrarSaldo: function () {
      alert("Mali, tu saldo es de $" + this.saldo);
    },
    ingresarMonto: function () { 
      let montoIngresado = Number(prompt("Por favor, ingresa la cantidad que deseas ingresar."));
      this.validarCantidadSuperior(montoIngresado);
      
      alert("Muchas gracias por usar nuestros servicios!");
  
    }, 
  
    validarCantidadSuperior: function(monto){ 
      
      let nuevoSaldo = monto + this.saldo;
      if(nuevoSaldo <= 990){ 
        
        this.saldo = nuevoSaldo;
        alert("vale! ingresaste $"+monto+ ", por lo que ahora tienes $"+this.saldo+" en tu cuenta!");
      }else{ 
        alert("lo sentimos mucho, pero no puedes tener mas de $990 en tu cuenta.");
      }
    }, 
    retirarMonto: function(){ 
      let montoRetirar = Number(prompt("Por favor, ingresa la cantidad que deseas retirar."));
      this.validarCantidadInferior(montoRetirar);
      
      alert("Muchas gracias por usar nuestros servicios!");
    }, 
    validarCantidadInferior: function(monto){ 
  
      let nuevoSaldo = this.saldo - monto;
      if(nuevoSaldo >= 10){ 
        
        this.saldo = nuevoSaldo;
        alert("vale! retiraste $"+monto+ ", por lo que ahora tienes $"+this.saldo+" en tu cuenta!");
      }else{ 
        alert("lo sentimos mucho, pero no puedes tener menos de $10 en tu cuenta.");
      }
    },
  };
  
  let Gerardo = {
    nombre: "Gera",
    saldo: 290,
    password: 'hola',
    ingresarClave: function () {
      let correcto = false;
      while (correcto === false) {
        let clave = prompt("Por favor ingresa tu clave");
        if (clave === this.password) {
          alert("Has ingresado con exito!!!");
          correcto = true;
        } else {
          alert("lo sentimos, pero no es la clave correcta. Por favor intenta de nuevo.");
        }
      }
    },
    mostrarSaldo: function () {
      alert("Gera, tu saldo es de $" + this.saldo);
    },
    ingresarMonto: function () { 
      let montoIngresado = Number(prompt("Por favor, ingresa la cantidad que deseas ingresar."));
      this.validarCantidadSuperior(montoIngresado);
      
      alert("Muchas gracias por usar nuestros servicios!");
  
    }, 
  
    validarCantidadSuperior: function(monto){ 
      
      let nuevoSaldo = monto + this.saldo;
      if(nuevoSaldo <= 990){ 
        
        this.saldo = nuevoSaldo;
        alert("vale! ingresaste $"+monto+ ", por lo que ahora tienes $"+this.saldo+" en tu cuenta!");
      }else{ 
        alert("lo sentimos mucho, pero no puedes tener mas de $990 en tu cuenta.");
      }
    }, 
    retirarMonto: function(){ 
      let montoRetirar = Number(prompt("Por favor, ingresa la cantidad que deseas retirar."));
      this.validarCantidadInferior(montoRetirar);
      
      alert("Muchas gracias por usar nuestros servicios!");
    }, 
    validarCantidadInferior: function(monto){ 
  
      let nuevoSaldo = this.saldo - monto;
      if(nuevoSaldo >= 10){ 
        
        this.saldo = nuevoSaldo;
        alert("vale! retiraste $"+monto+ ", por lo que ahora tienes $"+this.saldo+" en tu cuenta!");
      }else{ 
        alert("lo sentimos mucho, pero no puedes tener menos de $10 en tu cuenta.");
      }
    },
  };
  
  let Mauricio = {
    nombre: "Maui",
    saldo: 67,
    password: '123',
    ingresarClave: function () {
      let correcto = false;
      while (correcto === false) {
        let clave = prompt("Por favor ingresa tu clave");
        if (clave === this.password) {
          alert("Has ingresado con exito!!!");
          correcto = true;
        } else {
          alert("lo sentimos, pero no es la clave correcta. Por favor intenta de nuevo.");
        }
      }
    },
    mostrarSaldo: function () {
      alert("Maui, tu saldo es de $" + this.saldo);
    },
    ingresarMonto: function () { 
      let montoIngresado = Number(prompt("Por favor, ingresa la cantidad que deseas ingresar."));
      this.validarCantidadSuperior(montoIngresado);
      
      alert("Muchas gracias por usar nuestros servicios!");
  
    }, 
  
    validarCantidadSuperior: function(monto){ 
      
      let nuevoSaldo = monto + this.saldo;
      if(nuevoSaldo <= 990){ 
        
        this.saldo = nuevoSaldo;
        alert("vale! ingresaste $"+monto+ ", por lo que ahora tienes $"+this.saldo+" en tu cuenta!");
      }else{ 
        alert("lo sentimos mucho, pero no puedes tener mas de $990 en tu cuenta.");
      }
    }, 
    retirarMonto: function(){ 
      let montoRetirar = Number(prompt("Por favor, ingresa la cantidad que deseas retirar."));
      this.validarCantidadInferior(montoRetirar);
      
      alert("Muchas gracias por usar nuestros servicios!");
    }, 
    validarCantidadInferior: function(monto){ 
  
      let nuevoSaldo = this.saldo - monto;
      if(nuevoSaldo >= 10){ 
        
        this.saldo = nuevoSaldo;
        alert("vale! retiraste $"+monto+ ", por lo que ahora tienes $"+this.saldo+" en tu cuenta!");
      }else{ 
        alert("lo sentimos mucho, pero no puedes tener menos de $10 en tu cuenta.");
      }
    },
  };
  
  let cuentas = [Malinali, Gerardo, Mauricio];
  
  let user = prompt("quien eres? ");
  
  if (user === "Malinali") {
    alert("Hola Mali! Espero que te encuentres bien!");
    Malinali.ingresarClave();
    let answer = prompt("Mali, que deseas hacer ahora?\n (1)Consultar saldo \n (2)Ingresar monto \n (3)Retirar monto");
  
    switch (answer) {
  
      case "1":
        Malinali.mostrarSaldo();
        break;
  
      case "2": Malinali.ingresarMonto();
      break;
  
      case "3": Malinali.retirarMonto();
      break;
    }
  
  
  } else if (user === "Gerardo") {
    alert("Hola Gera! como va todo?");
    Gerardo.ingresarClave();
    let answer = prompt("Gera, que quieres hacer?\n (1)Consultar saldo \n (2)Ingresar monto \n (3)Retirar monto");
    switch (answer) {
  
      case "1":
        Gerardo.mostrarSaldo();
        break;
  
      case "2": Gerardo.ingresarMonto();
      break;
  
      case "3": Gerardo.retirarMonto();
      break;
    }
  
  
  } else if (user === "Mauricio") {
    alert("Bien o no Maui? quiere chumbimba o que?");
    Mauricio.ingresarClave();
    let answer = prompt("Bueno pues, que querés hacer?\n (1)Consultar saldo \n (2)Ingresar monto \n (3)Retirar monto");
    switch (answer) {
  
      case "1":
        Mauricio.mostrarSaldo();
        break;
  
      case "2": Mauricio.ingresarMonto();
      break;
  
      case "3": Mauricio.retirarMonto();
      break;
    }
  } else {
    alert("por favor, asegurate de escribir bien tu nombre de usuario");
  }