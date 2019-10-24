import React from 'react';
import { stringify } from 'qs';
import uuid from 'uuid/v4';
import GitHubLogin from 'react-github-login';
import { connect } from 'react-redux'

const CLIENT_ID = "36689cf871668e2b775e"
const onSuccess = response => console.log(response);

// Home component
const Home = ({ visitUser, registerUser }) => (
  <div>
    <GitHubLogin 
      redirectUri="http://localhost:3000"
      scope="user"
      clientId={CLIENT_ID}
      onSuccess={registerUser}
      onFailure={onSuccess}
    />
  </div>
);


const ConnectedHome = connect(
  null,
  (dispatch) => ({
    registerUser: (data) => dispatch(registerUser(data)),
  }),
)(Home)

const registerUser = (data) => ({
  type: 'REGISTER_USER',
  payload: {
    request:{
      url:'/users/',
      method: 'POST',
      data,
    }
  }
})



// User component
const User = ({ goHome, userId }) => (
  <div>
    <p>{`User component: user ${userId}`}</p>
    <button type="button" onClick={() => goHome()}>
      Back
    </button>
  </div>
)

const ConnectedUser = connect(
  ({ location: { params } }) => ({ userId: params.id }),
  (dispatch) => ({ goHome: () => dispatch({ type: 'HOME' }) }),
)(User)

// 404 component
const NotFound = ({ pathname }) => (
  <div>
    <h3>404</h3>
    Page not found: <code>{pathname}</code>
  </div>
)
const ConnectedNotFound = connect(({ location: { pathname } }) => ({
  pathname,
}))(NotFound)

export {
  ConnectedHome as Home,
  ConnectedUser as User,
  ConnectedNotFound as NotFound,
}
