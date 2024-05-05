`use strict`
// ho definito due array vuoti 
const arrDispari= []
const arrPari= []
// aggiungo un ciclone da 0 a 6
for (let i = 0; i < 6; i++) {
    //definisco una variabile che chiede un numero qualsiesi
    const utente = prompt(`inserire un numero`)
    console.log(utente);
    // definisco una condizionale pari e dispari per aggiunger i numeri all array vuoto
    if (utente % 2 === 0) {
        arrPari.push(utente)
    }else{
        arrDispari.push(utente);
    }
}
// stampo in console tutti array pari e dispari
console.log(`dispari`,arrDispari);
console.log(`pari`,arrPari);