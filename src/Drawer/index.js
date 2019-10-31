import Drawer from './Drawer';
import { snackBarActions }  from 'store/actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ user }) => ({
  token: user.token,
  name: user.name, 
  nickname: user.nickname,
  avatar: user.avatar,
  isLoggedIn: user.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  enqueueSnackbar: token => dispatch(snackBarActions.enqueueSnackbar(token))
})

const ConnectedDrawer = connect(mapStateToProps, mapDispatchToProps)(Drawer);
export default ConnectedDrawer;
