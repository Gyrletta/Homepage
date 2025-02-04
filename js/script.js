
const welcome = () => {
    console.log("Witaj na mojej stronie!");
};

const onChangeBackgroundClick = () => {
    const container = document.querySelector(".container");
    const button = document.querySelector(".changeBackground");

    
    if (!container.classList.contains("darkBackground")) {
        container.classList.add("whiteBackground");
        button.innerText = "Włącz ciemne tło";
    }

   
    if (container.classList.contains("whiteBackground")) {
        container.classList.remove("whiteBackground");
        container.classList.add("darkBackground");
        button.innerText = "Włącz jasne tło";
    } else {
        container.classList.remove("darkBackground");
        container.classList.add("whiteBackground");
        button.innerText = "Włącz ciemne tło";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const button = document.querySelector(".changeBackground");

    if (container.classList.contains("darkBackground")) {
        button.innerText = "Włącz jasne tło";
    } else {
        button.innerText = "Włącz ciemne tło";
    }
});


const onButtonClick = () => {
    const headerMain = document.querySelector(".header_main");
    const button = document.querySelector(".button");

    if (headerMain.style.display === "none") {
        headerMain.style.display = "block";
        button.innerText = "Schowaj Obrazek.";
    } else {
        headerMain.style.display = "none";
        button.innerText = "Pokaż Obrazek.";
    }
};

const init = () => {
    const changeColorButton = document.querySelector(".changeBackground");
    const toggleImageButton = document.querySelector(".button");

    changeColorButton.addEventListener("click", onChangeBackgroundClick);

    toggleImageButton.addEventListener("click", onButtonClick);

    welcome();
};

init();

const containerDark = document.querySelector(".containerDark");
console.log(containerDark);

if (containerDark && containerDark.classList.contains("containerDark")) {
    console.log("Kontener jest ciemny!");
} else {
    console.log("Kontener nie jest ciemny!");
}
