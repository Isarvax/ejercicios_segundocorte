/**
 * Cuenta el número de vocales en una cadena de texto.
 * Recorre cada carácter de la cadena y verifica si es una vocal.
 * @param {string} cadena - La cadena de texto a examinar.
 * @returns {number} El número de vocales encontradas en la cadena.
 */
const contarVocales = cadena => {
    const vocales = 'aeiouAEIOU';  // Incluye vocales mayúsculas para evitar múltiples llamadas a `toLowerCase()`.
    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            contador++;
        }
    }
    return contador;
};

// Prueba de la función
console.log(contarVocales('ISAAC NEWTON'));  // Debería imprimir 4
