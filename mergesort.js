// mergesort.js

/**
 * Merge function to merge two sorted arrays
 * @param {Array} left - The left sorted sub-array
 * @param {Array} right - The right sorted sub-array
 * @returns {Array} - The merged and sorted array
 */
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concat remaining elements
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

/**
 * MergeSort algorithm
 * @param {Array} array - The array to be sorted
 * @returns {Array} - The sorted array
 */
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(middle);
    const right = array.slice(0, middle);

    return merge(mergeSort(left), mergeSort(right));
}

// Example usage
const unsortedArray = [34, 7, 23, 32, 5, 62];
const sortedArray = mergeSort(unsortedArray);

console.log('Unsorted Array:', unsortedArray);
console.log('Sorted Array:', sortedArray);

module.exports = mergeSort;
