// Arrow functions 

  const users = {
    name : "abc",
    age :20,

    myMessage : function(){
        console.log(`name is ${this.name} and age is ${this.age}`);
        // console.log(this)
    }
  }

//   * this in global act as empty because we are in node environment
//   console.log(this)

//   users.myMessage()
//   users.name = "bca"
//   users.myMessage()
// !important 
// browser ke ander jo global object ha woh window haa 



// this donot work in functions 

// function hey(){
    //     let uName = "Nav",
    //     console.log(this.uName);
    // }
    // hey()
    
    // ! Arrow fun 

    // Syntax  () => {} 

    const hey = () => {
        let uName = "Nav"
        console.log(this.uName)
    }
    // hey()

    const addTwo = (a,b)=>{
        console.log(a+b)
    }

    // implicit return 
    // const addThree =(a,b,c) => a+b+c

    // const addThree =(a,b,c) => (a+b+c)
    

    addTwo(4,5);
    // console.log(addThree(2,2,2))
    
    // to return object it need to wrap in brackets 
    const addThree =(a,b,c) => ({username : "hello"})
    console.log(addThree(2,2,2))
    

    


