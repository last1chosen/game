import { isGameOver } from "./functions/isGameOver.ts";
import { isRemainingMoves } from "./functions/isRemainingMoves.ts";
import { isWinner } from "./functions/isWinner.ts";
import { Board } from "./types/.index.ts";

export const evaluateGame = (board: Board): string => {
    if (isWinner(board, 'X')) {
	    return 'X wins'
    }
    if (isWinner(board, 'O')) {
	    return 'O wins'
    }
    if (isRemainingMoves(board)) {
	    return 'Game is still going'
    }
    // we could add another if statement to use the isGameOver function, however if X or O didn't win
    // and no moves remaining, by default the game is over. 
    return 'Game is a draw, no winner and no moves remaining';
};
