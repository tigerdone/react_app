import React from 'react';
import ReactDOM from 'react-dom';
import Router from './admin/Router';
import {Provider} from 'mobx-react';
import Store from './admin/store/store'

ReactDOM.render(
    <Provider Store = {Store}>
        <Router />
    </Provider>
    , document.getElementById('root')
);
