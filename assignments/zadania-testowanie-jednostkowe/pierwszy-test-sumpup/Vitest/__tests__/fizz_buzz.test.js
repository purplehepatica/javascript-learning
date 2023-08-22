import { test, expect, describe } from 'vitest';
import { fizzBuzz } from '../fizz_buzz.js';

describe('FizzBuzz function: ', () => {
    test.each([2, 14, 152, 668, 1274])('Should return Fizz when num is divisible only by 2', (value) => {
        const expected_result = "Fizz";
        const actual_result = fizzBuzz(value);


        expect(actual_result).toEqual(expected_result);
    });

    test.each([3, 15, 105, 657, 3045])('Should return Buzz when num is divisible only by 3', (value) => {
        const expected_result = "Buzz";
        const actual_result = fizzBuzz(value);


        expect(actual_result).toEqual(expected_result);
    });

    test.each([6, 12, 108, 666, 1002])('Should return Buzz when num is divisible by 2 and 3', (value) => {
        const expected_result = "FizzBuzz";
        const actual_result = fizzBuzz(value);


        expect(actual_result).toEqual(expected_result);
    });

    test.each([5, 35, 107, 667, 3041])('Should return Buzz when num is not divisible by either 2 or 3', (value) => {
        const expected_result = "N/A";
        const actual_result = fizzBuzz(value);


        expect(actual_result).toEqual(expected_result);
    });
});

