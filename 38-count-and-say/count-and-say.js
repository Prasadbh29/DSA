/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let result = "1";  // Start with base case
    
    // Iterate to generate the sequence from 2 to n
    for (let i = 2; i <= n; i++) {
        let temp = "";
        let count = 1;
        
        // Traverse the current result and count consecutive digits
        for (let j = 1; j < result.length; j++) {
            if (result[j] === result[j - 1]) {
                count++;  // Increment count for consecutive digits
            } else {
                // Append the count and the digit
                temp += count.toString() + result[j - 1];
                count = 1;  // Reset the count for new digit
            }
        }
        
        // Append the last run of characters
        temp += count.toString() + result[result.length - 1];
        result = temp;  // Update result for the next iteration
    }
    
    return result;
};
