/* eslint-disable no-console */
import { getAllUsers, getUser } from './authAPI';
import { setUser, setAllUsers } from './authSlice';

export const fetchAuthUser = () => async (dispatch) => {
  try {
    const { data } = await getUser();
    dispatch(setUser(data.user));
  } catch (error) {
    console.error('Error fetching auth user:', error);
  }
};

export const fetchAllUsers = () => async (dispatch) => {
  try {
    const { data } = await getAllUsers();
    dispatch(setAllUsers(data.users));
  } catch (error) {
    console.error('Error fetching all users:', error);
  }
};
