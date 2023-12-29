//forEach

// const numbers=[4,3,2,5];

// function myFunc(number,index)
// {
//     console.log("index is ", index);
//     console.log(`The ${number} multiplied by 2 is ${number*2}`);
// }

// mulBy2(numbers[0],0);

// for(let i=0;i<numbers.length;i++)
// {
//     mulBy2(numbers[i],i);
// }

// numbers.forEach(function(number,index){
//     console.log("index is ", index);
//     console.log(`The ${number} multiplied by 2 is ${number*2}`);
// });

// const users=[
//     {firstName:"harshit",age:23},
//     {firstName:"mohit",age:21},
//     {firstName:"nitish",age:22},
//     {firstName:"garima",age:20}
// ]
// users.forEach((user)=>{
//     console.log(user.firstName);
// })

// users.forEach(function(user)
// {
//     console.log(user.firstName)
// }
// )

// for(let user of users)
// {
//     console.log(user.firstName);
// }

//map method
// const numbers=[3,4,5,6];
// const square=function(number)
// {
//     console.log(number*number);
//     return number*number;
// }
// const squareNumber=numbers.map(square);
// console.log(squareNumber);


// const users=[
//     {firstName:"harshit",age:23},
//     {firstName:"mohit",age:21},
//     {firstName:"nitish",age:22},
//     {firstName:"garima",age:20}
// ]

// const firstNames=users.map((user)=>{
//     return user.firstName;
// })

// console.log(firstNames);

// const numbers=[1,2,4,3,5];

// const isOdd=function(number){
//     return number%2!==0;
// }

// const oddNumbers=numbers.filter((number)=>{
//     return number%2!==0;
// });
// console.log(oddNumbers);

//reduce method
// const numbers=[1,2,3,4,5];

// aim:sum of all the numbers in array
// const sum=numbers.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// });

// console.log(sum);

//accumulator=1,currentvalue=2,return 3   
// const userCart=[
//     {productId:1,productName:"mobile",price:12000},
//     { prductId:2,productName:"tv",price:32000},
//     {productId:3,productName:"laptop",price:22000}
// ]   

// const totalAmount=userCart.reduce((totalPrice,currentProduct)=>{
//     return totalPrice+currentProduct.price
// },0)
// console.log(totalAmount);

//sort method

// const numbers=[5,9,1200,400,3000];

// numbers.sort((a,b)=>{
//     return a-b;
// });
// console.log(numbers);

// const userNames=['harshit','abcd','mohit','nitish']
// userNames.sort();
// console.log(userNames);

// const products=[
//     {productId:1,productName:"p1",price:399},
//     {productId:2,productName:"p2",price:329},
//     {productId:3,productName:"p3",price:449},
//     {productId:4,productName:"p4",price:429},
// ];

// lowToHigh
// const lowToHigh=products.slice(0).sort((a,b)=>{return a.price-b.price})
// console.log(lowToHigh);
// console.log(products);

//find method

// const myArray=["Hello","cat","dog","lion"];
// function isLength3(string)
// {
//     return string.length===3;
// }

// const ans=myArray.find(isLength3);
// console.log(ans);

// const products=[
//     {productId:1,productName:"tv",price:399},
//     {productId:2,productName:"fridge",price:329},
//     {productId:3,productName:"hello",price:449},
//     {productId:4,productName:"smartphone",price:429},
// ];

// const myProduct=products.find((product)=>product.productId===3);
// console.log(myProduct);


//every method
// const numbers=[2,4,5,7,8];
// const ans=numbers.every((number)=>number%2===0);



// console.log(ans);

const products=[
    {productId:1,productName:"tv",price:399},
    {productId:2,productName:"fridge",price:329},
    {productId:3,productName:"hello",price:449},
    {productId:4,productName:"smartphone",price:429},
];

// const ans=products.every((cartItem)=>cartItem.price<3500);
// console.log(ans);


//some method
//atleast one number is even
// const numbers=[3,5,8,9];
// const ans=numbers.some((number)=>number%2===0)
// console.log(ans);

// const ans=products.some((product)=>product.price>300)

//fill method
//value,start,end
// const myArray=new Array(10).fill(-1);
// console.log(myArray);

// const myarray=[1,2,3,4,5,6,7,8];
// myarray.fill(0,2,4);
// console.log(myarray);

//splice method
//start,delete,insert

// const myArray=['item1','item2','item3'];

//delete
// myArray.splice(1,1);
// console.log(myArray);

//insert
// myArray.splice(1,0,'inserted item');
// console.log(myArray);

//insert and delete
// myArray.splice(1,2,"inserted item1","inserted item2")
// console.log(myArray);

