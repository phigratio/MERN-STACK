//intro to arrays
//reference type
//how to create arrays

//array indexing

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// ordered collection of items

// let numbers=[1,2,3,4];
// let mixed=[1,2,2.2,"string",null,undefined];
// console.log(mixed);
// console.log(fruits);
// console.log(numbers[0]);


// let fruits=["apple","mango","grapes"]
// console.log(fruits);
// fruits[1]="banana";
// console.log(fruits);
// console.log(typeof fruits);
// let obj={};
// console.log(typeof obj);
// console.log(Array.isArray(fruits));

//push---adds at the last element
//array shift unshift

let fruits=["apple","mango","grapes"];
console.log(fruits);
// fruits.push("banana");
// fruits.pop();
// console.log(fruits);

//unshift->adds something to the starting          

fruits.unshift("banana");
fruits.unshift("pomegranate");
console.log(fruits);

//shift->removes from starting 
let removedFruit=fruits.shift();
console.log("removed fruit is: ",removedFruit);
