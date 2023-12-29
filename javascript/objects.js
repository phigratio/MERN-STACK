//objects are reference type
// const person={name:"Muqtadir",age:22};
// console.log(person);
// console.log(typeof person);
// console.log(person.name);
// console.log(person.age);

// const key="email";
// person["gender identity"]="male";
// console.log(person);
// console.log(person.hobbies);

// //add key value pair
// person.gender="male";
// console.log(person);

//difference between bracket and dot operator
// keys are in string in javascript
// to give a string name with two words are not possible wihtout bracket
// console.log(person["name"]);
// person[key]="abd@gmail.con";
// console.log(person);

// const person={
//     name:"Muqtadir",
//     age:22,
//     hobbies:["guitar","sleeping","listening music"]
// };

//for in loop
// for(let key in person)
// {
//     console.log(person[key]);
//     console.log(`${key}:${person[key]}`);
// }

//object.keys

// console.log(Object.keys(person));
// const val=Array.isArray(Object.keys(person));
// console.log(val);

// for(let key of Object.keys(person))
// {
//     console.log(person[key]);
// }

//computed properties

// const key1="objkey1";
// const key2="objkey2";
// const value1="myvalue1";
// const value2="myvalue2";

// const obj={
//     [key1]:value1,
//     [key2]:value2
// };
// console.log(obj);

//spread operator in objects
// const obj1={
//     key1:"value1",
//     key2:"value2"
// };
// const obj2={
//     key1:"value9",
//     key3:"value3",
//     key4:"value4"
// };

// const newObj={...obj1,...obj2,key69:"value34"};
// const newObj={..."abc"};          
// console.log(newObj);

//object destructuring
// const band={
//     bandName:"Arekta rock band",
//     famousSong:"Eden",
//     year:1970,
//     anotherSong:"Chaap"
// };
// const bandName=band.bandName;
// const famousSong=band.famousSong;
// console.log(bandName);
// console.log(famousSong);

// const{bandName:var1,famousSong:var2,...restProps}=band;
// console.log(var1);                 
// console.log(restProps)

//objects inside array
//very useful in real world applications
// const users=[{
//     userId:1,
//     firstName:"A",
//     gender:"male"
// },
// {
//     userId:2,
//     firstName:"B",
//     gender:"male"
// },
// {
//     userId:3,
//     firstName:"C",
//     gender:"male"
// }];

// for(let user of users)
// {
//     console.log(user);
// }

//nested destructuring
// const [user1,user2,user3]=users;
// console.log(user1);

// const [{firstName}, ,{gender}]=users;
// console.log(firstName);
// console.log(gender);  