/**
 * Determina si un número es primo.
 * Un número primo es aquel que solo es divisible por 1 y por sí mismo.
 * @param {number} number - El número a evaluar.
 * @returns {boolean} Verdadero si el número es primo, falso en caso contrario.
 */
const itsPrimeNumber = number => {
    if (number <= 1) return false;  // Retorna falso si el número es 1 o menos.
    if (number <= 3) return true;   // 2 y 3 son primos.

    // Si el número es divisible por 2 o 3, retorna falso.
    if (number % 2 === 0 || number % 3 === 0) return false;

    // Solo es necesario probar factores hasta la raíz cuadrada del número.
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }

    return true;  // Retorna verdadero si el número no fue divisible por los factores probados.
};

// Prueba de la función con el número 97
console.log(itsPrimeNumber(97));  // Output: true
