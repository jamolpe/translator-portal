import {
  LOGIN_USER_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS
} from '../../actions/auth';
import Cookies from 'js-cookie';

export interface AuthState {
  loggin: boolean;
  logged: boolean;
  user?: string;
}

const authCookie = Cookies.get('accessToken');

const initialState: AuthState = {
  loggin: false,
  logged: !!authCookie,
  user: ''
};

const authReducer = (
  state = initialState,
  { type, _payload }: { type: string; _payload: any }
): AuthState => {
  switch (type) {
    case LOGIN_USER_REQUEST:
      return {
        loggin: true,
        logged: false
      };
    case LOGIN_USER_SUCCESS:
      return {
        loggin: false,
        logged: true
      };
    case LOGIN_USER_ERROR:
      return {
        loggin: false,
        logged: false
      };
    default:
      return state;
  }
};

export default authReducer;
