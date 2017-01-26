import { AuthActions } from '../actions';
import { IUser } from '../models';

interface IInitalState {
  isLoading: boolean;
  isError: { status: boolean, msg: string }
  isLoggedin: boolean;
  user: IUser;
  isRegistered: boolean;
  
}

const InitalState: IInitalState = {
  isLoading: false,
  isError: { status: false, msg: null },
  isLoggedin: false,
  user: null,
  isRegistered: false,
};

export const authReducer = function (state: IInitalState = InitalState, action: { type: string, payload?: any }) {
    console.log("in reduers",action.type);
    console.log("in reduers",action.payload);
  switch (action.type) {
    case AuthActions.LOGIN_FAIL:
      return Object.assign({}, state, { isLoading: false, isLoggedin: false, user: null });
    case AuthActions.LOGIN_SUCCESS:
      return Object.assign({}, state, { isLoading: false, isLoggedin: true, user: action.payload });
    case AuthActions.LOGOUT_FAIL:
      return Object.assign({}, state, { isLoading: false, isLoggedin: false, user: null });
    case AuthActions.LOGOUT_SUCCESS:
      return Object.assign({}, state, { isLoading: false, isLoggedin: false, user: null });
    case AuthActions.LOGIN:
      return Object.assign({}, state, { isLoading: true });
    case AuthActions.REGISTER:
      return Object.assign({}, state, { isLoading: true });
    case AuthActions.REGISTER_SUCCESS:
      return Object.assign({}, state, { isLoading: false, isRegistered: true });
    case AuthActions.REGISTER_FAIL:
      return Object.assign({}, state, { isLoading: false, isError: action.payload.isError });
    default:
      return state;
  }
}