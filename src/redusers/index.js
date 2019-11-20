const initialState = {
    taskList: [],
    colorPage:  '#74dbe8',
    colorFont: '000',
    positionSidebar: 'row'
};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_FAKE_DATA_SUCCESS':
            return {...state, taskList: action.data};
        case 'REMOVE_TASK':
            const {id} = action;
            const taskList = state.taskList.filter((item, i) => i !== id);
            return {...state, taskList};
        case 'SET_COLOR_PAGE':
            return {...state, colorPage: action.value};
        case 'SET_COLOR_FONT':
            return {...state, colorFont: action.value};
        case 'SET_POSITION_SIDEBAR':
            return {...state, positionSidebar: action.value};
        default:
            return state;
    }
};