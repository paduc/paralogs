import { createStandardAction } from "typesafe-actions";

import { AuthParams } from "../api.gateway";
import { CurrentUserWithToken } from "./currentUser.types";
import { ErrorFromAction } from "../../utils";

export const currentUserActions = {
  getCurrentSession: createStandardAction("GET_CURRENT_SESSION")(),
  getCurrentSessionSuccess: createStandardAction("GET_CURRENT_SESSION_SUCCESS")<
    unknown
  >(),
  getCurrentSessionError: createStandardAction("GET_CURRENT_SESSION_ERROR")<
    ErrorFromAction
  >(),

  loggout: createStandardAction("LOGGOUT")(),
  loggoutSuccess: createStandardAction("LOGGOUT_SUCCESS")(),
  loggoutError: createStandardAction("LOGGOUT_ERROR")<ErrorFromAction>(),

  signUpRequest: createStandardAction("SIGN_UP_REQUEST")<AuthParams>(),
  signUpSuccess: createStandardAction("SIGN_UP_SUCCESS")<CurrentUserWithToken | null>(),
  signUpError: createStandardAction("SIGN_UP_ERROR")<ErrorFromAction>(),

  loginRequest: createStandardAction("LOGIN_REQUEST")<AuthParams>(),
  loginSuccess: createStandardAction("LOGIN_SUCCESS")<CurrentUserWithToken | null>(),
  loginError: createStandardAction("LOGIN_ERROR")<ErrorFromAction>(),
};