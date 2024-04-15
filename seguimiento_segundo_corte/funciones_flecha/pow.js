/**
 * Calcula la potencia de un número dado una base y un exponente utilizando un ciclo.
 * No utiliza Math.pow(). Puede manejar exponentes negativos convirtiendo el problema a su inverso multiplicativo.
 * @param {number} base - La base.
 * @param {number} exponente - El exponente.
 * @returns {number} La base elevada al exponente.
 */
const potencia = (base, exponente) => {
    if (exponente === 0) return 1; // Cualquier número elevado a 0 es 1.
    if (exponente < 0) {
        base = 1 / base;          // Invierte la base si el exponente es negativo.
        exponente = -exponente;   // Convierte el exponente a positivo.
    }

    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
};

// Pruebas de la función
console.log(potencia(2, 3));  // Debería imprimir 8
console.log(potencia(2, -3)); // Debería imprimir 0.125
console.log(potencia(2, 0));  // Debería imprimir 1
