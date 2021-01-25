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
			<Typography variant='subtitle1'>Para 1</Typography>
			<iframe src="https://calendar.google.com/calendar/embed?src=nujrnhog654g3v0m0ljmjbp790%40group.calendar.google.com&amp;mode=AGENDA&amp;color=%23616161&amp;hl=en&amp;showNav=0&amp;showTabs=0&amp;showPrint=0&amp;showCalendars=0" scrolling="no" width="100%" height="500" frameBorder="0"></iframe>
			<Divider className={classes.divider} />
			<Typography variant='subtitle1'>Para 2</Typography>
			<Typography paragraph>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
				ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
				facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
				gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
				donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
				adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
				Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
				imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
				arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
				donec massa sapien faucibus et molestie ac.
            </Typography>
			<div>
                <Link to='/about'>
                    Go to about
                </Link>
            </div>
		</div>
	)
}

export default Home;