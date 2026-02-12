
// conditional statement

// let  age =18;
// if(age>=18){
//     console.log("your eligible for vote");
// }else{
//        console.log("your not eligible for vote");
// }


let score = 85;
let grade;
 
if(score>=90){
    grade ='A';
}
  else if(score>=80){
    grade ='B';
}
else if(score>=70){
    grade ='C';
}
 else if(score>=60){
    grade ='D';
}
else {
    grade = 'E'
}
console.log(` your grade is  ${grade}`);


let day =3 ;
let dayname;

switch(day){

    case 1:
        dayname = "Monday";
        break ;
        case 2:
        dayname = "Tuesday";
        break ;
        case 3:
        dayname = "Wednsaday";
        break ;
        case 4:
        dayname = "Thursday";
        break ;
        case 5:
        dayname = "Friday";
        break ;
        case 6:
        dayname = "Saturday";
        break ;
        case 7:
        dayname = "Sunday";
        break ;

         default:
        dayname = "Invalid day";
}
console.log(`Today is ${dayname}`);


let a =10;
let b = 20;
if(a!=10&&b==20){
    console.log(" true");
}
else
    console.log("false");