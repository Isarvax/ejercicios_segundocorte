/**
 * Calcula la suma de los dígitos de un número entero.
 * Si el número es negativo, primero se convierte a positivo.
 * @param {number} number - El número entero cuyos dígitos se sumarán.
 * @returns {number} La suma de los dígitos del número.
 */
const sumDigits = number => {
    if (!Number.isInteger(number)) { // Verifica si el número no es un entero.
        return 'Error: El parámetro debe ser un número entero.';
    }
  
    const stringNumber = Math.abs(number).toString(); // Convierte el número a string y asegura que sea positivo.
    let sum = 0;

    for (let i = 0; i < stringNumber.length; i++) {
        sum += parseInt(stringNumber[i], 10); // Suma cada dígito convertido a entero.
    }

    return sum;
};

// Pruebas de la función
console.log(sumDigits(123456789));  // Debería imprimir 45
console.log(sumDigits(-123456789)); // Debería imprimir 45, maneja números negativos
console.log(sumDigits('1234'));     // Debería devolver error, no es un número entero
