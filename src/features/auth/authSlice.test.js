import authReducer, {
  setUser,
  setAllUsers,
  authUser,
  allUsers
} from './authSlice';

describe('authSlice', () => {
  it('setUser reducer should update the user in the state', () => {
    const initialState = {
      user: null,
      users: [],
    };

    const action = setUser({
      id: 1,
      username: 'exampleUser'
    });
    const newState = authReducer(initialState, action);

    expect(newState.user).toEqual({
      id: 1,
      username: 'exampleUser'
    });
    expect(newState.users.length).toBe(0);
  });

  it('setAllUsers reducer should update the users array in the state', () => {
    const initialState = {
      user: null,
      users: [],
    };

    const action = setAllUsers([{
      id: 1,
      username: 'user1'
    }, {
      id: 2,
      username: 'user2'
    }]);
    const newState = authReducer(initialState, action);

    expect(newState.user).toBeNull();
    expect(newState.users.length).toBe(2);
    expect(newState.users[0].id).toBe(1);
    expect(newState.users[1].username).toBe('user2');
  });

  it('authUser selector should return the user from the state', () => {
    const state = {
      auth: {
        user: {
          id: 1,
          username: 'exampleUser'
        },
        users: [],
      },
    };

    const selectedUser = authUser(state);

    expect(selectedUser).toEqual({
      id: 1,
      username: 'exampleUser'
    });
  });

  it('allUsers selector should return the users array from the state', () => {
    const state = {
      auth: {
        user: null,
        users: [{
          id: 1,
          username: 'user1'
        }, {
          id: 2,
          username: 'user2'
        }],
      },
    };

    const selectedUsers = allUsers(state);

    expect(selectedUsers.length).toBe(2);
    expect(selectedUsers[0].id).toBe(1);
    expect(selectedUsers[1].username).toBe('user2');
  });
});
