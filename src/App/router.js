import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Components/Home';
import About from '../Components/About';

function Router() {

	return (
		<Switch>
			<Route path='/about' component={About} />
			<Route path='/' component={Home} />
		</Switch>
	)
}

export default Router;