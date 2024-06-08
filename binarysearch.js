// binarysearch.js

/**
 * Binary Search algorithm
 * @param {Array} array - The sorted array to search in
 * @param {number} target - The target value to search for
 * @returns {number} - The index of the target value, or -1 if not found
 */
function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Target not found
}

// Example usage
const sortedArray = [5, 7, 23, 32, 34, 62];
const target = 23;
const targetIndex = binarySearch(sortedArray, target);

console.log('Sorted Array:', sortedArray);
console.log(`Target Value ${target} found at index:`, targetIndex);

module.exports = binarySearch;
