// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {            // .foreach does not return the value 
//     //console.log(item);
//     return item
// } )

// console.log(values);



// in .filter we have a callback function or arrow function in which, first we access each value (num), then we have to
// write a condition like num > 4, the the value is true according the condtion that will be return
// if we use {} in arrow function we must have to return keyword like line 20

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {             // .filter does return the value
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'Non-Fiction')

  userBooks = books.filter((bk) => bk.title === 'Book Six')

  userBooks = books.filter((bk) => {
     return bk.publish >= 1955 && bk.edition >= 1996 && bk.genre === 'Science'
    })

  console.log(userBooks);