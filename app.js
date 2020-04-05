window.addEventListener('load', init);

// Global Variables

// available levels
const levels= {
    easy: 5,
    medium: 3,
    hard: 2
}

// to change levels

const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInputs = document.querySelector('#word-input');
const currentWord  = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time-left');
const message = document.querySelector('#message');
const seconds = document.querySelector('#time');
// let levelOption = document.querySelectorAll('#levels a')

// Array Of Words for the game
const words = [
    'happy',
    'hobby',
    'school',
    'phone',
    'joke',
    'yummy',
    'echo',
    'familiar',
    'needless',
    'paddle',
    'example',
    'dreary',
    'calculator',
    'cat',
    'men',
    'women',
    'meaty',
    'friendly',
    'fine',
    'quaint',
    'texture',
    'groovy',
    'thick',
    'ahead',
    'consist',
    'moaning',
    'observant',
    'rabid',
    'nauseating',
    'room',
    'reaction',
    'wrathful',
    'freezing',
    'handsome',
    'decisive',
    'good',
    'theory',
    'horse',
    'grateful',
    'interesting',
    'fail',
    'price',
    'cars',
    'lip',
    'dog',
    'protective',
    'discover',
    'crook',
    'volleyball',
    'penitent',
    'temper',
    'insurance',
    'woozy',
    'hurry',
    'crowded',
    'house',
    'lively',
    'waggish',
    'rural',
    'cup',
    'inform',
    'crash',
    'expensive',
    'vigorous',
    'start',
    'elite',
    'goofy',
    'suppose',
    'camera',
    'spot',
    'scrawny',
    'scatter',
    'magical',
    'flesh',
    'aunt',
    'attack',
    'remind',
    'ants',
    'hospital',
    'untidy',
    'late',
    'wreck',
    "stir",
    'gusty',
    'dime',
    'interrupt',
    'mourn',
    'receive',
    'vast',
    'grain',
    'glass',
    'evanescent',
    'black',
    'lick',
    'spill',
    'zip',
    'madly',
    'didactic',
    'swift',
    'shaky',
    'sparkle',
    'own',
    'cloudy',
    'rough',
    'lake',
    'cherry',
    'bear',
    'plants',
    'cake',
    'table',
    'exuberant',
    'agree',
    'dynamic',
    'second',
    'shade',
    'fish',
    'needy',
    'sleet',
    'ragged',
    'curve',
    'bathe',
    'experience',
    'silent',
    'internal',
    'laughable',
    'giants',
    'launch',
    'harm',
    'smoke',
    'responsible',
    'sassy',
    'spiritual',
    'forgetful',
    'soda',
    'smile',
    'fanatical',
    'camp',
    'heavy',
    'travel',
    'reproduce',
    'hobbies',
    'educate',
    'colossal',
    'elastic',
    'leg',
    'slope',
    'lacking',
    'lace',
    'end',
    'sofa',
    'raise',
    'current',
    'dam',
    'mass',
    'tumble',
    'history',
    'apple'
]

// Initialize game
function init(){
    Swal.fire('Welcome!' ,'First you may see the game over, but type the given word and the game will restart')
    // Show number of seconds in UI
    seconds.innerHTML = currentLevel
    // Load word from the array
    showWord(words);
    // start matching on word input
    wordInputs.addEventListener('input',startMatch);
    // call countdown every second
    setInterval(countDown, 1000);
    // check game status
    setInterval(checkStatus, 50)

    
}


// start matching function
function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInputs.value = '';
        score++;
    }

    // if the score is negative one display the score is zero
    if(score === -1){
        scoreDisplay.innerHTML = 0
    }
    else{
        scoreDisplay.innerHTML = score;
    }
}


// Match the current words
function matchWords(){
    if(wordInputs.value.toLowerCase() === currentWord.innerHTML){
        message.innerHTML = 'Correct!!!'
        return true;
    }
    else{
        message.innerHTML = '';
        return false;
    }
}


// pick and show random word
 function showWord(words){
    const randomIndex = Math.floor(Math.random() * words.length)
    currentWord.innerHTML = words[randomIndex]
 }


// countdown timer
function countDown(){
    // checking time is not run out
    if(time > 0){
        time--;
    }
    else if(time === 0){
        isPlaying = false;
    }
    // showTime
    timeDisplay.innerHTML = time;
}


// checking status
function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over!!!'
        Swal.fire(
            'Game Over!'
          )
        score =-1
    }
}


// levelOption.addEventListener('click', () => {
//     console.log(`${levelOption.value}`)
// })




