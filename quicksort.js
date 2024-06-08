// quicksort.js

/**
 * QuickSort algorithm
 * @param {Array} array - The array to be sorted
 * @returns {Array} - The sorted array
 */
function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[Math.floor(array.length / 2)];
    const left = [];
    const right = [];

    for (let i = 0; i < array.length; i++) {
        if (i === Math.floor(array.length / 2)) continue;

        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quicksort(left), pivot, ...quicksort(right)];
}

// Example usage
const unsortedArray = [34, 7, 23, 32, 5, 62];
const sortedArray = quicksort(unsortedArray);

console.log('Unsorted Array:', unsortedArray);
console.log('Sorted Array:', sortedArray);

module.exports = quicksort;
