import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import App  from './components/App';
import store from './state/store';

const reduxStore = createStore(store, composeWithDevTools(applyMiddleware(reduxThunk)))

ReactDOM.render(
    <Provider store={reduxStore} >
            <App />
    </Provider>,
    document.getElementById('root')
);