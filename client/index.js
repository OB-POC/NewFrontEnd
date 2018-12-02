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
import FinancialAdvice from './components/financial-advisory';
import PoolingFromCard from './components/PoolFunds/FromCards/index';
import PoolingToCard from './components/PoolFunds/ToCards';
import PortingFromCard from './components/PortFunds/FromCards';
import PortingToCard from './components/PortFunds/ToCards';
import ConfirmPooling from './components/PoolFunds/confirmPooling/index'
import PoolingSucceed from './components/PoolFunds/poolingSucceed/index'
import PortingSucceed from './components/PortFunds/portingSucceed/index'
import ManagePayments from './components/managePayments/managedPayments/index'
import ManagePaymentsSucceed from './components/managePayments/managePaymentsSucceed/index'

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
    <Route exact path='/confirmPool' component={ConfirmPooling} />
    <Route exact path='/poolingSucceed' component={PoolingSucceed} />
    <Route exact path='/portingSucceed' component={PortingSucceed} />
    <Route exact path='/si' component={ManagePayments} />
    <Route exact path='/managePaymentsSucceed' component={ManagePaymentsSucceed} />
    <Route exact path='/financialAdvice' component={FinancialAdvice} />


    </div>
</HashRouter>
</MuiThemeProvider>, document.getElementById('root'));
