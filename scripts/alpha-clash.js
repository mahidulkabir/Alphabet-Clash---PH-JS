function continueGame(){
   const alphabet =  getRandomAlphbet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText= alphabet;
    setBackgroundColor(alphabet);
}
function keyPressedFuntion(){
    console.log('a key was pressed')
}
document.addEventListener('keyup', keyPressedFuntion);
function play(){
    hideElementById('home-page');
    showElementById('game-page');
    continueGame();
}