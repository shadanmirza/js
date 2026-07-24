// document.querySelector("#clock")
const clock = document.getElementById('clock')

console.log(clock);

let date = new Date();



setInterval(function (){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000) 