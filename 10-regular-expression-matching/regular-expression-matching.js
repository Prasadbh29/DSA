function isMatch(s, p) {
  const m = s.length;
  const n = p.length;

  // Create DP table initialized with false
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

  // Empty string and empty pattern match
  dp[0][0] = true;

  // Fill in the first row for patterns like a*, a*b*, etc.
  for (let j = 2; j <= n; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 2];
    }
  }

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        // Zero occurrence of the previous char
        dp[i][j] = dp[i][j - 2];
        // If preceding char matches
        if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      }
    }
  }

  return dp[m][n];
}
