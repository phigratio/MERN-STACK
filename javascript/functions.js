// function singHappyBirthday()
// {
//     console.log("Happy Birthday to you...")
// }

// singHappyBirthday();

// function sumTwoNum(num1,num2)
// {
//     return num1+num2;
// }

// const returnedValue=sumTwoNum(3,4);
// console.log(returnedValue);

//odd or even
// function isEven(num)
// {
//     if(num%2===0)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }

// console.log(isEven(8));

// function firstChar(str){
//     return str[0];
// }

// let ch=firstChar("hello");
// console.log(ch);

//find Target
// function findTarget(array,target)
// {
//     for(let i in array)
//     {
//         if(array[i]===target)
//         return i;
//     }
//     return -1;
// }
// const myArray=[1,2,4,5,35];
// const ans=findTarget(myArray,4);
// console.log(ans);


//function expression
// const singhappybirthday = function()
// {
//     console.log("happy birthday to u")
// }

// singhappybirthday();


//arrow functions
// const singHappyBirthday=()=>{
//     console.log("happy birthday to u.....");
// }
// singHappyBirthday();

// const sumThreeNum= (num1,num2,num3)=>{
//     return num1+num2+num3;
// }
// const sumThreeNum = (num1,num2,num3)=>num1+num2+num3;

// const ans=sumThreeNum(3,4,2);
// console.log(ans);


//hoisting
// hello();
// function hello(){
//     console.log("hello world");
// }

// const hello=function()
// {
//     console.log("hello world")
// }
//hello();

// function inside function
// const app=()=>{
//     const myFunc=()=>{
//         console.log("hello from myFunc");
//     }

//     const addTwo=(num1,num2)=>{
//         return num1+num2;
//     }

//     const mul=(num1,num2)=>num1*num2;

//     console.log("inside app");
//     myFunc();
//     console.log(addTwo(2,3));
// }

// app();

// lexical scope
//

// function myApp(){
//     if(true)
//     {
//         var firstName="harshit";
//         console.log(firstName);
//     }

//     if(true){
//         console.log(firstName);
//     }
//     console.log(firstName);
// }

// myApp();

//default parameters
// function addTwo(a=0,b=0){
//     return a+b;
// }

// const ans=addTwo(4)
// console.log(ans);

//rest parameters
// function myFunc(a,b,...c)
// {
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }

// myFunc(3,4,5,9,3,5,"hello");

// function addAll(...numbers)
// {
//     let total=0;
//     console.log(numbers);
//     console.log(Array.isArray(numbers));
//     for(let number of numbers)
//     {
//         total=total+number;
//     }
//     return total;
// }

// const ans=addAll(1,3,4,2,5);
// console.log(ans);


//param destructuring 
// const person={
//     firstName:"Muqtadir",
//     gender:"male",
//     age:500
// };

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }
// function printDetails({firstName,gender,age})
// {
//     console.log(firstName);
//     console.log(gender);
//     console.log(age);
// }

// printDetails(person);


//callback function
// function myFunc2()
// {
//     console.log("inside my func 2"); 
// }
// function myFunc(a)
// {
//    a();
// }

//functions return function
function myFunc()
{
    function hello()
    {
        return "hello world";
    }
    return hello;
}

const ans=myFunc();
console.log(ans());

// myFunc(myFunc2);