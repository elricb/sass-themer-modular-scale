import 'babel-polyfill'; //must be first line run - fills in Promise object
import React              from 'react';
import ReactDOM           from 'react-dom';
import { browserHistory } from 'react-router';
import { hashHistory }    from 'react-router';
import { Router }         from 'react-router';
import router             from 'router';

let history = process.env.NODE_ENV === 'development'
    ? browserHistory
    : hashHistory;

ReactDOM.render(
    <Router history={history} routes={router} />,
    document.getElementById('app')
);
