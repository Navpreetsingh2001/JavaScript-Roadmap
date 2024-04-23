// dont do this instead create class template 
const dog = {
    name : "pluto",
    legCount :2,
    speaks : 'blow bhow'
}

function printScr(animal){
    console.log(`Dog name is ${animal.name} and speaks ${animal.speaks}`)
}
// printScr(dog);

// this can be classified into classes for more structure ways
// * classes and objects 
class animal{
    constructor(name , age ){
        this.name = name;
        this.age =age;
    }
    //* static method can be called without instances create
    static myType(){
        console.log("Hi");
    }
    myName(){
        console.log(`hi there ${this.name}`);
    }
    
}


// instance of animal class 
let dogx = new animal("dog" , 4 );

console.log(animal.myType()); //* this can be called directly without object creation
console.log(animal.speaks()); //* animal.speak is not function
//* 
dogx.myName();
