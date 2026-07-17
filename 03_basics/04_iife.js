// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')