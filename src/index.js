import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<<<<<<< HEAD
        <Router>
            <App />
        </Router>,
=======
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>,
>>>>>>> f32fc0c0e0130ee08e0a7e32a11b52c5ab9dc931
document.getElementById('container'));


serviceWorker.unregister();
