//Chiedo all'utente i numeri
var min = parseInt(prompt('Inserisci il numero minore'));
var max = parseInt(prompt('Inserisci il numero maggiore'));
var array = ['marco', 'giovanni', 'paolo', 'pietro', 'luca', 'carlo'];

function arrayFilter(numeroMin, numeroMax, arrayNomi) {
    var nuovoArray= [];

    for(var i = 0; i < arrayNomi.length; i++) {
        if(i >= numeroMin && i <= numeroMax) {
            nuovoArray.push(arrayNomi[i]);
        }
    }

    return nuovoArray;
}

console.log(arrayFilter(min, max, array));