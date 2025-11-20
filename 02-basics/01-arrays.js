const myArr = [0, 1, 2, 3, 4, 5]
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[3]);

//METHODS

//myArr.push(6)
//myArr.pop()
//console.log(myArr);

myArr.unshift(6)  //add the element at starting
myArr.shift()   //remove element from starting
//console.log(myArr.includes(9))
//console.log(myArr.indexOf(5))

const newArr = myArr.join()// join, convert all the elements of array into string
//console.log(newArr);
//console.log(typeof newArr);


//SLICE & SPLICE  (slice returns a copy of a section of an array  while splice manipulate the original array)

console.log("A ", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B ", myArr);
const myn2 = myArr.splice(1,3);
console.log("C ", myArr);
console.log(myn2);