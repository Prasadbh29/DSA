/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const n = nums.length;
    
    // Place each number in its right position if it's in the range [1, n]
    for (let i = 0; i < n; i++) {
        while (
            nums[i] > 0 &&
            nums[i] <= n &&
            nums[nums[i] - 1] !== nums[i]
        ) {
            let correctIndex = nums[i] - 1;
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]]; // swap
        }
    }

    // After rearrangement, the first place where index+1 != value is our answer
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    // If all positions are correct, the missing number is n + 1
    return n + 1;
};
