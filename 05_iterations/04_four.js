// for object we use forin loop , forin loop simply print keys(also apply on array)

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}




const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {       // for keys(0,1,2,3,4) 
    // console.log(key);
}


for (const key in programming) {          // for value (js,rb,py,java,cpp)
    // console.log(programming[key]);      
}

// const map = new Map()                           
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {                     // forin does not work in maps 
//     console.log(key);
// }