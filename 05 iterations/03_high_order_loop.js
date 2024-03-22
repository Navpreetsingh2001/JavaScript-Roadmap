//! for of loop 

const arr = [1,2,3,4]
for( const i of arr){
    // console.log(i);
}

// ! maps ==> have unique values

const map = new Map()
map.set('IN',"India")
map.set('PAK',"Pakistan")

console.log(map);
// we cannot iterate over maps 

for (const [key,value] of map) {
    // console.log(key , value);
}

//! for of loop on object 

const myObj = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
// objects is not iterated here! 
for (const [key,value] of myObj) {
    // console.log(key , value);
}