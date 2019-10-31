import ClassesTable from './ClassesTable';
import { connect } from 'react-redux';

const mapStateToProps = ({ classes }) => ({
  classesData : classes
});

export default connect(mapStateToProps)(ClassesTable);
