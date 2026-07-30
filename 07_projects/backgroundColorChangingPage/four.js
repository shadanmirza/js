// 1. create a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let index = 0; index < 6; index++) {
        color += hex[Math.floor(Math.random() * 16)];     
    }
    return color;
}


 let hii = null;
const startChangingColor = function () {
    

    // FIX: Only start a new interval if one isn't running yet!
    if (!hii) {
        hii = setInterval(changeBgColor, 100);
    }

    function changeBgColor () {
     document.body.style.backgroundColor = randomColor();
    }
    
}
const stopChangingColor = function () {
    clearInterval(hii)
    hii = null;
}


document.querySelector('#o1').addEventListener('click', startChangingColor)

document.querySelector('#o2').addEventListener('click', stopChangingColor)
 
 
 

// (hii holds null (no interval is running):

// null is considered "falsy" in JS.

// !null flips it to true.

// Result: if (!hii) runs the code inside, because hii is empty.

// hii holds a number ID, like 101 (a timer IS running):

// Any active number ID is considered "truthy" in JS.

// !101 flips it to false.

// Result: if (!hii) skips the code inside, because hii already has a timer active.)