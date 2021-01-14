import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

import HEADER_LIST from './headers_setup';

const useStyles = makeStyles((theme) => ({
	toolbar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	toolbarTitle: {
		flex: 1,
	},
	toolbarSecondary: {
		justifyContent: 'space-around',
		overflowX: 'auto',
		background: 'bisque',
		marginBottom: theme.spacing(1)
	},
	toolbarLink: {
		padding: theme.spacing(1),
		flexShrink: 0,
		textDecoration: 'none'
	},
}));

export default function Header(props) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const classes = useStyles();

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	}

	return (
		<React.Fragment>
			<Toolbar className={classes.toolbar}>
				<Typography
					component="h2"
					variant="h5"
					color="inherit"
					align="center"
					noWrap
					className={classes.toolbarTitle}
				>
					Title
        		</Typography>
			</Toolbar>
			<Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
				<Button>
					<Link
						color="inherit"
						noWrap
						underline='none'
						key={HEADER_LIST.Home.title}
						variant="body2"
						href={HEADER_LIST.Home.url}
						className={classes.toolbarLink}>
						{HEADER_LIST.Home.title}
					</Link>
				</Button>
				<Button>
					<Link
						color="inherit"
						noWrap
						underline='none'
						key={HEADER_LIST.About.title}
						variant="body2"
						href={HEADER_LIST.About.url}
						className={classes.toolbarLink}>
						{HEADER_LIST.About.title}
					</Link>
				</Button>
				<Button onClick={handleClick}>Open</Button>
				<Menu
					anchorEl={anchorEl}
					keepMounted
					open={open}
					onClose={handleClose}
					TransitionComponent={Fade}
				>
					<MenuItem onClick={handleClose}>M1</MenuItem>
					<MenuItem onClick={handleClose}>M2</MenuItem>
				</Menu>
				<Button onClick={handleClick}>Open2</Button>
				<Menu
					anchorEl={anchorEl}
					keepMounted
					open={open}
					onClose={handleClose}
					TransitionComponent={Fade}
				>
					<MenuItem onClick={handleClose}>M3</MenuItem>
					<MenuItem onClick={handleClose}>M4</MenuItem>
				</Menu>
			</Toolbar>
		</React.Fragment>
	);
}

Header.propTypes = {
	sections: PropTypes.array,
	title: PropTypes.string,
};