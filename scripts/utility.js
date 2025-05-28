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

// score increament 
function increaseScore() {
  const scoreElement = document.getElementById('score');
  let currentScore = parseInt(scoreElement.innerText) || 0;
  currentScore++;
  scoreElement.innerText = currentScore;
}
// life decrement 
function decreaseLife() {
  const scoreElement = document.getElementById('life');
  let currentLife = parseInt(scoreElement.innerText) || 0;
  currentLife--;
  scoreElement.innerText = currentLife;
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