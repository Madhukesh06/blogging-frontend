import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "./auth.types";

export const signinAction = (email: any) => async (dispatch: any) => {
  console.log("Hello LOGIN");
  dispatch({ type: LOGIN_LOADING });
  try {
    let res = await axios.post(
      "https://blogging-backend.up.railway.app/users/signin",
      { email: email }
    );
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    return true;
  } catch (e) {
    dispatch({ type: LOGIN_ERROR });
  }
};

export const signupAction = (creds: any) => async (dispatch: any) => {
  console.log("Hello SIGNUP",creds);
  dispatch({ type: REGISTER_LOADING });

  try {
    let res = await axios.post(
      "https://blogging-backend.up.railway.app/users/signup",
      creds
    );
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: REGISTER_ERROR });
  }
};
