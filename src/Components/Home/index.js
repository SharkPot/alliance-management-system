import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
	divider: {
		marginTop: theme.spacing(2)
	}
}));

function Home() {
	const classes = useStyles();
	return (
		<div>
			<Typography variant='subtitle1'>Para 1</Typography>
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