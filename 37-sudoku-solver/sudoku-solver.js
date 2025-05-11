/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const isValid = (row, col, num) => {
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === num) return false; // check row
            if (board[i][col] === num) return false; // check column
            // check 3x3 block
            const blockRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
            const blockCol = 3 * Math.floor(col / 3) + i % 3;
            if (board[blockRow][blockCol] === num) return false;
        }
        return true;
    };

    const solve = () => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === '.') {
                    for (let num = 1; num <= 9; num++) {
                        const charNum = num.toString();
                        if (isValid(row, col, charNum)) {
                            board[row][col] = charNum;
                            if (solve()) return true;
                            board[row][col] = '.'; // backtrack
                        }
                    }
                    return false; // no valid number found
                }
            }
        }
        return true; // board solved
    };

    solve();
};
