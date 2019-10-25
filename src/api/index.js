import client from 'store/client';


const CLIENT_ID = "36689cf871668e2b775e"
const GITHUB_URI = "https://github.com/login/oauth/authorize"
const REDIRECT_URI = "http://localhost:3000"
const AUTH_URI = "/authenticate"
const loginURI = `${GITHUB_URI}?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`;

const redirectToGithub = () => {
  window.location = loginURI;
};

const authenticateUser = code => client.get(`${AUTH_URI}/${code}`)

export {
  redirectToGithub,
  authenticateUser,
};
