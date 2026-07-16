const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // push works on the existing array 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // concat return new array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator work same as concat

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(2) // .flat() is use to combine the  array by the degree written in the parathisis ()
// console.log(real_another_array);



// console.log(Array.isArray("shadan"))        // .isArray() is use to ask the qns is it array or not

// console.log(Array.from("Hitesh"))           // .from() is use to make array
// console.log(Array.from({name: "hitesh"}))   // interesting, when we apply .from method in object it gives empty bracits []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));   // .of() use to make an new array from different element 