import React from 'react';
import {render }from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Balance from './components/Balances';

import Login from './components/Login'

render(
<MuiThemeProvider>
<HashRouter>
    <div>
        <Route exact path='/' component={Login} />
    </div>
</HashRouter>
</MuiThemeProvider>, document.getElementById('root'));
