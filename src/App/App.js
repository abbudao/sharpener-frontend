import React from 'react';
import PropTypes from 'prop-types';
import Landing from 'Landing';
import Home from 'Home';
import { NOT_FOUND } from 'redux-first-router';
import { connect } from 'react-redux'

const componentsMap = {
  LANDING: <Landing />,
  HOME: <Home />,
  [NOT_FOUND]: <div>Not found</div>,
}; 

const App = ({ location }) => componentsMap[location] || componentsMap[NOT_FOUND];

const mapStateToProps = state => ({
  location: state.location.type,
});

App.propTypes = {
  location: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(App);
