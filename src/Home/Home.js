import React from 'react';

const Home = ({ token, loading }) =>(
  loading 
  ?(<div> Loading your user data...</div>)
  :<div> Your CLI token is: {token}</div>
)

 export default Home;
