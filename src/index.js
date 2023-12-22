import analyzer from './analyzer.js'; 

const textArea = document.querySelector('textarea');
textArea.addEventListener("input", function(){
  const textUsuario = textArea.value;
  console.log(textUsuario);
});
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener("click", function(){
  textArea.value = "";
});

const wordCount = document.querySelector('word-count');
const characterCount = document.querySelector('character-count');
const characterCountExcludingSpaces = document.querySelector('character-no-spaces-count');
const averageWordLength = document.querySelector('word-length-average');
const numberCount = document.querySelector('number-count');
const numberSum = document.querySelector('number-sum');

wordCount.innerHTML = "Recuento de Palabras: " + contadorWC;
characterCount.innerHTML = "Recuento de Caracteres: " + getCharacterCount.value;
characterCountExcludingSpaces.innerHTML = "Recuento sin Espacios y Puntuación: " + contadorCCE;
averageWordLength.innerHTML = "Longitud de Palabras: " + contadorAWL;
numberCount.innerHTML = "Recuento de Palabras: " + contadorNC;
numberSum.innerHTML = "Recuento de Palabras: " + contadorNS;
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`z 