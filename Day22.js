let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e) => {
//     // console.log("btn1 was clicked");
//     // let a = 25 ;
//     // a++;
//     // console.log(a);
//        console.log(e);
//      console.log(e.type);

// };

// btn1.addEventListener("click", () => {

// console.log("button1 was clicked - handler 1");

// });
// btn1.addEventListener("click", () => {

// console.log("button1 was clicked - handler 2");

// });

// btn1.addEventListener("click", () => {

// console.log("button1 was clicked - handler 3");

// });

// btn1.addEventListener("click", () => {

// console.log("button1 was clicked - handler 4");

// });
// btn1.removeEventListener


let modeBtn = document.querySelector("#mode");
let body =  document.querySelector("body");
let currMode = "light"; // dark

modeBtn.addEventListener("click",() =>{
    if(currMode ==="light"){
        currMode = "dark" ;
       body.classList.add("dark");
           body.classList.remove("light");
    }
    else {
        currMode = "light";
         body.classList.add("light");
             body.classList.remove("dark");
    }
     console.log(currMode);
});


// div.onmouseover = () => {
//     console.log("your inside a div");
// }