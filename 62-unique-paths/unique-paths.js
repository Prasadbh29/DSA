/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // Create a 2D array filled with 1s
    let dp = Array(m).fill().map(() => Array(n).fill(1));

    // Start from cell (1,1) and fill the grid
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]; // top + left
        }
    }

    // Bottom-right cell holds the answer
    return dp[m - 1][n - 1];
};
