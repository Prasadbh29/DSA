var nextPermutation = function(nums) {
    let i = nums.length - 2;

    // Step 1: Find first decreasing index from the right
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        let j = nums.length - 1;
        // Step 2: Find the next bigger element from the right
        while (nums[j] <= nums[i]) {
            j--;
        }
        // Step 3: Swap
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Step 4: Reverse the remaining array
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};
