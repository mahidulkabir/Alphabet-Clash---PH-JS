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
// getting random alphabet 
function getRandomAlphbet(){
    const aphabetArray= 'abcdefghijklmnopqrstuvwxyz';
    const alphabetSingle = aphabetArray.split('');
    const randomNo = Math.random()*25;
    const index = Math.round(randomNo);
    const randomAlphabet = alphabetSingle[index];
    return randomAlphabet;
}