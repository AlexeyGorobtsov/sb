import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {createStore} from 'redux';
import {reducer} from './redusers';
import App from './containers/app.js';
import './styles.css';

const store = createStore(reducer);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);