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

import HEADER_LIST from './sidebar_setup';
import logo from '../../Resources/logo.svg'
import class_HU from '../../Resources/class_hunter.bmp'
import class_FI from '../../Resources/class_fighter.bmp'
import class_RA from '../../Resources/class_ranger.bmp'
import class_GU from '../../Resources/class_gunner.bmp'
import class_FO from '../../Resources/class_force.bmp'
import class_TE from '../../Resources/class_techer.bmp'
import class_BR from '../../Resources/class_braver.bmp'
import class_BO from '../../Resources/class_bouncer.bmp'
import class_SU from '../../Resources/class_summoner.bmp'
import class_HE from '../../Resources/class_hero.bmp'
import class_PH from '../../Resources/class_phantom.bmp'
import class_ET from '../../Resources/class_etoille.bmp'
import class_LU from '../../Resources/class_luster.bmp'
import mesetaImg from '../../Resources/meseta.bmp';
import rainbowStarImg from '../../Resources/rainbow_star.bmp';

const CLASS_DATA = {
	HU: { icon: class_HU, name: 'Hunter', url:'/guides/hunter' },
	FI: { icon: class_FI, name: 'Fighter', url:'/guides/fighter' },
	RA: { icon: class_RA, name: 'Ranger', url:'/guides/ranger' },
	GU: { icon: class_GU, name: 'Gunner', url:'/guides/gunner' },
	FO: { icon: class_FO, name: 'Force', url:'/guides/force' },
	TE: { icon: class_TE, name: 'Techer', url:'/guides/techer' },
	BR: { icon: class_BR, name: 'Braver', url:'/guides/braver' },
	BO: { icon: class_BO, name: 'Bouncer', url:'/guides/bouncer' },
	SU: { icon: class_SU, name: 'Summoner', url:'/guides/summoner' },
	HE: { icon: class_HE, name: 'Hero', url:'/guides/hero' },
	PH: { icon: class_PH, name: 'Phantom', url:'/guides/phantom' },
	ET: { icon: class_ET, name: 'Etoille', url:'/guides/etoille' },
	LU: { icon: class_LU, name: 'Luster', url:'/guides/luster' },
}

const BEG_GUIDE_DATA = {
	MESETA: { icon: mesetaImg, name: 'Meseta', url:'/guides/meseta'},
	GEAR: { icon: rainbowStarImg, name: 'Gear', url:'/guides/gear'}
}

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
				{listItem(HEADER_LIST.About.title, HEADER_LIST.About.url)}
				{expandableListItem('Classes Guide',openClassList,handleClassListClick)}
				{expandedList(CLASS_DATA,openClassList)}
				{expandableListItem('Beginner Guide',openBegList,handleBegListClick)}
				{expandedList(BEG_GUIDE_DATA,openBegList)}
			</List>
			<Divider />
		</div>
	)
}

export default SideBar;