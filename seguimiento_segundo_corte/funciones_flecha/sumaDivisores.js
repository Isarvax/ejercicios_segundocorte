/**
 * Calcula la suma de los divisores de un número (excluyendo al propio número).
 * @param {number} numero - El número entero del cual calcular los divisores.
 * @returns {number} La suma de los divisores del número.
 */
const sumaDivisores = numero => {
    let suma = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            suma += i;
            console.log(i); // Opcional: imprime cada divisor
        }
    }
    return suma;
};

// Prueba de la función con el número 10
console.log('Suma de los divisores es:', sumaDivisores(10));
