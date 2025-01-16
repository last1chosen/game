import { Board } from "../types/index.ts";

const isRemainingMoves = (board: Board): boolean => {
    return board.some(row => row.some(cell => cell === null))
}
