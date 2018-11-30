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
import Advisory from './components/Wallet/advisory.js';
import PoolingFromCard from './components/PoolFunds/FromCards/index';
import PoolingToCard from './components/PoolFunds/ToCards';
import PortingFromCard from './components/PortFunds/FromCards';
import PortingToCard from './components/PortFunds/ToCards';

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
    <Route exact path='/poolfrom' component={PoolingFromCard} />
    <Route exact path='/poolto' component={PoolingToCard} />
    <Route exact path='/portfrom' component={PortingFromCard} />
    <Route exact path='/portto' component={PortingToCard} />
    </div>
</HashRouter>
</MuiThemeProvider>, document.getElementById('root'));
