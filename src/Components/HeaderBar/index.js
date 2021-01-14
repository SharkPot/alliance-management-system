import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

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
	},
}));

export default function Header(props) {
	const classes = useStyles();

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
				<Link
					color="inherit"
					noWrap
					key={HEADER_LIST.Home.title}
					variant="body2"
					href={HEADER_LIST.Home.url}
					className={classes.toolbarLink}>
					{HEADER_LIST.Home.title}
        		</Link>
				<Link
					color="inherit"
					noWrap
					key={HEADER_LIST.About.title}
					variant="body2"
					href={HEADER_LIST.About.url}
					className={classes.toolbarLink}>
					{HEADER_LIST.About.title}
        		</Link>
			</Toolbar>
		</React.Fragment>
	);
}

Header.propTypes = {
	sections: PropTypes.array,
	title: PropTypes.string,
};