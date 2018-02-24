import 'materialize-css/dist/css/materialize.min.css';//use .css extension, relative path => module
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    //react component to read changes from redux store, inform all child components
    <Provider store={store}><App/></Provider>,
    document.querySelector('#root')
);