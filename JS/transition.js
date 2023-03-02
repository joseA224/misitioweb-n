let box3 = document.getElementById("box3");

box3.addEventListener("click", function() {
    if(box3.classList.contains("box3-old")) {
        box3.classList.add("box3-new");
        box3.classList.remove("box3-old");
    }
    else {
        box3.classList.remove("box3-new");
        box3.classList.add("box3-old");
    }
})

let box4= document.getElementById("box4");
let box5=document.getElementById("box5");


box4.addEventListener('click',function(){
    if(box5.classList.contains('box5')){
    box5.classList.remove('box5')
}else{
    box5.classList.add('box5')
}
})

let box6= document.getElementById("box6");
let box7=document.getElementById("box7");


box6.addEventListener('click',function(){
    if(box7.classList.contains('box7')){
    box7.classList.remove('box7')
    box6.classList.remove('box_6')
}else{
    box7.classList.add('box7')
    box6.classList.add('box_6')
}
})