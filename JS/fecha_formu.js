document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    
    
    let fechaActual = new Date();
    let horaActual = fechaActual.getHours();
    let minutosActual = fechaActual.getMinutes();
    
    
    let fechaVencimiento = new Date(document.getElementById("fecha").value);
    let horaVencimiento = document.getElementById("hora").value.split(":");
    let horaVencimientoHora = parseInt(horaVencimiento[0]);
    let horaVencimientoMinutos = parseInt(horaVencimiento[1]);
    
    
    if (fechaVencimiento < fechaActual || (fechaVencimiento.getTime() === fechaActual.getTime() && horaVencimientoHora < horaActual) || (fechaVencimiento.getTime() === fechaActual.getTime() && horaVencimientoHora === horaActual && horaVencimientoMinutos < minutosActual)) {
      document.getElementById("resultado").style.display = "block";
      document.getElementById("tiempo-restante").textContent = "El plazo ha vencido. No es posible subir el archivo.";
    } else {
      
      let diferencia = fechaVencimiento - fechaActual;
      let diasRestantes = Math.floor    (diferencia / (1000 * 60 * 60 * 24));
      diferencia -= diasRestantes *     (1000 * 60 * 60 * 24);
      let horasRestantes = Math.floor   (diferencia / (1000 * 60 * 60));
      diferencia -= horasRestantes *    (1000 * 60 * 60);
      let minutosRestantes = Math.floor (diferencia / (1000 * 60));
      
      
      document.getElementById("resultado").style.display = "block";
      document.getElementById("tiempo-restante").textContent = "Tiempo restante: " + diasRestantes + " días, " + horasRestantes + " horas y " + minutosRestantes + " minutos.";
    }
  }); 
  