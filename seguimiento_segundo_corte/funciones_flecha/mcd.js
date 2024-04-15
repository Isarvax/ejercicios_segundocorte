/**
 * Calcula el máximo común divisor (MCD) de dos números enteros utilizando el algoritmo de Euclides.
 * @param {number} a - Primer número entero.
 * @param {number} b - Segundo número entero.
 * @returns {number} El máximo común divisor de ambos números.
 */
const maximoComunDivisor = (a, b) => {
    while (b !== 0) {      // Mientras que b sea diferente de 0.
        let t = b;          // Guarda el valor actual de b.
        b = a % b;          // Actualiza b al resto de la división a entre b.
        a = t;              // Actualiza a al valor anterior de b.
    }
    return a;              // Cuando b es 0, a es el MCD.
};

// Prueba de la función con los números 48 y 18
console.log(maximoComunDivisor(48, 18));  // Output: 6
