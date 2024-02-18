// array

const myarr=[1,2,3,4,5,6,]
const myHeros=["shaktiman","ironman","spiderman"]

const myarr2=new Array(1,2,3,4,5)

console.log(myarr[0]);

//array method

// myarr.push(8)
// myarr.push(7)

//unshift add on the first place
//myarr.unshift(9)

//shift remove from staring
//myarr.shift()

//console.log(myarr.includes(9)); // gives bolean result for searching of existence
//console.log(myarr.indexOf(38))// give -1 if not exist


//slice , splice
//=> slice slect element form this but not include last one 
//=> but in splice break the original array and from start to end 


console.log("A", myarr);
 const myn1 = myarr.slice(1,3)

 console.log(myn1)
 console.log("B", myarr)
 
 const myn2 = myarr.splice(1,3);
 console.log("c",myarr);
 console.log(myn2);