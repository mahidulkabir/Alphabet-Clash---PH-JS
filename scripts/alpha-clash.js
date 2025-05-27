function continueGame(){
   const alphabet =  getRandomAlphbet();
    const currentAlpha = document.getElementById('current-alphabet');
    currentAlpha.innerText= alphabet;
}
function play(){
    hideElementById('home-page');
    showElementById('game-page');
    continueGame();
}