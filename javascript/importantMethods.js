//methods
//function inside objects

// function personInfo()
// {
//     console.log(`person name is ${this.firstName} and person age is ${this.age} `)
// }
// const person={
//     firstName:"harshit",
//     age:8,
//     about:personInfo
// };

// person.about();

// console.log(window);

// function myFunc()
// {
//     console.log(this);
// }
// window.myFunc();

//call 
// function hello()
// {
//     console.log("hello world");
// }
// hello();
// hello.call();

const user1={
    firstName:"harshit",
    age:8,
    about:()=>
    {
        console.log(this.firstName,this.age);
    }
};

// const user2={
//     firstName:"mohit",
//     age:10
//     // about:function(gobby,favMusic)
//     // {
//     //     console.log(this.firstName,this.age);
//     // }
// };

// user1.about.call(user2,"guitar","mozart");
// user1.about.apply(user1,["guitar","hello"]);
// const func=user1.about.bind(user2,"guitar","bach");
// func();

// const myFunc=user1.about.bind(user1);
// myFunc();

//arrow functions

// user1.about();

