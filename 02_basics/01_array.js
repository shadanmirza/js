// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);
// console.log(myArr);

// Array methods

// myArr.push(6) // to push the value in array
// myArr.push(7) 
// myArr.pop()  // to pop

//  myArr.unshift(9) // it store the value in strat of the array (expected result [9,0,1,2,3,4,5]) it push the all element of the array (computer has to work more) .
// console.log(myArr);

// myArr.shift() // its like pop for unshift
// console.log(myArr);

// console.log(myArr.includes(9));

// console.log(myArr.indexOf(0)); // it gives the value next to it like indexof(0) it gives next value 1



//join......................
 const newArr = myArr.join() // helps to create array into string

// console.log(myArr);
//  console.log( newArr);





// slice, splice..........................

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // last range not include (1,3) so 12, 3 not include

// console.log(myn1);
// console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // last range include
// console.log("C ", myArr);
//  console.log(myn2);

// slice does not effect the orignal array
// splice does effect the orignal array ....