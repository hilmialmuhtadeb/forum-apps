/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as threadAPI from './threadAPI';
import { fetchAllThreads, fetchDetailThread } from './threadThunk';
import { setThreads, setActiveThread } from './threadSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Mock the threadAPI functions
jest.mock('./threadAPI');

// skenario testing
// ThreadThunk
// 1. fetchAllThreads should dispatch setThreads on successful fetch
// 2. fetchAllThreads should handle errors during fetchAllThreads
// 3. fetchDetailThread should dispatch setActiveThread on successful fetch
// 4. fetchDetailThread should handle errors during fetchDetailThread

describe('threadThunk', () => {
  describe('fetchAllThreads', () => {
    it('dispatches setThreads on successful fetch', async () => {
      const mockThreads = [{ id: 1, title: 'Thread 1' }, { id: 2, title: 'Thread 2' }];
      const mockData = { data: { threads: mockThreads } };
      threadAPI.getAllThreads.mockResolvedValueOnce(mockData);

      const expectedActions = [{ type: setThreads.type, payload: mockThreads }];

      const store = mockStore({});
      await store.dispatch(fetchAllThreads());

      expect(store.getActions()).toEqual(expectedActions);
    });

    it('handles errors during fetchAllThreads', async () => {
      const errorMessage = 'Failed to fetch threads data';
      threadAPI.getAllThreads.mockRejectedValueOnce(new Error(errorMessage));

      const expectedActions = [];

      const store = mockStore({});
      await store.dispatch(fetchAllThreads());

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('fetchDetailThread', () => {
    it('dispatches setActiveThread on successful fetch', async () => {
      const mockDetailThread = { id: 1, title: 'Thread 1' };
      const mockData = { data: { detailThread: mockDetailThread } };
      threadAPI.getDetailThread.mockResolvedValueOnce(mockData);

      const expectedActions = [{ type: setActiveThread.type, payload: mockDetailThread }];

      const store = mockStore({});
      await store.dispatch(fetchDetailThread(1));

      expect(store.getActions()).toEqual(expectedActions);
    });

    it('handles errors during fetchDetailThread', async () => {
      const errorMessage = 'Failed to fetch detail thread data';
      threadAPI.getDetailThread.mockRejectedValueOnce(new Error(errorMessage));

      const expectedActions = [];

      const store = mockStore({});
      await store.dispatch(fetchDetailThread(1));

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
