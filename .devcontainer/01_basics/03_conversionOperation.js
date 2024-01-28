let score = "hitesh"

// console.log(typeof score); //string
// console.log(typeof(score)); //string we can also used in this type

let valueInNumber = Number(score)
// console.log(typeof valueInNumber); // type number 
// console.log(valueInNumber); // but not a number NaN

// "33" =>33
// "33abc" => NaN
// true => 1 ; false => 0


let isLoggedIn =""

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);

// 1=>true ; 0=false
// " " => true ,"" => false
//"sunny" => true , 
// any thing written in code or  sapace is  when we covert it to the boolean it gives a true


let someNumber =33

let  stringNumber = String (someNumber)
//  console.log(stringNumber)
//  console.log(typeof stringNumber);

 // ****************  Operations   ****************

 let value =3 
 let negValue=-value
 //console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%9);

let str1="hello"
let str2 ="sunny"

let str3=str1+ str2
//console.log(str3);

// console.log("1" +2);
// console.log(2+"2");
// console.log("1" +2 +2);
// console.log(2+2 +"3");
 

// answer 12
// 22
// 122 they consider only forst  datatype and start calculating
// 43  all are consider as a  number

console.log(true)
console.log(+true) //1
//console.log(true++) syntex error
console.log(+"") //0


let gameCounter = 100
gameCounter++ //101
//++gameCounter
console.log(gameCounter);