import { LOGIN_SUCCESS, LOGIN_DATA } from 'store/constants';

const loginReducer = (state = false, action) => {
  const { payload, type } = action;
  switch (type) {
    case LOGIN_DATA:
      const { avatar, email, token,
        name, nickname } =  payload;
      return {
        ...state,
        avatar,
        email,
        token,
        name,
        nickname,
        isLoadingData: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoadingData: true,
        isLoggedIn: true 
      };
    default:
      return state;
  }
};

export default loginReducer;
