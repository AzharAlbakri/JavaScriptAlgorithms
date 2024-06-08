// fibonacci_iterative.js

/**
 * Iterative function to calculate the nth Fibonacci number
 * @param {number} n - The position in the Fibonacci sequence
 * @returns {number} - The nth Fibonacci number
 */
function fibonacciIterative(n) {
    if (n <= 1) {
        return n;
    }

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }

    return b;
}

// Example usage
const position = 10;
const fibNumber = fibonacciIterative(position);

console.log(`Fibonacci number at position ${position} is:`, fibNumber);

module.exports = fibonacciIterative;
