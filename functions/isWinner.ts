import { Token, Board } from "../types/index.ts;

const isWinner = (board: Board, token: Token): boolean => {
    for (let i = 0; i < 4; i++) {
        if (board[i].every(cell => cell === token)) {
          return true
        }
        if (board.every(row => row[i] === token)) {
          return true;
        }
    }

    if (board.every((row, idx) => row[idx] === token)) {
	    return true
    }
    if (board.every((row, idx) => row[3 - idx] === token)) {
	    return true
    }

    // Check corners
    const corners = [
        board[0][0], board[0][3],
        board[3][0], board[3][3]
    ];
    if (corners.every(corner => corner === token)) {
	    return true
    }

    // Check 2x2 box win
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (
                board[i][j] === token &&
                board[i][j + 1] === token &&
                board[i + 1][j] === token &&
                board[i + 1][j + 1] === token
            ) {
                return true;
            }
        }
    }

    return false;
};
