let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const input = document.querySelector('#guessField'); 
const guessSlot = document.querySelector('.guesses'); 
const remaining = document.querySelector('.lastResult');  
const lowOrHi = document.querySelector('.lowOrHi'); 
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame){
 submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(input.value)
    // console.log(guess);
    
    validateGuess(guess) // pass to the next function
 })
}

function validateGuess (guess) {
    if(isNaN(guess)){
        alert('please enter the valid number')
    } else if (guess < 1){
        alert('please enter the number that is grater than 0')
    } else if (guess > 100){
        alert('please enter the number that is less than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`game over.. Right Number is ${randomNumber}`)
            endGame()
        } else {
             displayGuess(guess)
             checkGuess(guess)
        }
    }
}



function checkGuess (guess) {
    if (guess === randomNumber){
       displayMessage(`You Guess the the right number`);
       endGame()
    } else if (guess < randomNumber) {
        displayMessage(`${guess} too low`);
    } else if (guess > randomNumber) {
        displayMessage(`${guess} too high`);
    }
}



function displayGuess (guess) {
    input.value = '';
    guessSlot.innerHTML += ` ${guess} ,`
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}



function displayMessage (message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}



function endGame (message) {
     input.value = '';
     input.setAttribute('disabled', '');
     p.classList.add('button');
     p.innerHTML = `<h2 id = "newGame">start new game</h2>` 
     startOver.appendChild(p);
     playGame = false;
     newGame();  
}



function newGame (message) {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        input.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });
}