let array = [
    bici1 = {'nome' : 'ciao1', 'peso' : 15},
    bici2 = {'nome' : 'ciao2', 'peso' : 30},
    bici3 = {'nome' : 'ciao3', 'peso' : 45}
]

for (let i = 0; i < array.length; i++) {
    const el = array[i];
    console.log(array[i]);
}

let ricerca = bici1;

console.log('La bici con peso minore è: ');

if (ricerca.peso === bici1.peso) {
    console.log(bici1.peso)
} else {
    console.log('Non trovato');
}