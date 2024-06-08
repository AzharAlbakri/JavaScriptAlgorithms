// mergeIntervals.js

/**
 * Function to merge overlapping intervals
 * @param {Array<Array<number>>} intervals - The list of intervals to merge
 * @returns {Array<Array<number>>} - The merged intervals
 */
function mergeIntervals(intervals) {
    if (intervals.length <= 1) return intervals;

    // Sort intervals by the starting time
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const lastMerged = merged[merged.length - 1];
        const current = intervals[i];

        if (current[0] <= lastMerged[1]) {
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            merged.push(current);
        }
    }

    return merged;
}

// Example usage
const intervals = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
];
const mergedIntervals = mergeIntervals(intervals);

console.log('Merged Intervals:', mergedIntervals);

module.exports = mergeIntervals;
