/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // Trim any trailing spaces, split by space, and get the last word
    let words = s.trim().split(" ");
    return words[words.length - 1].length;
};
