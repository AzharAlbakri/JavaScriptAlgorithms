// bubbleSort.js

/**
 * Bubble Sort algorithm
 * @param {Array} array - The array to be sorted
 * @returns {Array} - The sorted array
 */
function bubbleSort(array) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Swap array[j] and array[j+1]
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

// Example usage
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(unsortedArray);

console.log('Unsorted Array:', unsortedArray);
console.log('Sorted Array:', sortedArray);

module.exports = bubbleSort;
