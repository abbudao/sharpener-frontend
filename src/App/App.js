import React from 'react';
import PropTypes from 'prop-types';
import Landing from 'Landing';
import Home from 'Home';
import Classes from 'Classes';
import Grid from "@material-ui/core/Grid";
import { NOT_FOUND } from 'redux-first-router';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 278;
const useStyles = makeStyles( theme => ({
  app: {
    marginLeft: drawerWidth + 24,
    marginTop: 34,
    display: "flex",
    flexDirection: "column",
    width: "calc(100%-64px)",
    height: "100%",
    marginRight: 64,
  }
})
);


const componentsMap = {
  LANDING: <Landing />,
  HOME: <Home />,
  CLASSES: <Classes />,
  [NOT_FOUND]: <div>Not found</div>,
}; 

const App = ({ location }) => {
  const classes = useStyles();
  return(
    <Grid id="app" className={classes.app}>
      {componentsMap[location] || componentsMap[NOT_FOUND]}
    </Grid>
  )
}

const mapStateToProps = state => ({
  location: state.location.type,
});

App.propTypes = {
  location: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(App);
