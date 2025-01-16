const isWinner = (board: Board, player: Player): boolean => {
    for (let i = 0; i < 4; i++) {
        if (board[i].every(cell => cell === player)) {
          return true
        }
        if (board.every(row => row[i] === player)) {
          return true;
        }
    }

    if (board.every((row, idx) => row[idx] === player)) {
	    return true
    }
    if (board.every((row, idx) => row[3 - idx] === player)) {
	    return true
    }

    // Check corners
    const corners = [
        board[0][0], board[0][3],
        board[3][0], board[3][3]
    ];
    if (corners.every(corner => corner === player)) {
	    return true
    }

    // Check 2x2 box win
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (
                board[i][j] === player &&
                board[i][j + 1] === player &&
                board[i + 1][j] === player &&
                board[i + 1][j + 1] === player
            ) {
                return true;
            }
        }
    }

    return false;
};
