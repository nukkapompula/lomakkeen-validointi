document.querySelector("button").addEventListener("click", tarkistaLomake);

let virheID = document.getElementById("huonoID");
let virheSalasana = document.getElementById("huonoSalasana");
let virheNimi = document.getElementById("huonoNimi");
let virheOsoite = document.getElementById("huonoOsoite");
let virheMaa = document.getElementById("huonoMaa");
let virhePostinro = document.getElementById("huonoPostinro");
let virheSposti = document.getElementById("huonoSposti");

let virheKieli = document.getElementById("huonoKieli");

let kaikkiOK = true;

function tarkistaLomake(event){
    event.preventDefault();
    // jokainen kenttä käydään läpi, alkaen...
    // Käyttäjä-ID
    let iidee = document.getElementById("kID").value;
    if(iidee.length<6){
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
        virhePostinro.style.display = "block";
        kaikkiOK = false;
    } else {
        virhePostinro.style.display = "none";
        kaikkiOK = true;
    }

    // Sähköposti
    let sposti = document.getElementById("sposti").value;
    if(spostiTarkastus(sposti)){
        virheSposti.style.display = "none";
        kaikkiOK = true;
    } else {
        virheSposti.style.display = "block";
        kaikkiOK = false;
    }

    // Sukupuoli

    // Kieli
    let kielet = document.getElementsByName("kieli");
    let ruksi = 0;
    for(indeksi=0; indeksi<kielet.length; indeksi++){
        if(kielet[indeksi].checked){
            ruksi += 1;
        }
    }
    if(ruksi>0){
        virheKieli.style.display = "none";
        kaikkiOK = true;
    } else {
        virheKieli.style.display = "block";
        kaikkiOK = false;
    }
}

function spostiTarkastus(osoite){
    const ilmaus = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return ilmaus.test(String(osoite).toLowerCase());
}