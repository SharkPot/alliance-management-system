import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import SideBar from '../Components/SideBar';
import HeaderBar from '../Components/HeaderBar';
import Router from './router';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	gridPaper: {
		padding: theme.spacing(2),
	}
}));

function App(props) {
	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [title, setTitle] = React.useState('');

	const handleDrawerToggle = (event) => {
		console.log('handleDrawerToggle called',event);
		setMobileOpen(!mobileOpen);
	};

	const handleMobileOnRoute = (title) => {
		console.log('handleMobileOnRoute called',title);
		setTitle(title);
		handleDrawerToggle();
	}

	const handleOnRoute = (title) => {
		console.log('handleOnRoute called',title);
		setTitle(title);
	}

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root}>
			<HeaderBar menuOnClick={handleDrawerToggle} title={title}/>
			<nav className={classes.drawer} aria-label="mailbox folders">
				<Hidden smUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						<SideBar onRoute={handleMobileOnRoute}/>
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						open
					>
						<SideBar onRoute={handleOnRoute}/>
					</Drawer>
				</Hidden>
			</nav>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Grid container justify='center' alignItems='stretch'>
					<Grid item xs={11}>
						<Paper className={classes.gridPaper}>
							<Router />
						</Paper>
					</Grid>
				</Grid>
			</main>
		</div>
	);
}

export default App;
