// hide the section 
function hideElementById(elementID){
const element = document.getElementById(elementID);
element.classList.add('hidden');
}
// show the section 
function showElementById(elementID){
    const element =document.getElementById(elementID);
    element.classList.remove('hidden');
}
// set background color 
function setBackgroundColor (elementID){
    const element = document.getElementById(elementID);
    element.classList.add('bg-orange-400');
}
// unSet background color 
function unSetBackgroundColor (elementID){
    const element = document.getElementById(elementID);
    element.classList.remove('bg-orange-400');
}
// set value to score and life 
function setValueToID (elementID, value){
  const Element = document.getElementById(elementID);
  Element.innerText= value;
}
// score increament 
function increaseScore(elementID) {
  const scoreElement = document.getElementById(elementID);
  let currentScore = parseInt(scoreElement.innerText) || 0;
  currentScore++;
  scoreElement.innerText = currentScore;
}
// life decrement 
function decreaseLife(elementID) {
  const scoreElement = document.getElementById(elementID);
  let currentLife = parseInt(scoreElement.innerText) || 0;
  currentLife--;
  scoreElement.innerText = currentLife;
}
// manipulating last score 
function finalScore(){
  const scoreElement = document.getElementById('score');
  let currentScore = parseInt(scoreElement.innerText);
  
  let finalScoreID = document.getElementById('final-score');
  finalScoreID.innerText = currentScore;
  // console.log(finalScoreText);
  // console.log(currentScore);
}
// game over 
function gameOver(){
  const scoreElement = document.getElementById('life');
  let currentLife = parseInt(scoreElement.innerText);
  if(currentLife === 0){
    showElementById('score-page');
    hideElementById('game-page');
    finalScore();
  }
}
// getting random alphabet 
function getRandomAlphbet(){
    const aphabetArray= 'abcdefghijklmnopqrstuvwxyz';
    const alphabetSingle = aphabetArray.split('');
    const randomNo = Math.random()*25;
    const index = Math.round(randomNo);
    const randomAlphabet = alphabetSingle[index];
    return randomAlphabet;
}