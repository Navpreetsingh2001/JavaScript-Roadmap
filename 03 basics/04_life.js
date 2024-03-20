// Immediately Invoked Function Expresions ( IIFE )

// when we need to execute the file on just opening the file 

// what is iife 
// global scope ke pollution se problem hoti ha kayi baar . us pollution ko hatane ke kiya iife ka use kiya jaata

(function demoDB(){
    //named IIFE
    console.log("DataBase Connected ");
})();
// semi colon is required to use multiple IIFE in a file 

( (name) => {
    // unnamed IIFE
    console.log(`Database connected ${name}`);
})('navy')

