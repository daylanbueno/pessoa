import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'

// configuração do redux.
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers/reduces'

const store =(createStore)(reducers)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
serviceWorker.unregister();
