import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
	divider: {
		marginTop: theme.spacing(2)
	}
}));

function Home(props) {
	const classes = useStyles();

	useEffect(() => {
		props.onRoute('Home')
	})

	return (
		<div>
			<Typography variant='subtitle1'>Urgent Quest Schedule</Typography>
			<iframe title='UQ Calendar' src="https://calendar.google.com/calendar/embed?src=nujrnhog654g3v0m0ljmjbp790%40group.calendar.google.com&amp;mode=AGENDA&amp;color=%23616161&amp;hl=en&amp;showNav=0&amp;showTabs=0&amp;showPrint=0&amp;showCalendars=0" scrolling="no" width="100%" height="500" frameBorder="0" />
			<Divider className={classes.divider} />
			<Typography variant='subtitle1'>Casino Boost Schedule</Typography>
			<iframe title='CS Calendar'src="https://calendar.google.com/calendar/embed?src=YWJoaW5hYmRhczE5OTZAZ21haWwuY29t&amp;src=cWIwYzE5dDg3MHNzcm9lb245bjExdWJ0OWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=cmMxYWY3bDFzdjNtdDk5NWh2anFwaTRxYjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%237986CB&amp;color=%23E4C441&amp;color=%239E69AF&amp;mode=AGENDA&amp;showTitle=0&amp;showNav=0&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=1" scrolling="no" width="100%" height="500" frameBorder="0" />
		</div>
	)
}

export default Home;