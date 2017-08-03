import React               from 'react';
import { Route }           from 'react-router';
import { Redirect }        from 'react-router';
import { IndexRoute }      from 'react-router';
import { browserHistory }  from 'react-router';
import Container           from './route';
import IndexComponent      from './route/IndexComponent';

const route = (
    <Route path="/" component={Container}>
        <IndexRoute component={IndexComponent}/>
    </Route>
);

export default route;
