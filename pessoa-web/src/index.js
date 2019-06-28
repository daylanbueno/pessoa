import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'

// configuração do redux.
import { Provider } from 'react-redux'
import {  createStore } from 'redux'

import reducers from './reducers/reduces'
import './componentes/security/Interceptor'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = (createStore)(reducers,devTools)
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
                <App />
        </Provider>
        </BrowserRouter>
, document.getElementById('root'));
serviceWorker.unregister();
