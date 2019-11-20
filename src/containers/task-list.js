import {connect} from 'react-redux';

import {removeTask} from '../actions/index.js';
import {List} from "../components/pages/list.jsx";


const mapStateToProps = state => {
    const {taskList} = state;

    return {taskList}
};

const mapDispatchToProps = dispatch => ({
    removeTask: id => dispatch(removeTask(id))
});

export const TaskList = connect(mapStateToProps, mapDispatchToProps)(List);