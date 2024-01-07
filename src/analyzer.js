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
    const contadorNC = textUsuario.match(/\d+/g);
    if (contadorNC) {
      return contadorNC.length;
    } 
    else {
      return 0;
    }
  },
  getNumberSum: (textUsuario) => {
  
  },
};

export default analyzer;
