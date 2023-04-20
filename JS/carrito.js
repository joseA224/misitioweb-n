let imgBox = document.getElementById("imgBox")
// let boxImgMini1 = document.getElementById("boxImgMini1")
// let boxImgMini2 = document.getElementById("boxImgMini2")
// let boxImgMini3 = document.getElementById("boxImgMini3")
// let boxImgMini4 = document.getElementById("boxImgMini4")
let imgMini1 = document.getElementById("imgMini1");
let imgMini2 = document.getElementById("imgMini2");
let imgMini3 = document.getElementById("imgMini3");
let imgMini4 = document.getElementById("imgMini4");


imgMini1.addEventListener("click",function(){
    imgBox.setAttribute("src","img/image-product-1.jpg")
    boxImgBox1.classList.add("box-img-mini")
    boxImgBox2.classList.remove("box-img-mini")
    boxImgBox3.classList.remove("box-img-mini")
    boxImgBox4.classList.remove("box-img-mini")
    boxImgBox1.classList.add("img-mini-act")
    boxImgBox2.classList.remove("img-mini-act")
    boxImgBox3.classList.remove("img-mini-act")
    boxImgBox4.classList.remove("img-mini-act")
});


imgMini2.addEventListener("click", function(){
    imgBox.setAttribute("src","img/image-product-2.jpg");
    boxImgBox2.classList.add("box-img-mini")
    boxImgBox1.classList.remove("box-img-mini")
    boxImgBox3.classList.remove("box-img-mini")
    boxImgBox4.classList.remove("box-img-mini")
    boxImgBox2.classList.add("img-mini-act")
    boxImgBox1.classList.remove("img-mini-act")
    boxImgBox3.classList.remove("img-mini-act")
    boxImgBox4.classList.remove("img-mini-act")
});
imgMini3.addEventListener("click",function(){
    imgBox.setAttribute("src", "img/image-product-3.jpg");
    boxImgBox3.classList.add("box-img-mini")
    boxImgBox1.classList.remove("box-img-mini")
    boxImgBox2.classList.remove("box-img-mini")
    boxImgBox4.classList.remove("box-img-mini")
    boxImgBox3.classList.add("img-mini-act")
    boxImgBox1.classList.remove("img-mini-act")
    boxImgBox2.classList.remove("img-mini-act")
    boxImgBox4.classList.remove("img-mini-act")
});
imgMini4.addEventListener("click",function(){
    imgBox.setAttribute("src", "img/image-product-4.jpg");
    boxImgBox4.classList.add("box-img-mini")
    boxImgBox1.classList.remove("box-img-mini")
    boxImgBox2.classList.remove("box-img-mini")
    boxImgBox3.classList.remove("box-img-mini")
    boxImgBox4.classList.add("img-mini-act")
    boxImgBox1.classList.remove("img-mini-act")
    boxImgBox2.classList.remove("img-mini-act")
    boxImgBox3.classList.remove("img-mini-act")
});
// Botones para aumnetar y disminuir compra

let btnRestar = document.getElementById("btnRestar");
let btnCantidad = document.getElementById("btnCantidad")
let btnSumar = document.getElementById("btnSumar");
let cantBox = document.getElementById("cantBox");
let numeroElementos = document.getElementById("numeroElementos");

//valor Unitario y total
let valorUnitario = 190000;
let valorUniraioTxt = valorUnitario.toString();

//programcaion orientado a objetos 
let valorUnitarioPeso = new Intl.NumberFormat().format(valorUnitario);

//identificar cantidad de elementos
let cantNumtotal = valorUniraioTxt.length;

let valortotal = document.getElementById("valorTotal");
//Inicializando la variable
let valorTotalInt = 0;
//


// let numeroElementostxt = document.getElementById("numeroElementos").innerHTML;

btnSumar.addEventListener("click",function(){
    // nodeToAdd.appendChild(nodeText);
   
    // btnCantidad.appendChild(nodeToAdd);
    let numeroElementosTxt = document.getElementById("numeroElementos").innerHTML;

    let numeroElementosInt = parseInt(numeroElementosTxt);
    let totalElementosInt = numeroElementosInt + 1 ;
    let totalElementostxt = totalElementosInt.toString();
    numeroElementos.innerHTML = totalElementostxt;

    valorTotalInt = valorUnitario * totalElementosInt;
    valorTotal.innerHTML="$" + new Intl.NumberFormat().format(valorTotalInt);

});
btnRestar.addEventListener("click",function(){

    if(numeroElementos.innerHTML > 0){
        let numeroElementosTxt = document.getElementById("numeroElementos").innerHTML;
        let numeroElementosInt = parseInt(numeroElementosTxt);
        let totalElementosInt = numeroElementosInt - 1 ;
        let totalElementostxt = totalElementosInt.toString();
        numeroElementos.innerHTML = totalElementostxt;
        valorTotalInt = valorUnitario * totalElementosInt;
    valorTotal.innerHTML="$" + new Intl.NumberFormat().format(valorTotalInt);
    };
});






