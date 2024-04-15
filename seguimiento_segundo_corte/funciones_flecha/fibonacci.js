/**
 * Genera los primeros n números de la serie de Fibonacci.
 * La serie de Fibonacci comienza con los términos 0 y 1 y cada término subsiguiente es la suma de los dos términos anteriores.
 * @param {number} n - El número de términos de la serie de Fibonacci que se desea obtener.
 * @returns {number[]} Un array que contiene los primeros n números de la serie de Fibonacci.
 */
const fibonacci = n => {
    if (n === 0) return [];
    if (n === 1) return [0];
    const fibSequence = [0, 1];

    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }

    return fibSequence;
};

// Prueba de la función con 10 términos
console.log(fibonacci(10));  // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
