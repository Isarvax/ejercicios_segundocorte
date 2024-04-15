/**
 * Verifica si un número es palíndromo.
 * Un número palíndromo se lee igual de izquierda a derecha que de derecha a izquierda.
 * @param {number} numero - El número entero a verificar.
 * @returns {boolean} True si el número es palíndromo, false en caso contrario.
 */
const esPalindromo = numero => {
    const numeroOriginal = numero.toString();           // Convierte el número a cadena para facilitar la inversión.
    let numeroInvertido = '';                           // Inicializa la variable para el número invertido.

    for (let i = numeroOriginal.length - 1; i >= 0; i--) { // Recorre la cadena de atrás hacia adelante.
        numeroInvertido += numeroOriginal[i];             // Construye el número invertido.
    }

    return numeroOriginal === numeroInvertido;            // Compara el número original con el invertido.
};

// Prueba de la función con el número 11546132
console.log(esPalindromo(11546132));  // Output: false
console.log(esPalindromo(12321));     // Output: true
