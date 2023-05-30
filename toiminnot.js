document.querySelector("button").addEventListener("click", tarkistaLomake);

let virheID = document.getElementById("huonoID");
let virhePostinro = document.getElementById("huonoPostinro");

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
        kaikkiOK = true;
    }

    let postinumero = document.getElementById("postinro").value;
    if(postinumero.length!=5){
        document.getElementById("postinro").value = "";
        virhePostinro.style.display = "block";
        kaikkiOK = false;
    } else {
        virhePostinro.style.display = "none";
        kaikkiOK = true;
    }
}