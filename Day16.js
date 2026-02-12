// JavaScript Data Types and Operators

// String primitive data types
// let name = "mayuri";
// let message= "hello";
// let template = `hello ${name}`; // template literal
// console.log(template);
// console.log(name); 
// console.log( typeof name); // "string"

// let age = 25;
// const age1 = 23;
// // age1 = 24;
// console.log(age1);
// let price = 99.99;      // Float
// let infinity = "#"; // Special numeric value
// let notANumber = NaN;   // Not a Number
// console.log(infinity);
// console.log(notANumber);
// var f= "Apple";
//  console.log(f);
// var f= "Graps"
//  console.log(f);
// f= "banana"
// console.log(f);
// let emptyValue = null;      // Intentional absence of value
// let a1;             // Variable declared but not assigned
// console.log(typeof emptyValue);    // "object" (historical quirk)
// console.log(typeof a);    // "undefined"

// let a =10;
// let b =20;

// console.log(a+b , a-b, a%b,b/a);

// // Implicit Coercion (Automatic)
// console.log(5+"4");//54 (number to string)
// console.log(5+true);//6 (true → 1)
// console.log(5+false);//5 (false → 0)
// console.log("1"+3)//13
// console.log("1"+"1");//11
// console.log("4"*"5");//20 (both to numbers)
// console.log("1"-3)//-2 (string to number)
// console.log(5 + undefined);// NaN  (undefined → NaN)
// console.log(5 + null);     // 5    (null → 0)

let str ="123";
let num = Number(str);

let parsed= parseInt("20px");
let float = parseFloat("4.788cm");
console.log(num , parsed, float);

let num1 = 12;
let str1 = String(num1);
console.log(str1);
let toString = (789).toString();
console.log(toString);

let tru = Boolean(1);    
    // true
let fals = Boolean(0);         // false
console.log(tru, fals);