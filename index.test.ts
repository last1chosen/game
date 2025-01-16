import { evaluateGame } from "./index.ts";

describe("Evaluate game status", () => {
    test("X wins", () => {
        const board = [
            ["X", "X", "X", "X"],
            [null, "O", null, "O"],
            ["O", "O", "X", null],
            ["X", "O", null, "O"]
        ];
        expect(evaluateGame(board)).toBe("X wins");
    });

    test("O wins", () => {
        const board = [
            ["X", null, "O", "O"],
            [null, "O", "O", "O"],
            ["X", null, "X", null],
            ["O", null, "X", "X"]
        ];
        expect(evaluateGame(board)).toBe("O wins");
    });

    test("Game is still going, moves exist and nobody has won", () => {
        const board = [
            ["X", "O", "X", "O"],
            ["O", "X", "O", "X"],
            ["X", "O", null, "O"],
            ["O", "X", "X", "O"]
        ];
        expect(evaluateGame(board)).toBe("Game is still going");
    });

    test("No moves left", () => {
        const board = [
            ["X", "O", "X", "O"],
            ["O", "X", "O", "X"],
            ["X", "O", "X", "O"],
            ["O", "X", "O", "X"]
        ];
        expect(evaluateGame(board)).toBe("Game is a draw, no winner and no moves remaining");
    });
});
