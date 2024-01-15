import { sum, diff } from "./lib.js";
// // const lib = require("./lib.js");
// import * as fs from "node:fs";

// // const txt = fs.readFileSync("demo.txt", "utf-8");
// fs.readFile("demo.txt", "utf-8", (err, txt) => {
//   console.log(txt);
// });
// console.log("hello");
// // console.log(txt);
// const a = 5;

// console.log(sum(4, 5), diff(3, 6));

// const lib = require("./lib.js");
import express from "express";
const server = express();
server.listen(3000);
console.log("hello world");
console.log(sum(4, 5), diff(3, 6));
