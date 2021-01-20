//Chiedo all'utente i numeri
const min = parseInt(prompt('Inserisci il numero minore'));
const max = parseInt(prompt('Inserisci il numero maggiore'));
const array = ['marco', 'giovanni', 'paolo', 'pietro', 'luca', 'carlo', 'giuseppe', 'alessandro', 'carmine'];

function arrayFilter(numeroMin, numeroMax, arrayNomi) {
    const nuovoArray= [];

    arrayNomi.forEach((elem,index) => {
        if (index >= numeroMin && index <= numeroMax) {
            nuovoArray.push(elem);
        }
    });

    return nuovoArray;
}

console.log(arrayFilter(min, max, array));