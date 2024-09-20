import { Fetch_user_login_action_Failure, Fetch_user_login_action_Success } from "../Constants/TypeConstants";

let intailState = {
  isLoggedIn: -1,
  loginData: {

  }
}

export const LoginReducer = (state = intailState, action) => {
  let currentState = state;
  switch (action.type) {
    case Fetch_user_login_action_Success:
      currentState = {
        ...currentState,
        loginData: action.payload.login,
        isLoggedIn: 1
      }
      break;
    case Fetch_user_login_action_Failure:
      currentState = {
        ...currentState,
        isLoggedIn: 0
      }
      break;

  }
  return currentState;
}