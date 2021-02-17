import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';

import { HEADER_LIST, CLASS_DATA, BEG_GUIDE_DATA } from './sidebar_setup';
import logo from '../../Resources/logo.svg'


const useStyles = makeStyles((theme) => ({
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	nested: {
		paddingLeft: theme.spacing(4),
	},
}));

function SideBar(props) {
	const classes = useStyles();
	const [openClassList,setClassListOpen] = React.useState(false);
	const [openBegList,setBegListOpen] = React.useState(false);

	const handleClassListClick = () => {
		setClassListOpen(!openClassList);
	}
	
	const handleBegListClick = () => {
		setBegListOpen(!openBegList);
	}

	const listItem = (title, url) => {
		return (
			<ListItem
				button
				key={title}
				component={Link}
				to={url}
				onClick={() => props.onClick(title)}
			>
				<ListItemText primary={title} />
			</ListItem>
		)
	}

	const expandableListItem = (title,openList,handleClick) => {
		return (
			<ListItem
				button
				key={title}
				onClick={handleClick}
			>
				<ListItemText primary={title} />
				{openList ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
		)
	}

	const expandedList = (listData,openList) => {
		return (
			<Collapse in={openList} timeout='auto' unmountOnExit>
				<List component='div' disablePadding>
						{Object.keys(listData).map((key) => (
							<ListItem
								className={classes.nested}
								button 
								key={listData[key].name} 
								component={Link} 
								to={listData[key].url}
								onClick={() => props.onClick(listData[key].name)}
							>
								<ListItemIcon>
									<img src={listData[key].icon} alt={listData[key].name} />
								</ListItemIcon>
								<ListItemText primary={listData[key].name} />
							</ListItem>
						))}
					</List>
			</Collapse>
		)
	}

	return (
		<div>
			<div className={classes.toolbar}>
				<img alt='logo' src={logo} />
			</div>
			<Divider />
			<List>
				{listItem(HEADER_LIST.Home.title, HEADER_LIST.Home.url)}
				{/* {listItem(HEADER_LIST.About.title, HEADER_LIST.About.url)} */}
				{expandableListItem('Classes Guide',openClassList,handleClassListClick)}
				{expandedList(CLASS_DATA,openClassList)}
				{expandableListItem('Beginner Guide',openBegList,handleBegListClick)}
				{expandedList(BEG_GUIDE_DATA,openBegList)}
				{listItem(HEADER_LIST.ScratchTicket.title, HEADER_LIST.ScratchTicket.url)}
			</List>
			<Divider />
		</div>
	)
}

export default SideBar;