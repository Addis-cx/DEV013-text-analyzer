const analyzer = {
  getWordCount: (textUsuario) => {
    const contadorWC = textUsuario.trim(" ").split(/\s+/).length;
    return Number(contadorWC);
  },
  getCharacterCount: (textUsuario) => {
    const contadorCC = textUsuario.length;
    return Number(contadorCC);
  },
  getCharacterCountExcludingSpaces: (textUsuario) => {
    const contadorCCE = textUsuario.replace(/\W/g, "").length;
    return Number(contadorCCE);
  },
  getAverageWordLength: (textUsuario) => {    
    const contadorAWL = textUsuario.split(/\s+/);
    let longitudP = 0;
    for (let i = 0; i < contadorAWL.length; i++) {
      longitudP += contadorAWL[i].length;
    }
    return longitudP/contadorAWL.length;
  },
  getNumberCount: (textUsuario) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (textUsuario) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
