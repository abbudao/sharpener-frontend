import { loginActions } from 'store/actions';
import { authenticateUser } from 'api';

const { userData, loginSuccess } = loginActions;

const landingThunk = (dispatch, getState) => {
  const { location, user } = getState();
  if(user.isLoggedIn){
    dispatch({
      type:'HOME'
    });
  }
  const code = location.query? location.query.code: "";
  if(code) {
    dispatch(loginSuccess());
    dispatch({
      type:'HOME'
    });
    authenticateUser(code).then( ({ data }) =>{
      dispatch(userData(data));
    })
  }
}

const homeThunk = (dispatch, getState) => {
  const { user } = getState();
  if(!user.isLoggedIn){
    dispatch({
      type:'LANDING'
    });
  }
}

const routesMap = {
  LANDING: { 
    path:'/',
    thunk: landingThunk,
  },
  HOME: {
    path:'/home',
    thunk: homeThunk,
  },
}

export default routesMap;
