import {connect} from 'react-redux';

import {setColorPage, setColorFont, setPositionSidebar} from '../actions/index.js';
import {CustomizationPage} from '../components/pages/customization-page.jsx';

const mapStateToProps = state => ({...state});
const mapDispatchToProps = dispatch => ({
    setColorPage: value => dispatch(setColorPage(value)),
    setColorFont: value => dispatch(setColorFont(value)),
    setPositionSidebar: value => dispatch(setPositionSidebar(value))
});

export const Customization = connect(mapStateToProps, mapDispatchToProps)(CustomizationPage);
