document.getElementById("laheta").addEventListener("click", tarkistaLomake);
document.getElementById("takaisin").addEventListener("click", uusiLomake);

let virheID = document.getElementById("huonoID");
let virheSalasana = document.getElementById("huonoSalasana");
let virheNimi = document.getElementById("huonoNimi");
let virheOsoite = document.getElementById("huonoOsoite");
let virheMaa = document.getElementById("huonoMaa");
let virhePostinro = document.getElementById("huonoPostinro");
let virheSposti = document.getElementById("huonoSposti");
let virheSukupuoli = document.getElementById("huonoSukupuoli");
let virheKieli = document.getElementById("huonoKieli");

function tarkistaLomake(event){
    event.preventDefault();
    let kaikkiOK = 0;
    // jokainen kenttä käydään läpi, alkaen...
    // Käyttäjä-ID
    let iidee = document.getElementById("kID").value;
    if(iidee.length<6){
        virheID.style.display = "block";
        kaikkiOK += 0;
    } else {
        virheID.style.display = "none";
        kaikkiOK += 1;
    }

    // Salasana
    let salasana = document.getElementById("salasana").value;
    if(salasana.length<1){
        virheSalasana.style.display = "block";
        kaikkiOK += 0;
    } else {
        virheSalasana.style.display = "none";
        kaikkiOK += 1;
    }

    // Nimi
    let nimi = document.getElementById("nimi").value;
    if(nimi.length<1){
        virheNimi.style.display = "block";
        kaikkiOK += 0;
    } else {
        virheNimi.style.display = "none";
        kaikkiOK += 1;
    }

    // Osoite
    let osoite = document.getElementById("osoite").value;
    if(osoite.length<1){
        virheOsoite.style.display = "block";
        kaikkiOK += 0;
    } else {
        virheOsoite.style.display = "none";
        kaikkiOK += 1;
    }

    // Maa
    let maa = document.getElementsByTagName("select")[0].value;
    if(maa=="oletus"){
        virheMaa.style.display = "block";
        kaikkiOK += 0;
    } else {
        virheMaa.style.display = "none";
        kaikkiOK += 1;
    }

    // Postinumero
    let postinumero = document.getElementById("postinro").value;
    if(postinumero.length!=5){
        virhePostinro.style.display = "block";
        kaikkiOK += 0;
    } else {
        virhePostinro.style.display = "none";
        kaikkiOK += 1;
    }

    // Sähköposti
    let sposti = document.getElementById("sposti").value;
    if(spostiTarkastus(sposti)){
        virheSposti.style.display = "none";
        kaikkiOK += 1;
    } else {
        virheSposti.style.display = "block";
        kaikkiOK += 0;
    }

    // Sukupuoli
    let sukupuoli = document.getElementsByName("sukupuoli");
    let valinta = 0;
    for(indeksi=0; indeksi<sukupuoli.length; indeksi++){
        if(sukupuoli[indeksi].checked){
            valinta += 1;
        }
    }
    if(valinta>0){
        virheSukupuoli.style.display = "none";
        kaikkiOK += 1;
    } else {
        virheSukupuoli.style.display = "block";
        kaikkiOK += 0;
    }

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
        kaikkiOK += 1;
    } else {
        virheKieli.style.display = "block";
        kaikkiOK += 0;
    }

    // rekisteröinnin hyväksyminen
    if(kaikkiOK==9){
        document.forms[0].style.display = "none";
        document.getElementById("onnistui").style.display = "block";
        document.getElementById("takaisin").style.display = "block";
    } else {
        alert("Rekisteröityminen epäonnistui. Ole hyvä ja korjaa punaisella merkityt puutteet tiedoissa.")
    }
}

function spostiTarkastus(osoite){
    // osoitteen testaus ns. Regular Expressionin avulla
    const ilmaus = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return ilmaus.test(String(osoite).toLowerCase());
}

function uusiLomake(event){
    location.reload();
}