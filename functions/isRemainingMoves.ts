import { Board } from "../types/index.ts";

export const isRemainingMoves = (board: Board): boolean => {
    return board.some(row => row.some(cell => cell === null))
}
