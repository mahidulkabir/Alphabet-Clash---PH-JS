function continueGame(){
   const alphabet =  getRandomAlphbet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText= alphabet;
    setBackgroundColor(alphabet);
}
function keyPressedFuntion(event){
    // player pressed 
    const playerPressed = event.key;
    
    // expected key 
    const currentAlphabet = document.getElementById('current-alphabet');
    const expectedKey = currentAlphabet.innerText.toLowerCase();

    // conditional statement
    if (playerPressed === expectedKey){
        continueGame();
        unSetBackgroundColor(expectedKey);
        increaseScore('score');
    }else{
        decreaseLife('life');
        gameOver();
        
    }
    
}   

document.addEventListener('keyup', keyPressedFuntion);


function play(){
    hideElementById('home-page');
    showElementById('game-page');
    continueGame();
}

function playAgain(){
    hideElementById('home-page');
    showElementById('game-page');
    continueGame();
    
}