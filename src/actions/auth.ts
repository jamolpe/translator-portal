import { getUserInfo, login, UserData } from '../services/auth';

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';

export const loginAction = (user: UserData) => {
  return async (dispatch: any) => {
    dispatch({
      type: LOGIN_USER_REQUEST
    });
    try {
      const response = await login(user);
      if (response.code === 200) {
        const userInfo = await getUserInfo();
        return dispatch({
          type: LOGIN_USER_SUCCESS,
          logged: true,
          user: userInfo.body
        });
      }
      throw new Error('Error login user');
    } catch (error) {
      return dispatch({
        type: LOGIN_USER_ERROR,
        logged: false
      });
    }
  };
};
