import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './redux'
ReactDOM.render(

<Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,

document.getElementById('container'));


serviceWorker.unregister();
