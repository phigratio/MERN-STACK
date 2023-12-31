//iterables are those where we can use our for of loops

// const firstName="harshit";
// for(let char of firstName)
// {
//     console.log(char);
// } 

// const items=['item1','item2','item3'];

// for(let item of items)
// {
//     console.log(item);
// }

//objects are not iterable
// const users={'key1':'value1','key2':'value2'};

// for(let item of users)
// {
//     console.log(item);
// }

//array like objects
//that have length property and can be accesed by index


//Sets(iterable)
//store data
//sets also have its own methods
//no index based access
//unique items only(no duplicates allowed)

// const items=['item1','item2','item3'];
// const numbers=new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(items);
// if(numbers.has(1))
// {
//     console.log("1 is present");
// }
// else
// {
//     console.log("1 is not present");
// }
// console.log(numbers);

// for(let number of numbers)
// {
//     console.log(number);
// }

// const myArray=[1,2,4,5,6,5,6];
// const uniqueElements=new Set(myArray);
// for(let num of myArray)
// {
//     uniqueElements.add(num);
// }
// console.log(uniqueElements);

// let length=0;
// for(let element of uniqueElements)
// {
//     length++;
// }
// console.log(length);


//map
//map is an iterable
//store data in ordered fashion
//store key value pair (like object)
//duplicate keys are not allowed like objects


//different between maps and objects
//objects can only have string or symbol as key

// const person=new Map();
// person.set('firstName','Harshit');
// person.set('age','7');
// person.set(1,'one');
// console.log(person);
// console.log(person.get('firstName'));
// console.log(person.keys(1));

// for(let key of person.keys())
// {
//     console.log(key,typeof key);
// }

// for(let [key,value] of person)
// {
//     console.log(key,value);
// }

// const person=new Map([['firstName','harshit'],['age',8]]);
// console.log(person);

// const person1={
//     id:1,
//     firstName:"harshit"
// };

// const userInfo=new Map();
// userInfo.set(person1,{age:8,gender:"male"});
// console.log(userInfo);
// console.log(person1.id);
// console.log(userInfo.get(person1))
// console.log(userInfo.get(person1).gender);
// console.log(userInfo.get(person1).age)


//clone using object assign
//memory
// const obj={
//     key1:"value1",
//     key2:"value2"
// }

// const obj2={...obj};
// const obj2=Object.assign({},obj);
// obj.key3="value3";
// console.log(obj);
// console.log(obj2);

//optional chaining
// const user={
//     firstName:"harshit",
//     address:{houseNumber:'1234'}
// };

// console.log(user?.firstName);
// console.log(user?.address?.houseNumber);

