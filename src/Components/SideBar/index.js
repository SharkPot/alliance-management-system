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

function SideBar(props) {
	const classes = useStyles();

	const listItem = (title,url) => {
		return (
			<ListItem 
				button 
				key={title} 
				component={Link} 
				to={url} 
				onClick={() => props.onRoute(title)}
			>
				<ListItemText primary={title} />
			</ListItem>
		)
	}

	return (
		<div>
			<div className={classes.toolbar} />
			<Divider />
			<List>
				{listItem(HEADER_LIST.Home.title,HEADER_LIST.Home.url)}
				{listItem(HEADER_LIST.About.title,HEADER_LIST.About.url)}
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