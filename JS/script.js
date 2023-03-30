
let imgBox   = document.getElementById("imgBox");
let imgMini1 = document.getElementById("imgMini1");
let imgMini2 = document.getElementById("imgMini2");
let imgMini3 = document.getElementById("imgMini3");
let imgMini4 = document.getElementById("imgMini4");



imgMini1.addEventListener("click", function(){
    imgBox.setAttribute("src", "img/image-product-1.jpg")
    
});

imgMini2.addEventListener("click", function(){
    imgBox.setAttribute("src", "img/image-product-2.jpg")
});

imgMini3.addEventListener("click", function(){
    imgBox.setAttribute("src", "img/image-product-3.jpg")
});

imgMini4.addEventListener("click", function(){
    imgBox.setAttribute("src", "img/image-product-4.jpg")
});




