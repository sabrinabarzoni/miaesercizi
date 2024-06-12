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

esercizio 20 

let person = {
    name: "Mario",
    age:30,
    city: "Verona",
}

for(let prop in person){
    console.log(prop + ":"+person[prop]);
}

esercizio 21 

let score = prompt("inserisci un numero");
let n = parseInt(score);

if(n <= 100 && n >= 90){
    console.log("voto ottimo");
}else if(n <= 89 && n >= 70){
    console.log("voto buono");
}else if(n >= 60 && n <= 69){
    console.log("voto sufficiente");
}else if(n <= 50){
    console.log("voto insufficiente");
}

esercizio 22 
let score = prompt("inserisci un numero");
let n = parseInt(score);

switch (true){
    case (n <= 100 && n >= 90):
         console.log("voto ottimo");
    break;
    case (n <= 89 && n >= 70):
        console.log("voto buono");
        break;
    case (n >= 60 && n <= 69):
        console.log("voto sufficiente");
        break;
    case (n <= 50):
        console.log("voto insufficiente");



}

esercizio 23 

function outerFuncion(x,initialValue) {
    let result = initialValue;
    function innerFuncion(y) {
        return result += y;
    }
    return innerFuncion;
}

let somma = outerFuncion(2,5)(4);
console.log(somma);

esercizio 24 

esercizio 25

let student = {
    name: "Mario",
    age: "17",
    grade:"11",
    school:"high school"
}

console.log(Object.keys(student));

esercizio 26

let student = {
    name: "Mario",
    age: "17",
    grade:"11",
    school:"high school"
}

console.log(Object.values(student));

esercizio 27

let student = {
    name: "Mario",
    age: "17",
    grade:"11",
    school:"high school"
}

for (const [chiave, valore] of Object.entries(student)) {
    console.log(`${chiave}: ${valore}`)}

eseercizio 28

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number * 2);
})

const squareNumbers = numbers.map(Math.sqrt);

console.log(squareNumbers);

esercizio 29  

let students = [
    {name:"Mario", grade:90},
    {name:"Paolo", grade:68},
    {name:"Sara", grade:57},
    {name:"Maria", grade:40}
];

let passedStudents = students.filter(students => students.grade >= 60);

console.log(passedStudents);

let lastStudent = students.find(students => students.grade < 60);

console.log(lastStudent);

esercizio 30 

let expenses = [30, 5, 20, 3, 9];

let totalExpense = expenses.reduce((accumulator, currentValue) => { 
    return (accumulator + currentValue);
},0);

console.log(totalExpense);

let words = ["banana", "apple", "cherry", "date"];

words.sort();

console.log(words);

esercizio 31

function createCounter() {
    let count = 0;
    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        }
    }
}

let counter = createCounter();

console.log(counter.increment());

esercizio 32 


class Automobile {
    marca;
    modello;
    anno;

    constructor(marca, modello, anno){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
    }

    descrizione(){
        return `l'automobile è una ${this.marca}, di colore blu. il ${this.modello} è punto uscita nell'anno ${this.anno}`;
    }
}

let auto = new Automobile("bmw", "classe A", "2000");
let auto2 = new Automobile("fiat", "punto", "2005");
console.log(auto2.descrizione());

esercizio 33 */
