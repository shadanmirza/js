//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++
//there are type method of declering function both react different when we execute the function befour declering the function

// console.log(addone(5))                    

function addone(num){                 // output 6
    return num + 1
}



//in this type we decler founction and also storeing it into the variable thats why we can not execute the function befour declering

// addTwo(5)
// const addTwo = function(num){             
//     return num + 2
// }