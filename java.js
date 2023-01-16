let btn1 = document.getElementById("btn1")
let side1 = document.getElementsByClassName("sidebar")[0]
let btn2 = document.getElementById("btn2")
let side2 = document.getElementsByClassName("mini-sidebar")[0]


btn1.onclick = function (){
    side1.classList.toggle("afficher")
    side2.classList.toggle("afficher")

}
btn2.onclick = function (){

    side2.classList.toggle("afficher")
    side1.classList.toggle("afficher")
    
}