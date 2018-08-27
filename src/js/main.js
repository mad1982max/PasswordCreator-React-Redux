import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import "../scss/main.scss";
import {store} from './store';

let rend = () => {
    render(
        <App />,
        document.getElementById('root')
    )};

rend();
store.subscribe(rend);

