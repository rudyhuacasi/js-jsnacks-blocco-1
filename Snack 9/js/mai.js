`use strict`

// definisco una variabile per i primi 10 numeri
const numeri=[1,2,3,4,5,6, 7, 8, 9, 10]
console.log(numeri);
// definisco una variabile per la somma
var zero = 0
// definisco un ciclo da 0 a 10
for (let i = zero; i < 10; i++) {
	zero += numeri[i];
}
// definisco una variabile per la media ritmetica
const media= (zero/ numeri.length)
// stampo in console (zero) e (media)
console.log(`La somma dei primi 10 numeri è: ${zero}`);
console.log(`La media aritmetica è: ${media}`);
