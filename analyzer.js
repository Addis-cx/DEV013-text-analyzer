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
    const contadorAWL = textUsuario.split(/\s+/g);
    let longitudP = 0;
    for (let i = 0; i < contadorAWL.length; i++) {
      longitudP += contadorAWL[i].length;
    }
    return parseFloat(Number(longitudP/contadorAWL.length).toFixed(2));
  },
  getNumberCount: (textUsuario) => {
    const contadorNC = textUsuario.match(/\b\d+(\.\d+)?\b/g);
    let sumaNumero = 0;
    if (contadorNC === null) {
      return 0;
    }
    else {
      for (let i = 0; i < contadorNC.length; i++) {
        sumaNumero++;
      }
    }
    return sumaNumero;
  },
  getNumberSum: (textUsuario) => {
    const contadorNS = textUsuario.match(/\b\d+(\.\d+)?\b/g);
    let sumaNumero = 0;
    if (contadorNS === null) {
      return 0;
    }
    else {
      for (let i = 0; i < contadorNS.length; i++) {
        const numero = contadorNS[i];
        sumaNumero = sumaNumero + parseFloat(numero);
      }
    }
    return sumaNumero;
  },
  
};

export default analyzer;
