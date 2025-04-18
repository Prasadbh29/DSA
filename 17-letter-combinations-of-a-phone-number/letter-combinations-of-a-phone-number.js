/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) return [];

    const digitToChar = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    const result = [];

    const backtrack = (index, current) => {
        if (index === digits.length) {
            result.push(current);
            return;
        }

        for (let char of digitToChar[digits[index]]) {
            backtrack(index + 1, current + char);
        }
    };

    backtrack(0, "");
    return result;
};
