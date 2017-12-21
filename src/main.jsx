import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {FileHandling} from 'components/file-handling';
import {store} from './store';


ReactDOM.render(
    <Provider store={store}>
        <FileHandling />
    </Provider>,
    document.getElementById('root')
);
