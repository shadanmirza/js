const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {                     // we cannot use .this in function like this
//     let username = "hitesh"
//     console.log(this.username);
// }



const chai = () => {                               // arrow function
    let username = "hitesh"
    console.log(this);
}


// chai()



// const addTwo = (num1, num2) => {                              //basic arrow function (explisit return)
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2                   // implisit return

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})            // to return object we have retur like this : ({})


// console.log(addTwo(3, 4))

// if we use currly bracit {} we have to write return , but if we use () this so we dont have to write return keyword





// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()