import { isGameOver } from "./functions/isGameOver.ts";
import { isRemainingMoves } from "./functions/isRemainingMoves.ts";
import { isWinner } from "./functions/isWinner.ts";
import { Board } from "./types/.index.ts";

export const evaluateGame = (board: Board): string => {
    if (checkWinner(board, 'X')) {
	    return 'X wins'
    }
    if (checkWinner(board, 'O')) {
	    return 'O wins'
    }
    if (isRemainingMoves(board)) {
	    return 'Game is still going'
    }
    return 'Game is a draw, no winner and no moves remaining';
};
