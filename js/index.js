const button = document.querySelector("#button");

button.addEventListener("click",comprobarUsuario,false);

function comprobarUsuario(event){
    event.preventDefault();
    var listInput = document.getElementsByTagName("input");
    if(listInput[0].value == "reversa77" && listInput[1].value == "1234"){
        window.location.href = "main.html";
    }else{
        document.getElementById("error").hidden = false;
    }
}