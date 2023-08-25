import { describe, test, expect } from "vitest";
import { getRandomActivityIdea } from "./fetch.js";

describe("Checks Comments API for data validity", () => {

    test.each([1, 25, 111, 177, 333, 500])('Comments id is equal to parameter', async (id) => {

        const result = await getRandomActivityIdea(id);
        expect(result).toEqual(id);
    });

    test('API is not available', async () => {
        // .toThrowError()
        await expect(getRandomActivityIdea(-1)).rejects.toThrow('Błąd sieci: 404, Not Found')
    });
})