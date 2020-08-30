import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ReferralProvider} from "./context/ReferralContext";


ReactDOM.render(

    <React.StrictMode>
        <ReferralProvider>
            <App />
        </ReferralProvider>
    </React.StrictMode>,


    document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
