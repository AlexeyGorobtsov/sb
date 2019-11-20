import {connect} from 'react-redux';

import {App} from '../components/app.jsx';
import {getFakeDataSuccess} from "../actions/index.js";
import {data} from '../fake-data.js';

const mapStateToProps = state => ({
    ...state
});
const mapDispatchToProps = dispatch => ({
     getFakeData: () => dispatch(getFakeDataSuccess(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

