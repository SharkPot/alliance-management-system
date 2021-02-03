import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';

import GENERAL_GUIDE_LIST from './general_guide_setup';

const useStyles = makeStyles((theme) => ({
	nested: {
		paddingLeft: theme.spacing(2),
		paddingTop: theme.spacing(2)
	},
	heading: {
		paddingTop: theme.spacing(2)
	}
}));

function GeneralGuide(props) {
	const classes = useStyles();
	let location = useLocation();

	const [title,setTitle] = React.useState('');
	const [guide,setGuide] = React.useState([]);

    useEffect(() => {
		let titleKey = '';
		switch(location.pathname) {
			case '/guides/meseta':
				titleKey = 'Meseta';
				break;
			case '/guides/gear':
				titleKey = 'Gear';
				break;
			default:
				titleKey = '';
		}
		setTitle(titleKey)
		setGuide(GENERAL_GUIDE_LIST[titleKey]);
		props.onRoute(title);
	},[props,location,title,guide])

    return (
        <div>
			{guide.map((val) => (
				<div key={val.title}>
					{val.heading && <Typography variant='h6' className={classes.heading}>{val.heading}</Typography>}
					{val.type === 'paragraph' && <Typography variant='body1' className={classes.nested}>{val.data}</Typography>}
					{val.type === 'special-paragraph' && <Typography variant='body1'>{val.data}</Typography>}
					{val.type === 'image' && <img src={val.data} alt={val.title} width='100%' />}
					{val.type === 'list' && <List>{val.data.map((item) => (<ListItem key={item}><ListItemText primary={item}/></ListItem>))}</List>}
				</div>
			))}
        </div>
    )
}

export default GeneralGuide;