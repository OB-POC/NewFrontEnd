import React from 'react';
import {render }from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Offerings from './components/offer';
import Optimizings from './components/Optimizings';
import Home from './components/home';
import Login from './components/Login';
import Payout from './components/Payout';
import Wallet from './components/Wallet';


render(
<MuiThemeProvider>
<HashRouter>
    <div >
    <Route exact path='/' component={Login} />
    <Route exact path='/home' component={Home} />
    <Route exact path='/payout' component={Payout} />
    <Route exact path='/offerings' component={Offerings} />
    <Route exact path='/wallet' component={Wallet} />
    <Route exact path='/optimizings' component={Optimizings} />
    </div>
</HashRouter>
</MuiThemeProvider>, document.getElementById('root'));
