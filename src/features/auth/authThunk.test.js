import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as authAPI from './authAPI';
import { fetchAuthUser, fetchAllUsers } from './authThunk';
import { setUser, setAllUsers } from './authSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Mock the authAPI functions
jest.mock('./authAPI');

describe('authThunk', () => {
  describe('fetchAuthUser', () => {
    it('dispatches setUser on successful fetch', async () => {
      const mockUser = { id: 1, username: 'exampleUser' };
      const mockData = { data: { user: mockUser } };
      authAPI.getUser.mockResolvedValueOnce(mockData);

      const expectedActions = [{ type: setUser.type, payload: mockUser }];

      const store = mockStore({});
      await store.dispatch(fetchAuthUser());

      expect(store.getActions()).toEqual(expectedActions);
    });

    it('handles errors during fetchAuthUser', async () => {
      const errorMessage = 'Failed to fetch user data';
      authAPI.getUser.mockRejectedValueOnce(new Error(errorMessage));

      const expectedActions = [];

      const store = mockStore({});
      await store.dispatch(fetchAuthUser());

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('fetchAllUsers', () => {
    it('dispatches setAllUsers on successful fetch', async () => {
      const mockUsers = [{ id: 1, username: 'user1' }, { id: 2, username: 'user2' }];
      const mockData = { data: { users: mockUsers } };
      authAPI.getAllUsers.mockResolvedValueOnce(mockData);

      const expectedActions = [{ type: setAllUsers.type, payload: mockUsers }];

      const store = mockStore({});
      await store.dispatch(fetchAllUsers());

      expect(store.getActions()).toEqual(expectedActions);
    });

    it('handles errors during fetchAllUsers', async () => {
      const errorMessage = 'Failed to fetch users data';
      authAPI.getAllUsers.mockRejectedValueOnce(new Error(errorMessage));

      const expectedActions = [];

      const store = mockStore({});
      await store.dispatch(fetchAllUsers());

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
