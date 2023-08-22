import createFetchMock from 'vitest-fetch-mock';
import { vi } from 'vitest';
import getUsers from './index.js';

describe('getUsers()', () => {
    it('should fetch users data', async () => {
        const fetchMocker = createFetchMock(vi);
        fetchMocker.enableMocks();

        const mockUsersData = [{ id: 1, name: 'John Doe' }];
        fetchMocker.mock('https://jsonplaceholder.typicode.com/users/', {
            status: 200,
            body: mockUsersData,
        });

        const result = await getUsers();

        expect(result).toEqual(mockUsersData);
    });
});
