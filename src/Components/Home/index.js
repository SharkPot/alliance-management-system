import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
	divider: {
		marginTop: theme.spacing(2)
	}
}));

function Home(props) {
	const classes = useStyles();

	useEffect(() => {
		props.onRoute('Calendar')
	})

	return (
		<div>
			<Typography variant='subtitle1'>Urgent Quest Schedule</Typography>
			<iframe title='UQ Calendar' src="https://calendar.google.com/calendar/embed?src=nujrnhog654g3v0m0ljmjbp790%40group.calendar.google.com&amp;mode=AGENDA&amp;color=%23616161&amp;hl=en&amp;showNav=0&amp;showTabs=0&amp;showPrint=0&amp;showCalendars=0" scrolling="no" width="100%" height="500" frameBorder="0" />
			<Divider className={classes.divider} />
			<Typography variant='subtitle1'>Casino Boost Schedule</Typography>
			<iframe title='CS Calendar' src="https://calendar.google.com/calendar/embed?src=qb0c19t870ssroeon9n11ubt9c%40group.calendar.google.com&amp;mode=AGENDA&amp;color=%23616161&amp;hl=en&amp;showNav=0&amp;showTabs=0&amp;showPrint=0&amp;showCalendars=0" scrolling="no" width="100%" height="500" frameBorder="0" />
		</div>
	)
}

export default Home;