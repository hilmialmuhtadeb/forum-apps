import { getAllUsers, getUser } from './authAPI';
import { setUser, setAllUsers } from './authSlice';

export const fetchAuthUser = () => async (dispatch) => {
  try {
    const { data } = await getUser();
    dispatch(setUser(data.user));
    console.log('some of edit');
  } catch (error) {
    console.error('Error fetching auth user:', error);
  }
};

export const fetchAllUsers = () => async (dispatch) => {
  try {
    const { data } = await getAllUsers();
    dispatch(setAllUsers(data.users));
    console.log('some of edit');
  } catch (error) {
    console.error('Error fetching all users:', error);
  }
};
