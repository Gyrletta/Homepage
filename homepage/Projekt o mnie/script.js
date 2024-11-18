/* Ruch na stronie - animacja
W tym przypadku ma zmienić się kolor tła strony. */

console.log("Witaj!");


/* zmiana tła */
let changeColorButton = document.querySelector(".changeBackground");
let container = document.querySelector(".container");

changeColorButton.addEventListener("click", () => {
    container.classList.toggle("whiteBackground");
});



/* przycisk który chowa coś */
let button = document.querySelector(".button");
let header = document.querySelector(".header");

button.addEventListener("click", () => {
    header.remove();
})



/* Przykład 1*/
let number1 = 25;
let number2 = 10;

if(number1 < number2){
    console.log("number1 jest mniejsze")
} else{
    console.log("number1 nie jest mniejsze")
}


/* Przykład 2*/
let containerDark = document.querySelector(".containerDark");
console.log(containerDark);

if(containerDark.classList.contains("containerDark")) {
    console.log("Kontener jest ciemny!");
} else {
    console.log("Kontener nie jest ciemy!");
}


/* Przykład 3*/
let buttonOne = document.querySelector(".buttonOne");
/* console.log(buttonOne);  -> na konsoli sprawdzamy, czy jest poprawnie */

buttonOne.addEventListener("click" , () => {
    if(buttonOne.innerText === "Włącz ciemny motyw") {
        buttonOne.innerText = "Wyłącz ciemny motyw";
    }
})


