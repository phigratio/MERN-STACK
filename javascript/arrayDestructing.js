const myArray=["value1","value2","value3","value4"];
let [myvar1, ,myvar2,...newArray]=myArray;
// let newArray=myArray.slice(2);
console.log("value of myvar1",myvar1);
console.log("value of myvar2",myvar2);
myvar1="value changed";
console.log("value of myvar1",myvar1);
console.log(newArray);