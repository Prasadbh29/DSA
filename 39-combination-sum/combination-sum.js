/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];

    const backtrack = (remain, combo, start) => {
        if (remain === 0) {
            result.push([...combo]);
            return;
        } else if (remain < 0) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            combo.push(candidates[i]);
            backtrack(remain - candidates[i], combo, i); // not i + 1 because we can reuse the same element
            combo.pop(); // backtrack
        }
    };

    backtrack(target, [], 0);
    return result;
};
