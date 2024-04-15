/**
 * Calcula el factorial de un número entero positivo n.
 * El factorial de n (n!) es el producto de todos los números enteros positivos desde 1 hasta n.
 * @param {number} n - El número entero positivo del cual calcular el factorial.
 * @returns {number} El factorial del número dado.
 */
const factorial = n => {
    let result = 1; // Inicializa el resultado a 1.

    for (let i = 1; i <= n; i++) {
        result *= i; // Multiplica el resultado por i (1, 2, ..., n).
    }

    return result; // Devuelve el resultado final después de completar el ciclo.
};

console.log(factorial(4)); // 24, que es el factorial de 4.
