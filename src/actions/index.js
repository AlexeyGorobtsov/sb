export const getFakeDataSuccess = data => ({
    type: 'GET_FAKE_DATA_SUCCESS',
    data
});

export const removeTask = id => ({
    type: 'REMOVE_TASK',
    id
});

export const setColorPage = ({target}={}) => ({
    type: 'SET_COLOR_PAGE',
    value: target.value || '#74dbe8'
});

export const setColorFont = ({target}={}) => ({
    type: 'SET_COLOR_FONT',
    value: target.value || '000'
});

export const setPositionSidebar = value => ({
    type: 'SET_POSITION_SIDEBAR',
    value
});