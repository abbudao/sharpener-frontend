import { LOGIN_SUCCESS, LOGIN_DATA } from "store/constants";


export const userData = (data) => ({
  type: LOGIN_DATA,
  payload: {
    ...data
  }
})

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
})
