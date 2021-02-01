import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Components/Home';
import About from '../Components/About';
import ClassGuide from '../Components/ClassGuides';

function Router(props) {

	return (
		<Switch>
			<Route path='/guides/hunter'>
				<ClassGuide onRoute={props.onRoute} />
			</Route>
			<Route path='/guides/fighter'>
				<ClassGuide onRoute={props.onRoute} />
			</Route>
			<Route path='/guides/ranger'>
				<ClassGuide onRoute={props.onRoute} />
			</Route>
			<Route path='/guides/gunner'>
				<ClassGuide onRoute={props.onRoute} />
			</Route>
			<Route path='/guides/force'>
				<ClassGuide onRoute={props.onRoute} />
			</Route>
			<Route path='/guides/techer'>
				<ClassGuide onRoute={props.onRoute} />
			</Route>
			<Route path='/guides/braver'>
				<ClassGuide onRoute={props.onRoute} />
			</Route>
			<Route path='/guides/bouncer'>
				<ClassGuide onRoute={props.onRoute} />
			</Route>
			<Route path='/guides/summoner'>
				<ClassGuide onRoute={props.onRoute} />
			</Route>
			<Route path='/guides/hero'>
				<ClassGuide onRoute={props.onRoute} />
			</Route>
			<Route path='/guides/phantom'>
				<ClassGuide onRoute={props.onRoute} />
			</Route>
			<Route path='/guides/etoille'>
				<ClassGuide onRoute={props.onRoute} />
			</Route>
			<Route path='/guides/luster'>
				<ClassGuide onRoute={props.onRoute} />
			</Route>
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