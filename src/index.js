import analyzer from './analyzer.js';

const textArea = document.querySelector('user-input');
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener("click", function(){
    textArea.value = "";
});

let wordCount = document.querySelector('word-count').innerHTML;
  document.querySelector(wordCount).innerHTML = "0";

let characterCount = document.querySelector('character-count');

let characterCountExcludingSpaces = document.querySelector('character-no-spaces-count');
let averageWordLength = document.querySelector('word-length-average');
let numberCount = document.querySelector('number-count');
let numberSum = document.querySelector('number-sum');

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`