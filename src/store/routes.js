import { loginActions, classesActions } from 'store/actions';
import { authenticateUser, getClasses  } from 'api';

const { userData, loginSuccess} = loginActions;
const { fetchClasses } = classesActions;


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

const requiresAuth = (dispatch, getState) => {
  const { user } = getState();
  if(!user.isLoggedIn){
    dispatch({
      type:'LANDING'
    });
  }
}


const classThunk = (dispatch, getState) => {
  requiresAuth(dispatch, getState);
  const { user } = getState()
  getClasses(user.token).then( resp => {
    dispatch(fetchClasses(resp.data))
  })

}

const homeThunk = (dispatch, getState) => {
  requiresAuth(dispatch, getState);
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
  CLASSES: {
    path:'/classes',
    thunk: classThunk,
  },
}

export default routesMap;
