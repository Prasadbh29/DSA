var combinationSum2 = function(candidates, target) {
    let result = [];
    candidates.sort((a, b) => a - b); // Sort the array to help avoid duplicates

    function backtrack(start, target, currentCombination) {
        if (target === 0) {
            result.push([...currentCombination]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) continue; // Skip duplicates

            if (candidates[i] > target) break; // No need to continue if the number is greater than the remaining target

            currentCombination.push(candidates[i]);
            backtrack(i + 1, target - candidates[i], currentCombination); // Move to the next number
            currentCombination.pop(); // Backtrack
        }
    }

    backtrack(0, target, []);
    return result;
};
