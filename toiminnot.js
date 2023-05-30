document.querySelector("button").addEventListener("click", tarkistaLomake);

let virheID = document.getElementById("huonoID");

let kaikkiOK = true;

function tarkistaLomake(event){
    event.preventDefault();
    let iidee = document.getElementById("kID").value;
    if(iidee.length<6){
        document.getElementById("kID").value = "";
        virheID.style.display = "block";
        kaikkiOK = false;
    } else {
        virheID.style.display = "none";
    }
}