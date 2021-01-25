import React from 'react';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import HEADER_LIST from './sidebar_setup';

const useStyles = makeStyles((theme) => ({
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
}));

function SideBar() {
	const classes = useStyles();

	return (
		<div>
			<div className={classes.toolbar} />
			<Divider />
			<List>
				<ListItem button key={HEADER_LIST.Home.title} component={Link} to={HEADER_LIST.Home.url}>
					<ListItemText primary={HEADER_LIST.Home.title} />
				</ListItem>
				<ListItem button key={HEADER_LIST.About.title} component={Link} to={HEADER_LIST.About.url}>
					<ListItemText primary={HEADER_LIST.About.title} />
				</ListItem>
			</List>
			<Divider />
			<List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	)
}

export default SideBar;