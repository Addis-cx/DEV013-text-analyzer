import analyzer from './analyzer.js'; 

const textArea = document.querySelector('textarea');
textArea.addEventListener("input", function(){
  const textUsuario = textArea.value;
  console.log("texto ingresado ", textUsuario)
});
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener("click", function(){
  textArea.value = "";
});

let wordCount = document.querySelector('contador-palabras');
let characterCount = document.querySelector('contador-caracteres');
let characterCountExcludingSpaces = document.querySelector('caracteres-sin-espacio');
let averageWordLength = document.querySelector('contador-numeros');
let numberCount = document.querySelector('suma-numeros');
let numberSum = document.querySelector('longitud-palabras');

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`z 