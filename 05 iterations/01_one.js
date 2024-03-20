// for 

for (let index = 0; index < 5; index++) {
    const element = index;
    console.log(element);
    
}

// break and continue 

// for (let index = 0; index <= 20; index++) {
//     if(index == 5){
//         console.log("detected 5");
//      5 tak he chaluga
//         break;
//     }
//     console.log(`value of i is ${index}`);

    
// }

for (let index = 0; index <= 10; index++) {
    if(index == 5){
        console.log("detected 5");
        //ek ko shod deta hu bs
        continue;
    }
    console.log(`value of i is ${index}`);

    
}
