// function hello(){
//     console.log("hello world");
// }
// console.log(hello.name);

// //function gives us freespace only with functions
// hello.prototype.abc="abc";
// console.log(hello.prototype);
// hello.prototype.sing=function()
// {
//     return "lalalla";
// };
// console.log(hello.prototype.sing());
    
   
// function createUser(firstName,lastName,email,age,address){
//     const user=Object.create(createUser.prototype);
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.email=email;
//     user.age=age;
//     user.address=address;
//     // user.about=userMethod.about;
//     // user.is18=userMethod.is18;

//     return user;
// };
// createUser.prototype.about=function(){
//     return `${this.firstName} is ${this.age} years old.`
// };

// createUser.prototype.is18= function(){
//     return this.age>=18;
// };

// const user1=createUser('harshith','modi','aesbaldk23@gmail.com',23,"adress is here")
// console.log(user1.about());

//new keyword
// function createUser(firstName,age)
// {
//     this.firstName=firstName;
//     this.age=age;
// }
// createUser.prototype.about=function(){
//     console.log(this.firstName,this.lastName);
// }
// const user1=new createUser("harshit",9);
// console.log()

// let numbers=[1,2,3];
// console.log(Object.getPrototypeOf(numbers));
// console.log(Array.prototype);
