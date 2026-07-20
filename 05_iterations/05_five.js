
// in forEach loop we nned callback function,in callback function we dont need function name ex - function name (){}
// but in callback function - function (){}  

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){                    
//     console.log(val);
// } )

// coding.forEach( (item) => {                     // in arrow function we do the same as callback function by remove name
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)                        // we can use foreach this way also

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {                   // this is how we use foreach in array
    
    // console.log(item.languageName);
} )