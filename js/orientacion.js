const observacion = document.getElementById("observacion");

observacion.addEventListener("click", showObvervacion, false);

function showObvervacion() {
   let ulObservacion = document.getElementById("observacionUl").style.opacity;
   let ulObservacionText = "document.getElementById('observacionUl').style.opacity";
   console.log(ulObservacion)
   if(ulObservacion == 0 || ulObservacion == ""){
    document.getElementById("observacionUl").style.display = "block";
    mostrar(ulObservacionText);
   }else{
    ocultar(ulObservacionText);
    document.getElementById("observacionUl").style.display = "none";
   }
}

const recomendaciones = document.getElementById("recomendaciones");

recomendaciones.addEventListener("click", showRecomendacion, false);

function showRecomendacion() {
   let ulRecomendaciones = document.getElementById("recomendacionesUl").style.opacity;
   let ulRecomendacionesText = "document.getElementById('recomendacionesUl').style.opacity";
   console.log(ulRecomendaciones)
   if(ulRecomendaciones == 0 || ulRecomendaciones == ""){
    document.getElementById("recomendacionesUl").style.display = "block";
    mostrar(ulRecomendacionesText);
   }else{
    ocultar(ulRecomendacionesText);
    document.getElementById("recomendacionesUl").style.display = "none";
   }
}


const actitudes = document.getElementById("actitudes");

actitudes.addEventListener("click", showActitudes, false);

function showActitudes() {
   let ulActitudes = document.getElementById("actitudesUl").style.opacity;
   let ulActitudesText = "document.getElementById('actitudesUl').style.opacity";
   console.log(ulActitudes)
   if(ulActitudes == 0 || ulActitudes == ""){
    document.getElementById("actitudesUl").style.display = "block";
    mostrar(ulActitudesText);
   }else{
    ocultar(ulActitudesText);
    document.getElementById("actitudesUl").style.display = "none";
   }
}


function ocultar(ul) {
    for (i = 10; i >= 0; i--)
     setTimeout(ul+" = '" + (i / 10) + "'", (10 - i) * 100);
    }
    
function mostrar(ul) {
    for (i = 0; i <= 10; i++)
     setTimeout(ul+" = '" + (i / 10) + "'", i * 100);
    }