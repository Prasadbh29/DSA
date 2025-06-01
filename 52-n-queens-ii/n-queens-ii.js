var totalNQueens = function(n) {
    let count = 0;

    // These sets help track columns and diagonals that are already attacked
    const cols = new Set();
    const diag1 = new Set(); // r - c
    const diag2 = new Set(); // r + c

    function backtrack(row) {
        if (row === n) {
            count++;
            return;
        }

        for (let col = 0; col < n; col++) {
            if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) continue;

            cols.add(col);
            diag1.add(row - col);
            diag2.add(row + col);

            backtrack(row + 1);

            // Backtrack
            cols.delete(col);
            diag1.delete(row - col);
            diag2.delete(row + col);
        }
    }

    backtrack(0);
    return count;
};
