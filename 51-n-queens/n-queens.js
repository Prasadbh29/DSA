/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const res = [];
    const board = Array.from({ length: n }, () => '.'.repeat(n));
    
    const isSafe = (row, col, queens) => {
        for (let [r, c] of queens) {
            if (c === col || r - c === row - col || r + c === row + col) {
                return false;
            }
        }
        return true;
    };
    
    const backtrack = (row = 0, queens = []) => {
        if (row === n) {
            const solution = Array.from({ length: n }, () => '.'.repeat(n));
            for (let [r, c] of queens) {
                solution[r] = solution[r].substring(0, c) + 'Q' + solution[r].substring(c + 1);
            }
            res.push(solution);
            return;
        }
        
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col, queens)) {
                queens.push([row, col]);
                backtrack(row + 1, queens);
                queens.pop();
            }
        }
    };
    
    backtrack();
    return res;
};
