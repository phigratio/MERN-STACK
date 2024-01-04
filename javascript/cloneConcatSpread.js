let array1=["item1","item2"];
//slice method is faster
// let array2=array1.slice(0);

//concat
// let array2=[].concat(array1);

//spread operator
// let array2=[...array1];

// let array2=array1.slice(0).concat(["item3","item4"]); 
// let array2=[].concat(array1,"item3","item4");
// let array2=[...array1,"item3","item4"];
let oneMoreArray=["item3","item4"];
let array2=[...array1,...oneMoreArray];
array1.push("item3");
console.log(array1===array2);
console.log(array1);
console.log(array2);

