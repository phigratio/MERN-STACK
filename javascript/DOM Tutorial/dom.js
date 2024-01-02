// console.dir(document)

//select element using get element by id
// const mainHeading=document.getElementById("main-heading");
//query selector 
// const mainHeading=document.querySelector("#main-heading");
// const header=document.querySelector(".header");
// const navItem=document.querySelectorAll(".nav-item")
// console.log(navItem)

//change your tasks
// const mainHeading=document.getElementById("main-heading");
// console.log(mainHeading.textContent);
// mainHeading.textContent="This is something else";
// console.log(mainHeading.textContent)

// const mainHeading=document.querySelector("div.headLine h2");
// mainHeading.style.backgroundColor="blue";
// mainHeading.style.border="20px solid green"

//get and set attributes
// const link=document.querySelector("a");
// console.log(link.getAttribute("href"));
// console.log(link.getAttribute("href").slice(1));
// const inputElement=document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));

//get multiple elements by class name
//get multiple elements by querySelectorAll
// let navItems=document.getElementsByTagName("a");
// console.log(navItems[1]);

// for(let i=0;i<navItems.length;i++)
// {
//     const navItem=navItems[i];
//     navItem.style.backgroundColor="#fff"
//     navItem.style.color="green";
// }
// navItems=Array.from(navItems);
// console.log(Array.isArray(navItems));
// for(let navItem of navItems)
// {
//     navItem.style.backgroundColor="#fff"
//     navItem.style.color="green";
// }
//for loop
// we can use for of and simple for loop but not forEach
// const navItems=document.querySelectorAll(".nav-item");//NodeList
// console.log(navItems);

// let navItems=document.querySelectorAll("a");
// console.log(navItems);

// const headLine=document.querySelector(".headLine");
// headLine.innerHTML="<h1>Inner Html changed</h1>";

// const rootNode=document.getRootNode();
// console.dir(rootNode);
// const htmlElementNode=rootNode.childNodes[0];
// console.log(htmlElementNode.childNodes);
// const headElementNode=(htmlElementNode.childNodes[0]);
// const textNode1=htmlElementNode.childNodes[1];
// const bodyElementNode=htmlElementNode.childNodes[2];
// console.log(headElementNode);

// const sectionTodo=document.querySelector(".section-todo");
// console.log(sectionTodo.classList);
// sectionTodo.classList.add('bg-dark');
// console.log(sectionTodo.classList);
// sectionTodo.classList.toggle("bg-dark");

//clone nodes
// const ui=document.querySelector(".todo-list");
// const li=document.createElement("li");
// li.textContent="new todo";
// ui.append(li);

// const ul=document.querySelector(".todo-list");
// const li=document.createElement("li");
// li.textContent="new todo";
// ul.appendChild(li);


//static list
// const listItems=document.querySelector(".todo-list li");
// const sixthLi=document.createElement("li");
// sixthLi.textContent="item 6";
// const ul=document.querySelector(".todo-list");
// console.log(ul);
// ul.append(sixthLi);
// console.log(listItems);

//live list
// const ul=document.querySelector(".todo-list");
// const listItems=ul.getElementsByTagName("li");
// const sixthLi=document.createElement("li");
// sixthLi.textContent="item 6";
// ul.append(sixthLi);
// console.log(listItems);

//how to get dimensions of element
//height width

// const sectionTodo=document.querySelector(".section-todo");
// const info= sectionTodo.getBoundingClientRect();
// console.log(info);