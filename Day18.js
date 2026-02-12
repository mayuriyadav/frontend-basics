// function add( a ,b){ // parameter
//     return a +b ;
// }

// console.log(add(19,11)); // argument

// arrow function

// const sum =(a ,b)=>{
//  return a+b;
// }
// sum(5,8);

// practice question

// function countVowels(str) {
//     let count = 0;
//     for (const i of str) {
//         if (i === 'o' || i === 'u' || i === 'e' || i === 'i' || i === 'a') {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("hellooiea"));


// const countVowe = (str)=>{
//     let count = 0;
//     for (const i of str) {
//         if (i === 'o' || i === 'u' || i === 'e' || i === 'i' || i === 'a') {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowe("elloea"));

// let arr =[1,2,3,4,5,"pune"];
// arr.forEach((val,idx,arr)=>{ // value at each idx
// console.log(val,idx,arr);

// });

let nums = [1,2,3,4,5];
// let calcSqure = (val)=>{

//     console.log(val*val);
// };
// nums.forEach(calcSqure); 

// nums.map((val)=>
// {
//  console.log(val);
// });

// let arr =[1, 2,3,4,5,6,7];
// let evenArr =arr.filter((val)=>{
//     return val%2===0;
// });
// console.log(evenArr);

//reduce
let arr =[1,2,3,4];
const output = arr.reduce((res,curr)=>{
    return res * curr ;
});
console.log(output);