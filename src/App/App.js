import React from 'react';
import {
	Switch,
	Route
} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import About from '../Components/About';
import Home from '../Components/Home';
import HeaderBar from '../Components/HeaderBar';
import './App.css';

const useStyles = makeStyles((theme) => ({
	root:{
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		color: theme.palette.text.secondary
	}
}));

function App() {
	const classes = useStyles();

	return (
		<div>
			<HeaderBar />
			<Grid container spacing={3} justify='center'>
				<Paper className={classes.paper}>
					<Switch>
							<Route path='/about'>
								<About />
							</Route>
							<Route path='/'>
								<Home />
							</Route>
					</Switch>
				</Paper>
			</Grid>
		</div>
  );
}

export default App;
