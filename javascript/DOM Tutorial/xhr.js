// const URL="https://jsonplaceholder.typicode.com/posts"
// const xhr=new XMLHttpRequest();
// //step1
// xhr.open("GET",URL);
// xhr.onreadystatechange=function(){
//     if(xhr.readyState===4)
//     {
//         const response=xhr.response;
//         const data=JSON.parse(response);
//         console.log(typeof data);
//     }
// }

// xhr.onload=function(){
//     console.log(xhr.readyState);
// }
// xhr.send()

// const URL="https://jsonplaceholder.typicode.com/posts";
// fetch(URL)
//     .then(response=>{
//         console.log(response.json());
//     })
//     .then(data=>{
//         console.log(data);
//     })
//     .catch(error=>{
//         console.log("inside catch");
//         console.log(error);
//     })

//async await