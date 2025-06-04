/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let reachable = 0;

    for (let i = 0; i < nums.length; i++) {
        // If current index is beyond the farthest reachable, return false
        if (i > reachable) return false;

        // Update the farthest reachable index
        reachable = Math.max(reachable, i + nums[i]);
    }

    // If loop finishes, we can reach the end
    return true;
};
