/*
Invertir una cadena de texto: Crea una función que reciba una cadena de texto y devuelva la misma cadena,
pero invertida. Utiliza un ciclo para recorrer la cadena de atrás hacia adelante y construir la nueva cadena
invertida.
*/

function reverseTextString(text){
    let invertedText = '';
    for (let i = text.length - 1; i >= 0; i--) {
      // console.log(text[i]);
      invertedText += text[i]
    }
    return invertedText
  }
  
  // Prueba de la función
  reverseTextString('ISAAC NEWTON')