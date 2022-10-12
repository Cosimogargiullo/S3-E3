// PRIMA SEZIONE
function succo(mele, arance){
    var succoFrutta = `Succo con ${mele} mele e ${arance} arance`;
    return succoFrutta;
}
document.getElementById('corretta').innerHTML = succo(4,5);
document.getElementById('sbagliata').innerHTML = succo (6);

// SECONDA SEZIONE
document.getElementById('eta').innerHTML += `${eta()} anni`;
function eta(){
    return 2022 - 2001;
}

// TERZA PARTE
calcolaEta = (nome, aCorrente, eta1) => {
    var calcEta = `L'anno di nascita di ${nome} è ${aCorrente - eta1}`;
    return calcEta
}
document.getElementById('persona1').innerHTML = calcolaEta('Anna', 2022, 30);
document.getElementById('persona2').innerHTML = calcolaEta('Maria', 2022, 24);

// QUARTA PARTE
function torta() {
    var ricetta = `Torta con ${torta2()*3} fette di mela e ${torta2()*5} fette di arancia.`;
    return ricetta;
}
function torta2() {
    var fette = 3;
    return fette;
}
document.getElementById('torta').innerHTML = torta();

// QUINTA PARTE
document.getElementById('calcola').addEventListener("click", function(){
    document.getElementById('totale').innerHTML += risultato()
});

function risultato() {
    let cibo = document.getElementById('cibo').valueAsNumber;
    let detersivi = document.getElementById('detersivi').valueAsNumber;
    let abiti = document.getElementById('abiti').valueAsNumber;
    var calcolo1 = `${cibo + abiti + detersivi}`;
    return calcolo1;
}


