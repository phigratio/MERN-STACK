// console.log("script start")
// for(let i=1;i<10000;i++)
// {
//     console.log("inside for loop");
// }
// console.log("script end");

//setTimeout
// console.log("script start")
// function hello(){
//     console.log("Hello World!");
// };
// setTimeout(hello,1000);
// console.log("Script end")

//setInterval
// console.log("script start");
// setInterval(()=>{
//     console.log(Math.random());
// },2000)
// const body=document.body;
// const button=document.querySelector("button");
// const intervalId=setInterval(()=>{
//     const red=Math.floor(Math.random()*126);
//     const green=Math.floor(Math.random()*126);
//     const blue=Math.floor(Math.random()*126);
//     const rgb=`rgb(${red},${green},${blue})`;
//     body.style.background=rgb;
// },1000);

// button.addEventListener("click",()=>{
//     clearInterval(intervalId);
//     button.textContent=body.style.background;
// })

// const bucket=['coffee','chips','salt','rice'];
// const friedRicePromise=new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables")&& bucket.includes("salt"))
//     {
//         resolve("Fried Rice");
//     }
//     else
//     {
//         reject("Couldnt do it");
//     }
// });

// friedRicePromise.then((myFriedRice)=>{
//     console.log("lets eat",myFriedRice);
// }).catch(
// (error)=>{
//     console.log(error);
// })

// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(value)
//             {
//                 resolve();
//             }
//             else
//             {
//                 reject();
//             }
//         },2000)
//     })
// }

// myPromise()

//     .then(()=>{console.log("resolved")})
//     .catch(()=>{console.log("rejected")})
