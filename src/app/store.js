import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import threadReducer from '../features/thread/threadSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    thread: threadReducer,
  },
});
