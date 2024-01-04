// // const user={
// //     firstName:"harshit",
// //     lastName:"modi",
// //     email:"harshitmodi2313@gmail.com",
// //     age:32,
// //     address:"House Number,Colony,pincode,state",
// //     about:function()
// //     {
// //         return `${this.firstName} is ${this.age} years old`
// //     },
// //     is18:function(){
// //         return this.age>=18;
// //     }
// // };
// const userMethod={
//     about:function(){
//         return `${this.firstName} is ${this.age} years old.`
//     },
//     is18:function(){
//         return this.age>=18;
//     }
// };
// function createUser(firstName,lastName,email,age,address){
//     const user=Object.create(userMethod);
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.email=email;
//     user.age=age;
//     user.address=address;
//     // user.about=userMethod.about;
//     // user.is18=userMethod.is18;

//     return user;
// };

// const user1=createUser('harshith','modi','aesbaldk23@gmail.com',23,"adress is here")
// console.log(user1.about());

// const obj1={
//     key1:"value1",
//     key2:"value2"
// }
// const obj2=Object.create(obj1);
// console.log(obj2);
// obj2.key3="value3";
// console.log(obj2.key2);
// console.log(obj2.__proto__);


// obj2.__proto__

class User {
    constructor(firstName, lastName, email, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about() {
        return `${this.firstName} is ${this.age} years old.`;
    }

    is18() {
        return this.age >= 18;
    }
}



// Example usage:
const newUser =new User("John", "Doe", "john.doe@example.com", 25, "123 Main St");
console.log(newUser.about());
console.log(newUser.is18());
