var getPermutation = function(n, k) {
    // Step 1: Create list of numbers 1 to n
    let nums = [];
    for (let i = 1; i <= n; i++) {
        nums.push(i);
    }

    // Step 2: Precompute factorials
    let factorial = [1];
    for (let i = 1; i <= n; i++) {
        factorial[i] = factorial[i - 1] * i;
    }

    // Step 3: Build the result
    k--;  // Convert to 0-based index
    let result = '';
    for (let i = n; i >= 1; i--) {
        let groupSize = factorial[i - 1];
        let index = Math.floor(k / groupSize);
        result += nums[index];
        nums.splice(index, 1);  // Remove used digit
        k %= groupSize;
    }

    return result;
};
