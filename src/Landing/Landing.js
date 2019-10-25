import React from 'react';
import { redirectToGithub } from 'api';

const Landing = () => (
  <div>
    <button onClick={redirectToGithub}> Login</button>  
  </div>
);

export default Landing;
