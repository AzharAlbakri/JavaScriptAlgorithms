// fibonacci.js

/**
 * Recursive function to calculate the nth Fibonacci number
 * @param {number} n - The position in the Fibonacci sequence
 * @returns {number} - The nth Fibonacci number
 */
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage
const position = 10;
const fibNumber = fibonacci(position);

console.log(`Fibonacci number at position ${position} is:`, fibNumber);

module.exports = fibonacci;
