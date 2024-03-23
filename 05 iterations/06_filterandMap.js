// const coding = ['js', 'ruby','cpp','python']

// const values = coding.forEach( (item) => {
//     console.log(item)
//     return item
// })

// console.log(values);

// for each donot return anything 


const myNums = [1,3,4,5,6,7]
const newNums = myNums.filter((num) => {
    // agr scope open karte haa toh return keyword lagega
    return num > 4
})
// console.log(newNums);

//* same thing but with differemt approch this is more complex then filters 
// using forEach 
const newNum2 = []
myNums.forEach( (num) => {
    if(num > 4){
        newNum2.push(num)
    }
})
// console.log(newNum2);

// !Example 

const books = [
    {title :"Book one" , genre :"Fiction" , publish :1990 , edition :2000},
    {title :"Book Two" , genre :"Comedy" , publish :1998 , edition :2010},
    {title :"Book Three" , genre :"Non - fiction" , publish :2000 , edition :2004},
    {title :"Book four" , genre :"Non - fiction" , publish :2001 , edition :2007},
    {title :"Book Five" , genre :"History" , publish :1997 , edition :2002},
    {title :"Book six" , genre :"Science" , publish :1989 , edition :2013},
    {title :"Book seven" , genre :"History" , publish :1966 , edition :2001},
]

const userBooks = books.filter((bk) => {
    return bk.publish >=1980 && bk.genre ==="History"
}
)

console.log(userBooks);