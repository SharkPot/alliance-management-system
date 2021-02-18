import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import WbSunny from '@material-ui/icons/WbSunny';
import Brightness2 from '@material-ui/icons/Brightness2';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	appBar: {
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
}));

export default function HeaderBar(props) {
	const classes = useStyles();
	const [mode, setMode] = React.useState(true);

	const toggleMode = () => {
		setMode(!mode);
		props.darkMode();
	}

	return (
		<div>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<Grid container>
						<Grid item xs={11}>
							<IconButton
								color="inherit"
								aria-label="open drawer"
								edge="start"
								onClick={() => props.menuOnClick(1)}
								className={classes.menuButton}
							>
								<MenuIcon />
							</IconButton>
							<Typography variant="h6" display='inline' noWrap>
								{props.title}
							</Typography>
						</Grid>
						<Grid item xs={1}>
							<Button onClick={toggleMode}>
								{mode ? <Brightness2/> : <WbSunny />}
							</Button>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
	);
}
