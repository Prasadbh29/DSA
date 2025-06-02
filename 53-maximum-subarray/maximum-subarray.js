/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSoFar = nums[0];      // Global max
    let currentMax = nums[0];    // Current subarray max

    for (let i = 1; i < nums.length; i++) {
        // Either start a new subarray or extend the existing one
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        maxSoFar = Math.max(maxSoFar, currentMax);
    }

    return maxSoFar;
};
