var array = [
    bici1 = {'nome' : 'ciao1', 'peso' : 15},
    bici2 = {'nome' : 'ciao2', 'peso' : 30},
    bici3 = {'nome' : 'ciao3', 'peso' : 45}
]

for (var i = 0; i < array.length; i++) {
    var el = array[i];
    console.log(array[i]);
}

var ricerca = bici1;

console.log('Bici con peso minore è:');
if (ricerca.peso === bici1.peso) {
    console.log(bici1.peso)
} else {
    console.log('Non trovato');
}