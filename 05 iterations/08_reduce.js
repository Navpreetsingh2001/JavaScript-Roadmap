//! reduce 

const mynum = [1,2,3,4]
// * using arrow function 
// const theTotal = mynum.reduce( (acc ,currVal) =>{
//     console.log(`acc:${acc} and currVal : ${currVal}`);
//     return acc + currVal
// },0 )
// * or
const theTotal = mynum.reduce( (acc ,currVal) =>acc + currVal ,0)

// * using simple function 

// const theTotal = mynum.reduce( function (acc ,currVal){
//     console.log(`acc:${acc} and currVal : ${currVal}`);
//     return acc + currVal
// },0 )

console.log(theTotal);

// !example 

const shoppingCart = [
    {
        itemName : "js course",
        price : 399
    },
    {
        itemName : "DSA course",
        price : 1299
    },
    {
        itemName : "React course",
        price : 1399
    },
    {
        itemName : "Php course",
        price : 1199
    },
]

const priceToPay = shoppingCart.reduce( ( acc, item ) => acc + item.price,0)
console.log(priceToPay);
