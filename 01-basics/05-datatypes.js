//Primitive

// 7 types : String , Number , Boolean , null , Symbol , BigInt
const score = 85
const scoreValue = 99.32

const isLoggedIn = false
const temperature = null 
let userEmail;

const id = Symbol('123')
const userId = Symbol('123')
const bigNumber = 8953330402n 


/*console.log(id === userId);
console.log(typeof id)
console.log(typeof temperature);
console.log(typeof userEmail);
console.log(typeof isLoggedIn);
console.log(typeof scoreValue );
console.log(typeof score);
console.log(typeof bigNumber);*/


//Non Primitive (Refrence)

// Array , Objects , Functions
const personName = ["sandhya", "Kritya", "Namarata",];
 let myObj = {
    name : "Sandhya",
    age : 19,
}

const myFunction = function(){
    console.log("Hello world!");
} 
console.log(typeof myFunction);