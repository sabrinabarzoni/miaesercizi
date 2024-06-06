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

esercizio 8  

let parola = "";

do {
    parola = prompt("Inserisci una parola di 5 lettere:");
} while (parola.length < 5);

console.log("Hai inserito la parola:", parola);

esercizio 9 

let number = 3;

if(number > 5 ){
console.log("la variabile è maggiore di 5")}
else {
console.log("la variabile è minore di 5")}

esercizio 10 
let score = score = prompt("inserisci un numero");



if(score <= 100 && score >= 90){
    console.log("voto ottimo")
}
else if(score <= 70 && score >= 89){
    console.log("voto buono")
}
else(score <= 59){
    console.log("voto insufficiente")
}

?? 


esercizio 12 

let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeri)

//esercizio 13 

let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somma = 0
 for(let i=0; i < numeri.length; i++){
    somma += numeri[i];
    console.log(somma)
 }


//esercizio 14

let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numeriinvertiti = [];

for(let i = numeri.length - 1;i >= 0;i--) {
    numeriinvertiti.push(numeri[i])
}

console.log(numeriinvertiti)
//esercizio 15 

var parole = [];

for (let i = 0; i < 5; i++) {
    let parola = prompt("Inserisci una parola:");
    if(parola.length % 2 !== 0){
        parole.push(parola);
        console.log(parole)
    }
}

esercizio 16 

let person = {
    name: "Mario",
    age:30,
    city: "Verona",
}
console.log(person);


esercizio 17 

let person = {
    name: "Mario",
    age:30,
    city: "Verona",
}

console.log(person.age);

esercizio 18 

person.age = 40;

console.log(person);

esercizio 19 

let person = {
    name: "Mario",
    age:30,
    city: "Verona",
}

person.job = "meccanico";

console.log(person);

esercizio 20 */

let person = {
    name: "Mario",
    age:30,
    city: "Verona",
}

for(let prop in person){
    console.log(prop + ":"+person[prop]);
}