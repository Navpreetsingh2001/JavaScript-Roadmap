//* false values
// false ,0 , -0 , BigInt 0n , "",null,undefined ,Nan  

//* true values 
// true , 1, "0" ,"false" ," " , [] ,{} , function(){}
const userEmail = "abc@gmail.com"

if(userEmail.length === 0){
    // console.log("Empty array");
}

const newObj = {}
if(Object.keys(newObj).length === 0){
    // console.log("Empty object");
}

// * Nullish coalecing operator (??) : null defined 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 100
// val1 = undefined ?? 14
val1 =null ?? 10 ?? 20

console.log(val1);

//* Terniary Operator

// condition ? true :false 
a =10 ,b =3
a > b ? console.log("a is greater") : console.log("a is smaller");