import threadReducer, {
  setThreads,
  setActiveThread,
  threadSelector,
  activeThreadSelector,
} from './threadSlice';

// skenario testing
// ThreadSlice
// 1. setThreads reducer should update the threads in the state
// 2. setActiveThread reducer should update the activeThread in the state
// 3. threadSelector selector should return the threads from the state
// 4. activeThreadSelector selector should return the activeThread from the state

describe('threadSlice', () => {
  it('setThreads reducer should update the threads in the state', () => {
    const initialState = {
      threads: [],
      activeThread: null,
    };

    const action = setThreads([{
      id: 1,
      title: 'Thread 1',
    }, {
      id: 2,
      title: 'Thread 2',
    }]);
    const newState = threadReducer(initialState, action);

    expect(newState.threads).toEqual([{
      id: 1,
      title: 'Thread 1',
    }, {
      id: 2,
      title: 'Thread 2',
    }]);
    expect(newState.activeThread).toBeNull();
  });

  it('setActiveThread reducer should update the activeThread in the state', () => {
    const initialState = {
      threads: [],
      activeThread: null,
    };

    const action = setActiveThread({
      id: 1,
      title: 'Thread 1',
    });
    const newState = threadReducer(initialState, action);

    expect(newState.activeThread).toEqual({
      id: 1,
      title: 'Thread 1',
    });
    expect(newState.threads.length).toBe(0);
  });

  it('threadSelector selector should return the threads from the state', () => {
    const state = {
      thread: {
        threads: [{
          id: 1,
          title: 'Thread 1',
        }, {
          id: 2,
          title: 'Thread 2',
        }],
        activeThread: null,
      },
    };

    const selectedThreads = threadSelector(state);

    expect(selectedThreads).toEqual([{
      id: 1,
      title: 'Thread 1',
    }, {
      id: 2,
      title: 'Thread 2',
    }]);
  });

  it('activeThreadSelector selector should return the activeThread from the state', () => {
    const state = {
      thread: {
        threads: [],
        activeThread: {
          id: 1,
          title: 'Thread 1',
        },
      },
    };

    const selectedActiveThread = activeThreadSelector(state);

    expect(selectedActiveThread).toEqual({
      id: 1,
      title: 'Thread 1',
    });
  });
});
