import analyzer from './analyzer.js'; 

const textArea = document.querySelector('[name="user-input"]');
textArea.addEventListener("input", function(){
  const textUsuario = textArea.value;
  const contadorWC = analyzer.getWordCount(textUsuario);
  const contadorCC = analyzer.getCharacterCount(textUsuario);
  const contadorCCE = analyzer.getCharacterCountExcludingSpaces(textUsuario);
  const contadorAWL = analyzer.getAverageWordLength(textUsuario);
  const contadorNC = analyzer.getNumberCount(textUsuario);
  const contadorNS = analyzer.getNumberSum(textUsuario);
  wordCount.innerHTML = "Recuento de Palabras: " + contadorWC;
  characterCount.innerHTML = "Recuento de Caracteres: " + contadorCC;
  characterCountExcludingSpaces.innerHTML = "Recuento sin Espacios y Puntuación: " + contadorCCE;
  averageWordLength.innerHTML = "Longitud de Palabras: " + contadorAWL;
  numberCount.innerHTML = "Recuento de Palabras: " + contadorNC;
  numberSum.innerHTML = "Recuento de Palabras: " + contadorNS;
});
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", function(){
  textArea.value = "";
  wordCount.innerHTML = "Recuento de Palabras: " + 0;
  characterCount.innerHTML = "Recuento de Caracteres: " + 0;
  characterCountExcludingSpaces.innerHTML = "Recuento sin Espacios y Puntuación: " + 0;
  averageWordLength.innerHTML = "Longitud de Palabras: " + 0;
  numberCount.innerHTML = "Recuento de Palabras: " + 0;
  numberSum.innerHTML = "Recuento de Palabras: " + 0;
});

const wordCount = document.querySelector('[data-testid="word-count"]');
const characterCount = document.querySelector('[data-testid="character-count"]');
const characterCountExcludingSpaces = document.querySelector('[data-testid="character-no-spaces-count"]');
const averageWordLength = document.querySelector('[data-testid="word-length-average"]');
const numberCount = document.querySelector('[data-testid="number-count"]');
const numberSum = document.querySelector('[data-testid="number-sum"]');



//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`z 