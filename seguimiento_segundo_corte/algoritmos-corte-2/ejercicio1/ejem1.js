/**
 * Array containing the denominations of the billets.
 * @type {number[]}
 */
const denominations = [50000, 20000, 10000, 5000, 2000, 1000];

/**
 * Prompts the user to enter the amount of money they want to withdraw.
 * 
 * @returns {number} The amount of money to withdraw as a floating-point number.
 */
function getWithdrawalAmount() {
  const userInput = prompt("¿Cuánto dinero deseas retirar?");
  return parseFloat(userInput);
}

/**
 * Calculates the number of billets needed for a given amount.
 * 
 * @param {number} amount - The amount for which to calculate the billets needed.
 * @returns {number[]} An array containing the number of billets needed for each denomination.
 */
function calculateBilletsNeeded(amount) {
  return denominations.map(denomination => {
    const billetsNeeded = Math.floor(amount / denomination);
    amount -= billetsNeeded * denomination;
    return billetsNeeded;
  });
}

/**
 * Checks if the given amount is a valid withdrawal amount.
 *
 * @param {number} amount - The amount to be checked.
 * @returns {boolean} Returns true if the amount is a positive integer, otherwise false.
 */
function isValidWithdrawalAmount(amount) {
  return amount > 0 && amount % 1 === 0;
}

/**
 * Performs an ATM transaction.
 */
function ATMTransaction() {
  const withdrawalAmount = getWithdrawalAmount();

  if (!isValidWithdrawalAmount(withdrawalAmount)) {
    alert("El monto solicitado no es válido.");
    return;
  }

  const billetsNeeded = calculateBilletsNeeded(withdrawalAmount);

  alert("Para retirar $" + withdrawalAmount + ", necesitas:");
  denominations.forEach((denomination, index) => {
    if (billetsNeeded[index] > 0) {
      alert("- " + billetsNeeded[index] + " billetes de $" + denomination);
    }
  });
}

ATMTransaction();