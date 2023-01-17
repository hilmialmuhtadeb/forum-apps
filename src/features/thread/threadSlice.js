import { createSlice } from '@reduxjs/toolkit';

const threadSlice = createSlice({
  name: 'thread',
  initialState: {
    threads: [],
    activeThread: null,
  },
  reducers: {
    setThreads: (state, action) => {
      state.threads = action.payload;
    },
    setActiveThread: (state, action) => {
      state.activeThread = action.payload;
    },
  },
});

export const { setThreads, setActiveThread } = threadSlice.actions;
export const threadSelector = (state) => state.thread.threads;
export const activeThreadSelector = (state) => state.thread.activeThread;
export default threadSlice.reducer;
