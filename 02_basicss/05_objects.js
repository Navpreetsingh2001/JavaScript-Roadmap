//* destructuring ==> taking value from objects

const course = {
    coursename :"Dsa",
    price : "333",
    courseInstructor : "navy"
}

// course.courseInstructor 

// to access the object value
const {price : p}  =course 
console.log(p);


//! API 

//! JSON 

// {
//     "coursename" :"Dsa",
//     "price" : "333",
//     "courseInstructor" : "navy"
// }

// sometimes APIs in the form of array 

[
    {},
    {},
    {}
]

