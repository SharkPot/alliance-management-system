import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

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

const CLASS_DATA = {
	HU: { icon: class_HU, name: 'Hunter' },
	FI: { icon: class_FI, name: 'Fighter' },
	RA: { icon: class_RA, name: 'Ranger' },
	GU: { icon: class_GU, name: 'Gunner' },
	FO: { icon: class_FO, name: 'Force' },
	TE: { icon: class_TE, name: 'Techer' },
	BR: { icon: class_BR, name: 'Braver' },
	BO: { icon: class_BO, name: 'Bouncer' },
	SU: { icon: class_SU, name: 'Summoner' },
	HE: { icon: class_HE, name: 'Hero' },
	PH: { icon: class_PH, name: 'Phantom' },
	ET: { icon: class_ET, name: 'Etoille' },
	LU: { icon: class_LU, name: 'Luster' },
}

const useStyles = makeStyles((theme) => ({
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
}));

function SideBar(props) {
	const classes = useStyles();

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

	return (
		<div>
			<div className={classes.toolbar}>
				<img alt='logo' src={logo} />
			</div>
			<Divider />
			<List>
				{listItem(HEADER_LIST.Home.title, HEADER_LIST.Home.url)}
				{listItem(HEADER_LIST.About.title, HEADER_LIST.About.url)}
			</List>
			<Divider />
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
					<Typography>Classes Guide</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<List>
						{Object.keys(CLASS_DATA).map((key) => (
							<ListItem button key={CLASS_DATA[key].name}>
								<ListItemIcon>
									<img src={CLASS_DATA[key].icon} alt={CLASS_DATA[key].name} />
								</ListItemIcon>
								<ListItemText primary={CLASS_DATA[key].name} />
							</ListItem>
						))}
					</List>
				</AccordionDetails>
			</Accordion>
			<Divider />
		</div>
	)
}

export default SideBar;