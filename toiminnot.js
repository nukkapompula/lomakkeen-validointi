document.querySelector("button").addEventListener("click", tarkistaLomake);

let virheID = document.getElementById("huonoID");
let virheSalasana = document.getElementById("huonoSalasana");
let virheNimi = document.getElementById("huonoNimi");
let virheOsoite = document.getElementById("huonoOsoite");
let virheMaa = document.getElementById("huonoMaa");
let virhePostinro = document.getElementById("huonoPostinro");

let kaikkiOK = true;

function tarkistaLomake(event){
    // jokainen kenttä käydään läpi, alkaen...
    // Käyttäjä-ID
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

    // Salasana
    let salasana = document.getElementById("salasana").value;
    if(salasana.length<1){
        virheSalasana.style.display = "block";
        kaikkiOK = false;
    } else {
        virheSalasana.style.display = "none";
        kaikkiOK = true;
    }

    // Nimi
    let nimi = document.getElementById("nimi").value;
    if(nimi.length<1){
        virheNimi.style.display = "block";
        kaikkiOK = false;
    } else {
        virheNimi.style.display = "none";
        kaikkiOK = true;
    }

    // Osoite
    let osoite = document.getElementById("osoite").value;
    if(osoite.length<1){
        virheOsoite.style.display = "block";
        kaikkiOK = false;
    } else {
        virheOsoite.style.display = "none";
        kaikkiOK = true;
    }

    // Maa
    let maa = document.getElementsByTagName("select")[0].value;
    if(maa=="oletus"){
        virheMaa.style.display = "block";
        kaikkiOK = false;
    } else {
        virheMaa.style.display = "none";
        kaikkiOK = true;
    }

    // Postinumero
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