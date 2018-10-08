import React from 'react';
import {render }from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';

import Home from './components/home';


render(
<HashRouter>
    <div>
        <Route path='/Home' component={Home} />
    </div>
</HashRouter>, document.getElementById('root'));
