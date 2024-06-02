/* esercizio 1 

let variabile1 = 32;
const variabile2 =50;

console.log(variabile1);
console.log(variabile2);
 
esercizio 2 

let n = 5;
console.log(n);

n = 7;
console.log(n);

esercizio 3 

let number = 12;

{
    let number = 20;
    console.log(number);
}
console.log(number);

esercizio 4 

let outside = 22;

{
    let inside = 33;
    console.log(inside);
    console.log(outside);
}

console.log(inside);
console.log(outside);

esercizio 5 

for (let i = 0; i<=20;i++){
    if(i % 2 == 0) {
        console.log(i)
    }
}

esercizio 6 

let i = 9;
while (i > 0) {
    console.log(i);
    i -= 2;
}

esercizio 7

let word ="hello";

console.log(word.length);

esercizio 8  */

let parola = "";

do {
    parola = prompt("Inserisci una parola di 5 lettere:");
} while (parola.length < 5);

console.log("Hai inserito la parola:", parola);