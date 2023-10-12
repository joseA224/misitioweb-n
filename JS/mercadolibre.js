class Automovil{
    constructor(marca,modelo,precio,descripcion){
        this.marca= marca;
        this.modelo=modelo;
        this.precio=precio;
        this.descripcion=descripcion;
    }
}

let auto1 = new Automovil("Toyota","Prado 2.8 Tx-l 4x4", 200000000,"2023 • 5.900Km • Medellín - Antioquia" );

let inputBusqueda = document.getElementById("inputBusqueda");

// inputBusqueda.addEventListener("load", function(event){
window.addEventListener("load", function(){

    // if(event.key == "Enter"){
    let mainContent = document.getElementById("mainContent");
    let boxAuto = document.createElement("div");
    mainContent.appendChild(boxAuto);
    boxAuto.setAttribute("class", "box-auto");

    //crear contenedor para la imagen//

    let boxImg = document.createElement("div");
    boxAuto.appendChild(boxImg);
    let imgAuto = document.createElement("img");
    boxImg.appendChild(imgAuto);
    boxImg.setAttribute("class", "box-img");
    imgAuto.setAttribute("src", "img/toyotaxl.png")
    imgAuto.setAttribute("class", "img-auto");

    /*crear contenedor para la informacion*/
    let boxInfo = document.createElement("div");
    boxAuto.appendChild(boxInfo);
    let infoMarca = this.document.createElement("div");
    boxInfo.appendChild(infoMarca);
    boxInfo.setAttribute("class", "box-info");
    infoMarca.setAttribute("class", "info-marca");
    let txtMarca = document.createElement("label");
    infoMarca.appendChild(txtMarca);
    txtMarca.innerText =auto1.marca;
    txtMarca.setAttribute("class", "txt-marca")

    let txtModelo = document.createElement("label");
    infoMarca.appendChild(txtModelo);
    txtModelo.innerText= " "+ auto1.modelo;
    txtModelo.setAttribute("class", "txt-modelo")

    /*precio*/
    let precioFormat = new Intl.NumberFormat("de-DE").format(auto1.precio);
    let txtPrecio = this.document.createElement("label");
    boxInfo.appendChild(txtPrecio);
    txtPrecio.innerHTML = precioFormat;
    txtPrecio.setAttribute("class", "txt-precio")
    // alert("$" + precioFormat);

let txtdescripcion = document.createElement("label");
boxInfo.appendChild(txtdescripcion);
txtdescripcion.innerText= " "+ auto1.descripcion;
    
});