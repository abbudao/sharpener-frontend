import Home from './Home';
import { connect } from 'react-redux';

const mapStateToProps = ({ user }) => ({
  token: user.token,
  loading: user.isLoadingData,
});

const ConnectedHome = connect(mapStateToProps)(Home);

export default ConnectedHome;
