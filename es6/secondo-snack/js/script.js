//FUNZIONI

//Funzione per creare i numeri casuali
function randomN(min, max) {
    let randomArray;
    for (let i = min; i <= max; i++) {
        randomArray = Math.floor(Math.random() * (max - min)) + min;
    }
    return randomArray;
}

//SQUADRE
let squadra1 = {
    'nome' : 'inter',
    'punti_fatti' : 0,
    'falli_subiti' : 0
}

let squadra2 = {
    'nome' : 'milan',
    'punti_fatti' : 0,
    'falli_subiti' : 0
}

let squadra3 = {
    'nome' : 'juventus',
    'punti_fatti' : 0,
    'falli_subiti' : 0
}

const squadre = [squadra1, squadra2, squadra3];

for (let i = 0; i < squadre.length; i++) {
    let el = squadre[i];
    el.falli_subiti = randomN(1,10);
    el.punti_fatti = randomN(1,10);
}

console.log('Primo array con tutte caratteristiche: ');
console.log(squadre);

let nuoveSquadre = [];

for (let i = 0; i < squadre.length; i++) {
    let vecchieSquadre = squadre[i];
    
    nuoveSquadre.push({
            nome: vecchieSquadre.nome,
            falli_subiti: vecchieSquadre.falli_subiti,
    })
}

console.log('Secondo array, solo con nome squadra e falli subiti: ');
console.log(nuoveSquadre);