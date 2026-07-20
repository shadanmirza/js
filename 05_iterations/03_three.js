// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps
// Maps is just like Object,maps used for unique value (no repeating the value), the order we enter the value the order we get at output....


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

// for (const key of map) {
//     console.log(key);
// }


for (const [key, value] of map) {              // this is the syntex of apply loop on map(desturctring of map), 
    // console.log(key, ':-', value);                                            // square bracket is imp 
   
}

for (const [key] of map) {
   // console.log(key);
    
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {                      // forof loop does not work in object
//     console.log(key, ':-', value);
    
// }