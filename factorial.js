// factorial.js

/**
 * Factorial function
 * @param {number} n - The number for which factorial is to be calculated
 * @returns {number} - The factorial of the given number
 */
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Example usage
const number = 5;
const result = factorial(number);

console.log(`Factorial of ${number} is:`, result);

module.exports = factorial;
