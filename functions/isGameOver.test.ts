import { isGameOver } from './isGameOver';

describe("isGameOver?", () => {
    test("game is over", () => {
        const board = [
            ['X', 'O', 'X', 'X'],
            ['O', 'O', 'X', 'O'],
            ['X', 'O', 'X', 'O'],
            ['X', 'X', 'O', 'O']
        ];
        expect(isGameOver(board)).toBeTruthy();
    });

    test('game is NOT over', () => {
        const board = [
            ['X', null, 'X', 'X'],
            ['O', 'O', 'X', null],
            ['X', 'O', null, 'O'],
            ['X', null, 'O', 'O']
        ];
        expect(isGameOver(board)).toBeFalsy();
    });
});
