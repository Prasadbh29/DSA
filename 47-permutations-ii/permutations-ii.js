var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b); // Sort to make duplicate detection easier
    const results = [];
    const used = Array(nums.length).fill(false);

    const backtrack = (path) => {
        if (path.length === nums.length) {
            results.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            // Skip used elements
            if (used[i]) continue;

            // Skip duplicates
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

            // Choose the number
            used[i] = true;
            path.push(nums[i]);

            // Explore
            backtrack(path);

            // Un-choose (backtrack)
            path.pop();
            used[i] = false;
        }
    };

    backtrack([]);
    return results;
};
