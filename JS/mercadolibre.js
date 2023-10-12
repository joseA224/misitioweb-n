class Automovil{
    constructor(marca,modelo,precio,anyo,ciudad,Kilometros,imagen){
        this.marca= marca;
        this.modelo=modelo;
        this.precio=precio;
        this.anyo=anyo;
        this.ciudad=ciudad;
        this.Kilometros=Kilometros;
        this.imagen=imagen;
    }
}

let auto1 = new Automovil("Toyota","Prado", 350000000, 2015, "Isnos - Huila", 1000,"img/toyotaxl.png");
let auto2 = new Automovil("Ford", "Mustang", 300000000, 2018, "Bogotá - Cundinamarca", 5000,"img/ford_mustang_N.png");
let auto3 = new Automovil("Chevrolet", "Camaro", 320000000, 2019, "Medellín - Antioquia", 3000,"img/FORSIDE_N.jpg");
let auto4 = new Automovil("Toyota", "Supra Mk4", 270000000, 2017, "Bogotá - Cundinamarca", 7000,"img/supra_N.jpg");
let auto5 = new Automovil("Audi", "A4", 330000000, 2020, "Bogotá - Cundinamarca", 3000,"img/audi.jpg"); 
let auto6 = new Automovil("BMW", "X3", 360000000, 2019, "Medellín - Antioquia", 4000,"img/BMW-X3.jpg");
let auto7 = new Automovil("Mercedes-Benz", "CLA", 340000000, 2021, "Cali - Valle del Cauca", 2000,"img/mercedes-Benz.jpg");
let auto8 = new Automovil("Lexus", "RX", 370000000, 2018, "Santa Marta - Magdalena", 5500,"img/LEXUS-RX.jpg");
let auto9 = new Automovil("Porsche", "Macan", 400000000, 2022, "Cartagena - Bolívar", 1500,"img/porsche-macan.jpg");
let auto10 = new Automovil("Land Rover", "Discovery", 380000000, 2017, "San Andrés - San Andrés y Providencia", 6000,"img/LAND-ROVER-DISCOVERY.jpg"); 


var carArrays = [auto1, auto2, auto3,auto4, auto5, auto6, auto7, auto8, auto9, auto10];
//let marcaAutomovil = auto1.modelo;

let inputBusqueda = document.getElementById("busqueda");

inputBusqueda.addEventListener("keydown", function(event){
    
    if (event.key == "Enter") {
        carArrays.forEach(function(auto, indice) {
            console.log("Auto " + (indice + 1) + ":");
            console.log(auto.marca);
            
        let mainContent = document.getElementById("mainContent");
        let boxAuto = document.createElement("div");
        mainContent.appendChild(boxAuto);
        boxAuto.setAttribute("class","box-auto")

        let boxImg= document.createElement("div");

        //Crear contenedor para el corazon

        let boxCorazon = document.createElement("div");
        boxImg.appendChild(boxCorazon);
        boxCorazon.setAttribute("class","box-corazon");
        let corazon =document.createElement("div");
        boxCorazon.appendChild(corazon);
        corazon.setAttribute("class","corazon");

        //Crear contenedor para la imagen

        let iconHearth = document.createElement("i");
        corazon.appendChild(iconHearth);
        iconHearth.setAttribute("class","icon-style-hearth fa-regular fa-heart");

        boxAuto.appendChild(boxImg);
        let imgAuto = document.createElement("img");
        boxImg.appendChild(imgAuto);
        boxImg.setAttribute("class","box-img");
        imgAuto.setAttribute("src",auto.imagen);
        imgAuto.setAttribute("class","img-auto")
        //Crear contenedor para e la informacion

        let boxInfo = document.createElement("div");
        boxAuto.appendChild(boxInfo);

        

        //Cargando ícono corazón
        



        //Crear información para el texto
        let txtMarca = document.createElement("label");
        boxInfo.appendChild(txtMarca);
        boxInfo.setAttribute("class","box-info")

        //Crear información para el texto

        txtMarca.innerHTML = auto.marca


        //-------------------------------------
        let txtModelo = document.createElement("label");
        boxInfo.appendChild(txtModelo);
        txtModelo.innerHTML = " " +auto.modelo;
        
        //Precio
        let precioFormat = new Intl.NumberFormat("de-DE").format(auto.precio)
        let txtPrecio = document.createElement("label")
        boxInfo.appendChild(txtPrecio);
        txtPrecio.innerHTML = " "+ precioFormat;

        /*kilometraje y procedencia*/
        let boxProcedencia = document.createElement("div");
        boxInfo.appendChild(boxProcedencia);
        boxProcedencia.setAttribute("class", "box-procedencia");

        let txtanyo = document.createElement("label");
        boxProcedencia.appendChild(txtanyo);
        txtanyo.innerHTML = auto.anyo + " · ";

        let txtKilometros = document.createElement("label");
        boxProcedencia.appendChild(txtKilometros);
        let txtKilometrosFormat = new Intl.NumberFormat("de-DE").format(auto.Kilometros);
        txtKilometros.innerHTML = txtKilometrosFormat + " km  · ";

        let txtciudad = document.createElement("label");
        boxProcedencia.appendChild(txtciudad);
        txtciudad.innerHTML = auto.ciudad;

        let boxLineaDiv = document.createElement("div");
        mainContent.appendChild(boxLineaDiv);
        boxLineaDiv.setAttribute("class", "box-linea-div");
        }
        )
}})