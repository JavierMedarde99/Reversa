const usuaria = document.getElementById("usuaria");

usuaria.addEventListener("click", clickUsuaria, false);

function clickUsuaria() {
    document.getElementById("usuaria").hidden = true;
    document.getElementById("iframeUsuaria").hidden = false;
}

const familia = document.getElementById("familia");

familia.addEventListener("click", clickFamilia, false);

function clickFamilia() {
    document.getElementById("familia").hidden = true;
    document.getElementById("iframeFamilia").hidden = false;
}

