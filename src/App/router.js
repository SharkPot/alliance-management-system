import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Components/Home';
import About from '../Components/About';

function Router(props) {

	return (
		<Switch>
			<Route path='/about'>
                <About onRoute={props.onRoute} />
            </Route>
			<Route path='/'>
                <Home onRoute={props.onRoute} />
            </Route>
		</Switch>
	)
}

export default Router;