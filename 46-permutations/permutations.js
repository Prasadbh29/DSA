/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];

    function backtrack(path, options) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < options.length; i++) {
            const newPath = [...path, options[i]];
            const newOptions = options.slice(0, i).concat(options.slice(i + 1));
            backtrack(newPath, newOptions);
        }
    }

    backtrack([], nums);
    return result;
};
