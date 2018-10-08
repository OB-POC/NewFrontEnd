import React from 'react';
import {render }from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import Login from './components/Login';
import AccountOverview from './components/AccountOverview';
import PayOutPlan from './components/PayOutPlan';
import Offerings from './components/Offerings';
import Chart from './components/charts';


render(
<HashRouter>
    <div>
        <Route exact path='/' component={Login} />
        <Route path='/accounts' component={AccountOverview} />
        <Route path='/plan' component={PayOutPlan} />
        <Route path='/offerings' component={Offerings} />
        <Route path ='/charts' component={Chart} />

    </div>
</HashRouter>, document.getElementById('root'));