let barMenu = document.getElementById("barMenu");
let mainMenu = document.getElementById("mainMenu");

barMenu.addEventListener("click", function(){
    if(mainMenu.classList.contains("main-menu")){
        mainMenu.classList.remove("main-menu");
        mainMenu.classList.add("main_menu_visible");
    }else{
        mainMenu.classList.remove("main_menu_visible");
        mainMenu.classList.add("main-menu");
    }
})