`use strict`
//definisco una variabile per chiedere un numero di 4 cifre
const utente = prompt(`Inserire un numero di 4 cifre`)

// definisco una variabile per il numero di 4 ciffre 
const arr = (utente)

//stampo il numero di 4 cifre in console
console.log(`Il numero di 4 cifre è "${arr}"`);

//definisco per ogni cifra una variabile 
const mille=(Math.floor(arr/1000)%10);
const centi=(Math.floor(arr/100)%10);
const decine=(Math.floor(arr/10)%10);
const unita=(arr%10);

//definisco una variabile per la suma di tutte le cifre 
const suma =(unita+ decine+ centi + mille)

//stampo la suma in console
console.log(`La suma delle 4 ciffre è "${suma}"`);