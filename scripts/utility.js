function hideElementById(elementID){
const element = document.getElementById(elementID);
element.classList.add('hidden');
}

function showElementById(elementID){
    const element =document.getElementById(elementID);
    element.classList.remove('hidden');
}
function getRandomAlphbet(){
    const aphabetArray= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabetSingle = aphabetArray.split('');
    const randomNo = Math.random()*25;
    const index = Math.round(randomNo);
    const randomAlphabet = alphabetSingle[index];
    return randomAlphabet;
}