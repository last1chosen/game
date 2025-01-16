import { isRemainingMoves } from './isRemainingMoves';

describe('isRemainingMoves?', () => {

    test('should return false when the board is full', () => {
        const board = [
            ['X', 'O', 'X', 'O'],
            ['O', 'X', 'O', 'X'],
            ['X', 'O', 'X', 'O'],
            ['O', 'X', 'O', 'X']
        ];
        expect(isRemainingMoves(board)).toBeFalsy();
    });

    test('should return true when one or more empty cells', () => {
        const board = [
            ['X', 'O', 'X', 'O'],
            ['O', null, 'O', 'X'],
            ['X', 'O', 'X', null],
            ['O', 'X', 'O', 'X']
        ];
        expect(isRemainingMoves(board)).toBeTruthy();
    });

    test('should return false when the board has no empty cells', () => {
        const board = [
            ['X', 'X', 'X', 'X'],
            ['O', 'O', 'O', 'O'],
            ['X', 'X', 'X', 'X'],
            ['O', 'O', 'O', 'O']
        ];
        expect(isRemainingMoves(board)).toBeFalsy();
    });

});
