/**
 * Invierte una cadena de texto.
 * Recorre la cadena de atrás hacia adelante y construye una nueva cadena invertida.
 * @param {string} text - La cadena de texto a invertir.
 * @returns {string} La cadena de texto invertida.
 */
const reverseTextString = text => {
    let invertedText = '';  // Inicializa la cadena invertida.
    for (let i = text.length - 1; i >= 0; i--) {  // Recorre la cadena original de atrás hacia adelante.
        invertedText += text[i];  // Añade cada carácter a la cadena invertida.
    }
    return invertedText;  // Devuelve la cadena invertida.
};

// Prueba de la función con la cadena 'ISAAC NEWTON'
console.log(reverseTextString('ISAAC NEWTON'));  // Output: 'NOTWEN CAASI'
