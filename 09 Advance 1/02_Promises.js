//* creating 
const promiseOne = new Promise(function(resolve,reject){
    // used for Async task 
    // Db calls , cryptographt ,network 

    setTimeout(function(){
        // console.log("Task completed");
        resolve() //* connects with then
    },1000)
})

// *consuming
// .then is directly connect to resolve 
// The below function automatically receive argument
// we need to connect resolve and .then
promiseOne.then(function(){
    // console.log(" Promise consumed");

})
// * another way 
new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log("Asyn task 2");
        resolve();
    },1000)
})

.then(function(){
    // console.log("Async 2 resolved");
})

// * promise 3
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username :"Navy" ,password :"adfsfd"})
    },1000)
})

promiseThree.then(function(data){
    // console.log(data);
})


// * promise 4

// const promiseFour = new Promise(function(resolve ,reject){
//     setTimeout(function(){
//         const error = true
//         if(!error){
//             resolve({username :"navy" ,password :"dhvjhvh"})
//         }
//         else{
//             reject("Something went wrong");
//         }
//     },1000)
// })

// promiseFour.then( (user) => {
//     console.log(user)
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch((error) =>{
//     console.log(error);
// }).finally(() => console.log("This is end") )

// * promise 5

const promiseFour = new Promise(function(resolve ,reject){
    setTimeout(function(){
        const error = true
        if(!error){
            resolve({username :"navy" ,password :"dhvjhvh"})
        }
        else{
            reject("Something went wrong");
        }
    },1000)
})
