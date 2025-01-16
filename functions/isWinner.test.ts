import { isWinner } from './isWinner';

describe('isWinner?', () => {

    test('should return true for horizontal win', () => {
        const board = [
            ['X', 'X', 'X', 'X'],
            ['O', 'O', 'X', 'O'],
            ['X', 'O', 'X', 'X'],
            ['O', 'X', 'O', 'O']
        ];
        expect(isWinner(board)).toBeTruthy();
    });

    test('should return true for vertical win', () => {
        const board = [
            ['X', 'O', 'X', 'O'],
            ['O', 'X', 'X', 'O'],
            ['X', 'O', 'X', 'X'],
            ['O', 'O', 'X', 'O']
        ];
        expect(isWinner(board)).toBeTruthy();
    });

    test('should return true for diagonal win (top-left to bottom-right)', () => {
        const board = [
            ['X', 'O', 'O', 'X'],
            ['O', 'X', 'O', 'O'],
            ['O', 'X', 'X', 'O'],
            ['O', 'O', 'O', 'X']
        ];
        expect(isWinner(board)).toBeTruthy();
    });

    test('should return true for diagonal win (top-right to bottom-left)', () => {
        const board = [
            ['O', 'O', 'O', 'X'],
            ['X', 'O', 'X', 'O'],
            ['O', 'X', 'X', 'O'],
            ['X', 'O', 'O', 'O']
        ];
        expect(isWinner(board)).toBeTruthy();
    });

    test('should return true for corner win', () => {
        const board = [
            ['X', 'O', 'O', 'X'],
            ['O', 'X', 'O', 'X'],
            ['O', 'X', 'O', 'O'],
            ['X', 'O', 'X', 'X']
        ];
        expect(isWinner(board)).toBeTruthy();
    });

    test('should return true for 2x2 box win', () => {
        const board = [
            ['X', 'X', 'O', 'O'],
            ['X', 'X', 'X', 'O'],
            ['O', 'O', 'O', 'X'],
            ['O', 'X', 'X', 'X']
        ];
        expect(isWinner(board)).toBeTruthy();
    });

    test('should return false when there is no winner', () => {
        const board = [
            ['X', 'O', 'X', 'O'],
            ['O', 'X', 'O', 'X'],
            ['X', 'O', 'X', 'O'],
            ['O', 'X', 'O', 'X']
        ];
        expect(isWinner(board)).toBeFalsy();
    });

});
