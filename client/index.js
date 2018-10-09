import React from 'react';
import {render }from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Balance from './components/Balances';
import Home from './components/home';

import Login from './components/Login'

render(
<MuiThemeProvider>
<HashRouter>
    <div>
    <Route exact path='/' component={Login} />
    <Route exact path='/home' component={Home} />
    </div>
</HashRouter>
</MuiThemeProvider>, document.getElementById('root'));
