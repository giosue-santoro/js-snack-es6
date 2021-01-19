//FUNZIONI

//Funzione per creare i numeri casuali
function randomN(min, max) {
    var randomArray;
    for (let i = min; i <= max; i++) {
        randomArray = Math.floor(Math.random() * (max - min)) + min;
    }
    return randomArray;
}

//SQUADRE
var squadra1 = {
    'nome' : 'inter',
    'punti_fatti' : 0,
    'falli_subiti' : 0
}

var squadra2 = {
    'nome' : 'milan',
    'punti_fatti' : 0,
    'falli_subiti' : 0
}

var squadra3 = {
    'nome' : 'juventus',
    'punti_fatti' : 0,
    'falli_subiti' : 0
}

var squadre = [squadra1, squadra2, squadra3];

for (var i = 0; i < squadre.length; i++) {
    var el = squadre[i];
    el.falli_subiti = randomN(1,10);
    el.punti_fatti = randomN(1,10);
}

console.log('Primo array con tutte caratteristiche: ');
console.log(squadre);

var nuoveSquadre = [];

for (var i = 0; i < squadre.length; i++) {
    var vecchieSquadre = squadre[i];
    
    nuoveSquadre.push({
            nome: vecchieSquadre.nome,
            falli_subiti: vecchieSquadre.falli_subiti,
    })
}

console.log('Secondo array, solo con nome squadra e falli subiti: ');
console.log(nuoveSquadre);