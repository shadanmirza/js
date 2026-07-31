const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
     setTimeout(function () {
        console.log('async is compelete');
        resolve()                
        // to connect .then and resolve we use resolve() 
     }, 1000)
})          // this is how we create promisis


promiseOne.then(function (){
    console.log("promise consumed");
    
})              // this is how we consume Promise, .then() has a direct conection with resolve



// Second type of creating promise

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    }, 1000)
}).then(function (){
    console.log('async 2 resolve');
    
})




const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
       resolve({username: "xebex", email: "hddd@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
   console.log(user);
   
})





const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false
        if (!error) {
           resolve({username: "Rocks", email: "hdddy@gmail.com"})
        } else {
            reject('ERROR: something went wrong')
        }
    }, 1000);
})

promiseFour.then(function(user){
       console.log(user);
       return user.username
})
.then((username) => {
    console.log(username);
    
})
.catch((error) => {          // .catch is for error
    console.log(error)
})
.finally(() => {console.log("promise is either resolved or rejected");})

// .finally is always runs its default







const promiseFive = new Promise(function (resolve, reject){
    setTimeout(() => {
        let error = true
        if (!error) {
           resolve({username: "freza", password: "baba@420"})
        } else {
            reject('ERROR: something is defenately went wrong')
        }
    }, 1000);
});

async function consumePromiseFive() {
    // const response = await promiseFive
    // console.log(response);
    
    // async await is not hendle error directly we have to use try catch

   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}

consumePromiseFive()






// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()







fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
   return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch()

