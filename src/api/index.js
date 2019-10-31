import client from 'store/client';


const CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID
const GITHUB_URI = process.env.REACT_APP_GITHUB_URI_OAUTH 
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI

const AUTH_URI = "/authenticate";
const loginURI = `${GITHUB_URI}?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`;
const classesURI = `/api/classes`;

const getAuthHeader = token => ({'authorization': `Bearer ${token}`})


const redirectToGithub = () => {
  window.location = loginURI;
};

const authenticateUser = code => client.get(`${AUTH_URI}/${code}`)

const getClasses = token => client.get(
  classesURI,
  {
    headers: getAuthHeader(token),
  }
)

export {
  redirectToGithub,
  authenticateUser,
  getClasses,
};
