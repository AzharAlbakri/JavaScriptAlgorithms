// twoSum.js

/**
 * Two Sum algorithm
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum
 * @returns {number[]} - Indices of the two numbers that add up to the target
 */
function twoSum(nums, target) {
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }

    return [];
}

// Example usage
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);

console.log(`Indices of the two numbers that add up to ${target}:`, result);

module.exports = twoSum;
