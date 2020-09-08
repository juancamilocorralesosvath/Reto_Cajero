// codigo con la logica

let Malinali = {
  nombre: "Mali",
  saldo: 700,
  password: 'oliwis',
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
  ingresarMonto: function(monto){ 
    
    let nuevoSaldo = monto + this.saldo;
    if(nuevoSaldo <= 990){ 
      
      this.saldo = nuevoSaldo;

      // let div = document.getElementById("ingresoExitoso");
      ingresoExitoso3.style.display = "block";
      saldoResultanteMali.innerHTML = "vale! ingresaste $"+monto+ ", por lo que ahora tienes $"+this.saldo+" en tu cuenta!\n Muchas gracias por usar nuestros servicios!";
    }else{ 
      alert("lo sentimos mucho, pero no puedes tener mas de $990 en tu cuenta.");
    }
  }, 
  retirarMonto: function(monto){ 

    let nuevoSaldo = this.saldo - monto;
    if(nuevoSaldo >= 10){ 
      
      this.saldo = nuevoSaldo;

      // let div = document.getElementById("RetiroExitoso");
      divRetiroMontoExitoso3.style.display = "block";
      saldoResultanteMali2.innerHTML = "vale! retiraste $"+monto+ ", por lo que ahora tienes $"+this.saldo+" en tu cuenta!\n Muchas gracias por usar nuestros servicios!";
    }else{ 
      alert("lo sentimos mucho, pero no puedes tener menos de $10 en tu cuenta.");
    }
  },
};

let Gerardo = {
  nombre: "Gera",
  saldo: 290,
  password: 'soygera',
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
  ingresarMonto: function(monto){ 
    
    let nuevoSaldo = monto + this.saldo;
    if(nuevoSaldo <= 990){ 
      
      this.saldo = nuevoSaldo;

      // let div = document.getElementById("ingresoExitoso");
      ingresoExitoso2.style.display = "block";
      saldoResultanteGera.innerHTML = "vale! ingresaste $"+monto+ ", por lo que ahora tienes $"+this.saldo+" en tu cuenta!\n Muchas gracias por usar nuestros servicios!";
    }else{ 
      alert("lo sentimos mucho, pero no puedes tener mas de $990 en tu cuenta.");
    }
  }, 
  retirarMonto: function(monto){ 

    let nuevoSaldo = this.saldo - monto;
    if(nuevoSaldo >= 10){ 
      
      this.saldo = nuevoSaldo;

      // let div = document.getElementById("RetiroExitoso");
      divRetiroMontoExitoso2.style.display = "block";
      saldoResultanteGera2.innerHTML = "vale! retiraste $"+monto+ ", por lo que ahora tienes $"+this.saldo+" en tu cuenta!\n Muchas gracias por usar nuestros servicios!";
    }else{ 
      alert("lo sentimos mucho, pero no puedes tener menos de $10 en tu cuenta.");
    }
  },
};


let Mauricio = {
  nombre: "Maui",
  saldo: 499,
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
  ingresarMonto: function(monto){ 
    
    let nuevoSaldo = monto + this.saldo;
    if(nuevoSaldo <= 990){ 
      
      this.saldo = nuevoSaldo;

      // let div = document.getElementById("ingresoExitoso");
      ingresoMontoExitoso.style.display = "block";
      saldoResultante.innerHTML = "vale! ingresaste $"+monto+ ", por lo que ahora tienes $"+this.saldo+" en tu cuenta!\n Muchas gracias por usar nuestros servicios!";
    }else{ 
      alert("lo sentimos mucho, pero no puedes tener mas de $990 en tu cuenta.");
    }
  }, 
  retirarMonto: function(monto){ 

    let nuevoSaldo = this.saldo - monto;
    if(nuevoSaldo >= 10){ 
      
      this.saldo = nuevoSaldo;

      // let div = document.getElementById("RetiroExitoso");
      divRetiroMontoExitoso.style.display = "block";
      saldoResultante2.innerHTML = "vale! retiraste $"+monto+ ", por lo que ahora tienes $"+this.saldo+" en tu cuenta!\n Muchas gracias por usar nuestros servicios!";
    }else{ 
      alert("lo sentimos mucho, pero no puedes tener menos de $10 en tu cuenta.");
    }
  },
};

