
// array in js are resizeable
// array canot be accessable using arbitrary strings as index 

// array in javascript create shallow copies rather than deep copies 

// shallow copy == > stores refrence of objects to original memory address
// ==> shadow copy reflects changes made to the copied object in the original object
// ==> Shallow Copy stores the copy of the original object and points the references to the objects.

// deep copy => Deep copy doesn’t reflect changes made to the new/copied object in the original object.
// +=> Deep copy stores copies of the object’s value.
const arr = [1,2,3,4];
const myHeroes = ["shaktiman" ,"naagraj"]

// another way to define array 
const myArr = new Array(1,2,3,4,7,8);

// console.log(arr[0]);
// console.log(myArr[2]);


// Array methods  
myArr.push(6)  // to add value
myArr.pop()

myArr.unshift(9)  // element added to front of array
myArr.shift()  // element remove to front of array

// questionale methods 

// console.log(myArr.includes(2));
// console.log(myArr.indexOf(2));

const newArr = myArr.join()  // join converted it to string


// console.log(myArr);
// console.log(newArr);





//slice and splice 
// ! important 
console.log("A" , myArr)  // original 

const newArray1 = myArr.slice(1,3)
console.log(newArray1); // after slice

console.log("B" , myArr); // original


//splice 
// changes the original array 

const newArray2 = myArr.splice(1,3)
console.log("C" , myArr);

console.log(newArray2);
