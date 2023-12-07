let menuIcon = document.querySelector("#menu")
let closeMenu = document.querySelector("#close")
let hamMenu = document.querySelector(".hamburgur-menu")

let isMenuShowing = false


menu.addEventListener("click" ,menuFun)
closeMenu.addEventListener("click" ,menuFun)


function menuFun  () {

    if(isMenuShowing){
        
        menuIcon.classList.remove("hidden")
        closeMenu.classList.add("hidden") 
        hamMenu.classList.remove("flex")
        hamMenu.classList.add("hidden")
        isMenuShowing = !isMenuShowing

    }else{
        menuIcon.classList.add("hidden")
        closeMenu.classList.remove("hidden")
        hamMenu.classList.remove("hidden")
        hamMenu.classList.add("flex")
        isMenuShowing = !isMenuShowing

    }   
    console.log(isMenuShowing)
}



