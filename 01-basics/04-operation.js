let value = 26
let negValue = -value
/*console.log(negValue);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**4);*/

let str1 = "Hello";
let str2 = " Sandhya";
let str3 = str1 + str2 
console.log(str3);


console.log("1" + 2 + 3);//123
console.log(1 + 2 + "3");//33
console.log(1+"2");//12

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


console.log(undefined == 0);
console.log(undefined >0);
console.log(undefined < 0);

//===
console.log("2" === 2);

/*The reason is that an equality check == and comparisons > , > , >= , <= work differently.
Comparison convert null to a number, treating it as 0.
That's why (23) null >= 0 is true and (21) null > 0 is false.*/
