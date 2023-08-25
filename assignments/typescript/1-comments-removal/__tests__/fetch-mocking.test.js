// Import the function you want to test
import {describe, it, expect, vi, test} from 'vitest';
import { getRandomActivityIdea } from './fetch.js';

const comments = require('./comments.json');


describe('Comments id is equal to parameter', () => {
    it.each([1, 3, 133, 299, 499])('should return the comment ID', async (commentId) => {

        global.fetch = vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(comments),
            })
        );

        const result = await getRandomActivityIdea(commentId);

        expect(result).toBe(comments[commentId - 1].id);
    });

    it('should throw an error for network failures', async () => {

        global.fetch = vi.fn(() =>
            Promise.resolve({
                ok: false,
                status: 404,
                statusText: 'Not Found',
            })
        );

        const commentId = 1;

        await expect(getRandomActivityIdea(commentId)).rejects.toThrowError('Błąd sieci: 404, Not Found');

        })

    it('API is not available', async () => {
        // .toThrowError()



        await expect(getRandomActivityIdea(200)).rejects.toThrow('Błąd sieci: 404, Not Found')
    });

    it('API is not available', async () => {

        global.fetch.mockReset()


        await expect(getRandomActivityIdea(200)).rejects.toThrow('Błąd sieci: 404, Not Found')
    });
});

// ! Uncaught (in promise) TypeError: Failed to fetch