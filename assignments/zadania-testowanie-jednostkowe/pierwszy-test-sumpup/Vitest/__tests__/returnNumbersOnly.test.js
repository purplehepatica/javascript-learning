import { describe, test, expect } from 'vitest';
import { returnNumbersOnly } from '../returnNumbersOnly.js';

describe("returnNumbersOnly function: ", () => {
    test("Should return numbers when parameter is a number", () => {

        const expectedValue = 2;
        const input = 2;
        const actualResult = returnNumbersOnly(input)
        expect(actualResult).toEqual(expectedValue)
    })

    test("Should return an information when parameter is a string", () => {

        const input = "adsds";
        const actualResult = returnNumbersOnly(input)
        expect(actualResult).toEqual("Not a number!")
    })
})


