// gcd.js

/**
 * Euclidean algorithm to find the Greatest Common Divisor (GCD) of two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} - The GCD of the two numbers
 */
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Example usage
const number1 = 56;
const number2 = 98;
const result = gcd(number1, number2);

console.log(`GCD of ${number1} and ${number2} is:`, result);

module.exports = gcd;
