import React from 'react';
import {
	Switch,
	Route,
	Router
} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import About from '../Components/About';
import Home from '../Components/Home';
import HeaderBar from '../Components/HeaderBar';
import SideBar from '../Components/SideBar';
import './App.css';

const useStyles = makeStyles((theme) => ({
	root:{
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		color: theme.palette.text.primary
	},
	control: {
		padding: theme.spacing(2)
	},
	backgroundTheme:{
		background: theme.palette.background.default,
		paddingTop: theme.spacing(2)
	},
	sideBar:{
		paddingLeft: theme.spacing(2)
	}
}));

function App() {
	const classes = useStyles();

	return (
		<div>
			<HeaderBar />
			<Grid container justify='center' className={classes.backgroundTheme}>
				<Grid item xs={6}>
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
				<Grid item xs={3} className={classes.sideBar}>
					<Paper className={classes.paper}>
						<SideBar />
					</Paper>
				</Grid>
			</Grid>
		</div>
  );
}

export default App;
