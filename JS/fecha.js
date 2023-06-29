console.log("validacion de fecha");
console.log("==fecha y hora==");

/*greenwich mean time */

let timeGMT = new Date();
console.log(timeGMT);

console.log("====fecha y hora en cadena de texto====");
let timeGMTstr = timeGMT.toString();
console.log(timeGMTstr);

console.log("===obtener dias de la semana===");
let timeGMTDay = timeGMT.getDay();
console.log(timeGMTDay);
let diaSemana = ["Domingo", "lunes", "martes", "miercoles", 
                    "jueves", "viernes","sabado"];

console.log("hoy es: " + diaSemana[timeGMTDay]);


console.log("===obtener mes actual===");
let timeGMTMonth = timeGMT.getMonth();
console.log(timeGMTMonth);
let mesActual = ["enero", "febrero", "marzo", "abril", 
                    "mayo", "junio","julio", "agosto",
                "septiembre","octubre", "noviembre", "diciembre"];
                    
console.log("Mes actual: " + mesActual[timeGMTMonth]);

console.log("====fecha y hora desfragmentada==");
let currentTime = new Date();
console.log("dia de la semana: " + currentTime.getDay());
console.log("mes del año: " + currentTime.getMonth());
console.log("dia del mes: " + currentTime.getDate());
console.log("Año: " + currentTime.getFullYear());
console.log("hora :" + currentTime.getHours());
console.log("minutos :" + currentTime.getMinutes());
console.log("segundos :" + currentTime.getSeconds());
console.log("milisegundos :" + currentTime.getMilliseconds());



console.log("===milisegundos transcurridos desde 01/01/1970");
console.log(currentTime.getTime());

console.log("estableciendo diferencia en fechas");
let newYear2024 = new Date("january 1,2024");
let fechaActual = new Date();
let newYear2024ms = newYear2024.getTime();
let fechaActualms = fechaActual.getTime();



let milisecDiff = newYear2024ms - fechaActualms;
let diasDiff = milisecDiff / (1000 * 60 * 60 *24);
console.log("dias faltantes para año el año nuevo: " + Math.floor(diasDiff));



calcularTiempoVotaciones();


function calcularTiempoVotaciones(){
    console.log("ingrese fecha y hora");
    let fechaHora = new Date("july 2, 2023 08:00:00");
    let fechaHorams = fechaHora.getTime();
    let fechadiffvot = fechaHorams - fechaActualms;
    let diasRestantes = Math.floor(fechadiffvot / (1000*60*60*24));
    let horasRestantes = Math.floor(fechadiffvot / (1000*60*60));
    let horasRestantesSinDecim = Math.floor(horasRestantes % 24);
    let minutosRestantes = fechadiffvot / (1000 % 24);
    let minutosRestantesSinDecim = Math.floor(minutosRestantes % 60);
    console.log("el tiempo restante para las votaciones es: " + diasRestantes + "dias, " + horasRestantesSinDecim + " horas y " + minutosRestantesSinDecim +" minutos");
}


  