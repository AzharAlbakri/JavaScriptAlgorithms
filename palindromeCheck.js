  // palindromeCheck.js

/**
 * Palindrome Check algorithm
 * @param {string} str - The string to check for palindrome
 * @returns {boolean} - True if the string is a palindrome, false otherwise
 */
function isPalindrome(str) {
    const sanitizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = sanitizedStr.split('').reverse().join('');
    return sanitizedStr === reversedStr;
}

// Example usage
const testString1 = "A man, a plan, a canal, Panama";
const testString2 = "racecar";
const testString3 = "hello world";

console.log(`Is "${testString1}" a palindrome?`, isPalindrome(testString1));
console.log(`Is "${testString2}" a palindrome?`, isPalindrome(testString2));
console.log(`Is "${testString3}" a palindrome?`, isPalindrome(testString3));

module.exports = isPalindrome;
